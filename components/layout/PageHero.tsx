import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { Container } from "@/components/ui/Layout";
import { RisingBars } from "@/components/ui/Media";
import { Heading } from "@/components/ui/Typography";
import type { NavItem } from "@/lib/content/site";

/** Navy banner at the top of every inner page. */
export function PageHero({
  crumb,
  parents = [],
  tags = [],
  title,
  lead,
  actions,
}: {
  crumb: string;
  /** Pages between Home and this one, e.g. [{ href: "/projects", label: "Projects" }]. */
  parents?: NavItem[];
  tags?: string[];
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-14 text-brand-haze md:py-20">
      <RisingBars />
      <Container className="relative flex flex-col gap-4.5">
        <nav aria-label="Breadcrumb" className="text-sm text-[#a9c4ec]">
          <Link href="/" className="text-white hover:underline">Home</Link>
          {parents.map((p) => (
            <Fragment key={p.href}>
              {" / "}
              <Link href={p.href} className="text-white hover:underline">{p.label}</Link>
            </Fragment>
          ))}
          {" / "}
          <span aria-current="page">{crumb}</span>
        </nav>
        {tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2" aria-label="Tags">
            {tags.map((t) => (
              <li key={t} className="rounded-full bg-white/14 px-3 py-1.5 text-sm font-medium text-white">{t}</li>
            ))}
          </ul>
        ) : null}
        <Heading as="h1" size="display" tone="dark" className="max-w-4xl">{title}</Heading>
        <p className="text-lead max-w-3xl text-brand-haze">{lead}</p>
        {actions ? <div className="mt-2 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">{actions}</div> : null}
      </Container>
    </section>
  );
}
