import { motion } from "framer-motion";
import {
  FaHistory,
  FaCheckCircle,
  FaBug,
  FaExclamationTriangle,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

const events = [
  {
    time: "18:42",
    title: "User Login",
    description: "Successful authentication from endpoint.",
    icon: <FaCheckCircle />,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    time: "18:44",
    title: "SSH Failure",
    description: "Multiple failed SSH login attempts.",
    icon: <FaBug />,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    time: "18:45",
    title: "Brute Force",
    description: "Credential attack detected by rule engine.",
    icon: <FaExclamationTriangle />,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    time: "18:46",
    title: "AI Detection",
    description: "Isolation Forest flagged anomalous behavior.",
    icon: <FaRobot />,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    time: "18:47",
    title: "Alert Created",
    description: "Incident forwarded to SOC analyst.",
    icon: <FaShieldAlt />,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

function IncidentTimeline() {
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
            Activity
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Incident Timeline
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaHistory className="text-xl text-cyan-400" />
        </div>
      </div>

      <div className="relative ml-4 border-l border-slate-700">
        {events.map((event, index) => (
          <div key={index} className="relative mb-6 pl-8 last:mb-0">
            <div
              className={`absolute -left-[15px] flex h-7 w-7 items-center justify-center rounded-full ${event.bg}`}
            >
              <span className={event.color}>{event.icon}</span>
            </div>

            <div className="rounded-2xl bg-slate-800/60 p-4 transition hover:bg-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">
                  {event.title}
                </h3>

                <span className="text-xs font-medium text-slate-400">
                  {event.time}
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default IncidentTimeline;