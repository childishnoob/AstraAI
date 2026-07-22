from sqlalchemy.orm import Session
from database.models import Log
import json


def create_log(db: Session, log_data: dict):
    data = log_data.copy()

    data["reason"] = json.dumps(data.get("reason", []))
    data["recommendation"] = json.dumps(data.get("recommendation", []))
    data["actions"] = json.dumps(data.get("actions", []))

    # ==========================
    # TEMP DEMO FIX
    # ==========================
    data.pop("containment", None)
    data.pop("blocked", None)
    data.pop("response_time", None)
    # ==========================

    log = Log(**data)

    db.add(log)
    db.commit()
    db.refresh(log)

    return log


def get_logs(db: Session):
    return (
        db.query(Log)
        .order_by(Log.id.desc())
        .limit(100)
        .all()
    )


def get_dashboard_stats(db: Session):

    logs = db.query(Log).all()

    total_logs = len(logs)

    threats = [log for log in logs if log.attack]

    threat_count = len(threats)

    critical = sum(
        1 for log in threats
        if log.severity == "Critical"
    )

    high = sum(
        1 for log in threats
        if log.severity == "High"
    )

    medium = sum(
        1 for log in threats
        if log.severity == "Medium"
    )

    low = sum(
        1 for log in threats
        if log.severity == "Low"
    )

    confidence_values = [
        log.ai_confidence
        for log in threats
        if log.ai_confidence is not None
    ]

    average_confidence = (
        round(sum(confidence_values) / len(confidence_values), 2)
        if confidence_values
        else 0
    )

    risk_values = [
        log.risk_score
        for log in threats
        if getattr(log, "risk_score", None) is not None
    ]

    if risk_values:
        risk_score = round(sum(risk_values) / len(risk_values))
    else:
        risk_score = 0

    if risk_score >= 80:
        risk_level = "Critical"
    elif risk_score >= 60:
        risk_level = "High"
    elif risk_score >= 30:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    return {
        "total_logs": total_logs,
        "threats": threat_count,
        "critical": critical,
        "high": high,
        "medium": medium,
        "low": low,
        "average_confidence": average_confidence,
        "risk": {
            "score": risk_score,
            "level": risk_level,
        },
    }