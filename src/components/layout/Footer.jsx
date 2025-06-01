import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid gap-10 grid-cols-1 md:grid-cols-4">
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-indigo-400">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {["Home", "Shop", "Services", "About"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="hover:text-indigo-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-indigo-400">
            Contact
          </h4>
          <address className="not-italic space-y-3 text-sm leading-relaxed">
            <p>123 Milano St, Toronto, ON</p>
            <p>
              <a
                href="tel:+14165557890"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                +1 (416) 555-7890
              </a>
            </p>
            <p>
              <a
                href="mailto:info@milanohardware.ca"
                className="hover:text-indigo-400 transition-colors duration-300"
              >
                info@milanohardware.ca
              </a>
            </p>
          </address>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-6 tracking-wide uppercase text-indigo-400">
            Connect With Us
          </h4>
          <div className="flex space-x-5">
            {[
              {
                href: "https://instagram.com",
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                href: "https://facebook.com",
                icon: <FaFacebookF />,
                label: "Facebook",
              },
              {
                href: "https://linkedin.com",
                icon: <FaLinkedinIn />,
                label: "LinkedIn",
              },
              {
                href: "https://wa.me/14165557890",
                icon: <FaWhatsapp />,
                label: "WhatsApp",
              },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 text-indigo-400 hover:text-white transition-colors duration-300 shadow-md"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} Milano Hardware & Interiors. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
