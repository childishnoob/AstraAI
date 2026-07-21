import {
  FaRobot,
  FaCode,
  FaShieldAlt,
  FaUsers,
  FaLaptopCode,
} from "react-icons/fa";

import { AnimatePresence, motion } from "framer-motion";

function ProfilePopup({ open }) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-14 z-50 w-96 rounded-2xl border border-slate-700 bg-[#111827] shadow-2xl"
      >
        <div className="border-b border-slate-700 p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
              <FaRobot className="text-2xl text-cyan-400" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                AstraAI
              </h2>

              <p className="text-sm text-slate-400">
                Autonomous SOC Platform
              </p>
            </div>

          </div>

        </div>

        <div className="space-y-5 p-5">

          <div className="flex items-center gap-3">

            <FaShieldAlt className="text-cyan-400" />

            <div>
              <p className="font-semibold text-white">
                Version
              </p>

              <p className="text-sm text-slate-400">
                v1.0 Prototype
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3">

            <FaUsers className="text-cyan-400" />

            <div>
              <p className="font-semibold text-white">
                Team
              </p>

              <p className="text-sm text-slate-400">
                Harshita Gupta
              </p>

              <p className="text-sm text-slate-400">
                Ansh Sharma
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <FaLaptopCode className="text-cyan-400" />

            <div>

              <p className="font-semibold text-white">
                Tech Stack
              </p>

              <p className="text-sm text-slate-400">
                React • FastAPI • Isolation Forest • MITRE ATT&CK
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <FaCode className="text-cyan-400" />

            <div>

              <p className="font-semibold text-white">
                Hackathon
              </p>

              <p className="text-sm text-slate-400">
                India AI Impact Summit 2026
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 p-4 text-center text-xs text-slate-500">
          Your Autonomous AI Security Analyst, Working 24/7
        </div>

      </motion.div>
    </AnimatePresence>
  );
}

export default ProfilePopup;