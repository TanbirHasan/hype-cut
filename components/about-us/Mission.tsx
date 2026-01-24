"use client";

import Image from "next/image";

const Mission = () => {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] mb-4 leading-tight">
            About Our
            <br />
            Company & Mission
          </h1>
          <p className="text-base lg:text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
            As a proud subsidiary of The Founders Guild, we carry forward the
            mission of empowering entrepreneurs, startups, and businesses to
            amplify their voices and establish their brands on a global stage.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/about-us.png"
                alt="About Our Company"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] leading-tight">
              Together
              <br />
              we are strong
            </h2>

            <div className="space-y-4 text-[#666666] text-base lg:text-lg leading-relaxed">
              <p>
                Born from The Founders Guild's commitment to fostering
                entrepreneurial success, today's specialists in short-form video
                content that captures attention, drives engagement, and
                positions businesses as leaders in their industries. We know
                that in today's fast-paced digital landscape, seconds matter,
                and that's why we focus on creating impactful, viral-ready
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
                audiences and builds lasting connections. Join us, and let's
                craft your story. Together, we'll take your brand to the next
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
