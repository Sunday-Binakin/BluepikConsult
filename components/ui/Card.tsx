import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import { Heading } from "./Typography";

const cardTones = {
  default: "border-brand-line bg-white",
  flat: "border-transparent bg-white", // on tinted sections
  navy: "border-brand-navy bg-brand-navy text-brand-haze",
} as const;

const cardPadding = {
  md: "p-6 md:p-7",
  lg: "p-7 md:p-9",
} as const;

export type CardProps = {
  tone?: keyof typeof cardTones;
  padding?: keyof typeof cardPadding;
  /** Lift on hover. Turn off for cards that hold forms. */
  interactive?: boolean;
  className?: string;
  children: ReactNode;
};

export function Card({ tone = "default", padding = "md", interactive = true, className, children }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 rounded-2xl border",
        cardTones[tone],
        cardPadding[padding],
        interactive &&
          "transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(4,63,141,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function IconBadge({ name, solid = false, size = 24 }: { name: IconName; solid?: boolean; size?: number }) {
  return (
    <span
      className={cn(
        "flex size-13 flex-none items-center justify-center rounded-[14px]",
        solid ? "bg-brand-navy text-white" : "bg-brand-mist text-brand-navy",
      )}
    >
      <Icon name={name} size={size} />
    </span>
  );
}

/** The most common card: optional icon, title, text, and any extra content. */
export function FeatureCard({
  icon,
  solidIcon,
  title,
  text,
  children,
  ...card
}: Omit<CardProps, "children"> & {
  icon?: IconName;
  solidIcon?: boolean;
  title: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <Card {...card}>
      {icon ? <IconBadge name={icon} solid={solidIcon} /> : null}
      <Heading as="h3" size="subtitle" tone={card.tone === "navy" ? "dark" : "light"}>{title}</Heading>
      {text ? <p className="text-[15px]">{text}</p> : null}
      {children}
    </Card>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Topics">
      {tags.map((t) => (
        <li key={t} className="rounded-full bg-brand-mist px-3 py-1.5 text-sm font-medium text-brand-navy">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <Icon name="check" size={18} strokeWidth={2.4} className="mt-1 flex-none text-brand-blue" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
