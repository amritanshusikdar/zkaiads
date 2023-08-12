# flask-ml-server
This project includes:
* model.py - Train/builds a model for the provided dataset. 
Xgboost binary classifier is used. The result is a serialized model file. Some model settings are defined in 'config.py'. 
There is a model tuning part at the end as an example. 'Pipfile' sets the python environment (python 3.6 and required libraries).
It also creates two json files to be used as two batch input data.
* server.py - Flask server to serve model via REST API calls. Runs locally (on port 5000) in a docker container. 
See 'Dockerfile'. The serialized model is added to a container image. 
Listens at http://localhost:5000/predict and accepts batch data inputs (i.e. from one to many rows) as POST payload
* predict.py - Make predictions for two batch inputs (created by 'model.py').

## Usage
1. Training/building model.
```
pipenv install
pipenv lock
pipenv sync
pipenv shell
python model.py
```
Output:
```
XGBClassifier(base_score=0.5, booster=None, colsample_bylevel=1,
              colsample_bynode=1, colsample_bytree=1, gamma=0, gpu_id=-1,
              importance_type='gain', interaction_constraints=None,
              learning_rate=1.5, max_delta_step=0, max_depth=5,
              min_child_weight=3, missing=nan, monotone_constraints=None,
              n_estimators=100, n_jobs=0, num_parallel_tree=1,
              objective='binary:logistic', random_state=0, reg_alpha=0,
              reg_lambda=1, scale_pos_weight=1, subsample=1, tree_method=None,
              validate_parameters=False, verbosity=None)
RMSE: 0.376829
Accuracy: 85.80%
Confusion matrix:
[[2409  207]
 [ 219  165]]
```

2. Containerize and flask server locally
```
 sudo docker build -t flask_server .
 sudo docker run -p 5000:5000 flask_server
```
3. Make batch predictions
```
pipenv install
pipenv lock
pipenv sync
pipenv shell
python predict.py
```
Output:
```
b"{'predictions': [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, ..., 0]}"
b"{'predictions': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, ..., 0]}"
```

Notes:
The built model is not doing well on prediction of negative cases (i.e. 1's), see confusion matrix. Hence, assuming dataset stays the same, more work can be done on adding new features; training model on balanced training dataset (with similar number of 0's and 1's); etc.
