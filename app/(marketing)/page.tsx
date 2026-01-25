import Content from "@/components/home/Content/Content";
import HeroSection from "@/components/home/Hero/HeroSection";
import ServicesSection from "@/components/home/Service/ServiceSection";
import ViralReel from "@/components/home/ViralReel";
import EasySteps from "@/components/home/EasySteps";
import MonthlyGoal from "@/components/home/MonthlyGoal";
import Testimonials from "@/components/home/Testimonials/Testimonials";
import ViralReelTwo from "@/components/home/ViralReelTwo/ViralReelTwo";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Content />
      <ViralReel />
      <ViralReelTwo />
      <EasySteps />
      <MonthlyGoal />
      <Testimonials />
    </main>
  );
}
