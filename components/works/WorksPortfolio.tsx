"use client";

import { useState, useCallback, memo } from "react";
import Image from "next/image";
import { Play, X, Loader2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface VideoItem {
  id: number;
  thumbnail: string;
  title: string;
  videoUrl: string;
}

// Reels data (portrait videos)
const reelsData: VideoItem[] = [
  {
    id: 1,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    title: "Stop Your Child Juice Drinking",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    title: "Start Today",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    title: "Fashion Is Confidence, Style Is Forever",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    title: "Stop Your Child Juice Drinking",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 7,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    title: "Fashion Is Confidence, Style Is Forever",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 8,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

// Videos data (landscape videos)
const videosData: VideoItem[] = [
  {
    id: 1,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: 2,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    title: "Stop Your Child Juice Drinking",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: 3,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    title: "Fashion Is Confidence, Style Is Forever",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 4,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 5,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
    title: "Stop Your Child Juice Drinking",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 6,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
    title: "Fashion Is Confidence, Style Is Forever",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    id: 7,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
    title: "Don't Stop, Keep Moving Forward",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    id: 8,
    thumbnail:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
    title: "Stop Your Child Juice Drinking",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
];

// Memoized Reel Card Component (Portrait 9:16)
const ReelCard = memo(function ReelCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}) {
  const handleClick = useCallback(() => {
    onPlay(video);
  }, [video, onPlay]);

  return (
    <div className="group/card cursor-pointer" onClick={handleClick}>
      <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-300 scale-90 group-hover/card:scale-100 shadow-2xl">
            <Play className="w-7 h-7 text-[#750037] fill-[#750037] ml-1" />
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-sm lg:text-base leading-tight drop-shadow-lg">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

// Memoized Video Card Component (Landscape 16:9)
const VideoCard = memo(function VideoCard({
  video,
  onPlay,
}: {
  video: VideoItem;
  onPlay: (video: VideoItem) => void;
}) {
  const handleClick = useCallback(() => {
    onPlay(video);
  }, [video, onPlay]);

  return (
    <div className="group/card cursor-pointer" onClick={handleClick}>
      <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/card:scale-110"
          sizes="(max-width: 640px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-300" />

        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 scale-90 group-hover/card:scale-100 shadow-2xl">
            <Play className="w-9 h-9 text-[#750037] fill-[#750037] ml-1" />
          </div>
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-lg lg:text-xl leading-tight drop-shadow-lg">
            {video.title}
          </h3>
        </div>
      </div>
    </div>
  );
});

// Enhanced Video Dialog Component
const VideoDialog = memo(function VideoDialog({
  video,
  isOpen,
  onClose,
}: {
  video: VideoItem | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleVideoLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] p-0 bg-transparent border-0 shadow-none overflow-hidden">
        <DialogTitle className="sr-only">
          {video?.title || "Video Player"}
        </DialogTitle>

        {/* Glass morphism container */}
        <div className="relative bg-black/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Decorative gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#750037]/20 via-transparent to-purple-500/20 pointer-events-none" />

          {/* Close button - positioned outside */}
          <button
            onClick={onClose}
            className="absolute -top-14 right-0 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 group border border-white/20 hover:border-white/40"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Video Container */}
          <div className="relative">
            {/* Loading State with elegant spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/80 to-black/60 z-20 backdrop-blur-sm">
                <div className="relative">
                  <Loader2 className="w-16 h-16 text-[#750037] animate-spin" />
                  <div className="absolute inset-0 w-16 h-16 border-4 border-[#750037]/20 rounded-full animate-ping" />
                </div>
                <p className="text-white/80 mt-4 text-sm font-medium">
                  Loading video...
                </p>
              </div>
            )}

            {/* Video Player */}
            {video && (
              <div className="relative aspect-video bg-black">
                <video
                  key={video.id}
                  src={video.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                  controlsList="nodownload"
                  onLoadedData={handleVideoLoad}
                  onCanPlay={handleVideoLoad}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Enhanced Title Bar with glass effect */}
            {video && !isLoading && (
              <div className="relative bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 backdrop-blur-md border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl mb-1 tracking-tight">
                      {video.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      Creative Portfolio • High Quality
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                      <span className="text-white/80 text-xs font-medium">
                        HD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

// Memoized Reels Grid
const ReelsGrid = memo(function ReelsGrid({
  videos,
  onPlay,
}: {
  videos: VideoItem[];
  onPlay: (video: VideoItem) => void;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {videos.map((video) => (
        <ReelCard key={video.id} video={video} onPlay={onPlay} />
      ))}
    </div>
  );
});

// Memoized Videos Grid
const VideosGrid = memo(function VideosGrid({
  videos,
  onPlay,
}: {
  videos: VideoItem[];
  onPlay: (video: VideoItem) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} onPlay={onPlay} />
      ))}
    </div>
  );
});

const WorksPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleReels, setVisibleReels] = useState(8);
  const [visibleVideos, setVisibleVideos] = useState(8);

  const handlePlayVideo = useCallback((video: VideoItem) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  }, []);

  const loadMoreReels = useCallback(() => {
    setVisibleReels((prev) => prev + 8);
  }, []);

  const loadMoreVideos = useCallback(() => {
    setVisibleVideos((prev) => prev + 8);
  }, []);

  const displayedReels = reelsData.slice(0, visibleReels);
  const displayedVideos = videosData.slice(0, visibleVideos);

  return (
    <section className="py-16 lg:py-24 px-6 lg:px-8 bg-gradient-to-br from-[#FAF4F8] via-[#FFF5FB] to-[#F8F0F5]">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-[clamp(48px,8vw,92px)] font-semibold text-[#121116] mb-4 leading-[0.98] tracking-[-0.02em]">
            Our Creative
            <br />
            Portfolio
          </h1>
          <p className="text-base lg:text-lg text-[#404040] max-w-xl mx-auto leading-relaxed">
            Explore our collection of design & creative works crafted with
            passion, precision, and purpose.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="reels" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-transparent p-0 gap-3">
              <TabsTrigger
                value="reels"
                className="px-8 py-3 text-base rounded-full data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#121116] data-[state=inactive]:border data-[state=inactive]:border-gray-200 transition-colors font-medium"
              >
                Reels
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="px-8 py-3 text-base rounded-full data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-white data-[state=inactive]:text-[#121116] data-[state=inactive]:border data-[state=inactive]:border-gray-200 transition-colors font-medium"
              >
                Videos
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Reels Tab Content */}
          <TabsContent value="reels" className="mt-0">
            <ReelsGrid videos={displayedReels} onPlay={handlePlayVideo} />

            {visibleReels < reelsData.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreReels}
                  className="px-8 py-3 bg-gradient-to-r from-[#750037] to-[#5a002a] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </TabsContent>

          {/* Videos Tab Content */}
          <TabsContent value="videos" className="mt-0">
            <VideosGrid videos={displayedVideos} onPlay={handlePlayVideo} />

            {visibleVideos < videosData.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMoreVideos}
                  className="px-8 py-3 bg-gradient-to-r from-[#750037] to-[#5a002a] text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  Load More
                </button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Enhanced Video Dialog */}
      <VideoDialog
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default WorksPortfolio;
