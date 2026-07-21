from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routes import router
from database.database import engine
from database.models import Base

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AstraAI Backend",
    description="Autonomous AI Security Operations Center (SOC) Analyst",
    version="1.1.0",
)

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all API routes
app.include_router(router)


@app.get("/", tags=["System"])
def root():
    return {
        "application": "AstraAI Backend",
        "description": "Autonomous AI SOC Analyst",
        "version": "1.1.0",
        "status": "Online",
    }


@app.get("/health", tags=["System"])
def health():
    return {
        "status": "healthy",
        "database": "connected",
        "api": "running",
    }