from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from api.dependencies import get_db
import simulator.monitor as monitor

from simulator.monitor import (
    start_monitor,
    stop_monitor,
)

from utils.storage import (
    threats,
    timeline,
    mitre,
    risk,
    status,
    blocked_ips,
)

from database.database import SessionLocal
from database.crud import (
    get_logs,
    get_dashboard_stats,
)

router = APIRouter(prefix="/api")


# =====================================================
# Health
# =====================================================

@router.get("/health")
def health():
    return {
        "status": "online",
        "service": "AstraAI Backend",
        "version": "1.1.0",
    }


# =====================================================
# Dashboard
# =====================================================

@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return get_dashboard_stats(db)


@router.get("/status")
def get_status():
    return status


@router.get("/risk")
def get_risk():
    return risk


# =====================================================
# Logs
# =====================================================

@router.get("/logs")
def read_logs(limit: int = 50):

    db = SessionLocal()

    try:
        data = get_logs(db)
        return data[-limit:]
    finally:
        db.close()


# =====================================================
# Threats
# =====================================================

@router.get("/threats")
def read_threats(limit: int = 50):
    return list(threats)[-limit:]


@router.get("/blocked-ips")
def read_blocked_ips(limit: int = 20):
    return blocked_ips[-limit:]


@router.get("/threat/latest")
def latest_threat():

    # If monitoring is stopped, don't return stale alerts
    if not status.get("monitoring", False):
        return {
            "attack": False,
            "attack_type": "No Threats",
            "severity": "Low",
            "source_ip": "-",
            "destination_ip": "-",
            "ai_confidence": 0,
            "summary": "Monitoring stopped.",
            "actions": [],
        }

    data = list(threats)

    if not data:
        return {
            "attack": False,
            "attack_type": "No Threats",
            "severity": "Low",
            "source_ip": "-",
            "destination_ip": "-",
            "ai_confidence": 0,
            "summary": "System operating normally.",
            "actions": [],
        }

    return data[-1]


@router.get("/threat/stats")
def threat_statistics():

    data = list(threats)

    stats = {
        "total": len(data),
        "critical": 0,
        "high": 0,
        "medium": 0,
        "low": 0,
    }

    for t in data:

        sev = t.get("severity", "Low")

        if sev == "Critical":
            stats["critical"] += 1

        elif sev == "High":
            stats["high"] += 1

        elif sev == "Medium":
            stats["medium"] += 1

        else:
            stats["low"] += 1

    return stats


# =====================================================
# Timeline
# =====================================================

@router.get("/timeline")
def get_timeline():
    return list(timeline)[-30:]


# =====================================================
# MITRE
# =====================================================

@router.get("/mitre")
def get_mitre():
    return mitre


# =====================================================
# AI Insights
# =====================================================

@router.get("/ai-insights")
def ai_insights():

    latest = list(threats)[-1] if threats else None

    return {

        "model": "Isolation Forest v2",

        "confidence": (
            latest.get("ai_confidence", 97)
            if latest else
            97
        ),

        "risk": risk,

        "latest": latest,

        "system_status": (
            "Threat Detected"
            if latest
            else
            "Monitoring"
        ),

        "analysis": (
            latest.get("summary")
            if latest
            else
            "Monitoring network traffic..."
        )

    }


# =====================================================
# Demo Mode
# =====================================================

@router.post("/demo/start")
def start_demo():

    monitor.DEMO_MODE = True

    return {
        "success": True,
        "message": "Demo Mode Enabled",
    }


@router.post("/demo/stop")
def stop_demo():

    monitor.DEMO_MODE = False

    return {
        "success": True,
        "message": "Demo Mode Disabled",
    }


# =====================================================
# Monitoring
# =====================================================

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