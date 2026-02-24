"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
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

  // Embla carousel for small videos with auto-scroll
  const [emblaRef1] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      containScroll: false,
    },
    [
      AutoScroll({
        speed: 1,
        startDelay: 0,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
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

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...smallVideos, ...smallVideos];

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

  return (
    <motion.section
      className="relative py-0 md:py-8 bg-white overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header - Constrained */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#121116] leading-tight">
              Turn Moments
              <br />
              Into Viral Reels
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-[#404040] leading-relaxed">
              We craft engaging, social-ready reels designed to boost visibility
              and engagement on every platform.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Carousel - Full Width Edge to Edge */}
      <div className="w-full">
        {/* Carousel container */}
        <div className="overflow-hidden" ref={emblaRef1}>
          <div className="flex">
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="shrink-0 w-56 sm:w-64 pl-4 group/card cursor-pointer"
                onClick={() => handlePlayVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden h-75 bg-gray-200">
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
                      <Play className="w-7 h-7 text-[#3B4C9A] fill-[#3B4C9A] ml-0.5" />
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
              </div>
            ))}
          </div>
        </div>
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
