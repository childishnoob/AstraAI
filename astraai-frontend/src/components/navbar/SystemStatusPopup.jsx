import { FaServer, FaDatabase, FaWifi, FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function SystemStatusPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-14 z-50 w-80 rounded-2xl border border-slate-700 bg-[#111827] p-5 shadow-2xl"
      >
        <div className="mb-5 flex items-center gap-3">
          <FaWifi className="text-cyan-400 text-xl" />

          <div>
            <h3 className="font-bold text-white">
              AstraAI Backend
            </h3>

            <p className="text-xs text-slate-400">
              System Connection Status
            </p>
          </div>
        </div>

        <div className="mb-5 flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3">
          <FaCircle className="text-[10px] text-emerald-400" />

          <span className="font-semibold text-emerald-400">
            Backend Connected
          </span>
        </div>

        <div className="space-y-3 text-sm">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaServer className="text-cyan-400" />
              API
            </div>

            <span className="text-emerald-400">
              Online
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaDatabase className="text-cyan-400" />
              Database
            </div>

            <span className="text-emerald-400">
              Connected
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Monitoring</span>

            <span className="text-emerald-400">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Latency</span>

            <span className="text-cyan-400">
              ~24 ms
            </span>
          </div>

        </div>

        <div className="mt-5 border-t border-slate-700 pt-3 text-xs text-slate-500">
          Updated just now
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SystemStatusPopup;