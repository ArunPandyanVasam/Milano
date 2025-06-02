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

app.post("/api/send", async (req, res) => {
  const { name, email, phone, product, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use "smtp.mailtrap.io" for testing
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Quote Request from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Product: ${product}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
