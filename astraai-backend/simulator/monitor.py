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

from ai.response_engine import execute_response

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

# Demo mode flag
DEMO_MODE = True

# Sequential attack chain used during demo mode
ATTACK_CHAIN = [
    "Port Scan",
    "Brute Force",
    "Privilege Escalation",
    "Malware",
    "Ransomware",
    "DDoS",
    "Data Exfiltration",
]

attack_index = 0


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
        contained = t.get("containment") == "Contained"

        if severity == "Low":
            score += 1 if contained else 2

        elif severity == "Medium":
            score += 2 if contained else 6

        elif severity == "High":
            score += 4 if contained else 10

        elif severity == "Critical":
            score += 5 if contained else 15

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


def generate_demo_attack():
    global attack_index

    attack = generate_attack()

    attack["attack_type"] = ATTACK_CHAIN[attack_index]
    attack["event"] = ATTACK_CHAIN[attack_index]

    attack_index = (attack_index + 1) % len(ATTACK_CHAIN)

    return attack


def monitor():

    print(">>> MONITOR LOOP STARTED <<<")

    while status["monitoring"]:

        try:

            # -------------------------
            # Generate traffic
            # -------------------------
            if DEMO_MODE:
                log = generate_demo_attack()
            else:
                log = (
                    generate_attack()
                    if random.random() < 0.45
                    else generate_log()
                )

            # -------------------------
            # AI Anomaly Detection
            # -------------------------
            ai_result = detect_anomaly(log)
            log["ai_confidence"] = ai_result["confidence"]

            analysis = detect(log)

            if ai_result["anomaly"] and not analysis["detected"]:
                analysis["detected"] = True
                analysis["attack"] = "Unknown Anomaly"

            # -------------------------
            # Threat Detected
            # -------------------------
            if analysis["detected"]:

                explanation = explain(analysis["attack"])
                risk_result = calculate_risk(log, analysis["attack"])
                mitre = map_attack(analysis["attack"])
                response = execute_response(log, analysis["attack"])
                actions = response["actions"]


                log.update({
                    "attack": analysis["attack"],
                    "attack_type": analysis["attack"],
                    "severity": risk_result["level"],
                    "risk_score": risk_result["score"],
                    "summary": explanation["summary"],
                    "reason": explanation["reason"],
                    "recommendation": explanation["recommendation"],
                    "impact": explanation.get("impact", ""),
                    "priority": explanation.get("priority", "Low"),
                    "mitre_id": mitre["technique"],
                    "mitre_name": mitre["name"],
                    "actions": actions,

                    "containment": response["status"],
                    "blocked": response["blocked"],
                    "response_time": response["response_time"],
                })

                threats.append(log)

                add_event(
                    "🚨 Threat Detected",
                    f"{analysis['attack']} detected from {log['source_ip']}"
                )

                time.sleep(0.2)

                add_event(
                    "🤖 AI Analysis",
                    f"Confidence: {log['ai_confidence']}% • Severity: {risk_result['level']}"
                )

                time.sleep(0.2)

                add_event(
                    "🗺 MITRE ATT&CK",
                    f"{mitre['technique']} • {mitre['name']}"
                )

                time.sleep(0.2)

                add_event(
                    "🛡 Autonomous Response",
                    f"{actions[0]} executed against {log['source_ip']}"
                )

                time.sleep(0.2)

                for action in actions:
                    add_event(
                        "AI Response",
                        action
                    )
                    time.sleep(0.15)

                add_event(
                    "✅ Threat Contained",
                    f"Incident contained in {response['response_time']} seconds."
                )


                add_event(
                    "📁 Incident Closed",
                    "No further malicious activity detected."
                )

            # -------------------------
            # Normal Traffic
            # -------------------------
            else:

                log.update({
                    "attack": None,
                    "attack_type": None,
                    "severity": "Low",
                    "risk_score": 0,
                    "summary": "Normal network activity.",
                    "reason": [],
                    "recommendation": [],
                    "impact": "None",
                    "priority": "Low",
                    "mitre_id": "-",
                    "mitre_name": "-",
                    "actions": ["Continue Monitoring"],
                })

                add_event(
                    "Normal Traffic",
                    f"Traffic from {log['source_ip']} verified."
                )

            # -------------------------
            # Store Log
            # -------------------------
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
                f"Risk {log.get('risk_score', 0)}% | "
                f"AI {log['ai_confidence']}%"
            )

        except Exception as e:
            print(f"[Monitor Error] {e}")

        time.sleep(1)


def start_monitor():

    global thread

    print(">>> START_MONITOR CALLED <<<")

    status["monitoring"] = True

    if thread is None or not thread.is_alive():

        print(">>> THREAD STARTED <<<")

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