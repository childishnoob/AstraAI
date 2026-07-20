import { FaShieldAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const techniques = [
  {
    id: "T1110",
    name: "Brute Force",
    tactic: "Credential Access",
    severity: "Critical",
  },
  {
    id: "T1059",
    name: "Command Execution",
    tactic: "Execution",
    severity: "High",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tactic: "Persistence",
    severity: "Medium",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tactic: "Lateral Movement",
    severity: "Low",
  },
];

function badge(severity) {
  switch (severity) {
    case "Critical":
      return "bg-red-500/10 text-red-400";
    case "High":
      return "bg-orange-500/10 text-orange-400";
    case "Medium":
      return "bg-amber-500/10 text-amber-400";
    default:
      return "bg-emerald-500/10 text-emerald-400";
  }
}

function MitreCard() {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Threat Intelligence
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            MITRE ATT&CK
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaShieldAlt className="text-xl text-cyan-400" />
        </div>
      </div>

      <div className="space-y-4">
        {techniques.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-slate-800/60 p-4 transition hover:bg-slate-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-cyan-400">
                  {item.id}
                </h3>

                <p className="mt-1 font-semibold text-white">
                  {item.name}
                </p>

                <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <FaArrowRight className="text-cyan-400 text-xs" />
                  {item.tactic}
                </div>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-xs font-bold ${badge(
                  item.severity
                )}`}
              >
                {item.severity}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl bg-cyan-500/10 p-4">
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-cyan-400">
            AI Insight:
          </span>{" "}
          Active detections are currently mapped against the MITRE
          ATT&CK framework to improve analyst triage and response.
        </p>
      </div>
    </motion.div>
  );
}

export default MitreCard;