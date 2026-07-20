import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import StatusCard from "../components/dashboard/StatusCard";
import RiskGauge from "../components/dashboard/RiskGauge";
import LogTable from "../components/dashboard/LogTable";
import AIInsightCard from "../components/dashboard/AIInsightCard";
import MitreCard from "../components/dashboard/MITRECard";
import IncidentTimeline from "../components/dashboard/IncidentTimeline";
import ThreatDetails from "../components/dashboard/ThreatDetails";

import ThreatChart from "../components/charts/ThreatChart";
import TrafficChart from "../components/charts/TrafficChart";

import {
  FaServer,
  FaBug,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

import {
  getDashboard,
  getLogs,
  getThreats,
  getRisk,
  getMitre,
  getTimeline,
  getLatestThreat,
  getAIInsights,
  startMonitor,
  stopMonitor,
} from "../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [logs, setLogs] = useState([]);
  const [threats, setThreats] = useState([]);
  const [risk, setRisk] = useState(null);

  const [timeline, setTimeline] = useState([]);
  const [mitre, setMitre] = useState([]);
  const [latestThreat, setLatestThreat] = useState(null);
  const [aiInsight, setAiInsight] = useState(null);

  const loadData = async () => {
    try {
      const [
        dashboardRes,
        logsRes,
        threatsRes,
        riskRes,
        mitreRes,
        timelineRes,
        latestThreatRes,
        aiInsightRes,
      ] = await Promise.all([
        getDashboard(),
        getLogs(50),
        getThreats(50),
        getRisk(),
        getMitre(),
        getTimeline(),
        getLatestThreat(),
        getAIInsights(),
      ]);

      setDashboard(dashboardRes.data);
      setLogs(logsRes.data);
      setThreats(threatsRes.data);
      setRisk(riskRes.data);

      setMitre(mitreRes.data);
      setTimeline(timelineRes.data);
      setLatestThreat(latestThreatRes.data);
      setAiInsight(aiInsightRes.data);
    } catch (err) {
      console.error(err);
      toast.error("Backend Offline");
    }
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = async () => {
    try {
      await startMonitor();
      toast.success("SOC Monitoring Started");
      loadData();
    } catch {
      toast.error("Unable to Start Monitoring");
    }
  };

  const handleStop = async () => {
    try {
      await stopMonitor();
      toast.success("SOC Monitoring Stopped");
      loadData();
    } catch {
      toast.error("Unable to Stop Monitoring");
    }
  };

  if (!dashboard || !risk) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#08111f] text-3xl font-bold text-white">
        Initializing AstraAI...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08111f] text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 overflow-y-auto px-10 pt-10 pb-8">

          {/* HEADER */}

          <div className="mb-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                AstraAI SOC
              </p>

              <h1 className="mt-2 text-5xl font-black tracking-tight">
                Security Operations Center
              </h1>

              <p className="mt-3 max-w-3xl text-slate-400 leading-7">
                Autonomous AI-powered cyber defense platform delivering
                continuous monitoring, anomaly detection, MITRE ATT&CK
                mapping and real-time incident response.
              </p>

            </div>

            <div className="flex flex-wrap gap-4">

              <button
                onClick={handleStart}
                className="rounded-2xl bg-emerald-600 px-7 py-3 font-semibold transition hover:bg-emerald-500"
              >
                ▶ Start Monitoring
              </button>

              <button
                onClick={handleStop}
                className="rounded-2xl bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-500"
              >
                ■ Stop Monitoring
              </button>

            </div>

          </div>

          {/* KPI */}

          <div className="mb-8 grid grid-cols-4 gap-6">

            <StatusCard
              title="Total Logs"
              value={dashboard.total_logs}
              subtitle="Processed"
              color="text-green-400"
              icon={<FaServer className="text-5xl text-green-400" />}
            />

            <StatusCard
              title="Threats"
              value={dashboard.threats}
              subtitle="Detected"
              color="text-red-400"
              icon={<FaBug className="text-5xl text-red-400" />}
            />

            <StatusCard
              title="Critical"
              value={dashboard.critical}
              subtitle="Alerts"
              color="text-yellow-400"
              icon={<FaBolt className="text-5xl text-yellow-400" />}
            />

            <StatusCard
              title="Risk Score"
              value={`${risk.score}%`}
              subtitle={risk.level}
              color="text-cyan-400"
              icon={<FaShieldAlt className="text-5xl text-cyan-400" />}
            />

          </div>

          {/* LOGS */}

          <div className="mb-8">
            <LogTable logs={logs} />
          </div>

          {/* ANALYTICS */}

          <div className="mb-8 grid grid-cols-4 gap-6">

            <ThreatChart threats={threats} />

            <TrafficChart logs={logs} />

            <RiskGauge risk={risk} />

            <AIInsightCard
              risk={risk}
              insight={aiInsight}
            />

          </div>

          {/* INTELLIGENCE */}

          <div className="grid grid-cols-3 gap-6">

            <MitreCard data={mitre} />

            <IncidentTimeline data={timeline} />

            <ThreatDetails threat={latestThreat} />

          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;