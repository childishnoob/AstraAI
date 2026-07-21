from collections import deque

# ==========================================================
# AstraAI In-Memory Storage
# ==========================================================

MAX_LOGS = 1000
MAX_THREATS = 500
MAX_TIMELINE = 300
blocked_ips = []

# Live Data
logs = deque(maxlen=MAX_LOGS)
threats = deque(maxlen=MAX_THREATS)
timeline = deque(maxlen=MAX_TIMELINE)

# Current MITRE ATT&CK Mapping
mitre = [
    {
        "id": "T1110",
        "name": "Brute Force",
        "tactic": "Credential Access",
        "severity": "Critical",
    },
    {
        "id": "T1595",
        "name": "Active Scanning",
        "tactic": "Reconnaissance",
        "severity": "Medium",
    },
    {
        "id": "T1068",
        "name": "Privilege Escalation",
        "tactic": "Privilege Escalation",
        "severity": "High",
    },
    {
        "id": "T1204",
        "name": "User Execution",
        "tactic": "Execution",
        "severity": "High",
    },
    {
        "id": "T1486",
        "name": "Data Encrypted for Impact",
        "tactic": "Impact",
        "severity": "Critical",
    },
    {
        "id": "T1041",
        "name": "Exfiltration Over C2 Channel",
        "tactic": "Exfiltration",
        "severity": "Critical",
    },
    {
        "id": "T1498",
        "name": "Network Denial of Service",
        "tactic": "Impact",
        "severity": "Critical",
    },
]

# Global Risk State
risk = {
    "score": 0,
    "level": "Low",
    "updated_at": None,
}

# Backend Status
status = {
    "monitoring": False,
    "backend": "Connected",
    "ai_model": "Isolation Forest v2",
    "version": "2.0",
    "demo_mode": False,
}