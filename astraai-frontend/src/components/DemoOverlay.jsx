import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const steps = [
  "Injecting Simulated Threat",
  "Generating Network Traffic",
  "Running AI Detection",
  "Mapping MITRE ATT&CK",
  "Calculating Risk Score",
  "Deploying Autonomous Response",
];

function DemoOverlay({ step }) {
  return (
    <AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#08111f]/95 backdrop-blur-md"
      >

        <motion.div
          initial={{ scale: .96 }}
          animate={{ scale: 1 }}
          className="w-[720px] rounded-3xl border border-cyan-500/20 bg-[#111827] p-10 shadow-2xl"
        >

          <h1 className="mb-2 text-4xl font-black">
            AstraAI
          </h1>

          <p className="mb-8 text-slate-400">
            Autonomous Response Demonstration
          </p>

          <div className="space-y-4">

            {steps.map((item,index)=>{

              const done=index<step;
              const active=index===step;

              return(

                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl bg-slate-900/50 px-5 py-4"
                >

                  <div className="flex items-center gap-4">

                    {done ? (
                      <FaCheckCircle className="text-emerald-400"/>
                    ) : active ? (
                      <FaSpinner className="animate-spin text-cyan-400"/>
                    ) : (
                      <div className="h-4 w-4 rounded-full border border-slate-600"/>
                    )}

                    <span>{item}</span>

                  </div>

                  <span
                    className={`font-semibold ${
                      done
                        ? "text-emerald-400"
                        : active
                        ? "text-cyan-400"
                        : "text-slate-500"
                    }`}
                  >
                    {done
                      ? "COMPLETE"
                      : active
                      ? "RUNNING"
                      : "WAITING"}
                  </span>

                </div>

              );

            })}

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default DemoOverlay;