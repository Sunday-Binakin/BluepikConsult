import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "light" | "dark"; // light = on white backgrounds, dark = on navy

export function Eyebrow({ tone = "light", className, children }: { tone?: Tone; className?: string; children: ReactNode }) {
  return (
    <span className={cn("text-eyebrow", tone === "light" ? "text-brand-blue" : "text-brand-sky", className)}>
      {children}
    </span>
  );
}

const headingSizes = { display: "text-display", title: "text-title", subtitle: "text-subtitle" } as const;

export function Heading({
  as: Tag = "h2",
  size = "title",
  tone = "light",
  className,
  children,
  id,
}: {
  as?: "h1" | "h2" | "h3";
  size?: keyof typeof headingSizes;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <Tag id={id} className={cn(headingSizes[size], tone === "light" ? "text-brand-ink" : "text-white", className)}>
      {children}
    </Tag>
  );
}

/** Eyebrow + title + optional lead paragraph, used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: Tone;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex max-w-3xl flex-col gap-3.5 md:mb-12",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Heading as={as} size={as === "h1" ? "display" : "title"} tone={tone}>
        {title}
      </Heading>
      {lead ? <p className={cn("text-lead", tone === "dark" && "text-brand-haze")}>{lead}</p> : null}
    </div>
  );
}
