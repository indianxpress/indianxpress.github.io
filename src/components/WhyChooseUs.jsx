import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    "Global Reach with Local Expertise",
    "24/7 Real-Time Tracking",
    "Affordable & Transparent Pricing",
    "Trusted by Thousands of Businesses",
  ];

  return (
    <motion.section
      className="bg-blue-50 py-20 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Why Choose Us
        </motion.h2>

        <ul className="space-y-4 text-lg text-gray-700">
          {reasons.map((r, i) => (
            <motion.li
              key={i}
              className="p-4 bg-white rounded-lg shadow"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {r}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
