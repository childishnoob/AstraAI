def explain(attack):

    explanations = {

        "Brute Force": {
            "summary": "Repeated authentication failures indicate an active brute force attack targeting privileged access.",
            "reason": [
                "Large number of failed SSH login attempts detected.",
                "Authentication frequency exceeded baseline behavior.",
                "High-confidence attack pattern identified by AI.",
                "Repeated access attempts from a single source IP."
            ],
            "recommendation": [
                "Block attacking IP immediately.",
                "Force password reset for targeted accounts.",
                "Enable Multi-Factor Authentication.",
                "Review authentication and audit logs.",
                "Monitor for lateral movement."
            ],
            "impact": "High probability of account compromise.",
            "priority": "Critical"
        },

        "DDoS": {
            "summary": "Abnormal traffic volume indicates a Distributed Denial-of-Service attack.",
            "reason": [
                "Incoming packets exceed expected baseline.",
                "Traffic originates from multiple suspicious hosts.",
                "Connection requests indicate flooding behavior.",
                "AI confidence exceeds attack threshold."
            ],
            "recommendation": [
                "Enable rate limiting.",
                "Activate Web Application Firewall.",
                "Block malicious IP ranges.",
                "Redirect traffic through DDoS mitigation.",
                "Continue monitoring network utilization."
            ],
            "impact": "Service availability may be disrupted.",
            "priority": "Critical"
        },

        "Port Scan": {
            "summary": "Reconnaissance activity detected across multiple network ports.",
            "reason": [
                "Sequential port probing observed.",
                "Scanning behavior matches known reconnaissance techniques.",
                "Unusual connection attempts across multiple services."
            ],
            "recommendation": [
                "Increase firewall logging.",
                "Block repeated scan attempts.",
                "Add source IP to watchlist.",
                "Collect Indicators of Compromise."
            ],
            "impact": "Potential preparation for a future attack.",
            "priority": "Medium"
        },

        "Malware": {
            "summary": "Malicious process execution detected on endpoint.",
            "reason": [
                "Suspicious executable behavior observed.",
                "Unexpected outbound communications detected.",
                "Behavioral analysis indicates malware activity."
            ],
            "recommendation": [
                "Terminate malicious process.",
                "Quarantine endpoint.",
                "Run endpoint security scan.",
                "Collect forensic artifacts."
            ],
            "impact": "Endpoint integrity may be compromised.",
            "priority": "High"
        },

        "Ransomware": {
            "summary": "Potential ransomware encryption activity detected.",
            "reason": [
                "Rapid file modification behavior observed.",
                "Encryption pattern matches known ransomware families.",
                "Unusual filesystem activity detected."
            ],
            "recommendation": [
                "Isolate infected endpoint.",
                "Stop encryption process.",
                "Disable SMB communication.",
                "Restore protected files from backup.",
                "Notify Incident Response Team."
            ],
            "impact": "Critical risk of data loss.",
            "priority": "Critical"
        },

        "Privilege Escalation": {
            "summary": "Attempt to obtain elevated system privileges detected.",
            "reason": [
                "Unauthorized privilege request observed.",
                "Administrative actions outside normal behavior.",
                "AI detected privilege escalation indicators."
            ],
            "recommendation": [
                "Lock compromised account.",
                "Revoke elevated privileges.",
                "Rotate administrator credentials.",
                "Review authentication history."
            ],
            "impact": "Potential full system compromise.",
            "priority": "High"
        },

        "Data Exfiltration": {
            "summary": "Large outbound transfer indicates possible data exfiltration.",
            "reason": [
                "Unusually large outbound HTTPS transfer.",
                "Sensitive data movement exceeds normal baseline.",
                "Behavior resembles known exfiltration techniques."
            ],
            "recommendation": [
                "Terminate outbound connection.",
                "Quarantine affected endpoint.",
                "Capture forensic evidence.",
                "Review user activity.",
                "Notify Security Operations Center."
            ],
            "impact": "Confidential information may have been exposed.",
            "priority": "Critical"
        },

        "Unknown Anomaly": {
            "summary": "Behavior deviates significantly from historical network patterns.",
            "reason": [
                "Isolation Forest detected anomalous behavior.",
                "No known attack signature matched.",
                "Further investigation recommended."
            ],
            "recommendation": [
                "Collect forensic evidence.",
                "Escalate to SOC analyst.",
                "Continue behavioral monitoring."
            ],
            "impact": "Unknown security impact.",
            "priority": "Medium"
        }

    }

    return explanations.get(
        attack,
        {
            "summary": "Normal network activity detected.",
            "reason": [],
            "recommendation": ["Continue monitoring."],
            "impact": "No security impact.",
            "priority": "Low"
        }
    )