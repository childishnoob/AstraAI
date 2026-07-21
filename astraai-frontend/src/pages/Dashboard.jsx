import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

import StatusCard from "../components/dashboard/StatusCard";
import RiskGauge from "../components/dashboard/RiskGauge";
import LogTable from "../components/dashboard/LogTable";
import AIInsightCard from "../components/dashboard/AIInsightCard.jsx";
import MitreCard from "../components/dashboard/MITRECard";
import IncidentTimeline from "../components/dashboard/IncidentTimeline";
import ThreatDetails from "../components/dashboard/ThreatDetails";

import ThreatChart from "../components/charts/ThreatChart";
import TrafficChart from "../components/charts/TrafficChart";

import AutonomousResponseCard from "../components/dashboard/AutonomousResponseCard";
import DemoOverlay from "../components/DemoOverlay";

import ReportsModal from "../components/modals/ReportsModal";
import SettingsModal from "../components/modals/SettingsModal";

import {
  FaServer,
  FaBug,
  FaShieldAlt,
  FaBolt,
  FaPlayCircle,
} from "react-icons/fa";

import {
  getDashboard,
  getLogs,
  getThreats,
  getBlockedIPs,
  getRisk,
  getMitre,
  getTimeline,
  getLatestThreat,
  getAIInsights,
  startMonitor,
  stopMonitor,
  startDemo,
} from "../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [logs, setLogs] = useState([]);
  const [threats, setThreats] = useState([]);
  const [blockedIPs, setBlockedIPs] = useState([]);
  const [risk, setRisk] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [mitre, setMitre] = useState([]);
  const [latestThreat, setLatestThreat] = useState(null);
  const [aiInsight, setAiInsight] = useState(null);

  const [showDemo, setShowDemo] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [demoLoading, setDemoLoading] = useState(false);

  const [lastThreatTime, setLastThreatTime] = useState(null);

  const [showReport, setShowReport] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  const loadData = async () => {
    try {
      const [
        dashboardRes,
        logsRes,
        threatsRes,
        blockedIPsRes,
        riskRes,
        mitreRes,
        timelineRes,
        latestThreatRes,
        aiInsightRes,
      ] = await Promise.all([
        getDashboard(),
        getLogs(50),
        getThreats(50),
        getBlockedIPs(100),
        getRisk(),
        getMitre(),
        getTimeline(),
        getLatestThreat(),
        getAIInsights(),
      ]);

      setDashboard(dashboardRes.data);
      setLogs(logsRes.data);
      setThreats(threatsRes.data);
      setBlockedIPs(blockedIPsRes.data);
      setRisk(riskRes.data);
      setMitre(mitreRes.data);
      setTimeline(timelineRes.data);
      setLatestThreat(latestThreatRes.data);
      const threat = latestThreatRes.data;

      if (
        threat &&
        threat.timestamp !== lastThreatTime &&
        threat.attack
      ) {
        toast.error(
          `🚨 ${threat.attack_type}\n${threat.source_ip}`,
          {
            id: "attack-toast",
            duration: 2500,
          }
        );

        setLastThreatTime(threat.timestamp);
      }
      setAiInsight(aiInsightRes.data);
    } catch (err) {
      console.error(err);
      toast.error("Backend Offline");
    }
  };

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = async () => {
    await startMonitor();
    toast.success("SOC Monitoring Started");
  };

  const handleStop = async () => {
    await stopMonitor();

    setShowDemo(false);
    setDemoStep(0);
    setDemoLoading(false);

    toast.success("Monitoring Stopped");
  };

  const handleDemo = async () => {
    try {
      setDemoLoading(true);
      setShowDemo(true);
      setDemoStep(0);

      for (let i = 0; i <= 6; i++) {
        await new Promise((resolve) =>
          setTimeout(resolve, 650)
        );
        setDemoStep(i);
      }

      await startMonitor();

      await startDemo();

      toast.success("Demo Mode Activated");

      loadData();

      setTimeout(() => {
        setShowDemo(false);
      }, 600);

    } catch (err) {
      console.error(err);
      toast.error("Failed to start demo");
    } finally {
      setDemoLoading(false);
    }
  };

  // Live Search Filter
  const filteredLogs = logs.filter((log) => {
    if (!searchTerm.trim()) return true;

    const query = searchTerm.toLowerCase();

    return [
      log.source_ip,
      log.destination_ip,
      log.event,
      log.attack_type,
      log.severity,
      log.mitre_id,
      log.mitre_name,
    ]
      .filter(Boolean)
      .some((field) =>
        String(field).toLowerCase().includes(query)
      );
  });

  if (!dashboard || !risk) {
    return (
      <div className="min-h-screen bg-[#08111f] flex items-center justify-center text-white text-4xl font-bold">
        Initializing AstraAI...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08111f] text-white">

      {showDemo && <DemoOverlay step={demoStep} />}

        <ReportsModal
          open={showReport}
          onClose={() => setShowReport(false)}
          threat={latestThreat}
          risk={risk}
        />

        <SettingsModal
          open={showSettings}
          onClose={() => setShowSettings(false)}
        />
      
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="flex">
        <Sidebar
          active={activeSection}
          setActive={setActiveSection}
          onOpenReports={() => setShowReport(true)}
          onOpenSettings={() => setShowSettings(true)}
        />
        <main
          className="flex-1 overflow-y-auto px-14 py-10"
        >

          {/* Header */}

          <div
            id="dashboard"
            className="mb-14 flex items-start justify-between gap-10"
          >

            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-bold">
                AstraAI Autonomous SOC
              </p>

              <h1 className="mt-3 text-[3.25rem] font-black leading-none tracking-tight">
                Security Operations Center
              </h1>

              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-400">
                AI-powered cyber defense platform providing continuous
                monitoring, anomaly detection, MITRE ATT&CK mapping,
                autonomous response and real-time threat intelligence.
              </p>

            </div>

            <div className="flex flex-wrap items-start gap-4">

              <span className="bg-emerald-600/20 border border-emerald-500 rounded-xl px-4 py-3 font-semibold">
                ● System Online
              </span>

              <button
                onClick={handleStart}
                className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-semibold"
              >
                Start
              </button>

              <button
                onClick={handleStop}
                className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-xl font-semibold"
              >
                Stop
              </button>

              <button
                onClick={handleDemo}
                disabled={demoLoading}
                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
              >
                <FaPlayCircle />

                {demoLoading ? "Launching..." : "Demo Mode"}

              </button>

            </div>

          </div>

          {/* KPI */}

          <div
            id="monitoring"
            className="mb-10 grid grid-cols-4 gap-7"
          >

            <StatusCard
              title="Total Logs"
              value={dashboard.total_logs}
              subtitle="Processed"
              icon={<FaServer className="text-5xl text-green-400" />}
            />

            <StatusCard
              title="Threats"
              value={dashboard.threats}
              subtitle="Detected"
              icon={<FaBug className="text-5xl text-red-400" />}
            />

            <StatusCard
              title="Critical"
              value={dashboard.critical}
              subtitle="Alerts"
              icon={<FaBolt className="text-5xl text-yellow-400" />}
            />

            <StatusCard
              title="Risk Score"
              value={`${risk.score}%`}
              subtitle={risk.level}
              icon={<FaShieldAlt className="text-5xl text-cyan-400" />}
            />

          </div>

          <div
            id="threats"
            className="mb-10"
          >
            <LogTable logs={filteredLogs} />
          </div>

          <div
            id="analytics"
            className="mb-10 grid grid-cols-5 gap-7"
          >

            <ThreatChart threats={threats} />

            <TrafficChart logs={logs} />

            <RiskGauge risk={risk} />

            <AutonomousResponseCard blockedIPs={blockedIPs} />

            <AIInsightCard
              risk={risk}
              insight={aiInsight}
            />

          </div>

          <div
            id="mitre"
            className="mb-10"
          >
            <MitreCard data={mitre} />
          </div>

          <div
            id="timeline"
            className="mb-10"
          >
            <IncidentTimeline data={timeline} />
          </div>

          <div>
            <ThreatDetails threat={latestThreat} />
          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;