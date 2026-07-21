import { motion } from "framer-motion";
import {
  FaCircle,
  FaShieldAlt,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";

const systems = [
  {
    name: "AI Engine",
    icon: <FaRobot />,
    color: "text-cyan-400",
  },
  {
    name: "Threat Database",
    icon: <FaDatabase />,
    color: "text-green-400",
  },
  {
    name: "SOC Monitoring",
    icon: <FaShieldAlt />,
    color: "text-purple-400",
  },
];

function SystemStatus() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#111827] p-5">

      <div className="mb-5 flex items-center justify-between">

        <h3 className="text-lg font-bold">
          System Status
        </h3>

        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="flex items-center gap-2 text-emerald-400"
        >
          <FaCircle className="text-xs" />
          LIVE
        </motion.div>

      </div>

      <div className="space-y-4">

        {systems.map((system) => (

          <div
            key={system.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div className={`${system.color} text-xl`}>
                {system.icon}
              </div>

              <span>{system.name}</span>

            </div>

            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
              ONLINE
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SystemStatus;