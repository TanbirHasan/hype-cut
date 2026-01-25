"use client";

import { useState, useCallback, FormEvent, ChangeEvent } from "react";
import { ChevronDown } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  serviceRequired: string;
  projectBudget: string;
  projectDetails: string;
}

const serviceOptions = [
  "Select Your Service",
  "Video Editing",
  "Reels Creation",
  "Content Strategy",
  "Social Media Management",
  "Full Package",
];

const budgetOptions = [
  "Select Your Range",
  "Under £1,000",
  "£1,000 - £3,000",
  "£3,000 - £5,000",
  "£5,000 - £10,000",
  "£10,000+",
];

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    serviceRequired: "",
    projectBudget: "",
    projectDetails: "",
  });

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Form submitted:", formData);
    },
    [formData]
  );

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#FAF4F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#121116] leading-tight mb-6">
              Get in Touch
              <br />
              with Hypecut
            </h1>

            <p className="text-[#404040] text-base leading-relaxed mb-10">
              Have a project in mind or a question about our services? We&apos;d
              love to hear from you! Whether it&apos;s video editing, reels, or
              creative content, our team is ready to help you bring your ideas
              to life. Fill out the form or reach out directly—we&apos;ll get back to
              you as soon as possible.
            </p>

            {/* Info Section */}
            <div>
              <h2 className="text-lg font-bold text-[#121116] mb-4">(INFO)</h2>

              <div className="space-y-3 text-[#404040] text-base">
                <p>
                  <span className="text-[#121116] font-medium">A:</span> 123
                  Innovation Street, Dhaka, Bangladesh
                </p>
                <p>
                  <span className="text-[#121116] font-medium">E:</span>{" "}
                  info@hypecut.io
                </p>
                <p>
                  <span className="text-[#121116] font-medium">N:</span> +880
                  123 456 7890
                </p>
                <p>
                  <span className="text-[#121116] font-medium">H:</span> Monday
                  - Friday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-[#121116] font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] transition-colors"
                />
              </div>

              {/* Company Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-[#121116] font-medium mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Ex. Tesla Inc"
                    className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#121116] font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] transition-colors"
                  />
                </div>
              </div>

              {/* Service Required & Project Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="block text-[#121116] font-medium mb-2"
                  >
                    Service required*
                  </label>
                  <div className="relative">
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#404040] appearance-none cursor-pointer transition-colors"
                      style={{
                        color: formData.serviceRequired ? "#121116" : "#404040",
                      }}
                    >
                      {serviceOptions.map((option, index) => (
                        <option
                          key={option}
                          value={index === 0 ? "" : option}
                          disabled={index === 0}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#404040] pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectBudget"
                    className="block text-[#121116] font-medium mb-2"
                  >
                    Project budget*
                  </label>
                  <div className="relative">
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#404040] appearance-none cursor-pointer transition-colors"
                      style={{
                        color: formData.projectBudget ? "#121116" : "#404040",
                      }}
                    >
                      {budgetOptions.map((option, index) => (
                        <option
                          key={option}
                          value={index === 0 ? "" : option}
                          disabled={index === 0}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#404040] pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label
                  htmlFor="projectDetails"
                  className="block text-[#121116] font-medium mb-2"
                >
                  Project details*
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleInputChange}
                  placeholder="Tell us more about your idea"
                  required
                  rows={1}
                  className="w-full px-0 py-3 border-0 border-b border-[#404040] focus:border-[#750037] focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="px-10 py-4 bg-[#750037] text-white rounded-full font-medium hover:bg-[#5a002a] transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
