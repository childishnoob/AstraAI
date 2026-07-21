import { FaShieldAlt, FaTimes } from "react-icons/fa";

function AutonomousResponseModal({
  open,
  onClose,
  blockedIPs = [],
}) {
  if (!open) return null;

  return (
    <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-hidden"
    >

      <div className="w-[900px] max-h-[85vh] overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#0f172a] shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

          <div className="flex items-center gap-3">

            <FaShieldAlt className="text-2xl text-cyan-400" />

            <div>

              <h2 className="text-2xl font-bold text-white">
                Autonomous Response History
              </h2>

              <p className="text-sm text-slate-400">
                AI generated containment actions
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-700 hover:text-white"
          >
            <FaTimes />
          </button>

        </div>

        {/* Summary */}

        <div className="grid grid-cols-4 gap-4 border-b border-slate-700 bg-[#111827] p-5">

        <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
            Responses
            </p>

            <h3 className="mt-2 text-2xl font-bold text-cyan-300">
            {blockedIPs.length}
            </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
            Avg Response
            </p>

            <h3 className="mt-2 text-2xl font-bold text-yellow-300">
            0.42 s
            </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
            Success Rate
            </p>

            <h3 className="mt-2 text-2xl font-bold text-emerald-400">
            100%
            </h3>
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
            Last Response
            </p>

            <h3 className="mt-2 text-xl font-bold text-white">
            {blockedIPs.length
                ? blockedIPs[blockedIPs.length - 1].time
                : "--:--:--"}
            </h3>
        </div>

        </div>

        {/* Table */}

        <div
            className="max-h-[65vh] overflow-y-auto overscroll-contain"
        >

          <table className="w-full">

            <thead className="sticky top-0 bg-[#111827]">

              <tr className="border-b border-slate-700">

                <th className="px-5 py-4 text-left text-sm text-slate-300">
                  IP Address
                </th>

                <th className="px-5 py-4 text-left text-sm text-slate-300">
                  Attack
                </th>

                <th className="px-5 py-4 text-left text-sm text-slate-300">
                  AI Action
                </th>

                <th className="px-5 py-4 text-left text-sm text-slate-300">
                  Response Time
                </th>

                <th className="px-5 py-4 text-left text-sm text-slate-300">
                  Time
                </th>

              </tr>

            </thead>

            <tbody>

              {blockedIPs.length === 0 ? (

                <tr>

                  <td
                    colSpan={5}
                    className="py-16 text-center text-slate-500"
                  >
                    No autonomous responses yet.
                  </td>

                </tr>

              ) : (

                [...blockedIPs]
                  .reverse()
                  .map((item, index) => (

                    <tr
                      key={index}
                      className="border-b border-slate-800 transition hover:bg-slate-800/40"
                    >

                      <td className="px-5 py-4 font-mono text-cyan-300">
                        {item.ip}
                      </td>

                      <td className="px-5 py-4 text-white">
                        {item.attack}
                      </td>

                      <td className="px-5 py-4">

                        <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-400">
                          {item.status}
                        </span>

                      </td>

                      <td className="px-5 py-4 text-yellow-300">
                        {item.response_time}s
                      </td>

                      <td className="px-5 py-4 text-slate-400">
                        {item.time}
                      </td>

                    </tr>

                  ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AutonomousResponseModal;