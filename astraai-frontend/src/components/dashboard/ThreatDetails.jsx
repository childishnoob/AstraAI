import {
  FaBug,
  FaShieldAlt,
  FaServer,
  FaBrain,
  FaArrowRight,
  FaLocationArrow,
  FaClock,
  FaFingerprint,
  FaCheckCircle,
} from "react-icons/fa";

function ThreatDetails({ threat }) {
  if (!threat) {
    return (
      <div className="rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl flex items-center justify-center text-slate-400">
        Waiting for threat intelligence...
      </div>
    );
  }

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
              {threat.attack_type}
            </h3>

          </div>

          <span className="rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-400">
            {threat.severity}
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
            {threat.source_ip}
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
            {threat.destination_ip}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800/60 p-4">

          <div className="mb-2 flex items-center gap-2">
            <FaFingerprint className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              MITRE ATT&CK
            </span>
          </div>

          <p className="font-semibold text-white">
            {threat.mitre_id} • {threat.mitre_name}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800/60 p-4">

          <div className="mb-2 flex items-center gap-2">
            <FaClock className="text-cyan-400" />
            <span className="text-sm text-slate-400">
              AI Confidence
            </span>
          </div>

          <p className="font-semibold text-emerald-400">
            {threat.ai_confidence}%
          </p>

        </div>

      </div>

      {/* AI Summary */}

      <div className="mt-5 rounded-2xl bg-slate-800/60 p-5">

        <div className="mb-3 flex items-center gap-2">
          <FaBrain className="text-cyan-400" />
          <span className="font-semibold text-white">
            AI Analysis
          </span>
        </div>

        <p className="leading-7 text-slate-300">
          {threat.summary}
        </p>

      </div>

      {/* Recommendations */}

      <div className="mt-5 rounded-2xl bg-slate-800/60 p-5">

        <div className="mb-4 flex items-center gap-2">
          <FaShieldAlt className="text-emerald-400" />
          <span className="font-semibold text-white">
            AI Recommended Response
          </span>
        </div>

        <div className="space-y-3">

          {(threat.actions || []).map((action, index) => (

            <div
              key={index}
              className="flex items-center gap-3 rounded-xl bg-slate-900/60 p-3"
            >

              <FaArrowRight className="text-cyan-400" />

              <span className="text-slate-300">
                {action}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Status */}

      <div className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

        <FaCheckCircle className="text-xl text-emerald-400" />

        <div>

          <p className="font-semibold text-emerald-400">
            Incident Status
          </p>

          <p className="text-sm text-slate-300">
            Autonomous response executed successfully.
          </p>

        </div>

      </div>

    </div>
  );
}

export default ThreatDetails;