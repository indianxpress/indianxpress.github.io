import { motion } from "framer-motion";

export default function Shipping() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.img
          src="/shipping.jpg"
          alt="Global Shipping"
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
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Global Shipping</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            From air freight to sea freight, our shipping solutions cover every route. 
            We partner with leading carriers to provide reliable and cost-effective 
            global delivery services.
          </p>
          <p className="text-gray-600">
            Whether you’re shipping bulk cargo or individual parcels, our expert 
            logistics team ensures your goods arrive on time and intact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
