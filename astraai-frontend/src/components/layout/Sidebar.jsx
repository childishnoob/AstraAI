import { useEffect } from "react";
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
  {
    name: "Dashboard",
    icon: FaChartPie,
    type: "scroll",
    target: "dashboard",
  },
  {
    name: "Monitoring",
    icon: FaBroadcastTower,
    type: "scroll",
    target: "monitoring",
  },
  {
    name: "Threats",
    icon: FaBug,
    type: "scroll",
    target: "threats",
  },
  {
    name: "MITRE ATT&CK",
    icon: FaShieldAlt,
    type: "scroll",
    target: "mitre",
  },
  {
    name: "Timeline",
    icon: FaClock,
    type: "scroll",
    target: "timeline",
  },
  {
    name: "Reports",
    icon: FaFileAlt,
    type: "report",
  },
  {
    name: "Settings",
    icon: FaCog,
    type: "settings",
  },
];

function Sidebar({
  active,
  setActive,
  onOpenReports,
  onOpenSettings,
}) {

  const handleClick = (item) => {

    if (item.type === "scroll") {
      setActive(item.name);

      document.getElementById(item.target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      return;
    }

    if (item.type === "report") {
      onOpenReports?.();
      return;
    }

    if (item.type === "settings") {
      onOpenSettings?.();
      return;
    }
  };

  return (
    <aside className="sticky top-[82px] h-[calc(100vh-82px)] w-[285px] shrink-0 border-r border-white/5 bg-[#0B1220]">
      <div className="flex h-full flex-col overflow-y-auto">

        {/* Navigation */}

        <div className="px-6 pt-8">

          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.32em] text-slate-500">
            Navigation
          </p>

          <div className="space-y-2.5">

            {menu.map((item) => {
              const Icon = item.icon;

              const selected = active === item.name;

              return (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleClick(item)}
                  className={`group flex w-full items-center justify-between rounded-2xl px-3.5 py-3 transition-all duration-300 ${
                    selected
                      ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/20"
                      : "text-slate-300 hover:bg-[#111827] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                        selected
                          ? "bg-white/10"
                          : "bg-slate-800 group-hover:bg-slate-700"
                      }`}
                    >
                      <Icon className="text-base" />
                    </div>

                    <span className="text-[15px] font-semibold">
                      {item.name}
                    </span>

                  </div>

                  <FaChevronRight
                    className={`transition-all duration-300 ${
                      selected
                        ? "opacity-100"
                        : "translate-x-0 opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                    }`}
                  />

                </motion.button>
              );
            })}

          </div>

        </div>

        {/* AI Copilot */}

        <div className="mt-7 px-5">

          <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent p-4">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10">

                <FaRobot className="text-xl text-cyan-400" />

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

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">

              <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

            </div>

            <div className="mt-3 flex items-end justify-between">

              <div>

                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Confidence
                </p>

                <p className="text-3xl font-black text-cyan-400">
                  97%
                </p>

              </div>

              <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                ACTIVE
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-auto p-5">

          <div className="rounded-3xl border border-white/5 bg-[#111827] p-4">

            <p className="text-[11px] uppercase tracking-[0.28em] text-slate-500">
              System Status
            </p>

            <div className="mt-4 flex items-center gap-3">

              <FaCircle className="animate-pulse text-[9px] text-emerald-400" />

              <span className="font-semibold text-emerald-400">
                Monitoring Active
              </span>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">

              <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500" />

            </div>

            <div className="mt-4 flex items-center justify-between">

              <span className="text-sm text-slate-400">
                Services
              </span>

              <span className="font-bold text-white">
                12 / 12
              </span>

            </div>

          </div>

        </div>

      </div>
    </aside>
  );
}

export default Sidebar;