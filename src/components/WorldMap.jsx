import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker
} from "react-simple-maps";

import { motion } from "framer-motion";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function WorldMap({ route = [], progress = 0 }) {

  if (!route.length) return null;

  const totalSegments = route.length - 1;

  const segmentProgress = progress / 100 * totalSegments;

  const segmentIndex = Math.floor(segmentProgress);

  const segmentFraction = segmentProgress - segmentIndex;

  const start = route[segmentIndex];
  const end = route[Math.min(segmentIndex + 1, totalSegments)];

  const planePosition = [
    start[0] + (end[0] - start[0]) * segmentFraction,
    start[1] + (end[1] - start[1]) * segmentFraction
  ];

  return (
    <div className="w-full h-[440px] bg-white/5 rounded-xl p-4">

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 20]
        }}
        className="w-full h-full"
      >

        {/* WORLD */}
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1f2937"
                stroke="#374151"
                strokeWidth={0.3}
                style={{
                  default: { outline: "none" },
                  hover: { fill: "#374151", outline: "none" }
                }}
              />
            ))
          }
        </Geographies>

        {/* ROUTE SEGMENTS */}
        {route.map((point, i) => {

          if (i === route.length - 1) return null;

          return (
            <Line
              key={i}
              from={route[i]}
              to={route[i + 1]}
              stroke="#3b82f6"
              strokeWidth={2}
              strokeLinecap="round"
            />
          );
        })}

        {/* HUB MARKERS */}
        {route.map((coord, i) => (
          <Marker key={i} coordinates={coord}>

            <circle
              r={5}
              fill={i === 0 ? "#22c55e" : i === route.length - 1 ? "#ef4444" : "#f59e0b"}
            />

          </Marker>
        ))}

        {/* AIRPLANE */}
        <Marker coordinates={planePosition}>
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <text
              y="6"
              fontSize="18"
              textAnchor="middle"
              style={{ userSelect: "none" }}
            >
              ✈
            </text>
          </motion.g>
        </Marker>

      </ComposableMap>

    </div>
  );
}