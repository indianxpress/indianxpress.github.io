import { motion } from "framer-motion";

export default function Cargo() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.img
          src="/cargo-1.jpg"
          alt="Cargo Services"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Cargo Handling</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We specialize in managing cargo of all sizes — from small parcels to 
            full container loads. Our dedicated team ensures safe, efficient, and 
            timely handling of goods across multiple transport channels.
          </p>
          <p className="text-gray-600">
            With real-time tracking, customs clearance support, and global coverage, 
            we make cargo movement hassle-free for individuals and businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
