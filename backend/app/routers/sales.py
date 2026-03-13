from fastapi import APIRouter
from app.services.sales_service import get_sales_data

router = APIRouter(prefix="/sales", tags=["Sales"])


@router.get("/")
def get_sales():

    data = get_sales_data()

    return {
        "total": len(data),
        "data": data
    }