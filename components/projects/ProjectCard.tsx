import Link from "next/link";
import type { ReactNode } from "react";
import { Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";
import type { ProjectEntry } from "@/lib/content/projects";

/** A clickable project card with a visual on top (or on the left when `featured`). */
export function ProjectCard({ project, visual, featured = false }: { project: ProjectEntry; visual: ReactNode; featured?: boolean }) {
  return (
    <Link
      href={project.href}
      className={cn(
        "group grid overflow-hidden rounded-2xl border border-brand-line bg-white transition duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(4,63,141,0.08)]",
        featured && "lg:grid-cols-2",
      )}
    >
      <div className={cn("relative overflow-hidden", featured ? "min-h-80" : "min-h-48")}>{visual}</div>
      <div className={cn("flex flex-col justify-center gap-3.5", featured ? "p-7 md:p-10" : "p-7 md:p-8")}>
        <ul className="flex flex-wrap gap-2" aria-label="Tags">
          {project.tags.map((t) => (
            <li key={t} className="rounded-full bg-brand-mist px-3 py-1.5 text-sm font-medium text-brand-navy">{t}</li>
          ))}
        </ul>
        <Heading as="h2" size={featured ? "title" : "subtitle"}>{project.title}</Heading>
        <p className={featured ? undefined : "text-[15px]"}>{project.summary}</p>
        <span className="font-semibold text-brand-blue group-hover:text-brand-navy">
          {project.cta} <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
