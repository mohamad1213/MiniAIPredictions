from fastapi import APIRouter
from app.models.schemas import PredictRequest
from app.services.ml_service import predict_sales

router = APIRouter(prefix="/predict", tags=["Prediction"])

@router.post("/")
def predict(data: PredictRequest):

    result = predict_sales(
        data.jumlah_penjualan,
        data.harga,
        data.diskon
    )

    return {"prediction": result}