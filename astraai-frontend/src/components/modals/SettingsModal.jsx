import { FaTimes, FaCheckCircle, FaServer, FaRobot, FaBell, FaSyncAlt, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function SettingRow({ icon, title, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#111827] p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
          {icon}
        </div>

        <div>
          <p className="font-semibold text-white">{title}</p>
        </div>
      </div>

      <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-400">
        {value}
      </span>
    </div>
  );
}

function SettingsModal({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-[720px] rounded-3xl border border-cyan-500/20 bg-[#0B1220] shadow-2xl"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/5 p-6">

            <div>

              <h2 className="text-2xl font-black text-white">
                AstraAI Settings
              </h2>

              <p className="text-slate-400">
                System configuration overview
              </p>

            </div>

            <button
              onClick={onClose}
              className="rounded-xl bg-slate-800 p-3 hover:bg-slate-700"
            >
              <FaTimes />
            </button>

          </div>

          {/* Body */}

          <div className="space-y-4 p-7">

            <SettingRow
              icon={<FaSyncAlt className="text-cyan-400" />}
              title="Auto Refresh"
              value="Enabled"
            />

            <SettingRow
              icon={<FaBell className="text-cyan-400" />}
              title="Live Notifications"
              value="Enabled"
            />

            <SettingRow
              icon={<FaRobot className="text-cyan-400" />}
              title="AI Detection Engine"
              value="Isolation Forest"
            />

            <SettingRow
              icon={<FaServer className="text-cyan-400" />}
              title="Backend Status"
              value="Connected"
            />

            <SettingRow
              icon={<FaMoon className="text-cyan-400" />}
              title="Theme"
              value="Dark"
            />

            <SettingRow
              icon={<FaCheckCircle className="text-cyan-400" />}
              title="Version"
              value="AstraAI v1.0"
            />

          </div>

          {/* Footer */}

          <div className="flex justify-end gap-4 border-t border-white/5 p-6">

            <button
              onClick={onClose}
              className="rounded-xl bg-cyan-600 px-6 py-3 font-semibold hover:bg-cyan-500"
            >
              Close
            </button>

          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SettingsModal;