"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

interface VideoPlayerProps {
  youtubeVideoId: string;
  noControls?: boolean; // NEW PROP
  onPlayExternal?: () => void; // OPTIONAL: external play trigger
}

const VideoPlayer = ({
  youtubeVideoId,
  noControls = false,
  onPlayExternal,
}: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;
  const fallbackThumbnail = `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg`;

  const handlePlay = () => {
    // If noControls mode, external trigger availability
    if (noControls) {
      if (onPlayExternal) onPlayExternal();
      return;
    }

    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <>
      {!isPlaying ? (
        <div className="relative rounded-[32px] overflow-hidden group cursor-pointer">
          <div className="relative w-full aspect-video bg-linear-to-br from-gray-800 to-gray-900">
            {/* Thumbnail */}
            <Image
              src={thumbnailUrl}
              alt="Video showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = fallbackThumbnail;
              }}
            />

            {/* If noControls = false → show default play UI */}
            {!noControls && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="group/btn relative z-10"
                  aria-label="Play video"
                >
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-[40px] backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl flex items-center justify-center transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:bg-white/30">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/btn:scale-95">
                      <Play className="w-8 h-8 lg:w-10 lg:h-10 text-[#1a1a2e] fill-[#1a1a2e] ml-1" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-[40px] border-2 border-white/50 animate-ping opacity-75"></div>
                </button>
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      ) : (
        <div className="relative rounded-[32px] overflow-hidden aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>

          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
            aria-label="Close video"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
