import { Hero } from "@/components/Hero";
import { FoundingStrip } from "@/components/FoundingStrip";
import { Pillars } from "@/components/Pillars";
import { ProgramsPreview } from "@/components/ProgramsPreview";
import { MissionQuote } from "@/components/MissionQuote";
import { NewsPreview } from "@/components/NewsPreview";
import { NewsletterCTA } from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FoundingStrip />
      <Pillars />
      <ProgramsPreview />
      <MissionQuote />
      <NewsPreview />
      <NewsletterCTA />
    </>
  );
}
