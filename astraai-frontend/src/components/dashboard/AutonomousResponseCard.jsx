import { useMemo, useState } from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import AutonomousResponseModal from "../modals/AutonomousResponseModal";

function AutonomousResponseCard({ blockedIPs = [] }) {
  const [open, setOpen] = useState(false);

  const stats = useMemo(() => {
    const total = blockedIPs.length;

    const latest =
      total > 0
        ? blockedIPs[blockedIPs.length - 1]
        : null;

    const avg =
      total > 0
        ? (
            blockedIPs.reduce(
              (sum, item) =>
                sum + parseFloat(item.response_time || 0),
              0
            ) / total
          ).toFixed(2)
        : "0.00";

    return {
      total,
      latest,
      avg,
    };
  }, [blockedIPs]);

  return (
    <>
      <div className="col-span-1 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-[#111827] to-[#0f172a] p-6 shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-cyan-500/10">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-cyan-500/10 p-3">
              <FaShieldAlt className="text-2xl text-cyan-400" />
            </div>

            <div>

              <h3 className="text-lg font-bold tracking-wide">
                Autonomous Response
              </h3>

              <p className="text-xs uppercase tracking-widest text-slate-500">
                AI Defense Engine
              </p>

            </div>

          </div>

          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>

            <span className="text-xs font-semibold text-emerald-400">
              Operational
            </span>

          </div>

        </div>

        {/* Metrics */}

        <div className="mt-7 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-slate-800/60 p-4">

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Responses
            </p>

            <h2 className="mt-2 text-3xl font-black text-cyan-300">
              {stats.total}
            </h2>

          </div>

          <div className="rounded-xl bg-slate-800/60 p-4">

            <p className="text-xs uppercase tracking-wider text-slate-400">
              Avg Response
            </p>

            <h2 className="mt-2 flex items-center gap-2 text-3xl font-black text-yellow-300">
              <FaBolt className="text-lg" />
              {stats.avg}s
            </h2>

          </div>

        </div>

        {/* Latest Info */}

        <div className="mt-6 space-y-4">

          <div>

            <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
              Latest Blocked IP
            </p>

            <div className="flex items-center gap-2 font-semibold text-cyan-300">

              <FaGlobe />

              <span className="break-all">
                {stats.latest?.ip || "-"}
              </span>

            </div>

          </div>

          <div>

            <p className="mb-1 text-xs uppercase tracking-wider text-slate-500">
              Latest AI Action
            </p>

            <div className="flex items-center gap-2 font-semibold text-emerald-400">

              <FaCheckCircle />

              <span>
                {stats.latest?.status || "-"}
              </span>

            </div>

          </div>

        </div>

        {/* Button */}

        <button
          onClick={() => setOpen(true)}
          className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-600 py-3 font-semibold transition-all duration-300 hover:bg-cyan-500"
        >

          View Response History

          <FaArrowRight />

        </button>

      </div>

      <AutonomousResponseModal
        open={open}
        onClose={() => setOpen(false)}
        blockedIPs={blockedIPs}
      />
    </>
  );
}

export default AutonomousResponseCard;