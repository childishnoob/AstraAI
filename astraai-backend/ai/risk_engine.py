def calculate_risk(log, attack):

    packets = int(log.get("packets", 0))
    bytes_sent = int(log.get("bytes", 0))
    confidence = int(log.get("ai_confidence", 80))

    score = 0

    # -----------------------------
    # Base Attack Score
    # -----------------------------
    base_scores = {
        "Port Scan": 25,
        "Brute Force": 50,
        "Privilege Escalation": 70,
        "Malware": 65,
        "Ransomware": 90,
        "Data Exfiltration": 85,
        "DDoS": 80,
        "Unknown Anomaly": 40,
    }

    score += base_scores.get(attack, 10)

    # -----------------------------
    # Traffic Volume
    # -----------------------------
    if packets > 150:
        score += 10

    if packets > 500:
        score += 10

    if packets > 1000:
        score += 15

    # -----------------------------
    # Data Volume
    # -----------------------------
    if bytes_sent > 100000:
        score += 10

    if bytes_sent > 300000:
        score += 10

    if bytes_sent > 600000:
        score += 15

    # -----------------------------
    # AI Confidence
    # -----------------------------
    if confidence >= 95:
        score += 15
    elif confidence >= 85:
        score += 10
    elif confidence >= 70:
        score += 5

    score = min(score, 100)

    # -----------------------------
    # Risk Level
    # -----------------------------
    if score >= 90:
        level = "Critical"
    elif score >= 70:
        level = "High"
    elif score >= 40:
        level = "Medium"
    else:
        level = "Low"

    return {
        "score": score,
        "level": level,
    }