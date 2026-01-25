"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  saveText: string;
  features: string[];
}

const PricingCard = ({
  title,
  price,
  saveText,
  features,
}: PricingCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col">
      {/* Title */}
      <h3 className="text-2xl lg:text-3xl font-bold text-[#121116] mb-6">
        {title}
      </h3>

      {/* Nested Tabs for Upfront/Monthly */}
      <Tabs defaultValue="upfront" className="w-full mb-8">
        <TabsList className="bg-[#F4E8F4] p-1 sm:p-2 gap-2 w-full rounded-full h-14! md:h-16!">
          <TabsTrigger
            value="upfront"
            className="flex-1 py-2.5 px-4 sm:px-6 h-auto rounded-full bg-transparent text-[#121116] data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#121116] transition-colors font-semibold text-sm sm:text-base"
          >
            Upfront
          </TabsTrigger>
          <TabsTrigger
            value="monthly"
            className="flex-1 py-2.5 px-4 sm:px-6 h-auto rounded-full bg-transparent text-[#121116] data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#121116] transition-colors font-semibold text-sm sm:text-base"
          >
            Monthly
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upfront" className="mt-6">
          {/* Price */}
          <div className="mb-8">
            <div className="flex flex-wrap items-end gap-2 sm:gap-3">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121116]">
                {price}
              </span>
              <span className="text-xs sm:text-sm text-[#750037] font-medium pb-1 sm:pb-2">
                {saveText}
              </span>
            </div>
          </div>

          {/* What's Included */}
          <div className="mb-8">
            <h4 className="text-lg font-bold text-[#121116] mb-4">
              What&apos;s included
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#750037] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#404040] leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Select Plan Button */}
          <Link
            href="/contact-us"
            className="block w-full py-3.5 sm:py-4 px-6 bg-[#F4E8F4] text-[#121116] rounded-full font-semibold text-center text-sm sm:text-base hover:bg-[#750037] hover:text-white transition-colors duration-300"
          >
            Select Plan
          </Link>
        </TabsContent>

        <TabsContent value="monthly" className="mt-6">
          <div className="text-center py-6 sm:py-8">
            <p className="text-sm text-[#404040]">
              Monthly payment option coming soon
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface SimplePricingCardProps {
  title: string;
  price: string;
  priceSubtext: string;
  features: string[];
}

const SimplePricingCard = ({
  title,
  price,
  priceSubtext,
  features,
}: SimplePricingCardProps) => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col">
      {/* Title */}
      <h3 className="text-2xl lg:text-3xl font-bold text-[#121116] mb-6">
        {title}
      </h3>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-end gap-2">
          <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#121116]">
            {price}
          </span>
          <span className="text-base text-[#121116] pb-2">/monthly</span>
        </div>
        {priceSubtext && (
          <p className="text-sm text-[#750037] mt-2">{priceSubtext}</p>
        )}
      </div>

      {/* What's Included */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-[#121116] mb-4">
          What&apos;s included
        </h4>
        <ul className="space-y-3 sm:space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#750037] shrink-0 mt-0.5" />
              <span className="text-sm text-[#404040] leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Select Plan Button */}
      <Link
        href="/contact-us"
        className="block w-full py-3.5 sm:py-4 px-6 bg-[#F4E8F4] text-[#121116] rounded-full font-semibold text-center text-sm sm:text-base hover:bg-[#750037] hover:text-white transition-colors duration-300"
      >
        Select Plan
      </Link>
    </div>
  );
};

const PricingPlans = () => {
  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-6xl font-semibold text-[#121116] mb-4">
          Pick your Suitable plan
        </h2>
        <p className="text-base lg:text-2xl text-[#404040] max-w-3xl mx-auto font-normal">
          We started with a strong foundation, than simply built all of the
          sales
          <br />
          and marketing tools ALL businesses need under one platform.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="comprehensive" className="w-full">
        <div className="flex justify-center mb-8 sm:mb-12 px-3">
          <TabsList className="bg-transparent p-0 gap-2 sm:gap-3 flex flex-wrap justify-center">
            <TabsTrigger
              value="comprehensive"
              className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base rounded-full bg-[#4A1942] text-white data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-[#F5F0F7] data-[state=inactive]:text-[#121116] hover:bg-[#3d1436] transition-colors font-medium w-full sm:w-auto text-center"
            >
              Comprehensive Package
            </TabsTrigger>
            <TabsTrigger
              value="monthly"
              className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base rounded-full bg-[#F5F0F7] text-[#121116] data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-[#F5F0F7] data-[state=inactive]:text-[#121116] hover:bg-[#e8dde8] transition-colors font-medium w-full sm:w-auto text-center"
            >
              Monthly Video Editing
            </TabsTrigger>
            <TabsTrigger
              value="single"
              className="px-4 sm:px-8 py-3 sm:py-5 text-sm sm:text-base rounded-full bg-[#F5F0F7] text-[#121116] data-[state=active]:bg-[#750037] data-[state=active]:text-white data-[state=inactive]:bg-[#F5F0F7] data-[state=inactive]:text-[#121116] hover:bg-[#e8dde8] transition-colors font-medium w-full sm:w-auto text-center"
            >
              Single video edits
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="comprehensive" className="mt-16 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <PricingCard
              title="36 Reels Package"
              price="£4099"
              saveText="Save £40010 Extra Reels"
              features={[
                "Research & Strategy: In-depth industry and competitor analysis for maximum impact.",
                "Scriptwriting: Bespoke scripts tailored to your brands voice and goals.",
                "Editing: 36 reels in 90 days, using cutting-edge editing techniques.",
                "Recording: 1 session at our Central London studio using premium gear.",
                "Publishing: Coordinated distribution across social platforms.",
                "Review: A thorough strategic review of performance insights.",
                "Double Down: Based on whats working, we amplify your successful content, refining and pushing it even further for maximum impact.",
              ]}
            />
            <PricingCard
              title="60 Reels Package"
              price="£5099"
              saveText="Save £40010 Extra Reels"
              features={[
                "Research & Strategy: In-depth industry and competitor analysis for maximum impact.",
                "Scriptwriting: Bespoke scripts tailored to your brands voice and goals.",
                "Editing: 36 reels in 90 days, using cutting-edge editing techniques.",
                "Recording: 1 session at our Central London studio using premium gear.",
                "Publishing: Coordinated distribution across social platforms.",
                "Review: A thorough strategic review of performance insights.",
                "Double Down: Based on whats working, we amplify your successful content, refining and pushing it even further for maximum impact.",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="monthly" className="mt-16 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <SimplePricingCard
              title="Short-Form Content"
              price="£799"
              priceSubtext="£729 per month (two months advance payment is required)"
              features={[
                "Self-Shot Editing Service: Expert editing service for clients who prefer to shoot their own footage.",
                "Dedicated Creative Team: Includes one dedicated editor and one creative director to refine your vision.",
                "Content Volume: 16 reels per month (4 per week), maximum of 60 seconds per video.",
                "Revision Policy: Two revisions per video to ensure quality and brand alignment.",
                "Pricing: £799 per month | 6-month contract: £729/month (two months advance payment required)",
                "Content Focus: Specialized in creating engaging short-form content for social media.",
              ]}
            />
            <SimplePricingCard
              title="Long-Form Content"
              price="£1,200"
              priceSubtext=""
              features={[
                "Ideal For: Content creators, businesses, or agencies producing regular long-form videos",
                "Long-Form Focus: Up to 4 videos per month (each up to 15 minutes)",
                "Professional Editing: Professional editing with color correction and audio enhancement",
                "Motion Graphics: Inclusion of motion graphics and transitions",
                "Revision Flexibility: Up to 3 revisions per video",
                "Platform Optimization: Optimized for platforms like YouTube or Vimeo",
                "Thumbnail Design: Thumbnail design for each video",
                "Turnaround Time: 5-7 business days per video",
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="single" className="mt-16 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <SimplePricingCard
              title="One Reels Package"
              price="£799"
              priceSubtext="£729 per month (two months advance payment is required)"
              features={[
                "Professional editing for individual reels with full custom graphics, captions, and music.",
                "$59 per reel (up to 60 seconds duration)",
                "10+ reels: $51 per reel | 20+ reels: $45 per reel",
                "Add $20 per reel for 48-hour turnaround priority editing",
                "Full post-production including color grading, motion graphics, and audio mastering",
                "Vertical (9:16) format optimized for Instagram/TikTok",
              ]}
            />
            <SimplePricingCard
              title="One Reels Package"
              price="£1,200"
              priceSubtext=""
              features={[
                "One-off projects, promotional content, or special events",
                "1 video (up to 15 minutes)",
                "Professional editing with color correction and audio enhancement",
                "Inclusion of motion graphics and transitions",
                "Up to 2 revisions",
                "Optimized for desired platform",
                "Thumbnail design included",
                "5-7 business days",
              ]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PricingPlans;
