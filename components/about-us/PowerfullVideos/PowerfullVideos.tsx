"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
  category?: string;
}

const PowerfullVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Embla carousel for large videos with auto-scroll
  const [emblaRef2] = useEmblaCarousel(
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

  // Second carousel videos (600px cards)
  const largeVideos: VideoItem[] = [
    {
      id: 6,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
      title: "Workspace Productivity",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      category: "Business",
    },
    {
      id: 7,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
      title: "Stay Tuned",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      category: "Lifestyle",
    },
    {
      id: 8,
      thumbnail:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
      title: "Creative Work",
      videoUrl:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      category: "Creative",
    },
  ];

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...largeVideos, ...largeVideos];

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <section className="relative py-10 lg:py-14 bg-white overflow-hidden">
      {/* Header - Constrained */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6 lg:mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121116] leading-tight">
              Powerful Videos <br />
              That Drive Impact
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-[#404040] leading-relaxed">
              From storytelling to strategy, we create videos that captivate,
              engage, and deliver measurable results.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel - Full Width Edge to Edge */}
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex">
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="shrink-0 w-80 sm:w-150 pl-4 group/card cursor-pointer"
                onClick={() => handlePlayVideo(video)}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-200">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/card:scale-105"
                    sizes="(max-width: 640px) 100vw, 600px"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover/card:scale-110 shadow-xl">
                      <Play className="w-9 h-9 text-[#121116] fill-[#121116] ml-0.5" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    {video.category && (
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-2">
                        {video.category}
                      </span>
                    )}
                    <h3 className="text-white font-bold text-xl lg:text-2xl leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
          <div className="relative w-full aspect-video">
            {selectedVideo && (
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
                controlsList="nodownload"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <DialogClose
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            onClick={handleCloseDialog}
          >
            <span className="text-white text-xl">&times;</span>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PowerfullVideos;

