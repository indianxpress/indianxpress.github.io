import { motion } from "framer-motion";

export default function Warehouse() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Warehousing Solutions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our secure warehouses provide flexible storage for goods of all kinds. 
            With 24/7 surveillance, climate control, and digital inventory systems, 
            we guarantee safe and efficient storage.
          </p>
          <p className="text-gray-600">
            From short-term holding to long-term storage, our facilities are designed 
            to support supply chain continuity and reduce operational costs.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          src="/warehouse1.jpg"
          alt="Warehouse"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
}
