import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Air Freight", desc: "Fast and secure air cargo solutions worldwide." },
    { title: "Sea Freight", desc: "Reliable and affordable sea shipping." },
    { title: "Road Transport", desc: "Efficient delivery across cities and borders." },
    { title: "Warehousing", desc: "Secure storage and inventory management." },
  ];

  return (
    <motion.section
      className="py-20 px-6 max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-blue-700 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
