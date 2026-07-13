import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { CoreServices } from "@/components/sections/CoreServices";
import { TechStack } from "@/components/sections/TechStack";
import { Industries } from "@/components/sections/Industries";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Process } from "@/components/sections/Process";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Awards } from "@/components/sections/Awards";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <TrustedBy />
      <WhatWeDo />
      <CoreServices />
      <TechStack />
      <Industries />
      <FeaturedProducts />
      <Process />
      <CaseStudies />
      <BlogPreview />
      <Awards />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
