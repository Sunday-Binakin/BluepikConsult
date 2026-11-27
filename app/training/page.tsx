import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Card, FeatureCard, IconBadge, TagList } from "@/components/ui/Card";
import { Grid, Section } from "@/components/ui/Layout";
import { Steps } from "@/components/ui/Steps";
import { Heading, SectionHeading } from "@/components/ui/Typography";
import { trainingAreas, trainingFormats, trainingSteps } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Online Training",
  description:
    "Live online workshops, short courses and customised team training in supply chain, logistics, transport, fleet and business operations.",
};

const REQUEST_TRAINING = "/contact?service=training";

export default function TrainingPage() {
  return (
    <>
      <PageHero
        crumb="Online Training"
        title="Build skills you can apply at work"
        lead="Live online workshops, short courses and customised training for teams. Programmes can be tailored to participants' roles, experience and learning goals."
        actions={<ButtonLink href={REQUEST_TRAINING} variant="white">Request a Training Programme</ButtonLink>}
      />

      <Section>
        <SectionHeading eyebrow="Training formats" title="Choose the format that fits" />
        <Grid cols={3}>
          {trainingFormats.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Grid>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="Training areas" title="Four areas, practical topics" />
        <Grid cols={2}>
          {trainingAreas.map((a) => (
            <Card key={a.title} padding="lg">
              <div className="flex items-center gap-4">
                <IconBadge name={a.icon} solid />
                <Heading as="h3" size="subtitle">{a.title}</Heading>
              </div>
              <TagList tags={a.topics} />
            </Card>
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionHeading eyebrow="How it works" title="From enquiry to applied skills" align="center" />
        <Steps steps={trainingSteps} />
      </Section>

      <Section className="pt-0 md:pt-0">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-brand-mist p-8 md:p-12">
          <div className="flex max-w-xl flex-col gap-2.5">
            <Heading size="subtitle" className="md:text-[28px]">Planning training for a team?</Heading>
            <p>Tell us the topic, how many people and when — we&apos;ll propose a programme.</p>
          </div>
          <ButtonLink href={REQUEST_TRAINING}>Request a Training Programme</ButtonLink>
        </div>
      </Section>
    </>
  );
}
