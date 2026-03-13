from fastapi import APIRouter
from app.models.schemas import LoginRequest
from app.core.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/login")
def login(data: LoginRequest):

    if data.username != "admin" or data.password != "admin":
        return {"error": "Invalid credentials"}

    token = create_access_token({"sub": data.username})

    return {"access_token": token}