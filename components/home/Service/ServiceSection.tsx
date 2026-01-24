"use client";

import VideoPlayer from "@/components/ui/video-player";
import { Play } from "lucide-react";

const ServicesSection = () => {
  // Stats data
  const stats = [
    { value: "160+", label: "Projects" },
    { value: "100%", label: "Commitment" },
    { value: "45+", label: "Clients" },
  ];

  // Video configuration
  const youtubeVideoId = "dQw4w9WgXcQ"; // Replace with actual YouTube video ID

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-semibold te[#000000] leading-tight">
            We create, edit, and market
            <br />
            videos whether{" "}
            <span className="inline-flex items-center justify-center w-12 h-12 bg-[#1a1a2e] rounded-lg mx-2 align-middle">
              <Play className="w-6 h-6 text-white fill-white" />
            </span>{" "}
            filmed at your
            <br />
            place or sent by you.
          </h2>
        </div>

        <div className="space-y-25">
          {/* Video Showcase */}
          <div>
            <VideoPlayer youtubeVideoId={youtubeVideoId} />
          </div>

          {/* Stats Cards */}
          <div className="stats relative rounded-[24px] overflow-hidden p-8 lg:p-12">
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative">
                  <div className="text-4xl lg:text-7xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>

                  {/* Separator line (except for last item) */}
                  {index < stats.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-2 lg:-right-4 h-16 lg:h-20 w-px bg-white/20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
