"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import VideoCard from "./VideoCard";
import { HeroVideo } from "@/types/home";

interface VideoCarouselProps {
  videos: HeroVideo[];
}

const VideoCarousel = ({ videos }: VideoCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ marginLeft: "-1rem" }}>
          {videos.map((video, index) => (
            <div key={video.id} className="pl-4 flex-[0_0_auto]">
              <VideoCard
                videoUrl={video.videoUrl}
                title={video.title}
                color={video.color}
                isActive={index === selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-[#EA1C31]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
