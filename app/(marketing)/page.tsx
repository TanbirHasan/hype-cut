import Content from "@/components/home/Content/Content";
import HeroSection from "@/components/home/Hero/HeroSection";
import ServicesSection from "@/components/home/Service/ServiceSection";
import ViralReel from "@/components/home/ViralReel";
import EasySteps from "@/components/home/EasySteps";
import MonthlyGoal from "@/components/home/MonthlyGoal";
import Testimonials from "@/components/home/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Content />
      <ViralReel />
      <EasySteps />
      <MonthlyGoal />
      <Testimonials />
    </main>
  );
}
