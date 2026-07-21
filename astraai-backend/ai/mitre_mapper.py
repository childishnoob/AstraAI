MITRE_MAP = {

    "Port Scan": {
        "technique": "T1595",
        "name": "Active Scanning",
        "tactic": "Reconnaissance",
        "description": "The attacker performs reconnaissance by scanning hosts and services."
    },

    "Brute Force": {
        "technique": "T1110",
        "name": "Brute Force",
        "tactic": "Credential Access",
        "description": "Repeated authentication attempts are used to obtain valid credentials."
    },

    "Privilege Escalation": {
        "technique": "T1068",
        "name": "Exploitation for Privilege Escalation",
        "tactic": "Privilege Escalation",
        "description": "The attacker attempts to gain higher-level permissions."
    },

    "Malware": {
        "technique": "T1204",
        "name": "User Execution",
        "tactic": "Execution",
        "description": "Malicious code is executed on the target system."
    },

    "Ransomware": {
        "technique": "T1486",
        "name": "Data Encrypted for Impact",
        "tactic": "Impact",
        "description": "Files are encrypted to disrupt operations and demand payment."
    },

    "Data Exfiltration": {
        "technique": "T1041",
        "name": "Exfiltration Over C2 Channel",
        "tactic": "Exfiltration",
        "description": "Sensitive data is transferred outside the organization."
    },

    "DDoS": {
        "technique": "T1498",
        "name": "Network Denial of Service",
        "tactic": "Impact",
        "description": "Network resources are overwhelmed to make services unavailable."
    },

    "Unknown Anomaly": {
        "technique": "T1580",
        "name": "Cloud Infrastructure Discovery",
        "tactic": "Discovery",
        "description": "An anomalous behavior was detected but could not be mapped to a known attack with certainty."
    }

}


def map_attack(attack):

    return MITRE_MAP.get(
        attack,
        {
            "technique": "Unknown",
            "name": "Unknown Technique",
            "tactic": "Unknown",
            "description": "No MITRE ATT&CK mapping available."
        }
    )