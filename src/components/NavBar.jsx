import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white rounded-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-700">
          IndianXpress
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/tracking" className="hover:text-blue-600">Tracking</Link>
          <Link to="/quote" className="hover:text-blue-600">Get Quote</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Right Section: Track Shipment + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Track Shipment Button (always visible) */}
          <Link
            to="/tracking"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm md:text-base"
          >
            Track Shipment
          </Link>

          {/* Hamburger Icon (mobile only) */}
          <button
            className="md:hidden text-blue-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md border-t"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col px-6 py-4 space-y-3">
              <Link to="/" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
              <Link to="/tracking" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Tracking</Link>
              <Link to="/quote" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Get Quote</Link>
              <Link to="/contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
