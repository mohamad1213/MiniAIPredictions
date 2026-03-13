import joblib
import numpy as np

import os

# Menyesuaikan path model agar bisa ditemukan saat backend dijalankan dari folder backend/
MODEL_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../..", "ml", "model.pkl")
model = joblib.load(MODEL_PATH)

def predict_sales(jumlah_penjualan, harga, diskon):

    features = np.array([[jumlah_penjualan, harga, diskon]])

    prediction = model.predict(features)

    return prediction[0]