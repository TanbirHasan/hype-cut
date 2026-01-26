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
    <section className="relative py-16 lg:py-24 bg-[#F5F5F5] overflow-hidden">
      {/* Header - Constrained */}
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#121116] leading-tight">
              What Our
              <br />
              Clients Say
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-sm sm:text-base lg:text-2xl text-[#404040] leading-relaxed">
              From YouTubers to startups, our clients share how our editing and
              strategy helped them scale their content and audience.
            </p>
          </div>
        </div>
      </div>

      {/* Carousel - Full Width Edge to Edge */}
      <div className="w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {duplicatedTestimonials.map((testimonial, index) => {
              const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.youtubeVideoId}/maxresdefault.jpg`;

              return (
                <div
                  key={`${testimonial.id}-${index}`}
                  className="shrink-0 w-[85vw] sm:w-[75vw] lg:w-[55vw] min-w-0"
                >
                    <div
                      className={`${testimonial.bgColor} ${testimonial.textColor} rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 lg:p-10 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-16`}
                    >
                      {/* Left Side - Text Content */}
                      <div className="flex-1 space-y-6 sm:space-y-8 lg:space-y-12">
                        {/* Client Info + Quote */}
                        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                          <div className="flex items-start gap-3">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-white shrink-0">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-1 sm:gap-2">
                              <div>
                                <h3 className="font-bold text-base sm:text-lg lg:text-xl">
                                  {testimonial.name}
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg">
                                  {testimonial.role}
                                </p>
                              </div>
                              {/* Rating Badge */}
                              <div className="inline-block w-fit px-3 sm:px-4 py-1 sm:py-1.5 bg-white rounded-full">
                                <span className="font-bold text-xs sm:text-sm lg:text-base text-[#121116]">
                                  {testimonial.rating}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-base sm:text-xl lg:text-3xl font-semibold mb-4 sm:mb-6 lg:mb-8 leading-tight">
                            &quot;{testimonial.quote}&quot;
                          </blockquote>
                        </div>

                        {/* Stats */}
                        <div>
                          <p className="text-xs sm:text-sm lg:text-lg mb-2 sm:mb-3">
                            {testimonial.startedWith}
                          </p>
                          <div className="flex gap-6 sm:gap-8 lg:gap-12">
                            <div>
                              <div className="text-xl sm:text-2xl font-semibold mb-1">
                                {testimonial.followersGained}
                              </div>
                              <div className="text-xs sm:text-sm lg:text-lg">
                                Followers Gained
                              </div>
                            </div>
                            <div>
                              <div className="text-xl sm:text-2xl font-semibold mb-1">
                                {testimonial.viewCount}
                              </div>
                              <div className="text-xs sm:text-sm lg:text-lg">
                                View Count
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Video Thumbnail */}
                      <div className="shrink-0 w-full lg:w-72">
                        <div
                          className="relative rounded-3xl sm:rounded-[24px] overflow-hidden h-48 sm:h-64 lg:h-105.25 bg-[#1a1a2e] cursor-pointer group/video"
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
                          <div className="absolute top-4 sm:top-6 left-0 right-0 text-center px-4 sm:px-6">
                            <h4 className="text-white font-bold text-sm sm:text-lg lg:text-xl">
                              {testimonial.videoTitle}
                            </h4>
                          </div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover/video:scale-110 shadow-2xl">
                              <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#EA1C31] fill-[#EA1C31] ml-0.5 sm:ml-1" />
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
