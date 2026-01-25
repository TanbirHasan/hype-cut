"use client";

import VideoPlayer from "@/components/ui/video-player";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const stats = [
    { value: "160+", label: "Projects" },
    { value: "100%", label: "Commitment" },
    { value: "45+", label: "Clients" },
  ];

  const youtubeVideoId = "dQw4w9WgXcQ";

  return (
    <motion.section
      className="relative py-16 lg:py-24 px-6 lg:px-8 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-[#000000] leading-tight">
            We create, edit, and market videos whether{" "}
            <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#1a1a2e] rounded-lg mx-1 sm:mx-2 align-middle">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white fill-white" />
            </span>{" "}
            filmed at your place or sent by you.
          </h2>
        </motion.div>

        <div className="space-y-25">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="relative">
              {/* Ensure VideoPlayer has NO default controls */}
              <VideoPlayer youtubeVideoId={youtubeVideoId} noControls />

              {/* Custom Figma overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="relative w-[234px] h-[186px] rounded-[48px] bg-white/15 border border-white/40 backdrop-blur-[12px]"></div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="stats relative rounded-[24px] overflow-hidden p-6 sm:p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <div className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>

                  {index < stats.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-2 lg:-right-4 h-12 sm:h-16 lg:h-20 w-px bg-white/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
