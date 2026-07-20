import random
from datetime import datetime


PROTOCOLS = ["TCP", "UDP", "HTTP", "HTTPS", "DNS"]

EVENTS = [
    "HTTP Request",
    "HTTPS Request",
    "DNS Query",
    "SSH Login",
    "Database Query"
]


def random_ip():
    return ".".join(str(random.randint(1, 254)) for _ in range(4))


def generate_log():

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": random.choice(PROTOCOLS),
        "port": random.choice([22, 53, 80, 443, 3306]),
        "bytes": random.randint(100, 5000),
        "packets": random.randint(1, 50),
        "event": random.choice(EVENTS),
        "attack": False,
        "attack_type": None
    }