FROM python:3.6-slim
RUN apt-get update && \
apt-get -y --no-install-recommends install \
libgomp1
RUN pip install --no-cache-dir numpy pandas Flask xgboost scikit-learn
WORKDIR /app
COPY server.py /app
COPY config.py /app
COPY model.pkl /app
CMD python server.py
