// Quote.jsx
import React, { useState } from "react";
import { Mail, Phone, FileText } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    cargo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field].trim()) {
        tempErrors[field] = "This field is required";
      }
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success(
        "Request submitted. More information will be sent to the provided email for further processing."
      );

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        cargo: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900 dark:bg-gray-900 p-6 sm:p-10">
      <Toaster position="top-right" />
      <div className="max-w-4xl mx-auto space-y-8 mt-10">
        <header>
          <h1 className="text-3xl font-semibold text-white dark:text-slate-100">
            Request a Quote
          </h1>
          <p className="mt-2 text-white dark:text-slate-300 max-w-2xl">
            Get a customized shipping and logistics quotation by providing details of your cargo, routes, and preferences. Our team will respond promptly with tailored solutions.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          className="bg-transparent dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white dark:text-slate-300">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-white dark:text-slate-300">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white dark:text-slate-300">
              Cargo Details
            </label>
            <textarea
              rows="4"
              name="cargo"
              value={formData.cargo}
              onChange={handleChange}
              placeholder="Describe your shipment (weight, dimensions, origin, destination, etc.)"
              className="mt-2 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            {errors.cargo && (
              <p className="text-red-500 text-sm mt-1">{errors.cargo}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-800 text-white py-3 font-medium hover:bg-indigo-700 transition"
          >
            <FileText className="w-5 h-5" /> Submit Request
          </button>
        </form>

        <section className="flex flex-col md:flex-row gap-6 pt-6">
          <div className="flex items-center gap-3 text-white dark:text-slate-300">
            <Mail className="w-5 h-5 text-indigo-600" />
            <span>info@indianxpress.com</span>
          </div>
          <div className="flex items-center gap-3 text-white dark:text-slate-300">
            <Phone className="w-5 h-5 text-indigo-600" />
            <span>+91 48 7900 6114</span>
          </div>
        </section>
      </div>
    </div>
  );
}
