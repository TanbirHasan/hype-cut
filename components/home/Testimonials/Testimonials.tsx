"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import VideoDialog from "@/components/ui/video-dialog";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: string;
  quote: string;
  videoTitle: string;
  youtubeVideoId: string;
  startedWith: string;
  followersGained: string;
  viewCount: string;
  bgColor: string;
  textColor: string;
}

const Testimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState<{
    youtubeVideoId: string;
    videoTitle: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [emblaRef] = useEmblaCarousel(
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

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Svenja Maltzahn",
      role: "Entrepreneur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Svenja1",
      rating: "4.6K+",
      quote:
        "I love working with this team. I feel so comfortable and everyone is amazing",
      videoTitle: "DR SARA'S CASE STUDY",
      youtubeVideoId: "dQw4w9WgXcQ",
      startedWith: "Started with 0 Followers",
      followersGained: "66K",
      viewCount: "13M+",
      bgColor: "bg-[#008A95]",
      textColor: "text-white",
    },
    {
      id: 2,
      name: "Svenja Maltzahn",
      role: "Entrepreneur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Svenja2",
      rating: "4.6K+",
      quote:
        "I love working with this team. I feel so comfortable and everyone is amazing",
      videoTitle: "DR SARA'S CASE STUDY",
      youtubeVideoId: "jNQXAC9IVRw",
      startedWith: "Started with 0 Followers",
      followersGained: "66K",
      viewCount: "13M+",
      bgColor: "bg-[#FFB38A]",
      textColor: "text-[#121116]",
    },
    {
      id: 3,
      name: "John Smith",
      role: "Content Creator",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      rating: "5.2K+",
      quote:
        "The best decision I made for my business. Results speak for themselves!",
      videoTitle: "SUCCESS STORY",
      youtubeVideoId: "9bZkp7q19f0",
      startedWith: "Started with 0 Followers",
      followersGained: "85K",
      viewCount: "20M+",
      bgColor: "bg-[#9B59B6]",
      textColor: "text-white",
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const handlePlayVideo = (youtubeVideoId: string, videoTitle: string) => {
    setSelectedVideo({ youtubeVideoId, videoTitle });
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      handleCloseDialog();
    }
  };

  return (
    <section className="relative py-10 lg:py-14 bg-[#F5F5F5] overflow-hidden">
      {/* Header - Constrained */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 mb-6 lg:mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#121116] leading-tight">
              What Our
              <br />
              Clients Say
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-sm sm:text-base lg:text-base text-[#404040] leading-relaxed">
              From YouTubers to startups, our clients share how our editing and
              strategy helped them scale their content and audience.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel - Full Width Edge to Edge */}
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {duplicatedTestimonials.map((testimonial, index) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.youtubeVideoId}/maxresdefault.jpg`;

              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="shrink-0 w-[85vw] sm:w-[75vw] lg:w-[50vw] min-w-0 pl-4"
                >
                    <div
                      className={`${testimonial.bgColor} ${testimonial.textColor} rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-8`}
                    >
                      {/* Left Side - Text Content */}
                      <div className="flex-1 space-y-4 sm:space-y-5 lg:space-y-6">
                        {/* Client Info + Quote */}
                        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                          <div className="flex items-start gap-3">
                            <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full overflow-hidden bg-white shrink-0">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-1">
                              <div>
                                <h3 className="font-bold text-sm sm:text-base lg:text-base">
                                  {testimonial.name}
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-sm">
                                  {testimonial.role}
                                </p>
                              </div>
                              {/* Rating Badge */}
                              <div className="inline-block w-fit px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white rounded-full">
                                <span className="font-bold text-xs sm:text-xs lg:text-sm text-[#121116]">
                                  {testimonial.rating}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-sm sm:text-base lg:text-xl font-semibold mb-3 sm:mb-4 leading-tight">
                            &quot;{testimonial.quote}&quot;
                          </blockquote>
                        </div>

                        {/* Stats */}
                        <div>
                          <p className="text-xs sm:text-xs lg:text-sm mb-1.5 sm:mb-2">
                            {testimonial.startedWith}
                          </p>
                          <div className="flex gap-4 sm:gap-6 lg:gap-8">
                            <div>
                              <div className="text-lg sm:text-xl font-semibold mb-0.5">
                                {testimonial.followersGained}
                              </div>
                              <div className="text-xs sm:text-xs lg:text-sm">
                                Followers Gained
                              </div>
                            </div>
                            <div>
                              <div className="text-lg sm:text-xl font-semibold mb-0.5">
                                {testimonial.viewCount}
                              </div>
                              <div className="text-xs sm:text-xs lg:text-sm">
                                View Count
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Video Thumbnail */}
                      <div className="shrink-0 w-full lg:w-56">
                        <div
                          className="relative rounded-2xl overflow-hidden h-40 sm:h-48 lg:h-72 bg-[#1a1a2e] cursor-pointer group/video"
                          onClick={() =>
                            handlePlayVideo(
                              testimonial.youtubeVideoId,
                              testimonial.videoTitle,
                            )
                          }
                        >
                          {/* YouTube Thumbnail */}
                          <Image
                            src={thumbnailUrl}
                            alt={testimonial.videoTitle}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/video:scale-105"
                            sizes="(max-width: 1024px) 100vw, 420px"
                          />

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/50" />

                          {/* Video Title */}
                          <div className="absolute top-3 sm:top-4 left-0 right-0 text-center px-3 sm:px-4">
                            <h4 className="text-white font-bold text-xs sm:text-sm lg:text-base">
                              {testimonial.videoTitle}
                            </h4>
                          </div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover/video:scale-110 shadow-2xl">
                              <Play className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#EA1C31] fill-[#EA1C31] ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Shared reusable video dialog */}
      {selectedVideo && (
        <VideoDialog
          open={isDialogOpen}
          onOpenChange={handleDialogChange}
          type="youtube"
          src={selectedVideo.youtubeVideoId}
          title={selectedVideo.videoTitle}
        />
      )}
    </section>
  );
};

export default Testimonials;

