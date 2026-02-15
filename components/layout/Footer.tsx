"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="bg-white pt-12 lg:pt-16">
      <div className="container-max">
        {/* Top Section - 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-12 lg:pb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-sm text-[#9a9a9a] mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-sm text-[#9a9a9a] mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  End-to-End Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  In-Depth Industry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Professional Studio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Tailored Strategies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Data-Driven Results
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Professional Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm text-[#9a9a9a] mb-6">Social</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Agency
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#121116] text-base hover:text-[#750037] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Description Column */}
          <div>
            <p className="text-[#121116] text-base leading-relaxed mb-6">
              Redox is a startup digital agency of design, development and
              marketing that works friendly with global client
            </p>
            <p className="text-[#121116] text-base">info@hypecut.com</p>
            <p className="text-[#9a9a9a] text-sm mt-4">
              124 City Road, London, United Kingdom
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Middle Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16 py-10 lg:py-12">
          {/* Logo Text - 731px max width */}
          <div className="shrink-0 w-full lg:w-auto lg:max-w-182.75">
            <Link href="/" className="flex items-center">
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#121116]">
                HYPE
              </span>
              <span className="relative">
                {/* Pac-man style C */}
                <svg
                  viewBox="0 0 40 40"
                  className="w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 inline-block"
                  fill="none"
                >
                  <path
                    d="M20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0Z"
                    fill="#750037"
                  />
                  <path d="M20 20L40 8V32L20 20Z" fill="#F5F5F5" />
                </svg>
              </span>
              <span className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#121116]">
                UT
              </span>
            </Link>
          </div>

          {/* Newsletter and Social */}
          <div className="flex-1 max-w-md w-full lg:ml-auto">
            {/* Newsletter */}
            <h3 className="text-lg font-semibold text-[#121116] mb-4">
              Sign up to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 bg-[#FAF4F8] border-0 rounded-full text-[#121116] placeholder:text-[#404040] focus:outline-none focus:ring-1 focus:ring-[#750037] transition-colors pr-14 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#750037] hover:bg-[#5a002a] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Submit"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="flex items-center justify-between">
              <span className="text-[#121116] font-medium text-sm">Follow</span>
              <div className="flex items-center gap-2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61560280655084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#750037] rounded-md flex items-center justify-center hover:bg-[#5a002a] transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/hypecutofficials/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#750037] rounded-md flex items-center justify-center hover:bg-[#5a002a] transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.linkedin.com/company/102995190/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-[#750037] rounded-md flex items-center justify-center hover:bg-[#5a002a] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300" />

        {/* Bottom Section - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
          <p className="text-[#121116] text-sm">
            © 2026 Hypecut. All right reserved
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms-and-conditions"
              className="text-[#121116] text-sm hover:text-[#750037] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-[#121116] text-sm hover:text-[#750037] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
