import { useEffect, useRef, useState } from "react";

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

import SystemStatusPopup from "../navbar/SystemStatusPopup";
import NotificationPopup from "../navbar/NotificationPopup";
import ProfilePopup from "../navbar/ProfilePopup";

import toast from "react-hot-toast";

function Navbar({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const [showStatus, setShowStatus] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const statusRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (
        statusRef.current &&
        !statusRef.current.contains(e.target)
      ) {
        setShowStatus(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClick
      );
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#08111f]/95 backdrop-blur-xl">
      <div className="flex h-[82px] items-center justify-between px-8">

        {/* LEFT */}

        <div className="flex w-[260px] items-center gap-4">

          <motion.div
            whileHover={{ rotate: 10, scale: 1.05 }}
            transition={{ duration: 0.25 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/25"
          >
            <FaShieldAlt className="text-xl text-white" />
          </motion.div>

          <div>

            <h1 className="text-2xl font-black tracking-tight text-white">
              AstraAI
            </h1>

            <p className="text-xs tracking-wide text-slate-400">
              Autonomous SOC Platform
            </p>

          </div>

        </div>

        {/* SEARCH */}

        <div className="mx-8 flex flex-1 justify-center">

          <div className="w-full max-w-[620px]">

            <div className="flex h-12 items-center rounded-2xl border border-slate-700 bg-[#111827] px-5 transition-all duration-300 focus-within:border-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500/20">

              <FaSearch className="text-slate-500" />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search IP, MITRE, Event, Severity..."
                className="ml-4 flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex w-[380px] items-center justify-end gap-3">

          <div className="hidden xl:flex items-center gap-3 rounded-2xl border border-slate-700 bg-[#111827] px-4 py-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
              <FaServer className="text-emerald-400" />
            </div>

            <div>

              <p className="text-[11px] uppercase tracking-wider text-slate-500">
                Backend
              </p>

              <p className="font-semibold text-emerald-400">
                Connected
              </p>

            </div>

          </div>

          {/* WIFI */}

          <div
            className="relative"
            ref={statusRef}
          >

            <button
              onClick={() => {
                setShowStatus(!showStatus);
                setShowNotifications(false);
                setShowProfile(false);
              }}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] hover:bg-slate-800"
            >

              <FaWifi className="text-cyan-400" />

            </button>

            <SystemStatusPopup open={showStatus} />

          </div>

          {/* THEME */}

          <button
            onClick={() =>
            toast.success("Enterprise Dark Theme Active", {
              id: "theme-toast",
              duration: 2000,
            })
          }
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] hover:bg-slate-800"
          >

            <FaMoon className="text-yellow-400" />

          </button>

          {/* NOTIFICATIONS */}

          <div
            className="relative"
            ref={notificationRef}
          >

            <button
              onClick={() => {
                setShowNotifications(
                  !showNotifications
                );

                setShowStatus(false);
                setShowProfile(false);
              }}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#111827] hover:bg-slate-800"
            >

              <FaBell className="text-slate-300" />

              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-[#111827]" />

            </button>

            <NotificationPopup
              open={showNotifications}
            />

          </div>

          {/* LIVE */}

          <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />

            <span className="text-sm font-semibold text-emerald-400">
              LIVE
            </span>

          </div>

          {/* PROFILE */}

          <div
            className="relative"
            ref={profileRef}
          >

            <button
              onClick={() => {
                setShowProfile(!showProfile);
                setShowStatus(false);
                setShowNotifications(false);
              }}
              className="transition hover:scale-105"
            >

              <FaUserCircle className="text-[42px] text-slate-300 hover:text-white" />

            </button>

            <ProfilePopup open={showProfile} />

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;