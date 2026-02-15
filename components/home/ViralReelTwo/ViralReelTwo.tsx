"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import VideoDialog from "@/components/ui/video-dialog";

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
  category?: string;
}

const ViralReelTwo = () => {
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

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setTimeout(() => setSelectedVideo(null), 300);
    }
  };

  return (
    <section className="relative py-4 bg-white overflow-hidden">
      {/* Carousel - Full Width Edge to Edge */}
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef2}>
          <div className="flex">
            {duplicatedVideos.map((video, index) => (
              <div
                key={`${video.id}-${index}`}
                className="shrink-0 w-72 sm:w-120 pl-4 group/card cursor-pointer"
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
                      <Play className="w-9 h-9 text-[#3B4C9A] fill-[#3B4C9A] ml-0.5" />
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

      {selectedVideo && (
        <VideoDialog
          open={isDialogOpen}
          onOpenChange={handleDialogChange}
          type="file"
          src={selectedVideo.videoUrl}
          title={selectedVideo.title}
        />
      )}
    </section>
  );
};

export default ViralReelTwo;
