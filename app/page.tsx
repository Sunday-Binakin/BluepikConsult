import { ArrowLink, ButtonLink } from "@/components/ui/Button";
import { Card, CheckList, FeatureCard, IconBadge } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Container, Grid, Section, Split } from "@/components/ui/Layout";
import { PhotoPlaceholder } from "@/components/ui/Media";
import { Steps } from "@/components/ui/Steps";
import { Eyebrow, Heading, SectionHeading } from "@/components/ui/Typography";
import { sectors } from "@/lib/content/company";
import { focusAreas, howWeWork, trainingAreas } from "@/lib/content/services";
import { site } from "@/lib/content/site";

const serviceLines = [
  {
    icon: "training" as const,
    title: "Online Training",
    text: "Live online workshops, short courses and customised training for teams — tailored to participants' roles, experience and learning goals.",
    points: ["Case studies and guided discussions", "Practical exercises linked to everyday decisions", "For individuals and whole teams"],
    href: "/training",
    cta: "Explore training",
  },
  {
    icon: "growth" as const,
    title: "Consulting Services",
    text: "We start by understanding how your organisation works and where difficulties arise, then help you identify actions that fit your priorities and resources.",
    points: ["Operational reviews and advisory", "Procedures and performance measures", "Digital project support"],
    href: "/consulting",
    cta: "Explore consulting",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Focus areas */}
      <section className="border-y border-brand-line py-7">
        <Container className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {focusAreas.map((f) => (
            <div key={f.label} className="flex items-center gap-3.5">
              <IconBadge name={f.icon} />
              <strong className="text-brand-ink">{f.label}</strong>
            </div>
          ))}
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Two ways we help you move forward"
          lead="Whether you want to develop your own skills, train a team or work through a specific operational problem, we can help you define the next step."
        />
        <Grid cols={2}>
          {serviceLines.map((s) => (
            <Card key={s.title} padding="lg">
              <IconBadge name={s.icon} solid size={26} />
              <Heading as="h3" size="subtitle" className="text-[26px]!">{s.title}</Heading>
              <p>{s.text}</p>
              <CheckList items={s.points} />
              <ArrowLink href={s.href} className="mt-1.5">{s.cta}</ArrowLink>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section tone="cloud">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12">
          <SectionHeading eyebrow="Training areas" title="Build skills you can apply at work" className="mb-0! md:mb-0!" />
          <ButtonLink href="/training" variant="outline">View all training</ButtonLink>
        </div>
        <Grid cols={4}>
          {trainingAreas.map((a) => (
            <FeatureCard key={a.title} icon={a.icon} title={a.title} text={a.text} />
          ))}
        </Grid>
      </Section>

      <Section>
        <SectionHeading eyebrow="How we work" title="Practical from the first conversation" align="center" />
        <Steps steps={howWeWork} />
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Who we work with"
          title="Built for people who keep operations moving"
          lead="Professionals seeking career development, organisations strengthening their teams, and businesses reviewing their transport, logistics or operating practices."
        />
        <Grid cols={4}>
          {sectors.map((s) => (
            <FeatureCard key={s.title} title={s.title} tone="flat" />
          ))}
        </Grid>
        <ArrowLink href="/who-we-work-with" className="mt-7">See who we work with</ArrowLink>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden bg-linear-to-b from-[#f3f7fd] to-white py-16 md:py-24">
      <Container>
        <Split>
          <div className="flex flex-col gap-6">
            <Eyebrow>{site.tagline}</Eyebrow>
            <Heading as="h1" size="display">Specialised online training and practical business consulting</Heading>
            <p className="text-lead">
              BluePik Consult helps professionals build skills they can apply at work and supports organisations in
              improving how they operate — in transport, logistics, supply chain management and business operations.
            </p>
            <div className="mt-2 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact?service=training">Request Training</ButtonLink>
              <ButtonLink href="/contact?service=consulting" variant="outline">Discuss a Consulting Project</ButtonLink>
            </div>
            <p className="text-[15px] text-brand-slate">
              Based in Ghana · Working with individuals, businesses and institutions across Africa
            </p>
          </div>

          <div className="relative min-h-[380px] md:min-h-[460px]">
            <PhotoPlaceholder label="trainer leading a live online session" className="absolute inset-[0_0_40px_40px]" />
            <div className="absolute bottom-0 left-0 flex w-[280px] max-w-[90%] items-center gap-3.5 rounded-[18px] bg-brand-navy px-6 py-5.5 text-white shadow-[0_18px_40px_rgba(4,63,141,0.25)]">
              <Icon name="growth" size={40} className="flex-none text-brand-sky" />
              <div>
                <div className="font-display text-[17px] font-semibold">Skills you apply at work</div>
                <div className="text-sm text-[#bfd4f2]">Case studies · practical exercises</div>
              </div>
            </div>
            <div className="absolute top-6 right-5 flex items-center gap-2.5 rounded-[14px] bg-white px-4 py-3 text-[15px] font-semibold text-brand-ink shadow-[0_12px_30px_rgba(10,33,71,0.12)]">
              <span className="size-2.5 rounded-full bg-whatsapp" aria-hidden="true" />
              Live online workshops
            </div>
          </div>
        </Split>
      </Container>
    </section>
  );
}
