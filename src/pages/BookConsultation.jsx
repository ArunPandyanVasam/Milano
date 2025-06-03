import React, { useState } from "react";
import axios from "axios";

const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/consultation", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", preferredDate: "", message: "" });
    } catch (err) {
      setError("Failed to send your request. Try again later.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">Book a Consultation</h2>
      {success && <p className="text-green-600 mb-4">Request sent successfully!</p>}
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {["name", "email", "phone", "preferredDate", "message"].map(field => (
          <input
            key={field}
            type={field === "email" ? "email" : "text"}
            name={field}
            required
            placeholder={field.replace(/([A-Z])/g, " $1")}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        ))}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookConsultation;
