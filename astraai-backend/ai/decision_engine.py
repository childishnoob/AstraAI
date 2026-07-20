def decide(attack):

    actions = {

        "Brute Force": [
            "Temporarily block source IP",
            "Enable Multi-Factor Authentication",
            "Notify Security Team"
        ],

        "DDoS": [
            "Enable Rate Limiting",
            "Block suspicious traffic",
            "Activate DDoS protection"
        ],

        "Port Scan": [
            "Monitor source host",
            "Increase firewall logging",
            "Block repeated scans"
        ],

        "Data Exfiltration": [
            "Isolate affected endpoint",
            "Terminate suspicious connection",
            "Notify SOC Team"
        ]

    }

    return actions.get(
        attack,
        [
            "Continue Monitoring"
        ]
    )