"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoCarousel from "./VideoCarousel";
import { heroVideos } from "@/types/home";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#f5f3f0] pt-16 pb-16 px-6 lg:px-8">
      <div className="mx-auto max-w-8xl">
        {/* Hero Text */}
        <div className="text-center space-y-8 mb-12 lg:mb-16">
          <h1 className="text-[clamp(48px,8vw,92px)] font-semibold leading-[0.98] tracking-[-0.02em] text-center text-[#1a1a2e] mb-6">
            Your Premier Video
            <br />
            Editing Agency
          </h1>

          <p className=" text-lg font-medium text-center text-[#6B6B6B] mb-8 max-w-3xl mx-auto">
            From bespoke scriptwriting to editing and recording - we ensure your
            brand stands out all in one effortless Done For You Service
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              className="py-2! px-6! rounded-full border-2 border-[#EA1C31] bg-transparent text-[#EA1C31] hover:bg-[#EA1C31] hover:text-white transition-all duration-300 h-auto font-medium"
            >
              <Link href="/pricing">See Pricing</Link>
            </Button>

            <Button
              asChild
              className="py-2! px-6! rounded-full bg-[#EA1C31] hover:bg-[#c91729] text-white transition-all duration-300 h-auto font-medium shadow-lg hover:shadow-xl"
            >
              <Link href="/contact-us" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Book a Call</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          <VideoCarousel videos={heroVideos} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
