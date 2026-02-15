"use client";

import { useEffect, useRef, useState } from "react";

interface VideoCardProps {
  videoUrl: string;
  title: string;
  color: string;
}

const VideoCard = ({ videoUrl, title }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.playsInline = true;
      video.play().catch(() => {
        // Ignore transient autoplay failures and retry below.
      });
    };

    // Try immediately, then again when media is ready.
    tryPlay();
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    // Some browsers pause background videos aggressively; keep retrying lightly.
    const retryTimer = window.setInterval(() => {
      if (video.paused && video.readyState >= 2) {
        tryPlay();
      }
    }, 1500);

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      window.clearInterval(retryTimer);
    };
  }, []);

  return (
    <div className="relative h-52 sm:h-64 lg:h-75 rounded-3xl overflow-hidden shrink-0 w-[160px] sm:w-[200px] lg:w-[237px]">
      <video
        ref={videoRef}
        src={videoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
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
