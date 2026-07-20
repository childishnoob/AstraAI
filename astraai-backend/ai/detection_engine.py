def detect(log):

    packets = log["packets"]
    bytes_sent = log["bytes"]
    port = log["port"]
    protocol = log["protocol"]
    event = log["event"]

    # Brute Force
    if port == 22 and packets >= 150:
        return {
            "detected": True,
            "attack": "Brute Force"
        }

    # DDoS
    if packets >= 800:
        return {
            "detected": True,
            "attack": "DDoS"
        }

    # Port Scan
    if event == "Port Scan":
        return {
            "detected": True,
            "attack": "Port Scan"
        }

    # Data Exfiltration
    if protocol == "HTTPS" and bytes_sent >= 250000:
        return {
            "detected": True,
            "attack": "Data Exfiltration"
        }

    return {
        "detected": False,
        "attack": None
    }