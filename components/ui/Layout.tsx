import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}>{children}</div>;
}

const tones = {
  white: "bg-white",
  cloud: "bg-brand-cloud",
  mist: "bg-brand-mist",
  navy: "bg-brand-navy text-brand-haze",
} as const;

export type SectionTone = keyof typeof tones;

/** Vertical page section with consistent spacing and background. */
export function Section({
  tone = "white",
  className,
  containerClassName,
  children,
  ...rest
}: {
  tone?: SectionTone;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section className={cn("py-16 md:py-24", tones[tone], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

const gridCols = {
  2: "md:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Responsive grid: 1 column on phones, growing to `cols` on large screens. */
export function Grid({ cols, className, children }: { cols: keyof typeof gridCols; className?: string; children: ReactNode }) {
  return <div className={cn("grid gap-6", gridCols[cols], className)}>{children}</div>;
}

/** Two-column layout that stacks below the lg breakpoint. */
export function Split({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("grid items-center gap-10 lg:grid-cols-2 lg:gap-14", className)}>{children}</div>;
}
