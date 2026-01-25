"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Step {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  image: string;
}

const EasySteps = () => {
  const steps: Step[] = [
    {
      id: 1,
      stepNumber: "Step 1.",
      title: "Create your video",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-1.png",
    },
    {
      id: 2,
      stepNumber: "Step 1.",
      title: "Discovery call",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-2.png",
    },
    {
      id: 3,
      stepNumber: "Step 1.",
      title: "Upload the video",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-3.png",
    },
    {
      id: 4,
      stepNumber: "Step 4.",
      title: "We do the Edits",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-4.png",
    },
    {
      id: 5,
      stepNumber: "Step 5.",
      title: "Get your video",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-5.png",
    },
    {
      id: 6,
      stepNumber: "Step 6.",
      title: "We manage Social",
      description:
        "Spend just a few hours capturing your raw videos with ease.",
      image: "/images/home/easy-steps/img-5.png",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6 lg:px-8 bg-[#EBF3FF]">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} // more forgiving for mobile
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-[#121116] leading-tight mb-6">
            Get Your Video{" "}
            <span className="sm:block">Done in 6 Easy Steps</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-[#404040] mb-8 max-w-3xl mx-auto">
            A clear and proven process that makes video creation effortless.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          >
            <Button
              asChild
              className="py-3 px-8 text-base rounded-full bg-[#EA1C31] hover:bg-[#c91729] text-white transition-all duration-300 h-auto font-medium shadow-lg hover:shadow-xl"
            >
              <Link href="/contact-us">Shoot From Our Home</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="py-3 px-8 rounded-full border-2 border-gray-300 bg-white text-[#121116] hover:bg-gray-50 transition-all duration-300 h-auto font-medium text-base"
            >
              <Link href="/contact-us">Shoot From Our Studio</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.05 + index * 0.08,
              }}
            >
              {/* Step Number */}
              <div className="mb-4">
                <span className="text-[#EA1C31] text-lg font-semibold">
                  {step.stepNumber}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#121116] mb-8">
                {step.title}
              </h3>

              {/* Illustration */}
              <div className="relative w-full h-48 mb-8 flex items-center justify-center">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-sm lg:text-base text-[#404040] leading-relaxed mt-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EasySteps;
