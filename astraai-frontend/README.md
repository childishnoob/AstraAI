<div align="center">

# 🛡️ AstraAI

### AI-Powered Autonomous Security Operations Center (SOC)

**Enhancing Cyber Resilience for Critical National Infrastructure**

---

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white)

</div>

---

# 📖 Overview

AstraAI is an AI-powered Autonomous Security Operations Center (SOC) prototype developed to improve the cyber resilience of Critical National Infrastructure (CNI).

The platform continuously monitors network activity, detects suspicious behaviour using machine learning, classifies attacks, maps them to the MITRE ATT&CK framework, assesses risk, performs simulated autonomous response actions, and presents all security events through a modern real-time SOC dashboard.

Rather than only generating alerts, AstraAI demonstrates how AI can assist security analysts throughout the incident lifecycle, from detection to response and reporting.

---

# ✨ Key Features

### 🤖 AI Threat Detection

- Isolation Forest based anomaly detection
- AI confidence scoring
- Intelligent threat classification
- Real-time security monitoring

### 🛡️ Autonomous Response

- Simulated malicious IP blocking
- Endpoint isolation simulation
- Automated containment actions
- Response history tracking
- Response time monitoring

### 📊 SOC Dashboard

- Live network traffic visualization
- Threat distribution analytics
- Dynamic cyber risk gauge
- Interactive security dashboard
- Live threat notifications

### 🗺️ MITRE ATT&CK Integration

- Automatic ATT&CK technique mapping
- MITRE IDs
- Technique descriptions
- Security context for detected attacks

### 🧠 AI Security Copilot

- AI-generated incident summaries
- Threat explanations
- Recommended security actions
- Incident insights

### 📜 Incident Reporting

- Executive incident reports
- Incident timeline
- Threat history
- Response tracking

---

# 🎯 Supported Attack Types

- Port Scan
- Brute Force
- Malware
- Ransomware
- DDoS
- Privilege Escalation
- Data Exfiltration
- Unknown AI Anomalies

---

# 🏗️ System Architecture

```text
                +----------------------+
                | Traffic Simulator    |
                +----------+-----------+
                           |
                           v
                 +----------------------+
                 | AI Detection Engine  |
                 +----------+-----------+
                           |
          +----------------+----------------+
          |                                 |
          v                                 v
   MITRE ATT&CK Mapper             Risk Assessment
          |                                 |
          +----------------+----------------+
                           |
                           v
              Autonomous Response Engine
                           |
                           v
                  Executive Reporting
                           |
                           v
                Real-Time SOC Dashboard
```

---

# ⚙️ AI Workflow

```text
Network Traffic
        │
        ▼
AI Anomaly Detection
        │
        ▼
Threat Classification
        │
        ▼
MITRE ATT&CK Mapping
        │
        ▼
Risk Assessment
        │
        ▼
AI Explanation
        │
        ▼
Autonomous Response
        │
        ▼
Dashboard & Incident Report
```

---

# 🖥️ Dashboard Modules

- Live Monitoring
- Network Traffic Analytics
- Threat Distribution
- Dynamic Risk Assessment
- AI Security Copilot
- MITRE ATT&CK Mapping
- Autonomous Response
- Incident Timeline
- Executive Reports

---

# 🛠️ Technology Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Chart.js

## Backend

- FastAPI
- Python
- SQLite
- SQLAlchemy

## Artificial Intelligence

- Scikit-learn
- Isolation Forest
- Rule-based Threat Classification
- Dynamic Risk Assessment

---

# 📂 Project Structure

```text
AstraAI
│
├── astraai-backend
│   ├── ai
│   ├── api
│   ├── database
│   ├── simulator
│   └── utils
│
├── astraai-frontend
│   ├── src
│   │   ├── components
│   │   ├── charts
│   │   ├── dashboard
│   │   ├── modals
│   │   └── services
│   └── public
│
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/childishnoob/AstraAI.git
```

## Backend

```bash
cd astraai-backend

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend

```bash
cd astraai-frontend

npm install

npm run dev
```

---

# 📸 Application Screenshots

The following screenshots will be added before the final submission:

- Dashboard Overview
- AI Security Copilot
- Autonomous Response Panel
- MITRE ATT&CK Mapping
- Incident Timeline
- Executive Report

---

# 📈 Example Incident Flow

```text
┌───────────────────────┐
│  Network Traffic      │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│ AI Threat Detection   │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│ MITRE ATT&CK Mapping  │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│ Autonomous Response   │
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│ SOC Dashboard         │
└───────────────────────┘
```

---

# 🔮 Future Enhancements

- SIEM Integration
- Threat Intelligence Feeds
- Email Notifications
- Live Packet Capture
- Cloud Deployment
- PDF Report Export
- Multi-user Authentication
- Role-Based Access Control

---

# 🏆 Hackathon Submission

AstraAI was developed as a prototype for the **AI Cyber Resilience Hackathon** to demonstrate how Artificial Intelligence can enhance modern Security Operations Centers by combining:

- AI-powered anomaly detection
- Real-time threat monitoring
- MITRE ATT&CK mapping
- Dynamic risk assessment
- Autonomous incident response
- Intelligent incident reporting

---

# 👥 Team

- **Harshita Gupta**
- **Ansh Sharma**