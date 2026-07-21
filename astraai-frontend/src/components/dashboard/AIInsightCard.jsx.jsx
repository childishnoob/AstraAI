import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaBolt,
} from "react-icons/fa";

function AIInsightCard({ risk, insight }) {

  const score = insight?.risk?.score ?? risk?.score ?? 0;
  const level = insight?.risk?.level ?? risk?.level ?? "Low";

  const confidence = insight?.confidence ?? 97;
  const model = insight?.model ?? "Isolation Forest v2";

  const latest = insight?.latest;

  const attack = latest?.attack || latest?.attack_type || "Unknown Threat";
  const sourceIP =
    latest?.source_ip ||
    latest?.ip ||
    latest?.source ||
    "Unknown IP";
  const action = latest?.actions?.[0] || latest?.status || "automatic containment";

  let summary = "";

  if (latest?.attack) {
    summary = `AstraAI detected a ${attack} originating from ${sourceIP}. The activity was analysed with ${confidence}% confidence, mapped to the MITRE ATT&CK framework, and the autonomous response engine executed "${action}" to contain the threat before further lateral movement could occur.`;
  } else {
    summary =
      "AstraAI is continuously monitoring authentication events, network traffic and endpoint behaviour for anomalous activity. No active incidents currently require intervention.";
  }

  let recommendation =
    "Continue monitoring. No analyst intervention is currently required.";

  if (latest?.attack) {
    recommendation =
      `The detected ${attack} has already been automatically mitigated. Continue observing the affected host and review surrounding network activity for any related indicators of compromise.`;
  }

  let badgeColor = "bg-emerald-500/10";
  let textColor = "text-emerald-400";
  let icon = <FaCheckCircle className="text-emerald-400" />;

  if (score >= 80) {
    recommendation =
      "Immediate containment recommended. Block malicious IPs, isolate compromised assets and begin incident response.";

    badgeColor = "bg-red-500/10";
    textColor = "text-red-400";
    icon = <FaExclamationTriangle className="text-red-400" />;
  }
  else if (score >= 50) {

    recommendation =
      "Suspicious activity detected. Review authentication events and endpoint behaviour.";

    badgeColor = "bg-amber-500/10";
    textColor = "text-amber-400";
    icon = <FaShieldAlt className="text-amber-400" />;
  }

  return (

    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-[#111827] p-6 shadow-xl"
    >

      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Artificial Intelligence
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Security Copilot
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaRobot className="text-xl text-cyan-400" />
        </div>

      </div>

      {/* Confidence */}

      <div className="rounded-2xl bg-slate-800/60 p-4">

        <div className="mb-3 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <FaBrain className="text-cyan-400" />
            <span className="text-slate-300">
              AI Confidence
            </span>
          </div>

          <span className="font-bold text-cyan-400">
            {confidence}%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-700 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${confidence}%` }}
            transition={{ duration: 0.8 }}
            className="h-full rounded-full bg-cyan-400"
          />

        </div>

      </div>

      {/* Threat */}

      <div className={`mt-5 rounded-2xl ${badgeColor} p-4`}>

        <p className="text-xs uppercase tracking-wider text-slate-400">
          Current Threat Level
        </p>

        <div className="mt-2 flex items-end justify-between">

          <h3 className={`text-4xl font-black ${textColor}`}>
            {score}%
          </h3>

          <span className={`font-bold ${textColor}`}>
            {level}
          </span>

        </div>

      </div>

      {/* AI Summary */}

      <div className="mt-5 rounded-2xl bg-slate-800/60 p-4">

        <div className="mb-3 flex items-center gap-2">

          <FaBolt className="text-cyan-400" />

          <span className="font-semibold text-white">
            AI Incident Analysis
          </span>

        </div>

        <p className="text-sm leading-7 text-slate-300">
          {summary}
        </p>

      </div>

      {/* Recommendation */}

      <div className="mt-5 rounded-2xl bg-slate-800/60 p-4">

        <div className="mb-3 flex items-center gap-2">

          {icon}

          <span className="font-semibold text-white">
            AI Resposne Assessment
          </span>

        </div>

        <p className="text-sm leading-7 text-slate-300">
          {recommendation}
        </p>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">

        <div>

          <p className="text-xs text-slate-500">
            Detection Model
          </p>

          <p className="font-semibold text-emerald-400">
            {model}
          </p>

        </div>

        <div className="flex items-center gap-2 text-slate-400">

          <FaClock />

          <span className="text-sm">
            Live Monitoring
          </span>

        </div>

      </div>

    </motion.div>

  );

}

export default AIInsightCard;