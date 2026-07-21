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
        y: -4,
        scale: 1.015,
      }}
      transition={{ duration: 0.2 }}
      className="
        relative
        h-[170px]
        overflow-hidden
        rounded-2xl
        border
        border-slate-700/60
        bg-gradient-to-br
        from-[#121d2d]
        via-[#0f1727]
        to-[#0b1220]
        px-6
        py-6
        shadow-lg
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-cyan-500/20
      "
    >
      {/* Glow */}

      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Top */}

      <div className="relative flex items-start justify-between">

        <div>

          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <h2 className={`mt-3 text-4xl font-black leading-none ${color}`}>
            {value}
          </h2>

        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-700
            bg-slate-800/80
            text-[30px]
            shadow-inner
          "
        >
          {icon}
        </div>

      </div>

      {/* Bottom */}

      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          {subtitle}
        </span>

        <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">

          <FaArrowTrendUp className="text-[10px] text-emerald-400" />

          <span className="text-[11px] font-semibold text-emerald-400">
            Stable
          </span>

        </div>

      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500" />

    </motion.div>
  );
}

export default StatusCard;