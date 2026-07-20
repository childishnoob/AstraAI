import threading
import time
import random
from datetime import datetime

from simulator.log_generator import generate_log
from simulator.attack_generator import generate_attack

from ai.detection_engine import detect
from ai.explanation_engine import explain
from ai.mitre_mapper import map_attack
from ai.risk_engine import calculate_risk
from ai.decision_engine import decide
from ai.anomaly_detector import detect_anomaly

from utils.storage import (
    logs,
    threats,
    timeline,
    risk,
    status,
)

from database.database import SessionLocal
from database.crud import create_log

thread = None


def add_event(title, description):
    timeline.append({
        "title": title,
        "description": description,
        "time": datetime.now().strftime("%H:%M:%S"),
    })


def update_dashboard_risk():

    if not threats:
        risk["score"] = 0
        risk["level"] = "Low"
        risk["updated_at"] = datetime.now().strftime("%H:%M:%S")
        return

    score = 0

    for t in list(threats)[-20:]:

        severity = t["severity"]

        if severity == "Low":
            score += 5
        elif severity == "Medium":
            score += 15
        elif severity == "High":
            score += 25
        elif severity == "Critical":
            score += 40

    score = min(score, 100)

    if score >= 80:
        level = "Critical"
    elif score >= 60:
        level = "High"
    elif score >= 30:
        level = "Medium"
    else:
        level = "Low"

    risk["score"] = score
    risk["level"] = level
    risk["updated_at"] = datetime.now().strftime("%H:%M:%S")


def monitor():

    while status["monitoring"]:

        try:

            log = generate_attack() if random.randint(1, 5) == 1 else generate_log()

            ai_result = detect_anomaly(log)
            log["ai_confidence"] = ai_result["confidence"]

            analysis = detect(log)

            if ai_result["anomaly"] and not analysis["detected"]:
                analysis["detected"] = True
                analysis["attack"] = "Unknown Anomaly"

            if analysis["detected"]:

                explanation = explain(analysis["attack"])
                severity = calculate_risk(log, analysis["attack"])
                mitre = map_attack(analysis["attack"])
                actions = decide(analysis["attack"])

                log.update({
                    "attack": True,
                    "attack_type": analysis["attack"],
                    "severity": severity,
                    "summary": explanation["summary"],
                    "reason": explanation["reason"],
                    "recommendation": explanation["recommendation"],
                    "mitre_id": mitre["technique"],
                    "mitre_name": mitre["name"],
                    "actions": actions,
                })

                threats.append(log)

                add_event(
                    analysis["attack"],
                    f"{severity} threat detected from {log['source_ip']}"
                )

            else:

                log.update({
                    "attack": False,
                    "attack_type": None,
                    "severity": "Low",
                    "summary": "Normal network activity.",
                    "reason": [],
                    "recommendation": [],
                    "mitre_id": "-",
                    "mitre_name": "-",
                    "actions": ["Continue Monitoring"],
                })

                add_event(
                    "Normal Traffic",
                    f"Traffic from {log['source_ip']} verified."
                )

            logs.append(log)

            update_dashboard_risk()

            db = SessionLocal()

            try:
                create_log(db, log)
            finally:
                db.close()

            print(
                f"[{log['timestamp']}] "
                f"{log['attack_type'] or 'Normal'} | "
                f"{log['severity']} | "
                f"Risk {risk['score']}% | "
                f"AI {log['ai_confidence']}%"
            )

        except Exception as e:
            print(f"[Monitor Error] {e}")

        time.sleep(1)


def start_monitor():

    global thread

    if thread is None or not thread.is_alive():

        status["monitoring"] = True

        add_event(
            "Monitoring Started",
            "SOC monitoring engine initialized."
        )

        thread = threading.Thread(
            target=monitor,
            daemon=True,
        )

        thread.start()


def stop_monitor():

    status["monitoring"] = False

    add_event(
        "Monitoring Stopped",
        "SOC monitoring engine stopped."
    )