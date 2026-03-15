import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plane, AlertTriangle, MapPin, Clock } from "lucide-react";
import { getTrackingData } from "../database";
import WorldMap from "../components/WorldMap";
import RouteTimeline from "../components/RouteTimeline";
import ImagePreview from "../components/ImagePreview";
import NotFoundPage from "./NotFoundPage";

const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col items-center justify-center py-10"
  >
    <div className="w-14 h-14 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    <p className="mt-4 text-white/80 font-medium">
      Fetching shipment details…
    </p>
  </motion.div>
);

export default function Tracking() {
  const [trackingId, setTrackingId] = useState("");
  const [shipment, setShipment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasTracked, setHasTracked] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const [countdown, setCountdown] = useState("");

  const handleTrack = () => {
    if (!trackingId.trim()) return;

    setHasTracked(true);
    setLoading(true);
    setShipment(null);
    setNotFound(false);

    setTimeout(() => {
      const data = getTrackingData(trackingId.trim().toUpperCase());

      if (!data) {
        setNotFound(true);
      } else {
        setShipment(data);
      }

      setLoading(false);
    }, 1200);
  };

  const resetSearch = () => {
    setTrackingId("");
    setShipment(null);
    setHasTracked(false);
    setNotFound(false);
  };

  /* Delivery countdown */
  useEffect(() => {
    if (!shipment?.deliveryDate) return;

    const timer = setInterval(() => {
      const now = new Date();
      const delivery = new Date(shipment.deliveryDate);
      const diff = delivery - now;

      if (diff <= 0) {
        setCountdown("Arriving today");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

      setCountdown(`${days}d ${hours}h remaining`);
    }, 1000);

    return () => clearInterval(timer);
  }, [shipment]);

  const currentStop =
    shipment?.routeTimeline?.air?.find(
      (step) => step.status === shipment.currentStatus
    )?.location || shipment?.origin;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-6 pt-28 pb-12"
      style={{
        backgroundImage: `url("${import.meta.env.BASE_URL}cargo.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-8 w-full max-w-3xl text-white">

        <h2 className="text-3xl font-bold text-center mb-6">
          Track Your Shipment
        </h2>

        {/* Search */}
        <div className="flex gap-3 mb-8">
          <input
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleTrack();
            }}
            placeholder="Enter Tracking ID"
            className="w-full border rounded-lg px-4 py-2 text-black"
          />

          <button
            onClick={handleTrack}
            className="bg-blue-700 px-6 rounded-lg hover:bg-blue-800 transition"
          >
            Track
          </button>
        </div>

        {loading && <LoadingSpinner />}

        {!loading && hasTracked && notFound && (
          <NotFoundPage
            trackingId={trackingId.toUpperCase()}
            onRetry={resetSearch}
          />
        )}

        {!loading && hasTracked && shipment && (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Shipment Details ({shipment.id})
            </h3>

            <p><b>Carrier:</b> {shipment.carrier}</p>
            <p><b>Route:</b> {shipment.origin} → {shipment.destination}</p>

            <p className="mb-2">
              <b>Status:</b>{" "}
              <span className="text-blue-300">{shipment.currentStatus}</span>
            </p>

            {/* Current location */}
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <MapPin size={16} />
              Current checkpoint: {currentStop}
            </div>

            {/* Delivery countdown */}
            {countdown && (
              <div className="flex items-center gap-2 text-sm text-green-300 mb-6">
                <Clock size={16} />
                Estimated delivery: {countdown}
              </div>
            )}

            {/* Package Images */}
            {shipment.images?.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">
                  Package Contents
                </h3>

                <div className="flex gap-4 overflow-x-auto pb-2">
                  {shipment.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      onClick={() => setPreviewImage(img)}
                      whileHover={{ scale: 1.05 }}
                      className="h-40 min-w-[150px] rounded-xl cursor-pointer object-cover shadow-lg border border-white/10"
                    />
                  ))}
                </div>
              </div>
            )}

            <ImagePreview
              src={previewImage}
              onClose={() => setPreviewImage(null)}
            />

            {/* Timeline */}
            {shipment.routeTimeline?.air && (
              <RouteTimeline
                steps={shipment.routeTimeline.air}
                currentStatus={shipment.currentStatus}
              />
            )}

            {/* World Map Route */}
            {shipment.route && (
              <div className="my-8">
                <h4 className="text-lg font-semibold mb-3 text-center">
                  Shipment Route
                </h4>

                <WorldMap
                  route={shipment.route}
                  progress={shipment.percent}
                />
              </div>
            )}

            {/* Delivery progress */}
            <div className="relative h-6 bg-gray-300/40 rounded-full overflow-hidden mt-6">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${shipment.percent}%` }}
                transition={{ duration: 1.4 }}
                className="h-6 rounded-full bg-gradient-to-r from-green-400 to-green-600"
              />

              <motion.div
                animate={{ x: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute top-1/4"
                style={{
                  left: `${shipment.percent}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Plane size={20} />
              </motion.div>

            </div>

            <p className="text-center mt-4 font-semibold">
              {shipment.percent}% Delivering
            </p>

            {/* HOLD NOTICE */}
            {shipment.percent >= shipment.pausedAtPercent && (
              <div className="mt-6 bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-5">

                <div className="flex items-center gap-2 mb-3 text-yellow-300">
                  <AlertTriangle size={18} />
                  <h4 className="font-semibold text-sm">
                    Shipment On Hold
                  </h4>
                </div>

                <ul className="list-disc list-inside space-y-2 text-sm text-white/85">
                  {shipment.pausedReason.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>

              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}