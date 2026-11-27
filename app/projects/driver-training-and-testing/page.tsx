import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { RelatedProjects } from "@/components/projects/RelatedProjects";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CheckList, FeatureCard } from "@/components/ui/Card";
import { Container, Grid, Section } from "@/components/ui/Layout";
import { Heading } from "@/components/ui/Typography";
import { driverTrainingArticle as a } from "@/lib/content/projects";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Driver training and testing in Ghana",
  description:
    "Where driver training and testing in Ghana stands under L.I. 2519, where the system is under strain, and how technology can help.",
};

/** Narrow reading column for article text. */
function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex max-w-[800px] flex-col gap-5.5">{children}</div>;
}

function H2({ children }: { children: ReactNode }) {
  return <Heading className="mt-4 md:text-[30px]">{children}</Heading>;
}

export default function DriverTrainingArticlePage() {
  return (
    <>
      <PageHero
        crumb="Insight"
        parents={[{ href: "/projects", label: "Projects" }]}
        tags={["Insight", "8 min read", a.published]}
        title="Driver training and testing in Ghana: where it stands and how to strengthen it"
        lead="Ghana has the rules for well-trained drivers. The challenge now is making sure every licence reflects real training and a fair test."
      />

      <section className="border-b border-brand-line py-9">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.keyStats.map((s) => (
            <div key={s.value} className="flex flex-col gap-1">
              <span className={cn("font-display text-4xl leading-tight font-bold", s.accent ? "text-brand-blue" : "text-brand-navy")}>{s.value}</span>
              <span className="text-[15px]">{s.label}</span>
            </div>
          ))}
        </Container>
      </section>

      <Section className="[&_strong]:text-brand-ink">
        <article className="flex flex-col gap-7">
          <Prose>
            <H2>Why it matters</H2>
            <p>
              Road crashes killed 2,949 people in Ghana in 2025, up from 2,494 the year before, according to provisional
              figures from the National Road Safety Authority (NRSA). That is the highest annual toll in 35 years, and more
              than 63,000 people have now died on Ghana&apos;s roads since 1991. Deaths are rising faster than the number of
              crashes, which means crashes are becoming more severe.
            </p>
            <p>
              Many factors contribute, from road conditions to enforcement. But the competence of the person behind the
              wheel is the one every licence is meant to guarantee. That is why driver training and testing sit at the
              centre of road safety.
            </p>
            <H2>How a new driver gets licensed today</H2>
            <p>For a first-time applicant, the journey runs through an accredited driving school and two DVLA examinations:</p>
          </Prose>

          <Grid cols={4}>
            {a.journey.map((step, i) => (
              <Card key={step.title} tone="cloud" interactive={false}>
                <span className="flex size-10 items-center justify-center rounded-full bg-brand-navy font-display text-[15px] font-bold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Heading as="h3" size="subtitle">{step.title}</Heading>
                <p className="text-[15px]">{step.text}</p>
              </Card>
            ))}
          </Grid>

          <Prose>
            <p>
              The theory test has been computer-based for over a decade. DVLA introduced the system in 2012 to replace
              manual testing, which made the assessment more consistent and harder to manipulate.
            </p>

            <H2>What the law now requires</H2>
            <p>
              Ghana&apos;s road traffic rules were updated in 2026. The new Road Traffic Regulations (L.I. 2519), with 247
              regulations, replace the 2012 regulations (L.I. 2180). GhanaDrive, the national association of driving
              schools, has highlighted three provisions that put training at the heart of licensing:
            </p>
            <CheckList items={a.regulations.map((r) => (<><strong>{r.ref}:</strong> {r.text}</>))} />
            <p>
              In September 2026, GhanaDrive called on DVLA and other agencies to fully put these rules into practice,
              arguing that gaps in training are costing lives.
            </p>

            <H2>Where the system is under strain</H2>
            <p>
              <strong>Proof of training.</strong> A rule that requires 48 hours of training is only as strong as the evidence
              behind it. Paper attendance registers are hard to audit, and the industry itself has warned about &ldquo;back
              door&rdquo; licensing of people who never received professional training.
            </p>
            <p>
              <strong>Too few instructors.</strong> DVLA&apos;s Director of Driver Training, Testing and Licensing has said
              Ghana faces a shortage of professional driving instructors, which limits how many candidates can be trained
              well.
            </p>
            <p>
              <strong>Testing what matters.</strong> A theory test measures knowledge, and a short practical test captures
              one moment of driving. Neither fully shows how a candidate reacts to a sudden hazard, which is where many
              serious crashes begin. Speeding, which officials have linked to the large majority of crashes, is a judgement
              problem as much as a knowledge one.
            </p>

            <H2>How technology can help</H2>
            <p>Technology will not replace a good instructor, but it can make training verifiable and testing more realistic.</p>
          </Prose>

          <Grid cols={2}>
            {a.technology.map((t) => (
              <FeatureCard key={t.title} icon={t.icon} solidIcon title={t.title} text={t.text} interactive={false} />
            ))}
          </Grid>

          <Prose>
            <H2>Where BluePik Consult fits</H2>
            <p>
              We work where training, operations and technology meet. For GhanaDrive, we supported a platform that records
              candidate enrolment and class attendance so training hours can be evidenced. For driving schools, fleet
              operators and institutions, we design practical training programmes and help plan the digital tools that
              support them.
            </p>
            <p>
              To show what simulator-style training and testing can feel like, we built a simple browser-based driver
              simulator. Try it, then tell us what you would want in a full programme.
            </p>
            <div className="mt-1.5 flex flex-col gap-3.5 sm:flex-row">
              <ButtonLink href="/projects/driver-simulator">Try the driver simulator</ButtonLink>
              <ButtonLink href="/contact?service=consulting" variant="outline">Discuss a project</ButtonLink>
            </div>

            <footer className="mt-8 border-t border-brand-line pt-6">
              <h2 className="mb-2.5 text-lg font-semibold text-brand-ink">Sources</h2>
              <ol className="flex list-decimal flex-col gap-1.5 pl-5 text-sm">
                {a.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">{s.title}</a>
                  </li>
                ))}
              </ol>
            </footer>
          </Prose>
        </article>
      </Section>

      <RelatedProjects current="driver-training-and-testing" />
    </>
  );
}
