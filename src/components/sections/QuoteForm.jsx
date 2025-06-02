import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const QuoteForm = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: initialProduct,
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch("http://localhost:5000/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({
          name: "",
          email: "",
          phone: "",
          product: "",
          message: "",
        });
      } else {
        setStatus({ loading: false, success: null, error: data.message });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: null,
        error: "Failed to send. Please try again later.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 shadow-md p-8 rounded-lg max-w-4xl mx-auto space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium mb-1 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-gray-700">
            Product (optional)
          </label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="e.g. Satin Nickel Lever Set"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1 text-gray-700">Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Tell us about your project or quantity needs..."
        />
      </div>

      {status.success && (
        <p className="text-green-600 text-sm font-medium">{status.success}</p>
      )}
      {status.error && (
        <p className="text-red-600 text-sm font-medium">{status.error}</p>
      )}

      <button
        type="submit"
        disabled={status.loading}
        className={`w-full ${
          status.loading ? "bg-indigo-400" : "bg-indigo-600 hover:bg-indigo-700"
        } text-white font-semibold px-6 py-3 rounded-md transition`}
      >
        {status.loading ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
};

export default QuoteForm;
