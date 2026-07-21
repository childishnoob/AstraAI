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
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="rounded-2xl border border-slate-700/60 bg-[#111827] p-5 shadow-xl"
    >
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">

        <div>

          <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500">
            Monitoring
          </p>

          <h2 className="mt-1 text-xl font-bold">
            Live Security Logs
          </h2>

        </div>

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">

            <FaDatabase className="text-cyan-400" />

          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <FaCircle className="animate-pulse text-[8px] text-emerald-400" />

            <span className="text-xs font-semibold text-emerald-400">
              LIVE
            </span>

          </div>

        </div>

      </div>

      {/* Table */}

      <div className="h-[390px] overflow-x-auto overflow-y-auto rounded-xl border border-slate-700">

        <table className="w-full">

          <thead className="sticky top-0 z-20 bg-[#182335] backdrop-blur">

            <tr className="text-left text-[11px] uppercase tracking-[0.28em] text-slate-400">

              <th className="px-5 py-4">
                Severity
              </th>

              <th className="px-5 py-4">
                Source IP
              </th>

              <th className="px-5 py-4">
                Event
              </th>

              <th className="px-5 py-4">
                AI Confidence
              </th>

            </tr>

          </thead>

          <tbody>

            {logs.length > 0 ? (
              logs.map((log, index) => {
                const style = getSeverityStyle(log.severity);

                return (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-slate-700/40 transition hover:bg-cyan-500/5"
                  >
                    <td className="px-5 py-3.5">

                      <span
                        className={`rounded-full border px-3 py-1 text-xs font-bold ${style.badge}`}
                      >
                        {log.severity}
                      </span>

                    </td>

                    <td className="px-5 py-3.5 font-mono text-cyan-400">
                      {log.source_ip}
                    </td>

                    <td className="px-5 py-3.5 text-slate-300">
                      {log.event}
                    </td>

                    <td className="px-5 py-3.5">

                      <div className="flex items-center gap-3">

                        <div className="h-2 w-36 overflow-hidden rounded-full bg-slate-700">

                          <motion.div
                            initial={{ width: 0 }}
                            animate={{
                              width: `${log.ai_confidence}%`,
                            }}
                            transition={{ duration: 0.7 }}
                            className="h-full rounded-full"
                            style={{
                              background: style.bar,
                            }}
                          />

                        </div>

                        <span className="w-12 text-right text-sm font-bold text-cyan-400">

                          {log.ai_confidence}%

                        </span>

                      </div>

                    </td>

                  </motion.tr>
                );
              })
            ) : (
              <tr>

                <td
                  colSpan={4}
                  className="py-14 text-center text-slate-500"
                >
                  No matching logs found.
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-4">

        <div>

          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Displaying
          </p>

          <p className="font-semibold">
            {logs.length} Live Events
          </p>

        </div>

        <div className="text-right">

          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Refresh Rate
          </p>

          <p className="font-semibold text-emerald-400">
            Every 3 sec
          </p>

        </div>

      </div>

    </motion.div>
  );
}

export default LogTable;