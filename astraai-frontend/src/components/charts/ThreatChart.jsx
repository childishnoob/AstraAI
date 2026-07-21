import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

const COLORS = [
  "#3B82F6",
  "#EF4444",
  "#F59E0B",
  "#10B981",
  "#8B5CF6",
];

function ThreatChart({ threats = [] }) {
  const counts = {};

  threats.forEach((t) => {
    counts[t.attack_type] = (counts[t.attack_type] || 0) + 1;
  });

  const data = Object.keys(counts).map((key) => ({
    name: key,
    value: counts[key],
  }));

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-white/5 bg-[#111827] p-6 shadow-xl"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Analytics
          </p>

          <h2 className="mt-1 pl-1 text-2xl font-bold text-white">
            Threat Distribution
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaShieldAlt className="text-cyan-400 text-xl" />
        </div>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={4}
              stroke="none"
              animationDuration={900}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "none",
                borderRadius: 12,
                color: "#fff",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-slate-800/70 px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: COLORS[index % COLORS.length],
                }}
              />

              <span className="text-sm text-slate-300">
                {item.name}
              </span>
            </div>

            <span className="font-bold text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default ThreatChart;   