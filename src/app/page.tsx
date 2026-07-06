import HeroModern from "@/components/HeroModern";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import WhyEducation from "@/components/WhyEducation";
import TheProgram from "@/components/TheProgram";
import IncomeStreams from "@/components/IncomeStreams";
import ProofItWorks from "@/components/ProofItWorks";
import FeaturedStudents from "@/components/FeaturedStudents";
import MultipleIncomeStreams from "@/components/MultipleIncomeStreams";
import ShowcaseCards from "@/components/ShowcaseCards";
import ProofResults from "@/components/ProofResults";
import StudentResults from "@/components/StudentResults";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroModern />
      <StatsBar />
      <About />
      <WhyEducation />
      <TheProgram />
      <ProofItWorks />
      <MultipleIncomeStreams />
      <ShowcaseCards />
      <IncomeStreams />
      <ProofResults />
      <StudentResults />
      <FeaturedStudents />
      <CtaBanner />
    </main>
  );
}
