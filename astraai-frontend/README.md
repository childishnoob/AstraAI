# AstraAI

![Python](https://img.shields.io/badge/Python-3.11-blue)

![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)

![React](https://img.shields.io/badge/React-Frontend-61DAFB)

![License](https://img.shields.io/badge/License-MIT-yellow)

> **An AI-Powered Security Operations Center for Real-Time Threat Detection, Risk Assessment, and Autonomous Incident Response**

AstraAI is an AI-powered Cyber Security Operations Center (SOC) platform designed to improve cyber resilience for Critical National Infrastructure (CNI). It continuously monitors network activity, detects anomalies using Artificial Intelligence, maps threats to the MITRE ATT&CK framework, evaluates organizational risk, and recommends autonomous response actions in real time.

## Table of Contents

- [Problem Statement](#problem-statement)
- [Why AstraAI?](#why-astraai)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [API Endpoints](#api-endpoints)
- [Quick Start](#quick-start)
- [Demo Workflow](#demo-workflow)
- [Future Improvements](#future-improvements)
- [Team](#team)
- [Impact](#impact)
- [License](#license)

---

# Problem Statement

Critical infrastructure organizations face thousands of security events every day. Security analysts often struggle to identify genuine attacks among massive volumes of logs.

AstraAI reduces detection and response time by combining:

- AI-based anomaly detection
- Rule-based threat detection
- MITRE ATT&CK mapping
- Risk scoring
- Explainable AI
- Autonomous recommendations

---

# Why AstraAI?

Traditional security tools generate thousands of alerts, forcing analysts to manually investigate incidents. AstraAI combines artificial intelligence with explainable threat analysis to automatically identify suspicious behaviour, estimate organizational risk, map attacks to the MITRE ATT&CK framework, and recommend immediate response actions through an interactive Security Operations Center dashboard.

---

# Features

## Core Features

### AI Engine
- Isolation Forest anomaly detection
- Confidence scoring
- Behavioural analysis
- Unknown anomaly detection

### Threat Detection
- Brute Force
- Port Scan
- Malware
- Data Exfiltration
- Privilege Escalation
- DDoS

### Explainable AI
- AI-generated summaries
- Threat reasoning
- Risk scoring
- Recommended mitigation actions

### SOC Dashboard
- Live monitoring
- MITRE ATT&CK mapping
- Incident timeline
- AI Copilot
- Network analytics
- Threat intelligence

---

# Tech Stack

### Frontend

- React
- Vite
- TailwindCSS
- Axios
- Recharts
- Framer Motion

### Backend

- FastAPI
- Python

### AI

- Scikit-Learn
- Isolation Forest

### Database

- SQLite
- SQLAlchemy

---

# Architecture

The AstraAI pipeline processes network events through AI-powered detection, correlates threats with MITRE ATT&CK techniques, calculates organizational risk, and visualizes everything through a real-time SOC dashboard.


```
             Network Logs
                   │
                   ▼
        FastAPI Backend API
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  Rule-Based Engine     AI Detection
                               │
                               ▼
                     Isolation Forest
                               │
         ┌─────────┬──────────┬─────────┐
         ▼         ▼          ▼         ▼
      Threats    Risk      MITRE     AI Summary
         │
         ▼
     React SOC Dashboard
```

---

# Screenshots

## Dashboard Overview

The main Security Operations Center dashboard showing live logs, KPIs, monitoring controls, and real-time threat notifications.

![Dashboard Overview](images/dashboard.png)

---

## AI Analytics

Live analytics including threat distribution, network traffic visualization, AI-generated risk assessment, system health monitoring, and the AI Security Copilot.

![AI Analytics](images/analytics.png)

---

## Threat Intelligence & Incident Response

MITRE ATT&CK mapping, incident timeline, threat analysis, AI recommendations, and automated response actions.

![Threat Intelligence](images/threat-intelligence.png)

---

# API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/dashboard | Dashboard statistics |
| GET | /api/logs | Live security logs |
| GET | /api/threats | Detected threats |
| GET | /api/threat/latest | Latest detected threat |
| GET | /api/risk | Risk score |
| GET | /api/timeline | Incident timeline |
| GET | /api/mitre | MITRE ATT&CK mapping |
| GET | /api/ai-insights | AI-generated insights |
| POST | /api/start-monitor | Start monitoring |
| POST | /api/stop-monitor | Stop monitoring |
| POST | /api/demo/start | Start demo mode |
| POST | /api/demo/stop | Stop demo mode |

---

# Quick Start

```bash
# Backend
cd astraai-backend
pip install -r requirements.txt
uvicorn main:app --reload

# Frontend
cd astraai-frontend
npm install
npm run dev
```

---

# Demo Workflow

1. Start Monitoring
2. Launch Demo Mode
3. Simulated cyber attacks are generated
4. AI detects anomalous behaviour
5. Threats are classified
6. MITRE ATT&CK techniques are mapped
7. Organizational risk is updated
8. AI recommends response actions
9. Dashboard visualizes everything in real time

---


# Future Improvements

- Multi-user authentication
- SIEM integration
- Email & Slack alerts
- Cloud deployment
- Threat intelligence feeds
- Automated firewall integration

---

# Team

- Harshita Gupta
- Ansh Sharma

---

# Impact

AstraAI demonstrates how explainable artificial intelligence can help security teams detect threats faster, reduce analyst workload, improve cyber resilience, and strengthen the protection of critical national infrastructure through autonomous monitoring and intelligent decision support.

---

# License

MIT License