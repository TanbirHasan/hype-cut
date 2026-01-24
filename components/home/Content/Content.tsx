"use client";

import {
  Video,
  BarChart3,
  Building2,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const Content = () => {
  const services = [
    {
      id: 1,
      icon: Video,
      title: "End-to-End Service",
      description:
        "From scriptwriting to editing and publishing, we handle everything so you can focus on your business.",
      bgColor: "bg-[#5c1f3f]", // Dark burgundy
      iconBgColor: "bg-pink-200",
      iconColor: "text-[#5c1f3f]",
      textColor: "text-white",
    },
    {
      id: 2,
      icon: BarChart3,
      title: "In-Depth Industry",
      description:
        "We strategically analyze your industry and competitors, ensuring your content is strategically aligned with your business goals.",
      bgColor: "bg-pink-200",
      iconBgColor: "bg-[#5c1f3f]",
      iconColor: "text-pink-200",
      textColor: "text-[#1a1a2e]",
    },
    {
      id: 3,
      icon: Building2,
      title: "Professional Studio",
      description:
        "Shoot your content in our Central London studio with professional equipment and expert support.",
      bgColor: "bg-[#008b8b]", // Teal
      iconBgColor: "bg-white",
      iconColor: "text-[#008b8b]",
      textColor: "text-white",
    },
    {
      id: 4,
      icon: Target,
      title: "Tailored Strategies",
      description:
        "We create content that aligns with your brand's unique voice, ensuring it resonates with your audience.",
      bgColor: "bg-[#ffb38a]", // Peach/Orange
      iconBgColor: "bg-white",
      iconColor: "text-[#5c1f3f]",
      textColor: "text-[#1a1a2e]",
    },
    {
      id: 5,
      icon: TrendingUp,
      title: "Data-Driven Results",
      description:
        "Every decision is backed by analytics, helping you track performance and optimize for success.",
      bgColor: "bg-[#5856d6]", // Purple/Blue
      iconBgColor: "bg-white",
      iconColor: "text-[#5856d6]",
      textColor: "text-white",
    },
    {
      id: 6,
      icon: Users,
      title: "Professional Studio",
      description:
        "Benefit from a dedicated team that includes a creative director, editors, and designers, all focused on bringing your vision to life with precision and creativity.",
      bgColor: "bg-[#a8ff9e]", // Light green
      iconBgColor: "bg-white",
      iconColor: "text-[#1a1a2e]",
      textColor: "text-[#1a1a2e]",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#f5e6f0]">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight">
              Services That
              <br />
              Scale Your Content
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
              Editing, scripting, publishing, and more — all crafted to keep
              your brand consistent and your audience engaged.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-[24px] p-8 lg:p-10 flex flex-col justify-between min-h-[280px] lg:min-h-[320px] transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`${service.iconBgColor} w-12 h-12 rounded-full flex items-center justify-center`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${service.iconColor}`}
                      strokeWidth={2.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className={`text-2xl lg:text-3xl font-bold ${service.textColor} mb-4 leading-tight`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm lg:text-base ${service.textColor} ${
                      service.textColor === "text-white"
                        ? "opacity-90"
                        : "opacity-80"
                    } leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
