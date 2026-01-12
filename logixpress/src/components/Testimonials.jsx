import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "Sarah Johnson", text: "LogiXpress delivered my goods on time and in perfect condition!" },
    { name: "David Lee", text: "Excellent tracking system and customer support." },
    { name: "Amina Yusuf", text: "Affordable and reliable logistics partner for our business." },
  ];

  return (
    <motion.section
      className="py-20 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
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
        What Our Clients Say
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white border rounded-xl shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600">"{r.text}"</p>
            <h4 className="mt-4 font-semibold text-blue-700">- {r.name}</h4>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
