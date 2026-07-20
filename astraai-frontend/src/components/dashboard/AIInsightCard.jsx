import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
} from "react-icons/fa";

function AIInsightCard({ risk }) {
  const score = risk?.score ?? 0;
  const level = risk?.level ?? "Low";

  let recommendation =
    "System is operating normally. Continue monitoring live telemetry.";

  let statusColor = "text-emerald-400";
  let badge = "bg-emerald-500/10";
  let icon = <FaCheckCircle className="text-emerald-400" />;

  if (score >= 80) {
    recommendation =
      "Critical threat activity detected. Isolate affected endpoints and block malicious IPs immediately.";
    statusColor = "text-red-400";
    badge = "bg-red-500/10";
    icon = <FaExclamationTriangle className="text-red-400" />;
  } else if (score >= 50) {
    recommendation =
      "Suspicious activity observed. Review endpoint behavior and investigate alerts.";
    statusColor = "text-amber-400";
    badge = "bg-amber-500/10";
    icon = <FaShieldAlt className="text-amber-400" />;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl"
    >
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
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
          <div className="flex items-center gap-2 text-slate-300">
            <FaBrain className="text-cyan-400" />
            <span>AI Confidence</span>
          </div>

          <span className="font-bold text-cyan-400">97%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-cyan-400"
            style={{ width: "97%" }}
          />
        </div>
      </div>

      {/* Risk */}
      <div className={`mt-5 rounded-2xl ${badge} p-4`}>
        <p className="text-xs uppercase tracking-wider text-slate-400">
          Threat Level
        </p>

        <div className="mt-2 flex items-end justify-between">
          <h3 className={`text-4xl font-black ${statusColor}`}>
            {score}%
          </h3>

          <span className={`font-bold ${statusColor}`}>
            {level.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-5 rounded-2xl bg-slate-800/60 p-4">
        <div className="mb-3 flex items-center gap-2">
          {icon}
          <span className="font-semibold text-white">
            AI Recommendation
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
            Isolation Forest v2
          </p>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <FaClock />
          <span className="text-sm">Live</span>
        </div>
      </div>
    </motion.div>
  );
}

export default AIInsightCard;