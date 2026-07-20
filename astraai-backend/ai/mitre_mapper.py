MITRE_MAP = {

    "Brute Force": {
        "technique": "T1110",
        "name": "Brute Force"
    },

    "Data Exfiltration": {
        "technique": "T1041",
        "name": "Exfiltration Over C2 Channel"
    },

    "Port Scan": {
        "technique": "T1595",
        "name": "Active Scanning"
    },

    "DDoS": {
        "technique": "T1498",
        "name": "Network Denial of Service"
    }

}


def map_attack(attack):

    return MITRE_MAP.get(
        attack,
        {
            "technique": "Unknown",
            "name": "Unknown"
        }
    )