import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, mean_squared_error, confusion_matrix
import xgboost as xgb
import pickle
import config

# load dataset
d = pd.read_csv("mle_data.csv")

# get features 'year', 'month', 'day' out of 'date' column
# for 'year' reduce it by 1970
d["year"] = pd.to_datetime(d.date).dt.year - 1970
d["month"] = pd.to_datetime(d.date).dt.month
d["day"] = pd.to_datetime(d.date).dt.day
# get feature 'num_minutes' out of 'time' column
d["num_minutes"] = d.time.str.split(":").apply(lambda x: int(x[0]) * 60 + int(x[1]))

# do encoding for 'categorical0' -> 'cat0'
label_encoder = LabelEncoder()
label_encoder = label_encoder.fit(d.categorical0)
d["cat0"] = label_encoder.transform(d.categorical0)
d["t"] = d.target

# drop unused columns
d.drop(["date", "time", "categorical0", "target"], axis=1, inplace=True)

# specifiyng target column; splitting into train and test datasets
X, y = d.iloc[:, :-1], d.iloc[:, -1]
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=123
)


# train model with parameters set in 'config.py'
model = xgb.XGBClassifier(**config.MODEL_TRAIN_PARAMS)
model.fit(X_train, y_train)
print(model)

# make predictions for test data
y_pred = model.predict(X_test)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
print("RMSE: %f" % (rmse))

predictions = [round(value) for value in y_pred]
# evaluate predictions:
# accuracy on test data, confusion matrix
accuracy = accuracy_score(y_test, predictions)
print("Accuracy: %.2f%%" % (accuracy * 100.0))
print("Confusion matrix:\n%s" % confusion_matrix(y_test, y_pred))

# dump the model to pickle format
pickle.dump(model, open(config.MODEL_RUN["filename"], "wb"))

# prepare input data for making predictions
# test data is re-used here
X_test[:500].to_json("batch_500.json")
X_test[500:600].to_json("batch_100.json")


# ------------------------------------------------------
# Model tuning part
# (commented out)
# ------------------------------------------------------

# xgboost's DMatrix format for train and test datasets
# dtrain = xgb.DMatrix(data=X_train,label=y_train)
# dtest = xgb.DMatrix(data=X_test,label=y_test)

# parameters for model training
# num_boost_round = 999

# binary classification is set by 'binary:logistic'
# params = {
#    'max_depth':3,
#    'min_child_weight': 1,
#    'eta':.3,
#    'subsample': 1,
#    'colsample_bytree': 1,
#    'eval_metric': 'mae',
#    'objective':'binary:logistic',
# }

# gridsearch_params = [
#    (max_depth, min_child_weight)
#    for max_depth in range(3,5)
#    for min_child_weight in range(3,7)
# ]

# Define initial best params and MAE
# min_mae = float("Inf")
# best_params = None
# for max_depth, min_child_weight in gridsearch_params:
#    print("CV with max_depth={}, min_child_weight={}".format(
#                             max_depth,
#                             min_child_weight))
# Update our parameters
#    params['max_depth'] = max_depth
#    params['min_child_weight'] = min_child_weight
# Run CV
#    cv_results = xgb.cv(
#        params,
#        dtrain,
#        num_boost_round=num_boost_round,
#        seed=42,
#        nfold=5,
#        metrics={'mae'},
#        early_stopping_rounds=10
#    )
# Update best MAE
#    mean_mae = cv_results['test-mae-mean'].min()
#    boost_rounds = cv_results['test-mae-mean'].argmin()
#    print("\tMAE {} for {} rounds".format(mean_mae, boost_rounds))
#    if mean_mae < min_mae:
#        min_mae = mean_mae
#        best_params = (max_depth,min_child_weight)
# print("Best params: {}, {}, MAE: {}".format(best_params[0], best_params[1], min_mae))
