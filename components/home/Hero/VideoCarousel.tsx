"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import VideoCard from "./VideoCard";
import { HeroVideo } from "@/types/home";

interface VideoCarouselProps {
  videos: HeroVideo[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  // Duplicate videos for seamless infinite loop effect
  const duplicatedVideos = [...videos, ...videos];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 1, // Adjust speed (pixels per frame)
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
      }),
    ]
  );

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 sm:gap-4">
          {duplicatedVideos.map((video, index) => (
            <div key={`${video.id}-${index}`} className="flex-[0_0_auto]">
              <VideoCard
                videoUrl={video.videoUrl}
                title={video.title}
                color={video.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
