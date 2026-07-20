import { FaCircle, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

function getSeverityStyle(severity) {
  switch (severity) {
    case "Critical":
      return {
        badge: "bg-red-500/10 text-red-400 border-red-500/20",
        bar: "#EF4444",
      };

    case "High":
      return {
        badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
        bar: "#F97316",
      };

    case "Medium":
      return {
        badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        bar: "#F59E0B",
      };

    default:
      return {
        badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        bar: "#10B981",
      };
  }
}

function LogTable({ logs }) {
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
            Monitoring
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Live Security Logs
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-slate-800 p-3">
            <FaDatabase className="text-cyan-400 text-xl" />
          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">
            <FaCircle className="animate-pulse text-[8px] text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">
              LIVE
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/5">
        <table className="w-full">
          <thead className="bg-slate-800/70">
            <tr className="text-left text-xs uppercase tracking-[0.2em] text-slate-400">
              <th className="px-6 py-4">Severity</th>
              <th className="px-6 py-4">Source IP</th>
              <th className="px-6 py-4">Event</th>
              <th className="px-6 py-4">AI Confidence</th>
            </tr>
          </thead>

          <tbody>
            {logs.slice(0, 8).map((log, index) => {
              const style = getSeverityStyle(log.severity);

              return (
                <tr
                  key={index}
                  className="border-t border-white/5 transition-all duration-200 hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-bold ${style.badge}`}
                    >
                      {log.severity}
                    </span>
                  </td>

                  <td className="px-6 py-5 font-mono text-cyan-400">
                    {log.source_ip}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {log.event}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="h-2 w-36 overflow-hidden rounded-full bg-slate-700">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${log.ai_confidence}%`,
                            background: style.bar,
                          }}
                        />
                      </div>

                      <span className="min-w-[45px] font-bold text-cyan-400">
                        {log.ai_confidence}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-800/60 px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Displaying
          </p>

          <p className="font-semibold text-white">
            {Math.min(logs.length, 8)} Recent Events
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Total Logs
          </p>

          <p className="font-bold text-cyan-400">
            {logs.length}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default LogTable;