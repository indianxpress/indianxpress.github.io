import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage({ trackingId, onRetry }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center text-white py-12"
    >
      <div className="flex justify-center mb-4 text-yellow-400">
        <AlertTriangle size={48} />
      </div>

      <h2 className="text-2xl font-bold mb-3">
        Shipment Not Available
      </h2>

      <p className="text-white/80 mb-4 leading-relaxed">
        The tracking ID{" "}
        <span className="font-semibold text-yellow-300">
          {trackingId}
        </span>{" "}
        could not be found in our system at this time.
      </p>

      <p className="text-white/70 text-sm mb-6 leading-relaxed">
        This may occur if the shipment has not yet been registered in our
        servers, the tracking ID was entered incorrectly, or the shipment
        information is still being synchronized. Please verify the tracking
        ID and try again shortly.
      </p>

      <button
        onClick={onRetry}
        className="bg-blue-700 px-6 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
      >
        Try Again
      </button>
    </motion.div>
  );
}
