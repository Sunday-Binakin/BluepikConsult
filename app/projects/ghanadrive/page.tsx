import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { CheckList } from "@/components/ui/Card";
import { Container, Grid, Section, Split } from "@/components/ui/Layout";
import { Steps } from "@/components/ui/Steps";
import { Eyebrow, Heading, SectionHeading } from "@/components/ui/Typography";
import { ghanaDrive } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "GhanaDrive case study",
  description:
    "How BluePik Consult supported GhanaDrive with digital enrolment and attendance records for Ghana's driving schools.",
};

const PROJECTS = [{ href: "/projects", label: "Projects" }];

export default function GhanaDrivePage() {
  return (
    <>
      <PageHero
        crumb="GhanaDrive"
        parents={PROJECTS}
        tags={["Client project", "Driver training"]}
        title="GhanaDrive: digital training records for Ghana's driving schools"
        lead="Ghana's law requires every new driver to complete certified training before a licence. GhanaDrive needed a reliable way for driving schools to record that training and report it. We helped make it happen."
      />

      {/* At a glance */}
      <section className="border-b border-brand-line py-8">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ghanaDrive.glance.map((g) => (
            <div key={g.label} className="flex flex-col gap-1">
              <span className="text-eyebrow text-brand-slate">{g.label}</span>
              <strong className="text-brand-ink">{g.value}</strong>
            </div>
          ))}
        </Container>
      </section>

      <Section>
        <Split align="start">
          <div className="flex flex-col gap-4.5">
            <Eyebrow>The challenge</Eyebrow>
            <Heading>Proving that training actually happened</Heading>
            <p>
              Under Ghana&apos;s road traffic regulations, a learner-licence applicant must show at least 48 hours of basic
              driver training certified by a recognised driver training institution. GhanaDrive, which represents the
              country&apos;s driving schools, has publicly pushed for this rule to be fully enforced.
            </p>
            <p>
              Enforcement depends on evidence. Paper registers are easy to fill in after the fact and hard to check, and
              the regulator needs records it can trust before a candidate sits the theory test.
            </p>
          </div>
          <div className="flex flex-col gap-4.5">
            <Eyebrow>What we delivered</Eyebrow>
            <Heading>One platform for schools, candidates and the regulator</Heading>
            <CheckList
              items={ghanaDrive.delivered.map((d) => (
                <><strong className="text-brand-ink">{d.title}</strong> — {d.text}</>
              ))}
            />
          </div>
        </Split>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="How it works" title="From registration to a verified training record" align="center" />
        <Steps steps={ghanaDrive.steps} boxed />
      </Section>

      <Section>
        <Split align="start">
          <div className="flex flex-col gap-4.5">
            <Eyebrow>Our approach</Eyebrow>
            <Heading>Practical, step by step</Heading>
            <p>
              We started with how driving schools actually run their classes, then turned that into clear requirements for
              the system. We worked with the development team through build and testing, and with GhanaDrive and DVLA users
              on access, reports and day-to-day support.
            </p>
            <p>
              As the system went into use, we kept reviewing how it was used in practice and raised improvements with
              GhanaDrive, so the records stay as trustworthy as the regulation intends.
            </p>
          </div>
          <div className="flex flex-col gap-4.5">
            <Eyebrow>Results</Eyebrow>
            <Grid cols={2}>
              {ghanaDrive.results.map((r) => (
                <div key={r.label} className="rounded-2xl bg-brand-mist p-6">
                  <div className="font-display text-4xl font-bold text-brand-navy">{r.value}</div>
                  <p className="text-[15px]">{r.label}</p>
                </div>
              ))}
            </Grid>
            <blockquote className="mt-2 border-l-3 border-brand-blue py-1.5 pl-4.5 font-display text-lg text-brand-ink">
              “{ghanaDrive.quote}”
            </blockquote>
          </div>
        </Split>
      </Section>

      <RelatedProjects current="ghanadrive" />
    </>
  );
}
