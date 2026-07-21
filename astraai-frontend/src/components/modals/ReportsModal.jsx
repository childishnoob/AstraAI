import { FaTimes, FaShieldAlt, FaBug, FaRobot } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ReportsModal({ open, onClose, threat, risk }) {
  if (!open) return null;

  const now = new Date().toLocaleString();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="w-[850px] rounded-3xl border border-cyan-500/20 bg-[#0B1220] shadow-2xl"
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/5 p-6">

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-4">
                <FaRobot className="text-2xl text-cyan-400" />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  AI Incident Report
                </h2>

                <p className="text-slate-400">
                  Autonomous Security Analysis
                </p>
              </div>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700"
            >
              <FaTimes />
            </button>

          </div>

          {/* Body */}

          <div className="space-y-6 p-8">

            <div className="grid grid-cols-2 gap-6">

              <Info title="Report ID" value={`INC-${Date.now()}`} />

              <Info title="Generated" value={now} />

              <Info
                title="Threat"
                value={threat?.attack_type || "No Active Threat"}
              />

              <Info
                title="Risk Score"
                value={
                    risk
                    ? `${risk.score}% (${risk.level})`
                    : "Unknown"
                }
                />

                <Info
                title="Status"
                value={threat?.containment || "Contained"}
                />

                <Info
                title="MITRE"
                value={threat?.mitre_id || "N/A"}
                />

              <Info
                title="Source IP"
                value={threat?.source_ip || "-"}
              />

            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-[#111827] p-6">

              <div className="mb-3 flex items-center gap-3">

                <FaBug className="text-red-400" />

                <h3 className="font-bold text-white">
                  AI Summary
                </h3>

              </div>

              <p className="leading-8 text-slate-300">

                {threat
                    ? `AstraAI detected a ${threat.attack_type} attack originating from ${
                        threat.source_ip
                        }. The activity was classified as ${risk?.level} risk with an AI confidence of ${
                        threat.ai_confidence ?? "-"
                        }%. The incident maps to ${threat.mitre_id} and autonomous containment was successfully executed.`
                  : "No active incidents were detected during this reporting period."}

              </p>

            </div>

            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

              <div className="mb-3 flex items-center gap-3">

                <FaShieldAlt className="text-emerald-400" />

                <h3 className="font-bold text-white">
                  Recommended Response
                </h3>

              </div>

              <ul className="space-y-2 text-slate-300">

                <li>• ✅ Source IP automatically blocked</li>

                <li>• ✅ Endpoint isolated by AI response engine</li>

                <li>• ✅ MITRE ATT&CK mapping completed</li>

                <li>• ✅ Continue monitoring for related indicators of compromise</li>

              </ul>

            </div>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Info({ title, value }) {
  return (
    <div className="rounded-2xl bg-[#111827] p-5">
      <p className="text-xs uppercase tracking-widest text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-lg font-bold text-white">
        {value}
      </p>
    </div>
  );
}

export default ReportsModal;