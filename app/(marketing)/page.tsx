import Content from "@/components/home/Content/Content";
import HeroSection from "@/components/home/Hero/HeroSection";
import ServicesSection from "@/components/home/Service/ServiceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Content />
    </main>
  );
}
