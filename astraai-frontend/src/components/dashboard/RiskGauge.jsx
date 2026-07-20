import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine } from "react-icons/fa";

function RiskGauge({ risk }) {
  const score = risk?.score ?? 0;
  const level = risk?.level ?? "Unknown";

  const ring =
    score >= 80
      ? "#EF4444"
      : score >= 50
      ? "#F59E0B"
      : "#10B981";

  const text =
    score >= 80
      ? "text-red-400"
      : score >= 50
      ? "text-amber-400"
      : "text-emerald-400";

  const circumference = 2 * Math.PI * 58;
  const offset = circumference - (score / 100) * circumference;

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
            Analytics
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Current Risk
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaShieldAlt className="text-cyan-400 text-xl" />
        </div>
      </div>

      {/* Gauge */}
      <div className="flex justify-center">
        <div className="relative h-44 w-44">
          <svg className="-rotate-90" width="176" height="176">
            <circle
              cx="88"
              cy="88"
              r="58"
              stroke="#1E293B"
              strokeWidth="12"
              fill="none"
            />

            <circle
              cx="88"
              cy="88"
              r="58"
              stroke={ring}
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              style={{
                transition: "all .8s ease",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-5xl font-black ${text}`}>
              {score}%
            </span>

            <span className={`mt-1 font-semibold ${text}`}>
              {level.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 rounded-2xl bg-slate-800/60 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">
            AI Assessment
          </span>

          <div className="flex items-center gap-2 text-emerald-400">
            <FaChartLine className="text-xs" />
            <span className="text-sm font-semibold">
              Live
            </span>
          </div>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full"
            style={{
              width: `${score}%`,
              background: ring,
            }}
          />
        </div>

        <p className="mt-3 text-sm text-slate-400">
          AI continuously evaluates incoming events and updates the
          organization's overall security posture in real time.
        </p>
      </div>
    </motion.div>
  );
}

export default RiskGauge;