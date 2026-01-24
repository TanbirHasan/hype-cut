import { PricingHeader, PricingPlans } from "@/components/pricing";
import ConsultationBooking from "@/components/pricing/ScheduleMeeting";

export default function Pricing() {
  return (
    <main className="bg-[#FAF4F8] py-16 lg:py-24 px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <PricingHeader />
        <PricingPlans />
        <ConsultationBooking />
      </div>
    </main>
  );
}
