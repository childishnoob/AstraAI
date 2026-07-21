import random
from datetime import datetime


def random_ip():
    return ".".join(str(random.randint(1, 254)) for _ in range(4))


def build_attack(
    event,
    attack_type,
    protocol,
    port,
    severity,
    confidence,
    bytes_range,
    packets_range,
):

    return {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "source_ip": random_ip(),
        "destination_ip": random_ip(),
        "protocol": protocol,
        "port": port,
        "bytes": random.randint(*bytes_range),
        "packets": random.randint(*packets_range),
        "event": event,
        "attack": True,
        "attack_type": attack_type,
        "severity": severity,
        "ai_confidence": random.randint(*confidence),
    }


def brute_force():

    return build_attack(
        event="Multiple Failed SSH Logins",
        attack_type="Brute Force",
        protocol="TCP",
        port=22,
        severity="Critical",
        confidence=(95,100),
        bytes_range=(20000,60000),
        packets_range=(150,300),
    )


def ddos():

    return build_attack(
        event="Distributed Traffic Flood",
        attack_type="DDoS",
        protocol="TCP",
        port=80,
        severity="Critical",
        confidence=(97,100),
        bytes_range=(300000,900000),
        packets_range=(900,2000),
    )


def port_scan():

    return build_attack(
        event="Sequential Port Scan",
        attack_type="Port Scan",
        protocol="TCP",
        port=random.choice(
            [20,21,22,23,25,53,80,110,143,443]
        ),
        severity="Medium",
        confidence=(70,90),
        bytes_range=(1000,7000),
        packets_range=(50,150),
    )


def malware():

    return build_attack(
        event="Malicious Process Execution",
        attack_type="Malware",
        protocol="HTTPS",
        port=443,
        severity="High",
        confidence=(88,98),
        bytes_range=(15000,90000),
        packets_range=(120,350),
    )


def ransomware():

    return build_attack(
        event="Mass File Encryption",
        attack_type="Ransomware",
        protocol="SMB",
        port=445,
        severity="Critical",
        confidence=(96,100),
        bytes_range=(60000,180000),
        packets_range=(200,500),
    )


def privilege_escalation():

    return build_attack(
        event="Privilege Escalation Attempt",
        attack_type="Privilege Escalation",
        protocol="TCP",
        port=22,
        severity="High",
        confidence=(90,99),
        bytes_range=(10000,40000),
        packets_range=(100,250),
    )


def data_exfiltration():

    return build_attack(
        event="Large Outbound Data Transfer",
        attack_type="Data Exfiltration",
        protocol="HTTPS",
        port=443,
        severity="Critical",
        confidence=(96,100),
        bytes_range=(300000,900000),
        packets_range=(300,900),
    )


def generate_attack():

    attacks = [
        brute_force,
        ddos,
        port_scan,
        malware,
        ransomware,
        privilege_escalation,
        data_exfiltration,
    ]

    return random.choice(attacks)()