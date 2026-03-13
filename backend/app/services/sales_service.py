import pandas as pd

import os

# Menyesuaikan path data agar bisa ditemukan saat backend dijalankan dari folder backend/
DATA_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../..", "data", "sales_data.csv")

def get_sales_data():
    df = pd.read_csv(DATA_PATH)
    return df.to_dict(orient="records")