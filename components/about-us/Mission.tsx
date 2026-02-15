"use client";

import Image from "next/image";

const Mission = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-10 lg:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A1A1A] mb-2 leading-tight tracking-[-0.02em]">
            About Our
            <br />
            Company & Mission
          </h1>
          <p className="text-sm sm:text-base text-[#6B6B6B] font-medium max-w-3xl mx-auto leading-relaxed">
            As a proud subsidiary of The Founders Guild, we carry forward the
            mission of empowering entrepreneurs, startups, and businesses to
            amplify their voices and establish their brands on a global stage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Side - Image */}
          <div className="relative w-full h-auto lg:h-full min-h-72 lg:min-h-0">
            <Image
              src="/images/about/about-us.png"
              alt="About Our Company"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-3 flex flex-col">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1A1A1A] leading-tight">
              Together
              <br />
              we are strong
            </h2>

            <div className="space-y-2 text-[#404040] text-sm leading-relaxed flex-1">
              <p>
                Born from The Founders Guild&apos;s commitment to fostering
                entrepreneurial success, Hypecut specialises in short-form video
                content that captures attention, drives engagement, and
                positions businesses as leaders in their industries. We know
                that in today&apos;s fast-paced digital landscape, seconds matter,
                and that&apos;s why we focus on creating impactful, viral-ready
                content tailored to your unique vision.
              </p>

              <p>
                Our Done For You Service is designed with busy founders and
                business leaders in mind, from custom script writing and
                professional studio recording in Central London to cutting-edge
                editing and platform publishing, we handle every detail.
              </p>

              <p>
                The result? High-performing content that resonates with
                audiences and builds lasting connections. Join us, and let&apos;s
                craft your story. Together, we&apos;ll take your brand to the next
                level.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-0.5">
                  160+
                </div>
                <div className="text-xs lg:text-sm text-[#666666]">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-0.5">
                  100%
                </div>
                <div className="text-xs lg:text-sm text-[#666666]">
                  Commitment
                </div>
              </div>

              <div>
                <div className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-0.5">
                  45+
                </div>
                <div className="text-xs lg:text-sm text-[#666666]">
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;


