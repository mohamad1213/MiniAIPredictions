import pandas as pd
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Get absolute path of project root
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data", "sales_data.csv")
MODEL_PATH = os.path.join(BASE_DIR, "ml", "model.pkl")

# 1 Load dataset
if not os.path.exists(DATA_PATH):
    print(f"Error: {DATA_PATH} not found.")
else:
    df = pd.read_csv(DATA_PATH)

    # 2 Feature & Target
    X = df[["jumlah_penjualan", "harga", "diskon"]]
    y = df["status"]

    # 3 Train test split
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    # 4 Train model
    model = DecisionTreeClassifier()
    model.fit(X_train, y_train)

    # 5 Evaluation
    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print("Model Accuracy:", accuracy)

    # 6 Save model
    joblib.dump(model, MODEL_PATH)
    print(f"Model saved to {MODEL_PATH}")