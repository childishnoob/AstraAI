import random
from datetime import datetime

PROTOCOLS = ["TCP", "UDP", "HTTP", "HTTPS", "DNS"]

NORMAL_EVENTS = [
    "HTTP Request",
    "HTTPS Request",
    "DNS Query",
    "SSH Login",
    "Database Query",
    "File Access",
    "Email Sent",
    "API Request"
]

ATTACKS = [
    {
        "event": "Brute Force Attack",
        "attack_type": "Brute Force",
        "severity": "Critical",
        "confidence": (95, 100),
        "port": 22
    },
    {
        "event": "Port Scan",
        "attack_type": "Port Scan",
        "severity": "Medium",
        "confidence": (70, 90),
        "port": 80
    },
    {
        "event": "DDoS Attack",
        "attack_type": "DDoS",
        "severity": "Critical",
        "confidence": (96, 100),
        "port": 443
    },
    {
        "event": "Malware Activity",
        "attack_type": "Malware",
        "severity": "High",
        "confidence": (85, 98),
        "port": 443
    },
    {
        "event": "Data Exfiltration",
        "attack_type": "Data Exfiltration",
        "severity": "Critical",
        "confidence": (95, 100),
        "port": 443
    },
]


def random_ip():
    return ".".join(str(random.randint(1, 254)) for _ in range(4))


def generate_log():

    attack = random.random() < 0.35

    if attack:

        atk = random.choice(ATTACKS)

        return {
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "source_ip": random_ip(),
            "destination_ip": random_ip(),
            "protocol": random.choice(PROTOCOLS),
            "port": atk["port"],
            "bytes": random.randint(3000, 25000),
            "packets": random.randint(200, 1500),
            "event": atk["event"],
            "attack": True,
            "attack_type": atk["attack_type"],
            "severity": atk["severity"],
            "ai_confidence": random.randint(
                atk["confidence"][0],
                atk["confidence"][1],
            ),
        }

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": random.choice(PROTOCOLS),
        "port": random.choice([22, 53, 80, 443, 3306]),
        "bytes": random.randint(100, 5000),
        "packets": random.randint(5, 100),
        "event": random.choice(NORMAL_EVENTS),
        "attack": False,
        "attack_type": None,
        "severity": "Low",
        "ai_confidence": random.randint(10, 35),
    }