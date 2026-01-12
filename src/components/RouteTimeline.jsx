import { CheckCircle, Clock, PauseCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function RouteTimeline({ steps, currentStatus }) {
  const currentIndex = steps.findIndex(
    (step) => step === currentStatus
  );

  return (
    <div className="mt-12">
      <h4 className="text-lg font-semibold mb-6 text-center">
        Shipment Progress
      </h4>

      <div className="relative border-l border-white/20 ml-4 space-y-6">
        {steps.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="relative pl-8"
            >
              {/* DOT */}
              <span
                className={`absolute left-[-7px] top-1.5 w-4 h-4 rounded-full ${
                  isCompleted
                    ? "bg-green-400"
                    : isCurrent
                    ? "bg-yellow-400 animate-pulse"
                    : "bg-white/30"
                }`}
              />

              <div
                className={`p-4 rounded-xl ${
                  isCurrent
                    ? "bg-yellow-500/10 border border-yellow-400/40"
                    : isCompleted
                    ? "bg-green-500/10"
                    : "bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2">
                  {isCompleted && (
                    <CheckCircle size={18} className="text-green-400" />
                  )}
                  {isCurrent && (
                    <PauseCircle size={18} className="text-yellow-400" />
                  )}
                  {!isCompleted && !isCurrent && (
                    <Clock size={18} className="text-white/40" />
                  )}

                  <p
                    className={`text-sm ${
                      isCompleted
                        ? "text-green-300"
                        : isCurrent
                        ? "text-yellow-300 font-semibold"
                        : "text-white/60"
                    }`}
                  >
                    {step}
                  </p>
                </div>

                {isCurrent && (
                  <p className="text-xs text-white/50 mt-1">
                    Shipment is currently at this location.
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
