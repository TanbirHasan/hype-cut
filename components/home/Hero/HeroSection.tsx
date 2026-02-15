"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCarousel from "./VideoCarousel";
import { heroVideos } from "@/types/home";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="relative h-[calc(100vh-64px)] bg-[#f5f3f0] flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Hero Text - Constrained */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-16">
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight lg:leading-13.75 tracking-[-0.02em] text-center text-[#1a1a2e] mb-4 sm:mb-6">
            Your Premier Video
            <br />
            Editing Agency
          </h1>

          <p className="text-sm sm:text-base font-medium text-center text-[#6B6B6B] max-w-3xl mx-auto">
            From bespoke scriptwriting to editing and recording - we ensure your
            brand stands out all in one effortless Done For You Service
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          >
            <Button
              asChild
              variant="outline"
              className="py-2.5! px-6! rounded-full border border-[#EA1C31] bg-transparent text-[#EA1C31] hover:bg-[#EA1C31] hover:text-white transition-all duration-300 h-auto font-medium"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>

            <Button
              asChild
              className="py-2.5! px-6! rounded-full bg-[#EA1C31] hover:bg-[#c91729] text-white transition-all duration-300 h-auto font-medium shadow-lg hover:shadow-xl"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Spacer to push carousel to bottom */}
      <div className="flex-1 min-h-6" />

      {/* Video Carousel - Full Width, anchored to bottom */}
      <div className="w-full pb-6">
        <VideoCarousel videos={heroVideos} />
      </div>
    </motion.section>
  );
};

export default HeroSection;
