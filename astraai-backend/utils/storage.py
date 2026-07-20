from collections import deque

# -------------------------
# Live Data Storage
# -------------------------

MAX_LOGS = 1000
MAX_THREATS = 500
MAX_TIMELINE = 200

logs = deque(maxlen=MAX_LOGS)

threats = deque(maxlen=MAX_THREATS)

timeline = deque(maxlen=MAX_TIMELINE)

mitre = [
    {
        "id": "T1110",
        "name": "Brute Force",
        "tactic": "Credential Access",
        "severity": "Critical",
    },
    {
        "id": "T1059",
        "name": "Command Execution",
        "tactic": "Execution",
        "severity": "High",
    },
    {
        "id": "T1078",
        "name": "Valid Accounts",
        "tactic": "Persistence",
        "severity": "Medium",
    },
    {
        "id": "T1021",
        "name": "Remote Services",
        "tactic": "Lateral Movement",
        "severity": "Low",
    },
]

risk = {
    "score": 0,
    "level": "Low",
    "updated_at": None,
}

status = {
    "monitoring": False,
    "backend": "Connected",
    "ai_model": "Isolation Forest v2",
    "version": "2.0",
}