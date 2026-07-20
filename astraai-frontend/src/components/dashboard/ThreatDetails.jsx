import {
  FaBug,
  FaShieldAlt,
  FaServer,
  FaBrain,
  FaArrowRight,
  FaLocationArrow,
  FaClock,
  FaFingerprint,
} from "react-icons/fa";

function ThreatDetails() {
  return (
    <div className="rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Incident Analysis
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Threat Details
          </h2>
        </div>

        <div className="rounded-2xl bg-red-500/10 p-3">
          <FaBug className="text-xl text-red-400" />
        </div>
      </div>

      {/* Threat */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Threat Type
            </p>

            <h3 className="mt-2 text-2xl font-bold text-red-400">
              Brute Force Attack
            </h3>
          </div>

          <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
            Critical
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-800/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FaLocationArrow className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              Source IP
            </span>
          </div>

          <p className="font-mono text-lg text-cyan-400">
            192.168.1.44
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FaServer className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              Destination
            </span>
          </div>

          <p className="font-mono text-lg text-cyan-400">
            10.0.0.5
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FaFingerprint className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              MITRE
            </span>
          </div>

          <p className="font-semibold text-white">
            T1110 - Brute Force
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800/60 p-4">
          <div className="mb-2 flex items-center gap-2">
            <FaClock className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              Detected
            </span>
          </div>

          <p className="font-semibold text-white">
            2 Seconds Ago
          </p>
        </div>

      </div>

      {/* AI */}
      <div className="mt-5 rounded-2xl bg-slate-800/60 p-5">
        <div className="mb-3 flex items-center gap-2">
          <FaBrain className="text-cyan-400" />
          <span className="font-semibold text-white">
            AI Analysis
          </span>
        </div>

        <p className="leading-7 text-slate-300">
          The detection engine identified repeated authentication
          failures originating from a single endpoint within a short
          interval. Behavioral analysis classified the activity as a
          high-confidence brute-force attack targeting privileged
          credentials.
        </p>
      </div>

      {/* Response */}
      <div className="mt-5 rounded-2xl bg-slate-800/60 p-5">
        <div className="mb-4 flex items-center gap-2">
          <FaShieldAlt className="text-emerald-400" />
          <span className="font-semibold text-white">
            Recommended Response
          </span>
        </div>

        <div className="space-y-3">

          <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3">
            <FaArrowRight className="text-cyan-400" />
            <span className="text-slate-300">
              Block the attacking IP address immediately
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3">
            <FaArrowRight className="text-cyan-400" />
            <span className="text-slate-300">
              Force password reset and enable MFA
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3">
            <FaArrowRight className="text-cyan-400" />
            <span className="text-slate-300">
              Review authentication and audit logs
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ThreatDetails;