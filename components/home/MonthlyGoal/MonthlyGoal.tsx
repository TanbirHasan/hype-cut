"use client";

import Image from "next/image";

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
}

const MonthlyGoal = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: "/images/home/monthly-goal/search.png",
      title: "Research & Scripting",
      description:
        "We research your industry, competitors, and audience to create tailored scripts that engage, resonate, and elevate your brand's visibility effectively.",
      bgColor: "bg-[#4A1942]",
      textColor: "text-white",
      iconBgColor: "bg-[#F8C4E4]",
    },
    {
      id: 2,
      icon: "/images/home/monthly-goal/youtube.png",
      title: "Studio Recording & Editing",
      description:
        "Record in our Central London studio with professional gear, and we deliver polished, social-ready videos with premium editing, graphics, and captions.",
      bgColor: "bg-[#FFC0E3]",
      textColor: "text-[#121116]",
      iconBgColor: "bg-[#4A1942]",
    },
    {
      id: 3,
      icon: "/images/home/monthly-goal/download.png",
      title: "Publishing & Metrics",
      description:
        "We refine, publish, and track your content, doubling down on what works to drive growth and deliver measurable results consistently.",
      bgColor: "bg-[#4D52FF]",
      textColor: "text-white",
      iconBgColor: "bg-[#95FFBD]",
    },
    {
      id: 4,
      icon: "/images/home/monthly-goal/settings.png",
      title: "Publish & Optimise",
      description:
        "Record in our Central London studio with professional gear, and we edit, add graphics, and captions for polished, social-ready videos.",
      bgColor: "bg-[#95FFBD]",
      textColor: "text-[#121116]",
      iconBgColor: "bg-[#121116]",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 lg:mb-16">
          <div className="flex-1">
            <h2 className="text-4xl lg:text-6xl font-bold text-[#121116] leading-tight">
              3 Hours a Month,
              <br />
              We Handle All
            </h2>
          </div>
          <div className="flex-1 max-w-xl">
            <p className="text-base lg:text-lg text-[#404040] leading-relaxed">
              Spend just a few hours recording your raw footage. Our team edits,
              captions, optimizes, and delivers platform-ready clips so you can
              focus on growth.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.bgColor} rounded-3xl p-8 lg:p-10 flex flex-col min-h-[400px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-8">
                <div
                  className={`${service.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center`}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-2xl lg:text-3xl font-bold ${service.textColor} mb-6 leading-tight`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm lg:text-base ${service.textColor} ${
                  service.textColor === "text-white"
                    ? "opacity-90"
                    : "opacity-80"
                } leading-relaxed mt-auto`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyGoal;
