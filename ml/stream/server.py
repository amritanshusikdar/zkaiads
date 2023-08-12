import numpy as np
import pandas as pd
from flask import Flask, request
import pickle
import config

model = pickle.load(open(config.MODEL_RUN['filename'],'rb'))

app = Flask(__name__)

@app.route('/predict',methods=['POST'])
def predict_batch():
    d = request.get_json(force=True)
    pred = model.predict(pd.read_json(d))
    res = {'predictions':[round(value) for value in pred]}
    return str(res)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000, debug=True)
