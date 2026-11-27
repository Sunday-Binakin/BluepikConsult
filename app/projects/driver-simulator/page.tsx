import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { DriverSimulator } from "@/components/simulator/DriverSimulator";
import { Section } from "@/components/ui/Layout";

export const metadata: Metadata = {
  title: "Driver simulator",
  description:
    "Practise road signs and a stop-line drill, then take a theory test and hazard perception, all in your browser. A practice tool, not an official DVLA test.",
};

export default function DriverSimulatorPage() {
  return (
    <>
      <PageHero
        crumb="Driver simulator"
        parents={[{ href: "/projects", label: "Projects" }]}
        title="Driver simulator"
        lead="Practise like a learner, then test yourself like a candidate. Everything runs in your browser."
      />
      <Section className="md:pt-14">
        <DriverSimulator />
      </Section>
      <RelatedProjects current="driver-simulator" />
    </>
  );
}
