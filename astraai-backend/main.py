from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import router
from database.database import engine
from database.models import Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AstraAI Backend",
    description="Autonomous AI SOC Analyst",
    version="1.0.0"
)

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {
        "message": "AstraAI Backend Running",
        "version": "1.0.0",
        "status": "Online"
    }