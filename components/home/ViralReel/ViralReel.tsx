"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import VideoDialog from "@/components/ui/video-dialog";

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
  category?: string;
}

const ViralReel = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Embla carousel for small videos with autoplay
  const [emblaRef1, emblaApi1] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  // First carousel videos (309px cards)
  const smallVideos: VideoItem[] = [
    {
      id: 1,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      title: "Stop Your Child Juice Drink",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      category: "Health",
    },
    {
      id: 2,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      title: "Orange Juice Benefits",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      category: "Nutrition",
    },
    {
      id: 3,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      title: "Start Today",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      category: "Motivation",
    },
    {
      id: 4,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
      title: "Fashion Confidence",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      category: "Fashion",
    },
    {
      id: 5,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
      title: "Style Forever",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      category: "Style",
    },
  ];

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setTimeout(() => setSelectedVideo(null), 300);
    }
  };

  const scrollPrev1 = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollPrev();
  }, [emblaApi1]);

  const scrollNext1 = useCallback(() => {
    if (emblaApi1) emblaApi1.scrollNext();
  }, [emblaApi1]);

  return (
    <motion.section
      className="relative py-16 lg:py-24 px-6 lg:px-8 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#121116] leading-tight">
              Turn Moments
              <br />
              Into Viral Reels
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base lg:text-xl text-[#404040] leading-relaxed">
              We craft engaging, social-ready reels designed to boost visibility
              and engagement on every platform.
            </p>
          </div>
        </motion.div>

        {/* First Carousel - Small Cards (309px) */}
        <motion.div
          className="mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative group">
            {/* Scroll buttons */}
            <button
              onClick={scrollPrev1}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white disabled:opacity-50 -ml-5"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            <button
              onClick={scrollNext1}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white disabled:opacity-50 -mr-5"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            {/* Carousel container */}
            <div className="overflow-hidden" ref={emblaRef1}>
              <div className="flex gap-4 pb-4">
                {smallVideos.map((video, index) => (
                  <motion.div
                    key={video.id}
                    className="shrink-0 w-full sm:w-77.25 group/card cursor-pointer"
                    onClick={() => handlePlayVideo(video)}
                    initial={{ opacity: 0, y: 25, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 0.45,
                      ease: "easeOut",
                      delay: 0.1 + index * 0.08,
                    }}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-9/16 bg-gray-200">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                        sizes="(max-width: 640px) 100vw, 309px"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 shadow-xl">
                          <Play className="w-7 h-7 text-[#121116] fill-[#121116] ml-0.5" />
                        </div>
                      </div>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        {video.category && (
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white mb-2">
                            {video.category}
                          </span>
                        )}
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {selectedVideo && (
        <VideoDialog
          open={isDialogOpen}
          onOpenChange={handleDialogChange}
          type="file"
          src={selectedVideo.videoUrl}
          title={selectedVideo.title}
        />
      )}
    </motion.section>
  );
};

export default ViralReel;
