import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  Truck,
  Package,
  Clock,
  MapPin,
} from "lucide-react";

export default function Services() {
  return (
    <section className="relative min-h-screen px-6 pt-28 pb-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900">
      <div className="max-w-6xl w-full text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            End-to-end logistics solutions built for speed, security, and
            real-time visibility across global supply chains.
          </p>
        </motion.div>

        {/* Core Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Air Freight */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Plane className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
            <p className="text-white/80 text-sm">
              Fast international air cargo solutions connecting major airports
              worldwide with priority handling and live tracking.
            </p>
          </motion.div>

          {/* Sea Freight */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Ship className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sea Freight</h3>
            <p className="text-white/80 text-sm">
              Cost-effective ocean freight for bulk shipments, containers, and
              long-distance international trade.
            </p>
          </motion.div>

          {/* Land Transport */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Truck className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Land Transport</h3>
            <p className="text-white/80 text-sm">
              Reliable ground transportation for regional, cross-border, and
              last-mile deliveries.
            </p>
          </motion.div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl mb-14"
        >
          <h2 className="text-2xl font-bold mb-6">
            Additional Logistics Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <Package className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Secure packaging, labeling, and handling of sensitive and
                high-value cargo.
              </p>
            </div>

            <div className="flex gap-4">
              <Clock className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Time-critical shipping solutions with guaranteed delivery
                windows.
              </p>
            </div>

            <div className="flex gap-4">
              <MapPin className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Door-to-door delivery with live shipment tracking and status
                updates.
              </p>
            </div>

            <div className="flex gap-4">
              <Plane className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Optimized international routes through global logistics hubs
                including Frankfurt, Liège, and Seoul.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Ready to Ship With Confidence?
          </h3>
          <p className="text-white/80 mb-6">
            Track your shipment in real-time and experience transparent global
            logistics.
          </p>
          <a
            href="/tracking"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-lg shadow-lg font-semibold"
          >
            Track a Shipment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
