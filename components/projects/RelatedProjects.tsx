import Link from "next/link";
import { Grid, Section } from "@/components/ui/Layout";
import { Heading } from "@/components/ui/Typography";
import { projects } from "@/lib/content/projects";

/** "Read next" cards for every project except the current one. */
export function RelatedProjects({ current }: { current: string }) {
  const others = projects.filter((p) => p.slug !== current);
  return (
    <Section tone="mist">
      <Grid cols={2}>
        {others.map((p) => (
          <Link key={p.slug} href={p.href} className="flex flex-col gap-3 rounded-2xl bg-white p-7 transition hover:-translate-y-0.5">
            <span className="text-eyebrow text-brand-blue">{p.kind === "tool" ? "Try it" : "Read next"}</span>
            <Heading as="h3" size="subtitle">{p.title}</Heading>
            <span className="font-semibold text-brand-blue">{p.cta} <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </Grid>
    </Section>
  );
}
