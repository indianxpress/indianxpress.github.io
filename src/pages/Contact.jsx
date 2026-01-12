import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Search,
  Headphones,
  HelpCircle,
} from "lucide-react";
import { FaBuilding } from "react-icons/fa";

/* ---------------- DATA ---------------- */

const companies = [
  {
    id: 1,
    name: "Shipping Corporation of India",
    type: "Sea / International Lines",
    phone: "+91 98000 65000",
    email: "inquiries@indianxpress.org",
    address: "Mumbai Port Area, Mumbai, Maharashtra",
    note: "National carrier — established international liner services.",
  },
  {
    id: 2,
    name: "Great Eastern Shipping Co. Ltd.",
    type: "Sea / Tankers & Dry Cargo",
    phone: "+91 98000 65000",
    email: "contact@indianxpress.org",
    address: "Andheri East, Mumbai, Maharashtra",
    note: "Private shipping major with global operations.",
  },
  {
    id: 3,
    name: "TCI Seaways",
    type: "Coastal & Container Shipping / Multimodal",
    address: "Gurugram / JNPT network",
    note: "Container & coastal-to-international transshipment.",
  },
  {
    id: 4,
    name: "Delhivery",
    type: "Land / E-commerce Logistics",
    address: "Multiple hubs across India",
    note: "Domestic leader with international partner routes.",
  },
  {
    id: 5,
    name: "Blue Dart Express",
    type: "Land & Air / DHL Network",
    address: "Mumbai, Chennai, Delhi hubs",
    note: "Express shipping with global air connectivity.",
  },
];

const offices = [
  {
    region: "Europe",
    city: "Liège, Belgium",
    address: "Liège Airport Cargo Center (LGG)",
  },
  {
    region: "Europe",
    city: "Los Angeles, California, USA",
    address: "Los Angeles International, CA (LAX)",
  },
  {
    region: "Asia",
    city: "Seoul, South Korea",
    address: "Incheon International Airport (ICN)",
  },
  {
    region: "Asia",
    city: "Mumbai, India",
    address: "Mumbai Chhatrapati Shivaji India (BOM)",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Contact() {
  const [query, setQuery] = useState("");

  const filteredCompanies = companies.filter((c) =>
    `${c.name} ${c.type} ${c.address}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 pt-28 pb-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 text-white"
    >
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ================= HEADER ================= */}
        <motion.header
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Contact & Logistics Network
            </h1>
            <p className="mt-3 text-white/80 max-w-2xl">
              Verified logistics partners, global offices, and 24/7 shipment
              support for air, sea, and land cargo.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search company, service or city"
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.header>

        {/* ================= COMPANIES ================= */}
        <div className="space-y-6">
          {filteredCompanies.map((c, i) => (
            <motion.article
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 flex flex-col md:flex-row gap-6 md:items-center md:justify-between"
            >
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <FaBuilding className="w-7 h-7 text-blue-300" />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">{c.name}</h2>
                  <p className="text-sm text-white/60">{c.type}</p>
                  <p className="mt-3 text-sm text-white/80">{c.note}</p>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <a href={`tel:${c.phone}`} className="hover:underline">
                        {c.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <a href={`mailto:${c.email}`} className="hover:underline">
                        {c.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{c.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={`tel:${c.phone}`}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold"
                >
                  Call
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="px-5 py-2 rounded-lg bg-white/10 border border-white/30 hover:bg-white/20 font-semibold"
                >
                  Email
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= REGIONAL OFFICES ================= */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Regional Offices</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {offices.map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <h3 className="font-semibold text-lg">{o.region}</h3>
                <p className="mt-2 text-white/80">{o.city}</p>
                <p className="text-sm text-white/60">{o.address}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ================= SUPPORT ================= */}
        <section className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Headphones /> 24/7 Support & Helpdesk
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-white/80">
            <div className="flex gap-3">
              <HelpCircle />
              <p>
                Tracking issues, delayed shipments, or customs clearance
                inquiries — our logistics support team is available round-the-clock.
              </p>
            </div>

            <div className="space-y-2">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:support@indianxpress.org"
                  className="underline"
                >
                  support@indianxpress.org
                </a>
              </p>
              <p>📞 Phone: +91 800 004 0980</p>
              <p>🕘 Availability: 24/7 Global Operations</p>
            </div>
          </div>
        </section>

      </div>
    </motion.section>
  );
}
