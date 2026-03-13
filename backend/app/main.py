from fastapi import FastAPI
from app.routers import auth, sales, predict

app = FastAPI(title="Mini AI Sales Prediction API")

from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

origins = [
    "http://localhost:5173",  # alamat frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],   # <- pastikan POST, OPTIONS dll diizinkan
    allow_headers=["*"],
)
app.include_router(auth.router)
app.include_router(sales.router)
app.include_router(predict.router)