// src/components/WorldMap.jsx
import { motion } from "framer-motion";
import { Plane } from "lucide-react";

/* Convert latitude/longitude to SVG coordinates (equirectangular) */
const project = (lat, lng, width, height) => {
  const x = (lng + 180) * (width / 360);
  const y = (90 - lat) * (height / 180);
  return { x, y };
};

export default function WorldMap({ route, progress }) {
  if (!route?.from || !route?.to) return null;

  const width = 800;
  const height = 400;

  // Origin: South Korea (ICN)
  const from = project(route.from.lat, route.from.lng, width, height);

  // Destination: Iowa, USA (DSM)
  const to = project(route.to.lat, route.to.lng, width, height);

  // 🔢 Clamp progress safely between 0–100
  const safeProgress = Math.min(Math.max(progress ?? 0, 0), 100) / 100;

  // ✈️ Plane position strictly based on progress
  const planeX = from.x + (to.x - from.x) * safeProgress;
  const planeY = from.y + (to.y - from.y) * safeProgress;

  return (
    <div className="w-full overflow-hidden rounded-xl bg-[#0b1d2d] p-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {/* World Map Background */}
        <image
          href={`${import.meta.env.BASE_URL}world.svg`}
          x="0"
          y="0"
          width={width}
          height={height}
          opacity="0.25"
        />

        {/* Route Line: South Korea → Iowa */}
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="#22c55e"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* Origin Pin (South Korea) */}
        <circle cx={from.x} cy={from.y} r="5" fill="#3b82f6" />

        {/* Destination Pin (Iowa) */}
        <circle cx={to.x} cy={to.y} r="5" fill="#22c55e" />

        {/* Plane – position synced with shipment.percent */}
        <motion.g
          animate={{ x: planeX - 10, y: planeY - 10 }}
          transition={{ duration: 0.4, ease: "linear" }}
        >
          <Plane size={20} color="white" />
        </motion.g>
      </svg>
    </div>
  );
}
