def detect(log):

    packets = int(log.get("packets", 0))
    bytes_sent = int(log.get("bytes", 0))
    port = int(log.get("port", 0))

    protocol = str(log.get("protocol", "")).upper()
    event = str(log.get("event", "")).lower()

    attack_type = log.get("attack_type")

    # Demo mode / simulator generated attack
    if attack_type:
        return {
            "detected": True,
            "attack": attack_type
        }

    # Brute Force
    if (
        port == 22
        and packets >= 150
        and "ssh" in event
    ):
        return {
            "detected": True,
            "attack": "Brute Force"
        }

    # DDoS
    if (
        packets >= 900
        or bytes_sent >= 500000
    ):
        return {
            "detected": True,
            "attack": "DDoS"
        }

    # Port Scan
    if (
        "port scan" in event
        or (
            packets >= 60
            and port in [
                20, 21, 22, 23,
                25, 53, 80,
                110, 143, 443
            ]
        )
    ):
        return {
            "detected": True,
            "attack": "Port Scan"
        }

    # Malware
    if (
        "malicious" in event
        or "malware" in event
    ):
        return {
            "detected": True,
            "attack": "Malware"
        }

    # Ransomware
    if (
        "encryption" in event
        or "ransomware" in event
    ):
        return {
            "detected": True,
            "attack": "Ransomware"
        }

    # Privilege Escalation
    if "privilege" in event:
        return {
            "detected": True,
            "attack": "Privilege Escalation"
        }

    # Data Exfiltration
    if (
        protocol == "HTTPS"
        and bytes_sent >= 250000
    ):
        return {
            "detected": True,
            "attack": "Data Exfiltration"
        }

    return {
        "detected": False,
        "attack": None
    }