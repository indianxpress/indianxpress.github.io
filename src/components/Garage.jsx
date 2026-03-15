import { motion } from "framer-motion";

export default function Garage() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Fleet & Garage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our modern fleet of trucks, vans, and trailers are serviced in-house at our 
            state-of-the-art garage facilities. This ensures peak performance, safety, 
            and reliability for every delivery.
          </p>
          <p className="text-gray-600">
            We maintain strict maintenance schedules and use cutting-edge technology 
            to keep our vehicles in top condition, minimizing delays and maximizing trust.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/garage.jpg"
          alt="Fleet Garage"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
