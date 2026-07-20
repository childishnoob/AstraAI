import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error);
  }
);

export default api;

// Dashboard
export const getDashboard = () => api.get("/api/dashboard");

// Monitoring
export const startMonitor = () => api.post("/api/start-monitor");
export const stopMonitor = () => api.post("/api/stop-monitor");

// Live Data
export const getLogs = (limit = 50) =>
  api.get(`/api/logs?limit=${limit}`);

export const getThreats = (limit = 50) =>
  api.get(`/api/threats?limit=${limit}`);

export const getRisk = () =>
  api.get("/api/risk");

// Intelligence
export const getMitre = () =>
  api.get("/api/mitre");

export const getTimeline = () =>
  api.get("/api/timeline");

export const getLatestThreat = () =>
  api.get("/api/threat/latest");

export const getAIInsights = () =>
  api.get("/api/ai-insights");

// Health
export const getBackendStatus = () =>
  api.get("/health");