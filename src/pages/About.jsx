import { motion } from "framer-motion";
import { Plane, Ship, Truck, Globe, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section className="relative min-h-screen px-6 pt-28 pb-16 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-6xl w-full text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            About Our Logistics Network
          </h1>
          <p className="text-white/80 max-w-3xl mx-auto">
            We provide secure, real-time global shipping solutions designed for
            speed, transparency, and reliability across continents.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
          <p className="text-white/80 leading-relaxed">
            Our mission is to move goods across borders with precision and trust.
            From air cargo to ground delivery, we ensure every shipment is
            tracked, protected, and delivered efficiently — no matter the
            destination.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {/* Air */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Plane className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Air Freight</h3>
            <p className="text-white/80 text-sm">
              Fast international air cargo with live tracking, airport-to-airport
              and door-to-door delivery options.
            </p>
          </motion.div>

          {/* Sea */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Ship className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sea Freight</h3>
            <p className="text-white/80 text-sm">
              Reliable ocean shipping for bulk cargo, containers, and long-haul
              international transport.
            </p>
          </motion.div>

          {/* Land */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg"
          >
            <Truck className="w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Land Delivery</h3>
            <p className="text-white/80 text-sm">
              Last-mile and regional ground delivery with real-time status updates
              to the customer’s address.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Global coverage with optimized routes through major logistics
                hubs worldwide.
              </p>
            </div>

            <div className="flex gap-4">
              <ShieldCheck className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Secure handling, customs compliance, and shipment integrity at
                every stage.
              </p>
            </div>

            <div className="flex gap-4">
              <Plane className="w-8 h-8 text-indigo-400 flex-shrink-0" />
              <p className="text-white/80 text-sm">
                Live tracking with real-time progress updates powered by accurate
                logistics timing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
