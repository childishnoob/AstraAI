import {
  FaBell,
  FaSearch,
  FaShieldAlt,
  FaUserCircle,
  FaServer,
  FaWifi,
  FaMoon,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-24 border-b border-slate-800 bg-[#08111f]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-full items-center justify-between px-8">

        {/* Left */}
        <div className="flex items-center gap-4 min-w-[260px]">

          <motion.div
            whileHover={{ rotate: 8, scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/30"
          >
            <FaShieldAlt className="text-2xl text-white" />
          </motion.div>

          <div>
            <h1 className="text-3xl font-black tracking-tight text-white">
              AstraAI
            </h1>

            <p className="text-sm text-slate-400">
              Autonomous SOC Platform
            </p>
          </div>

        </div>

        {/* Search */}
        <div className="hidden xl:flex flex-1 justify-center px-10">

          <div className="relative w-full max-w-3xl">

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              placeholder="Search IP • CVE • MITRE • User • Process • Threat..."
              className="h-14 w-full rounded-2xl border border-slate-700 bg-[#111827] pl-14 pr-5 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10"
            />

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Backend Status */}
          <div className="hidden lg:flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#111827] px-4 py-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <FaServer className="text-emerald-400" />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Backend
              </p>

              <p className="text-sm font-semibold text-emerald-400">
                Connected
              </p>
            </div>

          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] transition hover:bg-slate-800">
            <FaWifi className="text-cyan-400" />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] transition hover:bg-slate-800">
            <FaMoon className="text-yellow-400" />
          </button>

          <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] transition hover:bg-slate-800">

            <FaBell className="text-slate-300" />

            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              3
            </span>

          </button>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>

            <span className="text-sm font-semibold text-emerald-400">
              LIVE
            </span>

          </div>

          <button className="transition hover:scale-105">
            <FaUserCircle className="text-[44px] text-slate-300 hover:text-white" />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;