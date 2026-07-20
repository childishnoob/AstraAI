def explain(attack):

    explanations = {

        "Brute Force": {
            "summary": "Multiple failed SSH login attempts detected.",
            "reason": [
                "High number of login attempts.",
                "Targeting SSH service (port 22).",
                "Pattern matches brute-force behavior."
            ],
            "recommendation": [
                "Block source IP.",
                "Enable Multi-Factor Authentication.",
                "Review authentication logs."
            ]
        },

        "DDoS": {
            "summary": "Unusually high traffic volume detected.",
            "reason": [
                "Extremely high packet count.",
                "Traffic flood detected.",
                "Potential denial-of-service attack."
            ],
            "recommendation": [
                "Enable rate limiting.",
                "Block malicious IPs.",
                "Activate DDoS protection."
            ]
        },

        "Port Scan": {
            "summary": "Port scanning activity detected.",
            "reason": [
                "Multiple ports were probed.",
                "Reconnaissance behavior observed."
            ],
            "recommendation": [
                "Monitor source host.",
                "Block repeated scans.",
                "Review firewall rules."
            ]
        },

        "Data Exfiltration": {
            "summary": "Large outbound data transfer detected.",
            "reason": [
                "Large HTTPS upload.",
                "Potential sensitive data leakage."
            ],
            "recommendation": [
                "Isolate endpoint.",
                "Review outbound traffic.",
                "Investigate user activity."
            ]
        }

    }

    return explanations.get(
        attack,
        {
            "summary": "Normal activity.",
            "reason": [],
            "recommendation": []
        }
    )