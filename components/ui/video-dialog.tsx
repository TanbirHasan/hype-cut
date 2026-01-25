"use client";

import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";

type VideoDialogType = "file" | "youtube";

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
}

const VideoDialog = ({
  open,
  onOpenChange,
  type,
  src,
  title,
}: VideoDialogProps) => {
  // Build final src
  const videoSrc =
    type === "youtube"
      ? `https://www.youtube.com/embed/${src}?autoplay=1&rel=0`
      : src;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full p-0 bg-black border-none overflow-hidden">
        <div className="relative w-full">
          {/* Aspect ratio wrapper 16:9 */}
          <div className="relative w-full pt-[56.25%]">
            <div className="absolute inset-0">
              {type === "youtube" ? (
                <iframe
                  src={videoSrc}
                  title={title ?? "Video"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              ) : (
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  className="w-full h-full rounded-lg"
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>
        </div>

        <DialogClose className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
          <X className="w-5 h-5 text-white" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;
