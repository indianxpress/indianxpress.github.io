import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <motion.section
      className="bg-blue-700 text-white py-16 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Ready to Ship with Confidence?
      </motion.h2>

      <motion.p
        className="mt-2 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Get a free quote or track your shipment today.
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="/quote"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Get Quote
        </a>
        <a
          href="/tracking"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
        >
          Track Now
        </a>
      </motion.div>
    </motion.section>
  );
}
