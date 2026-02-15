"use client";

import Image from "next/image";

const Mission = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1A1A1A] mb-4 leading-tight tracking-[-0.02em]">
            About Our
            <br />
            Company & Mission
          </h1>
          <p className="text-base lg:text-2xl text-[#6B6B6B] font-medium max-w-3xl mx-auto leading-relaxed">
            As a proud subsidiary of The Founders Guild, we carry forward the
            mission of empowering entrepreneurs, startups, and businesses to
            amplify their voices and establish their brands on a global stage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Image */}
          <div className="relative w-full h-auto lg:h-full min-h-100 lg:min-h-0">
            <Image
              src="/images/about/about-us.png"
              alt="About Our Company"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 flex flex-col">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#1A1A1A] leading-tight">
              Together
              <br />
              we are strong
            </h2>

            <div className="space-y-4 text-[#404040] text-base leading-6.5 flex-1">
              <p>
                Born from The Founders Guild&apos;s commitment to fostering
                entrepreneurial success, Hypecut specialises in short-form video
                content that captures attention, drives engagement, and
                positions businesses as leaders in their industries. We know
                that in today&apos;s fast-paced digital landscape, seconds matter,
                and that&apos;s why we focus on creating impactful, viral-ready
                content tailored to your unique vision. Our Done For You Service
                is designed with busy founders and business leaders in mind.
                From custom script writing and professional studio recording in
                Central London to cutting-edge editing and platform publishing,
                we handle every detail. The result? High-performing content that
                resonates with audiences and builds lasting connections. Join
                us, and let&apos;s craft your story. Together, we&apos;ll take your brand
                to the next level.
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
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-1">
                  160+
                </div>
                <div className="text-sm lg:text-base text-[#666666]">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-1">
                  100%
                </div>
                <div className="text-sm lg:text-base text-[#666666]">
                  Commitment
                </div>
              </div>

              <div>
                <div className="text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-1">
                  45+
                </div>
                <div className="text-sm lg:text-base text-[#666666]">
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


