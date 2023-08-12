import pandas as pd
import requests
import config

# get predictions for the first batch
r = requests.post(config.MODEL_RUN['url'], json = pd.read_json('batch_500.json').to_json()) 
print(r.content)

# get predictions for the second batch
r = requests.post(config.MODEL_RUN['url'], json = pd.read_json('batch_100.json').to_json()) 
print(r.content)
 
