import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

function StatusCard({
  title,
  value,
  color,
  icon,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/10"
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl transition group-hover:bg-cyan-500/20"></div>

      <div className="relative">

        {/* Top */}
        <div className="flex items-start justify-between">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {title}
            </p>

            <h2 className={`mt-4 text-5xl font-black ${color}`}>
              {value}
            </h2>

          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-700">

            <div className="text-3xl">
              {icon}
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            {subtitle}
          </span>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

            <FaArrowTrendUp className="text-xs text-emerald-400" />

            <span className="text-xs font-semibold text-emerald-400">
              +8%
            </span>

          </div>

        </div>

      </div>

      {/* Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>

    </motion.div>
  );
}

export default StatusCard;