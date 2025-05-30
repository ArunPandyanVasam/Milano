import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation (can be improved)
    if (email && email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Design Tips & Exclusive Offers — Straight to Your Inbox
        </h2>
        <div className="mx-auto mb-8 w-20 h-1 bg-indigo-600 rounded-full"></div>
        <p className="text-gray-600 text-base sm:text-lg mb-8">
          Get 10% off your first quote when you sign up.
        </p>

        {submitted ? (
          <p className="text-green-600 font-semibold mb-8">
            Thanks for signing up! Check your inbox soon.
          </p>
        ) : null}

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ height: "48px" }}
          />
          <Button
            type="submit"
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:from-indigo-700 hover:to-indigo-600 transition"
          >
            Sign Me Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
