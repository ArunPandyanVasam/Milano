// server/index.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Reusable mail sender function
const sendEmail = async ({ fromEmail, subject, text }, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: fromEmail,
      to: process.env.EMAIL_USER,
      subject,
      text,
    });

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

// Quote Request
app.post("/api/send", (req, res) => {
  const { name, email, phone, product, message } = req.body;

  sendEmail({
    fromEmail: email,
    subject: `Quote Request from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Products: ${product}
Message: ${message}
    `,
  }, res);
});

// Book Consultation
app.post("/api/consultation", (req, res) => {
  const { name, email, phone, preferredDate, message } = req.body;

  sendEmail({
    fromEmail: email,
    subject: `Book Consultation Request from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Preferred Date: ${preferredDate}
Message: ${message}
    `,
  }, res);
});

// Volume Pricing
app.post("/api/volume-pricing", (req, res) => {
  const { name, email, phone, company, projectDetails } = req.body;

  sendEmail({
    fromEmail: email,
    subject: `Volume Pricing Inquiry from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Project Details: ${projectDetails}
    `,
  }, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
