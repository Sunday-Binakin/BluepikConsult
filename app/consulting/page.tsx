import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CheckList, FeatureCard } from "@/components/ui/Card";
import { Grid, Section, Split } from "@/components/ui/Layout";
import { PhotoPlaceholder } from "@/components/ui/Media";
import { Steps } from "@/components/ui/Steps";
import { Eyebrow, Heading, SectionHeading } from "@/components/ui/Typography";
import { consultingServices, consultingSteps } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Operational reviews, transport and logistics advisory, procedures and performance measures, curriculum design and digital project support.",
};

const DISCUSS_PROJECT = "/contact?service=consulting";

const reasons = [
  <><strong className="text-brand-ink">Sector focus</strong> — transport, logistics, supply chain and operations.</>,
  <><strong className="text-brand-ink">Practical plans</strong> — actions sized to your priorities and resources.</>,
  <><strong className="text-brand-ink">Training built in</strong> — we can help your team build the skills to sustain change.</>,
];

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        crumb="Consulting Services"
        title="Improve a process, solve an operational problem or plan a new service"
        lead="We work with clients to understand the problem, assess their options and develop a practical plan."
        actions={<ButtonLink href={DISCUSS_PROJECT} variant="white">Discuss a Consulting Project</ButtonLink>}
      />

      <Section>
        <SectionHeading
          eyebrow="Our services"
          title="How we can support you"
          lead="Depending on the assignment, we can support you with the following services."
        />
        <Grid cols={3}>
          {consultingServices.map((s) => (
            <FeatureCard key={s.title} {...s} solidIcon />
          ))}
          <Card tone="navy">
            <Heading as="h3" size="subtitle" tone="dark">Not sure where to start?</Heading>
            <p className="text-[15px]">Briefly describe the challenge and the outcome you want. We&apos;ll suggest the right kind of support.</p>
            <ButtonLink href="/contact?service=unsure" variant="white" className="mt-auto self-start">Talk to us</ButtonLink>
          </Card>
        </Grid>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="How an engagement works" title="Understand, assess, plan, support" align="center" />
        <Steps steps={consultingSteps} boxed />
      </Section>

      <Section>
        <Split>
          <PhotoPlaceholder label="consultant reviewing operations with a client team" className="h-[320px] md:h-[400px]" />
          <div className="flex flex-col gap-5">
            <Eyebrow>Why BluePik Consult</Eyebrow>
            <Heading>Advice that fits how you operate</Heading>
            <CheckList items={reasons} />
            <ButtonLink href={DISCUSS_PROJECT} className="mt-2 self-start">Discuss a Consulting Project</ButtonLink>
          </div>
        </Split>
      </Section>
    </>
  );
}
