import { motion } from "framer-motion";
import {
  FaHistory,
  FaCheckCircle,
  FaBug,
  FaExclamationTriangle,
  FaRobot,
  FaShieldAlt,
  FaFingerprint,
  FaCircle,
} from "react-icons/fa";

function IncidentTimeline({ data = [] }) {
  const getIcon = (title = "") => {

    const t = title.toLowerCase();

    if (t.includes("threat"))
      return {
        icon: <FaBug />,
        color: "text-red-400",
        bg: "bg-red-500/10",
      };

    if (t.includes("analysis"))
      return {
        icon: <FaRobot />,
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
      };

    if (t.includes("mitre"))
      return {
        icon: <FaFingerprint />,
        color: "text-amber-400",
        bg: "bg-amber-500/10",
      };

    if (t.includes("response"))
      return {
        icon: <FaShieldAlt />,
        color: "text-violet-400",
        bg: "bg-violet-500/10",
      };

    if (t.includes("closed") || t.includes("contained"))
      return {
        icon: <FaCheckCircle />,
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
      };

    return {
      icon: <FaCircle />,
      color: "text-slate-400",
      bg: "bg-slate-700",
    };
  };

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

      {!data.length ? (
        <div className="rounded-2xl bg-slate-800/50 p-6 text-center text-slate-400">
          Waiting for security events...
        </div>
      ) : (
        <div className="relative ml-4 border-l border-slate-700">

          {data.map((event, index) => {

            const style = getIcon(event.title);

            return (
              <div
                key={index}
                className="relative mb-6 pl-8 last:mb-0"
              >
                <div
                  className={`absolute -left-[15px] flex h-7 w-7 items-center justify-center rounded-full ${style.bg}`}
                >
                  <span className={style.color}>
                    {style.icon}
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-800/60 p-4 hover:bg-slate-800 transition">

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
            );
          })}
        </div>
      )}
    </motion.div>
  );
}

export default IncidentTimeline;