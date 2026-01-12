import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('/cranes.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Reliable Logistics & Freight Solutions
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Delivering globally with speed, safety, and trust.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a
            href="/quote"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition"
          >
            Get a Quote <ArrowRight size={18} />
          </a>
          <a
            href="/tracking"
            className="flex items-center justify-center gap-2 border border-white hover:bg-white hover:text-blue-700 px-6 py-3 rounded-lg transition"
          >
            <Search size={18} /> Track Shipment
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
