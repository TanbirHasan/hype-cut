"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative py-10 lg:py-14 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-end gap-4 sm:gap-6 lg:gap-8 mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121116] leading-tight">
              3 Hours a Month, <span className="sm:block">We Handle All</span>
            </h2>
          </div>
          <div className="flex-1 max-w-xl">
            <p className="text-lg text-[#404040] leading-relaxed">
              Spend just a few hours recording your raw footage. Our team edits,
              captions, optimizes, and delivers platform-ready clips so you can
              focus on growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${service.bgColor} rounded-2xl p-6 lg:p-7 flex flex-col min-h-56 lg:min-h-60 transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.08 + index * 0.08,
              }}
            >
              {/* Icon */}
              <div className="mb-4">
                <div
                  className={`${service.iconBgColor} w-10 h-10 rounded-full flex items-center justify-center`}
                >
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`text-xl lg:text-2xl font-bold ${service.textColor} mb-4 leading-tight`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`text-xs lg:text-sm ${service.textColor} ${
                  service.textColor === "text-white"
                    ? "opacity-90"
                    : "opacity-80"
                } leading-relaxed mt-auto`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonthlyGoal;
