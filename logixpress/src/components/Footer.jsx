import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t mt-auto">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h3 className="text-xl font-bold">IndianXpress</h3>
          <p className="mt-2 text-gray-400">
            Delivering with speed and trust worldwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 space-y-2">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/tracking">Tracking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-gray-400">Email: support@indianxpress.com</p>
          <p className="text-gray-400">Phone: +234 800 000 0000</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6">
        © {new Date().getFullYear()} IndianXpress. All rights reserved.
      </p>
    </footer>
  );
}
