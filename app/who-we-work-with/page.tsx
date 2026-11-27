import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { ArrowLink } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/Card";
import { Grid, Section } from "@/components/ui/Layout";
import { SectionHeading } from "@/components/ui/Typography";
import { audiences, sectors, testimonials } from "@/lib/content/company";

export const metadata: Metadata = {
  title: "Who We Work With",
  description:
    "Professionals, organisations strengthening their teams, and businesses reviewing transport, logistics or operating practices.",
};

export default function WhoWeWorkWithPage() {
  return (
    <>
      <PageHero
        crumb="Who We Work With"
        title="Who we work with"
        lead="We work with professionals seeking career development, organisations looking to strengthen their teams, and businesses reviewing their transport, logistics or operating practices."
      />

      <Section>
        <SectionHeading eyebrow="Find your starting point" title="Three ways people work with us" />
        <Grid cols={3}>
          {audiences.map((a) => (
            <FeatureCard key={a.title} icon={a.icon} title={a.title} text={a.text} padding="lg">
              <ArrowLink href={a.href} className="mt-auto">{a.cta}</ArrowLink>
            </FeatureCard>
          ))}
        </Grid>
      </Section>

      <Section tone="cloud">
        <SectionHeading eyebrow="Sectors" title="Our services are suited to" />
        <Grid cols={4}>
          {sectors.map((s) => (
            <FeatureCard key={s.title} icon={s.icon} solidIcon title={s.title} />
          ))}
        </Grid>
      </Section>

      {testimonials.length > 0 ? (
        <Section>
          <SectionHeading eyebrow="What clients say" title="Results from real teams" align="center" />
          <Grid cols={2}>
            {testimonials.map((t) => (
              <figure key={t.name} className="m-0 flex flex-col gap-3 rounded-3xl border border-brand-line p-8">
                <blockquote className="font-display text-xl text-brand-ink">“{t.quote}”</blockquote>
                <figcaption className="text-[15px]">{t.name}, {t.role}</figcaption>
              </figure>
            ))}
          </Grid>
        </Section>
      ) : null}
    </>
  );
}
