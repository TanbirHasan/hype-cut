"use client";

import Image from "next/image";
import { InlineWidget } from "react-calendly";

const ConsultationBooking = () => {
  return (
    <div className="min-h-screen bg-[#F7F7F7] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3">
            Let&apos;s Work Together
          </h1>
          <p className="text-base text-[#666666]">
            Schedule a consultation today and start your journey
            <br />
            toward a borderless business future.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-[920px] mx-auto">
          <div className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr]">
              {/* Left Side - Info (Keep Your Design) */}
              <div className="border-r border-[#E5E5E5] p-8">
                {/* Logo and Title */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-[#0066FF] rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                    <div>
                      <Image
                        src="/images/common/website-logo.png"
                        alt="Hypecut"
                        width={120}
                        height={30}
                        className="h-8 w-auto"
                      />
                    </div>
                  </div>

                  <h2 className="text-[20px] font-semibold text-[#1A1A1A] mb-3 leading-tight">
                    Free Strategy Call
                  </h2>

                  <p className="text-[14px] text-[#666666] leading-[1.6] mb-8">
                    Schedule a consultation today and start your journey toward
                    a borderless business future. Schedule a consultation today
                    and start your journey toward a borderless business future.
                  </p>
                </div>

                {/* Google Meet Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E5E5E5] rounded">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 4.5V11.5C14 12.0523 13.5523 12.5 13 12.5H3C2.44772 12.5 2 12.0523 2 11.5V4.5C2 3.94772 2.44772 3.5 3 3.5H13C13.5523 3.5 14 3.94772 14 4.5Z"
                      stroke="#00AC47"
                      strokeWidth="1.5"
                    />
                    <path d="M14 6.5L10 9L14 11.5V6.5Z" fill="#00AC47" />
                  </svg>
                  <span className="text-[13px] text-[#666666] font-medium">
                    Google Meet
                  </span>
                </div>
              </div>

              {/* Right Side - Calendly Widget */}
              <div className="min-h-[600px]">
                <InlineWidget
                  url="https://calendly.com/theagentichub/30min"
                  styles={{
                    height: "600px",
                    width: "100%",
                  }}
                  pageSettings={{
                    backgroundColor: "ffffff",
                    hideEventTypeDetails: true,
                    hideLandingPageDetails: true,
                    primaryColor: "006BFF",
                    textColor: "1A1A1A",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;

// INSTALLATION & SETUP:
// 1. Install react-calendly: npm install react-calendly
// 2. Add CSS import to your layout or this component:
//    import "react-calendly/dist/index.css";
// 3. Replace 'your-calendly-username/30min' with your actual Calendly event URL
//    Example: "https://calendly.com/john-doe/30min"
// 4. Make sure you have a Calendly account and have created an even
