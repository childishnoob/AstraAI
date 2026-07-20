from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from api.dependencies import get_db
from simulator.monitor import start_monitor, stop_monitor

from utils.storage import (
    threats,
    timeline,
    mitre,
    risk,
    status,
)

from database.database import SessionLocal
from database.crud import (
    get_logs,
    get_dashboard_stats,
)

router = APIRouter(prefix="/api")


# -----------------------------
# Health
# -----------------------------
@router.get("/health")
def health():
    return {
        "status": "online",
        "service": "AstraAI Backend",
    }


# -----------------------------
# Dashboard
# -----------------------------
@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return get_dashboard_stats(db)


@router.get("/status")
def get_status():
    return status


@router.get("/risk")
def get_risk():
    return risk


# -----------------------------
# Logs
# -----------------------------
@router.get("/logs")
def read_logs(limit: int = 50):
    db = SessionLocal()

    try:
        data = get_logs(db)
        return data[-limit:]
    finally:
        db.close()


# -----------------------------
# Threats
# -----------------------------
@router.get("/threats")
def read_threats(limit: int = 50):
    return list(threats)[-limit:]


@router.get("/threat/latest")
def latest_threat():
    data = list(threats)

    if data:
        return data[-1]

    return {
        "attack_type": "No Threats",
        "severity": "Low",
        "source_ip": "-",
        "destination_ip": "-",
        "ai_confidence": 0,
    }


# -----------------------------
# Timeline
# -----------------------------
@router.get("/timeline")
def get_timeline():
    return list(timeline)[-20:]


# -----------------------------
# MITRE
# -----------------------------
@router.get("/mitre")
def get_mitre():
    return mitre


# -----------------------------
# AI Insights
# -----------------------------
@router.get("/ai-insights")
def ai_insights():
    data = list(threats)
    latest = data[-1] if data else None

    return {
        "confidence": latest.get("ai_confidence", 97) if latest else 97,
        "risk": risk,
        "latest": latest,
        "model": "Isolation Forest v2",
    }


# -----------------------------
# Monitoring
# -----------------------------
@router.post("/start-monitor")
def start():
    start_monitor()

    return {
        "success": True,
        "message": "Monitoring Started",
    }


@router.post("/stop-monitor")
def stop():
    stop_monitor()

    return {
        "success": True,
        "message": "Monitoring Stopped",
    }