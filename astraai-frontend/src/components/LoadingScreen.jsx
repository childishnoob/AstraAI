import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const steps = [
  "Initializing AI Engine",
  "Loading Threat Intelligence",
  "Connecting Backend Services",
  "Loading MITRE ATT&CK Framework",
  "Starting Isolation Forest",
  "Loading Detection Models",
  "Initializing AI Copilot",
  "Verifying Security Modules",
  "Autonomous SOC Ready",
];

function LoadingScreen() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= steps.length) return;

    const timer = setTimeout(() => {
      setCurrent((prev) => prev + 1);
    }, 280);

    return () => clearTimeout(timer);
  }, [current]);

  const progress = Math.min(
    (current / steps.length) * 100,
    100
  );

  return (
    <div className="flex h-screen items-center justify-center bg-[#08111f]">

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        className="w-[760px] rounded-3xl border border-cyan-500/20 bg-[#0f172a] p-10 shadow-2xl shadow-cyan-500/10"
      >

        {/* Header */}

        <div className="mb-8 flex items-center gap-5">

          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600"
          >
            <FaShieldAlt className="text-4xl text-white" />
          </motion.div>

          <div>

            <h1 className="text-5xl font-black">
              AstraAI
            </h1>

            <p className="mt-2 text-slate-400">
              Autonomous Security Operations Center
            </p>

          </div>

        </div>

        <div className="mb-8 h-px bg-slate-700" />

        {/* Boot Steps */}

        <div className="space-y-3">

          {steps.map((step, index) => {

            const done = index < current;
            const active = index === current;

            return (

              <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    done || active
                      ? 1
                      : 0.25,
                }}
                className="flex items-center justify-between rounded-xl px-3 py-2"
              >

                <div className="flex items-center gap-4">

                  {done ? (
                    <FaCheckCircle className="text-emerald-400" />
                  ) : active ? (
                    <FaSpinner className="animate-spin text-cyan-400" />
                  ) : (
                    <div className="h-4 w-4 rounded-full border border-slate-600" />
                  )}

                  <span
                    className={`${
                      done || active
                        ? "text-white"
                        : "text-slate-500"
                    }`}
                  >
                    {step}
                  </span>

                </div>

                <span
                  className={`text-sm font-semibold ${
                    done
                      ? "text-emerald-400"
                      : active
                      ? "text-cyan-400"
                      : "text-slate-600"
                  }`}
                >
                  {done
                    ? "ONLINE"
                    : active
                    ? "LOADING..."
                    : "WAITING"}
                </span>

              </motion.div>

            );

          })}

        </div>

        {/* Progress */}

        <div className="mt-10">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-slate-400">
              System Initialization
            </span>

            <span className="font-bold text-cyan-400">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.25,
              }}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"
            />

          </div>

        </div>

        {/* Footer */}

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="mt-8 flex justify-between text-sm tracking-[0.2em] text-cyan-400"
        >

          <span>SECURE BOOT ENABLED</span>

          <span>v2.0.1</span>

        </motion.div>

      </motion.div>

    </div>
  );
}

export default LoadingScreen;