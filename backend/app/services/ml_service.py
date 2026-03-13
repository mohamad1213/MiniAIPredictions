import joblib
import numpy as np

model = joblib.load("app/ml/model.pkl")

def predict_sales(jumlah_penjualan, harga, diskon):

    features = np.array([[jumlah_penjualan, harga, diskon]])

    prediction = model.predict(features)

    return prediction[0]