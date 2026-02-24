"use client";

import { useEffect, useRef, useState } from "react";
import VideoPlayer from "@/components/ui/video-player";
import VideoDialog from "@/components/ui/video-dialog";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from "framer-motion";
import imagePreview from "@/assets/home/service/image-preview.png";
import Image from "next/image";

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, motionValue, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const ServicesSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stats = [
    { value: 160, suffix: "+", label: "Projects" },
    { value: 100, suffix: "%", label: "Commitment" },
    { value: 45, suffix: "+", label: "Clients" },
  ];

  const youtubeVideoId = "dQw4w9WgXcQ";
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 82%", "center 35%"],
  });

  // Stage 1: text appears. Stage 2: text vanishes while video emerges from icon area.
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36, 0.5],
    [0, 1, 1, 0],
  );
  const textY = useTransform(scrollYProgress, [0, 0.18, 0.5], [28, 0, -20]);
  const iconScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45],
    [0.75, 1, 0.85],
  );
  const iconRotate = useTransform(scrollYProgress, [0, 0.22], [-8, 0]);
  const iconOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.45],
    [0, 1, 0.7],
  );

  const videoOpacity = useTransform(scrollYProgress, [0.34, 0.55], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0.34, 0.72], [0.22, 1]);
  const videoY = useTransform(scrollYProgress, [0.34, 0.72], [-120, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative py-16 lg:py-24 px-6 lg:px-8 bg-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className=" px-0 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-[#000000] leading-[1.35] max-w-[780px] mx-auto">
            We create, edit, and market videos whether{" "}
            <motion.span
              className="inline-flex items-center justify-center rounded-lg mx-1 sm:mx-1.5 align-middle overflow-hidden"
              style={{
                scale: iconScale,
                rotate: iconRotate,
                opacity: iconOpacity,
              }}
            >
              <Image
                src={imagePreview}
                alt="Preview"
                width={126}
                height={80}
                className="object-cover"
              />
            </motion.span>{" "}
            filmed at your <br className="hidden lg:inline" />
            place or sent by you.
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-25">
          <motion.div
            style={{
              opacity: videoOpacity,
              scale: videoScale,
              y: videoY,
              transformOrigin: "50% 0%",
            }}
          >
            <div className="relative">
              {/* Ensure VideoPlayer has NO default controls */}
              <VideoPlayer youtubeVideoId={youtubeVideoId} noControls />

              {/* Custom Figma overlay with play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="relative w-18 h-14 sm:w-45 sm:h-36 lg:w-58.5 lg:h-46.5 rounded-3xl sm:rounded-[36px] lg:rounded-[48px] bg-white/15 border border-white/40 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/25 transition-all duration-300"
                  aria-label="Play video"
                >
                  <Image
                    src="/play.png"
                    alt="Play"
                    width={71}
                    height={84}
                    className="w-6 h-7 sm:w-[71px] sm:h-[84px]"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="stats relative rounded-[24px] overflow-hidden p-6 sm:p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>

                  {index < stats.length - 1 && (
                    <div className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-2 lg:-right-4 h-12 sm:h-16 lg:h-20 w-px bg-white/20" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Dialog */}
      <VideoDialog
        open={isVideoOpen}
        onOpenChange={setIsVideoOpen}
        type="youtube"
        src={youtubeVideoId}
      />
    </motion.section>
  );
};

export default ServicesSection;
