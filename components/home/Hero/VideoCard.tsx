"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  color: string;
  isActive: boolean;
}

const VideoCard = ({ videoUrl, title, isActive }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      // Play video when card becomes active
      video.play().catch((error) => {
        console.log("Video playback failed:", error);
      });
    } else {
      // Pause and reset when card is not active
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className="relative h-[400px] rounded-[16px] overflow-hidden flex-shrink-0 w-[237px]">
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsLoaded(true)}
      />

      {/* Optional: Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Optional: Title overlay at bottom */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-white font-bold text-lg leading-tight">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
