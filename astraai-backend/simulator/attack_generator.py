import random
from datetime import datetime


def random_ip():
    return ".".join(str(random.randint(1, 254)) for _ in range(4))


def brute_force():

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": "TCP",
        "port": 22,
        "bytes": random.randint(25000, 60000),
        "packets": random.randint(180, 250),
        "event": "Failed SSH Login",
        "attack": True,
        "attack_type": "Brute Force"
    }


def ddos():

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": "TCP",
        "port": 80,
        "bytes": random.randint(100000, 300000),
        "packets": random.randint(900, 1500),
        "event": "Traffic Flood",
        "attack": True,
        "attack_type": "DDoS"
    }


def port_scan():

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": "TCP",
        "port": random.choice([20,21,22,23,25,53,80,110,143,443]),
        "bytes": random.randint(1000,5000),
        "packets": random.randint(60,120),
        "event": "Port Scan",
        "attack": True,
        "attack_type": "Port Scan"
    }


def data_exfiltration():

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": "HTTPS",
        "port": 443,
        "bytes": random.randint(300000,700000),
        "packets": random.randint(300,700),
        "event": "Large File Transfer",
        "attack": True,
        "attack_type": "Data Exfiltration"
    }


def generate_attack():

    attacks = [
        brute_force,
        ddos,
        port_scan,
        data_exfiltration
    ]

    return random.choice(attacks)()