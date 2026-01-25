"use client";

import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type VideoDialogType = "file" | "youtube";
type AspectRatio = "16:9" | "9:16";

interface VideoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: VideoDialogType;
  /**
   * For type="file" → full video URL
   * For type="youtube" → YouTube video ID (not full URL)
   */
  src: string;
  title?: string;
  /**
   * Aspect ratio of the video
   * @default "16:9"
   */
  aspectRatio?: AspectRatio;
}

const VideoDialog = ({
  open,
  onOpenChange,
  type,
  src,
  title,
  aspectRatio = "16:9",
}: VideoDialogProps) => {
  // Track loading state with the src to reset when video changes
  const [loadingState, setLoadingState] = useState({ src: "", isLoading: true });

  const isLoading = loadingState.src !== src || loadingState.isLoading;

  // Handle keyboard events
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    },
    [open, onOpenChange]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const handleVideoLoad = useCallback(() => {
    setLoadingState({ src, isLoading: false });
  }, [src]);

  // Build final src
  const videoSrc =
    type === "youtube"
      ? `https://www.youtube.com/embed/${src}?autoplay=1&rel=0&modestbranding=1`
      : src;

  const isVertical = aspectRatio === "9:16";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={cn(
          "p-0 border-none overflow-hidden bg-transparent shadow-2xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          isVertical
            ? "max-w-[min(400px,90vw)] sm:max-w-[450px]"
            : "max-w-[min(900px,95vw)] sm:max-w-4xl lg:max-w-5xl"
        )}
        showCloseButton={false}
      >
        {/* Glass morphism background */}
        <div className="relative rounded-2xl overflow-hidden bg-black/90 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Video container with aspect ratio */}
          <div
            className={cn(
              "relative w-full",
              isVertical ? "pt-[177.78%]" : "pt-[56.25%]"
            )}
          >
            {/* Loading overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/80">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="w-10 h-10 text-white animate-spin" />
                  <span className="text-white/70 text-sm font-medium">
                    Loading video...
                  </span>
                </div>
              </div>
            )}

            {/* Video content - key forces remount on src change to reset loading */}
            <div className="absolute inset-0" key={src}>
              {type === "youtube" ? (
                <iframe
                  src={videoSrc}
                  title={title ?? "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                  onLoad={handleVideoLoad}
                />
              ) : (
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain bg-black"
                  controlsList="nodownload"
                  onLoadedData={handleVideoLoad}
                  onCanPlay={handleVideoLoad}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>

          {/* Title bar (optional) */}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
              <h3 className="text-white font-medium text-sm sm:text-base truncate">
                {title}
              </h3>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => onOpenChange(false)}
            className={cn(
              "absolute z-50 flex items-center justify-center",
              "w-9 h-9 sm:w-10 sm:h-10",
              "top-3 right-3 sm:top-4 sm:right-4",
              "bg-black/50 hover:bg-black/70",
              "backdrop-blur-md border border-white/20",
              "rounded-full",
              "transition-all duration-200",
              "hover:scale-105 active:scale-95",
              "focus:outline-none focus:ring-2 focus:ring-white/30"
            )}
            aria-label="Close video"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
