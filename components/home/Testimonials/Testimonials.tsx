"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

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
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
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

  const handlePlayVideo = (youtubeVideoId: string) => {
    setSelectedVideo(youtubeVideoId);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#F5F5F5]">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 lg:mb-16">
          <div>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#121116] leading-tight">
              What Our
              <br />
              Clients Say
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base lg:text-xl text-[#404040] leading-relaxed">
              From YouTubers to startups, our clients share how our editing and
              strategy helped them scale their content and audience.
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -ml-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50 -mr-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => {
                const thumbnailUrl = `https://img.youtube.com/vi/${testimonial.youtubeVideoId}/maxresdefault.jpg`;

                return (
                  <div
                    key={testimonial.id}
                    className="flex-[0_0_65%] min-w-0 pr-6"
                  >
                    <div
                      className={`${testimonial.bgColor} ${testimonial.textColor} rounded-[32px] p-6 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-16`}
                    >
                      {/* Left Side - Text Content */}
                      <div className="flex-1 space-y-12">
                        {/* Client Info */}
                        <div className="space-y-12">
                          <div className="flex items-start gap-3">
                            <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-white shrink-0">
                              <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={60}
                                height={60}
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-col gap-2 text-white">
                              <div>
                                <h3 className="font-bold text-xl">
                                  {testimonial.name}
                                </h3>
                                <p className="text-lg">{testimonial.role}</p>
                              </div>
                              {/* Rating Badge */}
                              <div className="inline-block w-fit px-4 py-1.5 bg-white rounded-full">
                                <span className="font-bold text-sm lg:text-base text-[#121116]">
                                  {testimonial.rating}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Quote */}
                          <blockquote className="text-xl lg:text-3xl font-semibold mb-6 lg:mb-8 leading-tight">
                            &quot;{testimonial.quote}&quot;
                          </blockquote>
                        </div>

                        {/* Stats */}
                        <div>
                          <p className="text-sm lg:text-lg mb-3">
                            {testimonial.startedWith}
                          </p>
                          <div className="flex gap-8 lg:gap-12">
                            <div>
                              <div className="text-2xl font-semibold mb-1">
                                {testimonial.followersGained}
                              </div>
                              <div className="text-sm lg:text-lg">
                                Followers Gained
                              </div>
                            </div>
                            <div>
                              <div className="text-2xl font-semibold mb-1">
                                {testimonial.viewCount}
                              </div>
                              <div className="text-sm lg:text-lg">
                                View Count
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - Video Thumbnail */}
                      <div className="shrink-0 w-full lg:w-72">
                        <div
                          className="relative rounded-[24px] overflow-hidden h-105.25 bg-[#1a1a2e] cursor-pointer group/video"
                          onClick={() =>
                            handlePlayVideo(testimonial.youtubeVideoId)
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
                          <div className="absolute top-6 left-0 right-0 text-center px-6">
                            <h4 className="text-white font-bold text-lg lg:text-xl">
                              {testimonial.videoTitle}
                            </h4>
                          </div>

                          {/* Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover/video:scale-110 shadow-2xl">
                              <Play className="w-8 h-8 lg:w-10 lg:h-10 text-[#EA1C31] fill-[#EA1C31] ml-1" />
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
      </div>

      {/* Video Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-none">
          <div className="relative w-full aspect-video">
            {selectedVideo && (
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
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

export default Testimonials;
