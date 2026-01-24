"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
  };

  return (
    <footer className="bg-[#F5F5F5] py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Top Section - Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold text-[#121116] mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-[#121116] mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  End-to-End Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  In-Depth Industry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Professional Studio
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Tailored Strategies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Data-Driven Results
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Professional Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-lg font-semibold text-[#121116] mb-6">
              Social
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Agency
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-[#404040] hover:text-[#121116] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div>
            <p className="text-[#404040] leading-relaxed mb-6">
              Redox is a startup digital agency of design, development and
              marketing that works friendly with global client
            </p>
            <a
              href="mailto:info@hypecut.com"
              className="text-[#404040] hover:text-[#121116] transition-colors"
            >
              info@hypecut.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-12 lg:mb-16" />

        {/* Middle Section - Logo and Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/common/website-logo.png"
                alt="Hypecut"
                width={340}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Newsletter and Social */}
          <div className="flex-1 max-w-lg w-full">
            {/* Newsletter */}
            <h3 className="text-lg lg:text-xl font-semibold text-[#121116] mb-4">
              Sign up to our newsletter
            </h3>
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-white border border-gray-300 rounded-full text-[#404040] placeholder:text-gray-400 focus:outline-none focus:border-[#EA1C31] transition-colors pr-14"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#EA1C31] hover:bg-[#c91729] rounded-full flex items-center justify-center transition-colors"
                  aria-label="Submit"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <span className="text-[#121116] font-medium text-sm lg:text-base">
                Follow
              </span>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#121116] rounded-md flex items-center justify-center hover:bg-[#EA1C31] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-white fill-white" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#121116] rounded-md flex items-center justify-center hover:bg-[#EA1C31] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-white fill-white" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#121116] rounded-md flex items-center justify-center hover:bg-[#EA1C31] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-white fill-white" />
                </Link>
                <Link
                  href="#"
                  className="w-9 h-9 bg-[#121116] rounded-md flex items-center justify-center hover:bg-[#EA1C31] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-white fill-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-[#121116] text-sm">
            © 2025 Hypecut. All right reserved
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-[#121116] text-sm hover:text-[#EA1C31] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="text-[#121116] text-sm hover:text-[#EA1C31] transition-colors"
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
