import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WhyEducation from "@/components/WhyEducation";
import TheProgram from "@/components/TheProgram";
import IncomeStreams from "@/components/IncomeStreams";
import ProofItWorks from "@/components/ProofItWorks";
import StudentResults from "@/components/StudentResults";
import Community from "@/components/Community";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <StatsBar />
      <About />
      <WhyEducation />
      <TheProgram />
      <IncomeStreams />
      <ProofItWorks />
      <StudentResults />
      <Community />
      <Pricing />
      <CtaBanner />
    </main>
  );
}
