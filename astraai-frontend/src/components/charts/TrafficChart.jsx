import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

import { motion } from "framer-motion";
import { FaChartLine } from "react-icons/fa";

const data = [
  { time: "10:00", traffic: 220 },
  { time: "11:00", traffic: 350 },
  { time: "12:00", traffic: 480 },
  { time: "13:00", traffic: 390 },
  { time: "14:00", traffic: 610 },
  { time: "15:00", traffic: 520 },
];

function TrafficChart() {
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

          <h2 className="mt-1 text-2xl font-bold text-white">
            Network Traffic
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-800 p-3">
          <FaChartLine className="text-cyan-400 text-xl" />
        </div>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trafficFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="time"
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94A3B8"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #1e293b",
                borderRadius: 12,
                color: "#fff",
              }}
              cursor={{
                stroke: "#06B6D4",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="traffic"
              fill="url(#trafficFill)"
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="traffic"
              stroke="#06B6D4"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#06B6D4",
                stroke: "#fff",
                strokeWidth: 2,
              }}
              activeDot={{
                r: 8,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-800/60 px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Peak Traffic
          </p>
          <p className="mt-1 text-xl font-bold text-cyan-400">
            610 Mbps
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wider text-slate-500">
            Status
          </p>
          <p className="mt-1 font-semibold text-emerald-400">
            Stable
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default TrafficChart;