import pandas as pd

DATA_PATH = "app/data/sales_data.csv"

def get_sales_data():
    df = pd.read_csv(DATA_PATH)
    return df.to_dict(orient="records")