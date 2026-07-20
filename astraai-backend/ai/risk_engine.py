def calculate_risk(log, attack):

    packets = log["packets"]
    bytes_sent = log["bytes"]

    # ----------------------------
    # Brute Force
    # ----------------------------
    if attack == "Brute Force":

        if packets > 220:
            return "Critical"

        return "High"

    # ----------------------------
    # DDoS
    # ----------------------------
    if attack == "DDoS":

        if packets > 1200:
            return "Critical"

        return "High"

    # ----------------------------
    # Data Exfiltration
    # ----------------------------
    if attack == "Data Exfiltration":

        if bytes_sent > 500000:
            return "Critical"

        return "High"

    # ----------------------------
    # Port Scan
    # ----------------------------
    if attack == "Port Scan":

        return "Medium"

    return "Low"