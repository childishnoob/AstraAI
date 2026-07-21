import {
  FaBell,
  FaBug,
  FaPlayCircle,
  FaShieldAlt,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const notifications = [
  {
    icon: <FaShieldAlt className="text-emerald-400" />,
    title: "Monitoring Started",
    subtitle: "System monitoring is active",
    time: "Just now",
  },
  {
    icon: <FaBug className="text-red-400" />,
    title: "DDoS Attack Detected",
    subtitle: "192.168.1.44",
    time: "12 sec ago",
  },
  {
    icon: <FaShieldAlt className="text-yellow-400" />,
    title: "Risk Score Increased",
    subtitle: "68 → 82",
    time: "32 sec ago",
  },
  {
    icon: <FaPlayCircle className="text-cyan-400" />,
    title: "Demo Mode Activated",
    subtitle: "Presentation Mode",
    time: "1 min ago",
  },
];

function NotificationPopup({ open }) {
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
        <div className="flex items-center gap-3 border-b border-slate-700 p-5">
          <FaBell className="text-cyan-400" />

          <div>
            <h3 className="font-bold text-white">
              Notifications
            </h3>

            <p className="text-xs text-slate-400">
              Recent Notifications
            </p>
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto">

          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 border-b border-slate-800 p-4 transition hover:bg-slate-800/40"
            >
              <div className="mt-1 text-lg">
                {item.icon}
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-white">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-400">
                  {item.subtitle}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          ))}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NotificationPopup;