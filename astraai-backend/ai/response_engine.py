from datetime import datetime

# Stores all automatically blocked IPs
from utils.storage import blocked_ips


def execute_response(log, attack):

    ip = log["source_ip"]

    response_actions = {
        "Brute Force": [
            "Blocked Source IP",
            "Terminated SSH Session",
            "Enabled Login Rate Limiting",
        ],

        "Port Scan": [
            "Blocked Source IP",
            "Closed Scanned Ports",
            "Enabled Firewall Monitoring",
        ],

        "Malware": [
            "Quarantined Endpoint",
            "Terminated Malicious Process",
            "Started Malware Scan",
        ],

        "Ransomware": [
            "Isolated Endpoint",
            "Stopped Encryption Process",
            "Protected Critical Files",
        ],

        "DDoS": [
            "Blocked Source IP",
            "Applied Firewall Rule",
            "Enabled Rate Limiting",
        ],

        "Privilege Escalation": [
            "Revoked Elevated Privileges",
            "Logged Out Suspicious User",
            "Triggered Identity Verification",
        ],

        "Data Exfiltration": [
            "Blocked Outbound Connection",
            "Stopped File Transfer",
            "Locked Sensitive Resources",
        ],

        "Unknown Anomaly": [
            "Quarantined Host",
            "Blocked Network Access",
            "Requested Human Review",
        ]
    }

    actions = response_actions.get(
        attack,
        ["Continue Monitoring"]
    )

    blocked_ips.append({
        "ip": ip,
        "attack": attack,
        "status": actions[0],
        "response_time": 0.42,
        "time": datetime.now().strftime("%H:%M:%S")
    })
    return {
        "status": "Contained",
        "blocked": True,
        "response_time": "0.42 sec",
        "actions": actions
    }