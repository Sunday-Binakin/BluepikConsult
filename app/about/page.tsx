import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureCard, TagList } from "@/components/ui/Card";
import { Grid, Section, Split } from "@/components/ui/Layout";
import { Logo, PhotoPlaceholder } from "@/components/ui/Media";
import { Eyebrow, Heading, SectionHeading } from "@/components/ui/Typography";
import { founder, mission, values, vision } from "@/lib/content/company";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "About Us",
  description: "BluePik Consult is a Ghana-based practice providing online training and consulting to individuals, businesses and institutions.",
};

function Statement({ label, text, dark }: { label: string; text: string; dark?: boolean }) {
  return (
    <div className={cn("flex flex-col gap-4 rounded-3xl p-8 md:p-11", dark ? "bg-brand-navy" : "bg-brand-mist")}>
      <Eyebrow tone={dark ? "dark" : "light"}>{label}</Eyebrow>
      <p className={cn("font-display text-xl leading-relaxed font-medium md:text-[23px]", dark ? "text-white" : "text-brand-ink")}>
        {text}
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        title="About BluePik Consult"
        lead="A Ghana-based practice providing online training and consulting services to individuals, businesses and institutions."
      />

      <Section>
        <Split>
          <div className="flex flex-col gap-5">
            <Eyebrow>Who we are</Eyebrow>
            <Heading>Professional development and operational improvement, connected</Heading>
            <p>
              BluePik Consult is a sole proprietorship business based in Ghana, providing online training and consulting
              services to individuals, businesses and institutions.
            </p>
            <p>
              We focus on transport, logistics, supply chain management and business operations — the areas where
              everyday decisions shape cost, safety and service quality.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-3xl border border-brand-line bg-brand-cloud p-10 md:p-14">
            <Logo variant="stacked" className="w-full max-w-[340px]" />
          </div>
        </Split>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="Our approach" title="Grounded in how work actually happens" />
        <Grid cols={2}>
          <FeatureCard icon="cap" solidIcon title="How we train" text="Our training connects professional concepts to everyday decisions through:" padding="lg">
            <TagList tags={["Case studies", "Guided discussions", "Practical exercises"]} />
          </FeatureCard>
          <FeatureCard
            icon="search"
            solidIcon
            title="How we consult"
            text="We start by understanding how your organisation works, where difficulties arise and what you want to improve. Then we help you identify actions that fit your priorities and resources."
            padding="lg"
          />
        </Grid>
      </Section>

      <Section>
        <Grid cols={2}>
          <Statement label="Our mission" text={mission} dark />
          <Statement label="Our vision" text={vision} />
        </Grid>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="What guides us" title="Our values" align="center" />
        <Grid cols={4}>
          {values.map((v) => (
            <FeatureCard key={v.title} title={v.title} text={v.text} />
          ))}
        </Grid>
      </Section>

      <Section>
        <div className="flex flex-wrap items-center gap-12">
          <PhotoPlaceholder label="founder portrait" className="h-[380px] w-full max-w-[320px] flex-none" />
          <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-4">
            <Eyebrow>Meet the founder</Eyebrow>
            <Heading>{founder.name}</Heading>
            <p className="font-semibold text-brand-blue">{founder.role}</p>
            <p>{founder.bio}</p>
            <ButtonLink href="/contact" className="mt-2 self-start">Work with us</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
