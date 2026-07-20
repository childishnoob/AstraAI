import {
  FaChartPie,
  FaBroadcastTower,
  FaBug,
  FaShieldAlt,
  FaClock,
  FaFileAlt,
  FaCog,
  FaChevronRight,
  FaCircle,
  FaRobot,
} from "react-icons/fa";

import { motion } from "framer-motion";

const menu = [
  { name: "Dashboard", icon: FaChartPie },
  { name: "Monitoring", icon: FaBroadcastTower },
  { name: "Threats", icon: FaBug },
  { name: "MITRE ATT&CK", icon: FaShieldAlt },
  { name: "Timeline", icon: FaClock },
  { name: "Reports", icon: FaFileAlt },
  { name: "Settings", icon: FaCog },
];

function Sidebar() {
  return (
    <aside className="w-[270px] shrink-0 border-r border-white/5 bg-[#0B1220]">
      <div className="flex h-full flex-col">

        {/* Navigation */}
        <div className="px-6 pt-8">

          <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
            Navigation
          </p>

          <div className="space-y-3">
            {menu.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  whileHover={{ x: 6 }}
                  key={item.name}
                  className={`group flex w-full items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
                    index === 0
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                      : "text-slate-300 hover:bg-[#111827] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        index === 0
                          ? "bg-white/10"
                          : "bg-slate-800 group-hover:bg-slate-700"
                      }`}
                    >
                      <Icon className="text-lg" />
                    </div>

                    <span className="font-semibold">
                      {item.name}
                    </span>

                  </div>

                  <FaChevronRight
                    className={`transition-all ${
                      index === 0
                        ? "opacity-100"
                        : "opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* AI Copilot */}
        <div className="mt-8 px-6">
          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                <FaRobot className="text-2xl text-cyan-400" />
              </div>

              <div>
                <p className="font-bold text-white">
                  AI Copilot
                </p>

                <p className="text-xs text-slate-400">
                  Isolation Forest v2
                </p>
              </div>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">
              <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
            </div>

            <p className="mt-3 text-sm text-slate-400">
              AI Confidence
            </p>

            <p className="text-3xl font-black text-cyan-400">
              97%
            </p>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto p-6">

          <div className="rounded-3xl border border-white/5 bg-[#111827] p-5">

            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              System Status
            </p>

            <div className="mt-5 flex items-center gap-3">

              <FaCircle className="animate-pulse text-[10px] text-emerald-400" />

              <span className="font-semibold text-emerald-400">
                Monitoring Active
              </span>

            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-700">

              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-sm text-slate-400">
                Services
              </span>

              <span className="font-bold text-white">
                12/12
              </span>

            </div>

          </div>

        </div>

      </div>
    </aside>
  );
}

export default Sidebar;