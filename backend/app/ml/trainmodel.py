import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score


# 1 Load dataset
df = pd.read_csv("app/data/sales_data.csv")


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
joblib.dump(model, "app/ml/model.pkl")

print("Model saved to model.pkl")