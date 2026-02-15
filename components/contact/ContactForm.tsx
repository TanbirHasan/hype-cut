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

interface FormErrors {
  fullName?: string;
  email?: string;
  serviceRequired?: string;
  projectBudget?: string;
  projectDetails?: string;
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

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    serviceRequired: "",
    projectBudget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validate a single field
  const validateField = useCallback(
    (name: keyof FormData, value: string): string | undefined => {
      switch (name) {
        case "fullName":
          if (!value.trim()) return "Full name is required";
          if (value.trim().length < 2)
            return "Full name must be at least 2 characters";
          return undefined;

        case "email":
          if (!value.trim()) return "Email is required";
          if (!emailRegex.test(value)) return "Please enter a valid email";
          return undefined;

        case "serviceRequired":
          if (!value) return "Please select a service";
          return undefined;

        case "projectBudget":
          if (!value) return "Please select a budget range";
          return undefined;

        case "projectDetails":
          if (!value.trim()) return "Project details are required";
          if (value.trim().length < 10)
            return "Please provide at least 10 characters";
          return undefined;

        default:
          return undefined;
      }
    },
    []
  );

  // Validate all fields
  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};

    const fullNameError = validateField("fullName", formData.fullName);
    if (fullNameError) newErrors.fullName = fullNameError;

    const emailError = validateField("email", formData.email);
    if (emailError) newErrors.email = emailError;

    const serviceError = validateField(
      "serviceRequired",
      formData.serviceRequired
    );
    if (serviceError) newErrors.serviceRequired = serviceError;

    const budgetError = validateField("projectBudget", formData.projectBudget);
    if (budgetError) newErrors.projectBudget = budgetError;

    const detailsError = validateField(
      "projectDetails",
      formData.projectDetails
    );
    if (detailsError) newErrors.projectDetails = detailsError;

    return newErrors;
  }, [formData, validateField]);

  const handleInputChange = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error when user starts typing (if field was touched)
      if (touched[name]) {
        const error = validateField(name as keyof FormData, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validateField]
  );

  const handleBlur = useCallback(
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setTouched((prev) => ({ ...prev, [name]: true }));

      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField]
  );

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Mark all fields as touched
      setTouched({
        fullName: true,
        email: true,
        serviceRequired: true,
        projectBudget: true,
        projectDetails: true,
      });

      // Validate all fields
      const formErrors = validateForm();
      setErrors(formErrors);

      // If there are errors, don't submit
      if (Object.keys(formErrors).length > 0) {
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        setSubmitSuccess(true);

        // Reset form after successful submission
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          serviceRequired: "",
          projectBudget: "",
          projectDetails: "",
        });
        setTouched({});
        setErrors({});

        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      } catch {
        console.error("Form submission failed");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validateForm]
  );

  // Helper to check if field has error
  const hasError = (field: keyof FormErrors) =>
    touched[field] && errors[field];

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-[#FAF4F8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Info */}
          <div className="lg:pr-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#121116] leading-tight mb-6">
              Get in Touch
              <br />
              with Hypecut
            </h1>

            <p className="text-[#404040] text-base leading-relaxed mb-10">
              Have a project in mind or a question about our services? We&apos;d
              love to hear from you! Whether it&apos;s video editing, reels, or
              creative content, our team is ready to help you bring your ideas
              to life. Fill out the form or reach out directly—we&apos;ll get
              back to you as soon as possible.
            </p>

            {/* Info Section */}
            <div>
              <h2 className="text-lg font-bold text-[#121116] mb-4">(INFO)</h2>

              <div className="space-y-3 text-[#404040] text-base">
                <p>
                  <span className="text-[#121116] font-medium">A:</span> 124
                  City Road, London, United Kingdom
                </p>
                <p>
                  <span className="text-[#121116] font-medium">E:</span>{" "}
                  info@hypecut.com
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
                  Full Name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  className={`w-full px-0 py-3 border-0 border-b focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] transition-colors ${
                    hasError("fullName")
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#404040] focus:border-[#750037]"
                  }`}
                />
                {hasError("fullName") && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
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
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    className={`w-full px-0 py-3 border-0 border-b focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] transition-colors ${
                      hasError("email")
                        ? "border-red-500 focus:border-red-500"
                        : "border-[#404040] focus:border-[#750037]"
                    }`}
                  />
                  {hasError("email") && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
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
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b focus:outline-none focus:ring-0 bg-transparent text-[#404040] appearance-none cursor-pointer transition-colors ${
                        hasError("serviceRequired")
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#404040] focus:border-[#750037]"
                      }`}
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
                  {hasError("serviceRequired") && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.serviceRequired}
                    </p>
                  )}
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
                      onBlur={handleBlur}
                      className={`w-full px-0 py-3 border-0 border-b focus:outline-none focus:ring-0 bg-transparent text-[#404040] appearance-none cursor-pointer transition-colors ${
                        hasError("projectBudget")
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#404040] focus:border-[#750037]"
                      }`}
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
                  {hasError("projectBudget") && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.projectBudget}
                    </p>
                  )}
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
                  onBlur={handleBlur}
                  placeholder="Tell us more about your idea"
                  rows={1}
                  className={`w-full px-0 py-3 border-0 border-b focus:outline-none focus:ring-0 bg-transparent text-[#121116] placeholder:text-[#404040] resize-none transition-colors ${
                    hasError("projectDetails")
                      ? "border-red-500 focus:border-red-500"
                      : "border-[#404040] focus:border-[#750037]"
                  }`}
                />
                {hasError("projectDetails") && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.projectDetails}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    Thank you! Your message has been sent successfully.
                    We&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-4 bg-[#750037] text-white rounded-full font-medium hover:bg-[#5a002a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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

