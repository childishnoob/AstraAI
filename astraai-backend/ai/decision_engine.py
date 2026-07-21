def decide(attack):

    responses = {

        "Brute Force": [
            "Generate firewall rule",
            "Block attacking IP address",
            "Force password reset",
            "Enable Multi-Factor Authentication",
            "Review authentication logs",
            "Threat Neutralized"
        ],

        "DDoS": [
            "Enable rate limiting",
            "Apply Web Application Firewall rules",
            "Block malicious IP ranges",
            "Redirect traffic through DDoS protection",
            "Monitor network utilization",
            "Threat Contained"
        ],

        "Port Scan": [
            "Block repeated scan attempts",
            "Increase firewall logging",
            "Add source IP to watchlist",
            "Collect Indicators of Compromise (IOC)",
            "Continue monitoring activity"
        ],

        "Malware": [
            "Terminate malicious process",
            "Quarantine affected endpoint",
            "Delete malicious executable",
            "Run endpoint security scan",
            "Threat Contained"
        ],

        "Ransomware": [
            "Isolate infected endpoint",
            "Disable SMB communication",
            "Stop encryption process",
            "Restore protected files",
            "Notify Incident Response Team",
            "Threat Contained"
        ],

        "Privilege Escalation": [
            "Lock compromised account",
            "Revoke elevated privileges",
            "Rotate administrator credentials",
            "Review authentication history",
            "Threat Mitigated"
        ],

        "Data Exfiltration": [
            "Terminate suspicious connection",
            "Block outbound traffic",
            "Quarantine endpoint",
            "Capture forensic evidence",
            "Notify Security Operations Center",
            "Threat Neutralized"
        ],

        "Unknown Anomaly": [
            "Collect forensic evidence",
            "Run behavioral analysis",
            "Escalate to SOC analyst",
            "Continue monitoring"
        ]
    }

    return responses.get(
        attack,
        [
            "Continue Monitoring"
        ]
    )