from sqlalchemy.orm import Session
from database.models import Log
import json


def create_log(db: Session, log_data: dict):

    data = log_data.copy()

    data["reason"] = json.dumps(data["reason"])
    data["recommendation"] = json.dumps(data["recommendation"])
    data["actions"] = json.dumps(data["actions"])

    log = Log(**data)

    db.add(log)
    db.commit()
    db.refresh(log)

    return log


def get_logs(db: Session):

    return db.query(Log).order_by(Log.id.desc()).limit(100).all()


def get_dashboard_stats(db: Session):

    logs = db.query(Log).all()

    total_logs = len(logs)

    threats = sum(1 for log in logs if log.attack)

    critical = sum(
        1
        for log in logs
        if log.severity == "Critical"
    )

    high = sum(
        1
        for log in logs
        if log.severity == "High"
    )

    average_confidence = 0

    confidence_values = [
        log.ai_confidence
        for log in logs
        if log.ai_confidence is not None
    ]

    if confidence_values:
        average_confidence = round(
            sum(confidence_values) / len(confidence_values),
            2
        )

    return {

        "total_logs": total_logs,

        "threats": threats,

        "critical": critical,

        "high": high,

        "average_confidence": average_confidence

    }