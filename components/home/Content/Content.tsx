"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import service from "@/assets/home/content/service.png";
import industry from "@/assets/home/content/industry.png";
import studio from "@/assets/home/content/studio.png";
import strategies from "@/assets/home/content/stratagies.png";
import results from "@/assets/home/content/results.png";
import professional from "@/assets/home/content/professional.png";

const Content = () => {
  const services = [
    {
      id: 1,
      image: service,
      title: "End-to-End Service",
      description:
        "From scriptwriting to editing and publishing, we handle everything so you can focus on your business.",
      bgColor: "bg-pink-900",
      iconBgColor: "bg-pink-100",
      textColor: "text-white",
    },
    {
      id: 2,
      image: industry,
      title: "In-Depth Industry",
      description:
        "We strategically analyze your industry and competitors, ensuring your content is strategically aligned with your business goals.",
      bgColor: "bg-[#FFB0E6]",
      iconBgColor: "bg-pink-900",
      textColor: "text-[#121116]",
    },
    {
      id: 3,
      image: studio,
      title: "Professional Studio",
      description:
        "Shoot your content in our Central London studio with professional equipment and expert support.",
      bgColor: "bg-[#008A95]",
      iconBgColor: "bg-[#97FCFF]",
      textColor: "text-white",
    },
    {
      id: 4,
      image: strategies,
      title: "Tailored Strategies",
      description:
        "We create content that aligns with your brand's unique voice, ensuring it resonates with your audience.",
      bgColor: "bg-[#FFB296]",
      iconBgColor: "bg-pink-900",
      textColor: "text-[#121116]",
    },
    {
      id: 5,
      image: results,
      title: "Data-Driven Results",
      description:
        "Every decision is backed by analytics, helping you track performance and optimize for success.",
      bgColor: "bg-blue-600",
      iconBgColor: "bg-blue-100",
      textColor: "text-white",
    },
    {
      id: 6,
      image: professional,
      title: "Professional Studio",
      description:
        "Benefit from a dedicated team that includes a creative director, editors, and designers, all focused on bringing your vision to life with precision and creativity.",
      bgColor: "bg-[#95FFBD]",
      iconBgColor: "bg-green-900",
      textColor: "text-[#121116]",
    },
  ];

  return (
    <section className="relative py-10 lg:py-14 px-6 lg:px-8 bg-[#FAEBFF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} // earlier trigger on mobile
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121116] leading-tight">
              Services That <span className="sm:block">Scale Your Content</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-[#404040] leading-relaxed">
              Editing, scripting, publishing, and more — all crafted to keep
              your brand consistent and your audience engaged.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {services.map((service) => {
            const isWhiteText = service.textColor === "text-white";

            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-2xl p-6 lg:p-7 flex flex-col justify-between min-h-56 lg:min-h-60 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                {/* Icon and Title */}
                <div className="flex flex-col gap-3 mb-4">
                  {/* Icon */}
                  <div
                    className={`${service.iconBgColor} w-10 h-10 rounded-full flex items-center justify-center`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl lg:text-2xl font-bold ${service.textColor} leading-tight`}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    className={`text-xs lg:text-sm ${service.textColor} ${
                      isWhiteText ? "opacity-90" : "opacity-80"
                    } leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Content;
