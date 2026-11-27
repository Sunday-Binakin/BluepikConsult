import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand-navy text-white hover:bg-brand-blue",
  outline: "border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  white: "bg-white text-brand-navy hover:bg-brand-mist",
  ghost: "border-white/55 text-white hover:border-white hover:bg-white/10",
} as const;

const sizes = {
  md: "min-h-13 px-6.5 text-base",
  sm: "min-h-11.5 px-5.5 text-[15px]",
} as const;

export type ButtonVariant = keyof typeof variants;
type Style = { variant?: ButtonVariant; size?: keyof typeof sizes; className?: string };

/** Shared class builder so links and buttons look identical. */
export function buttonClasses({ variant = "primary", size = "md", className }: Style = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-transparent font-semibold",
    "transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

export function ButtonLink({ variant, size, className, ...props }: Style & ComponentProps<typeof Link>) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}

export function Button({ variant, size, className, type = "button", ...props }: Style & ComponentProps<"button">) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

/** Text link with an arrow, used under cards. */
export function ArrowLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn("inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:text-brand-navy", className)}
      {...props}
    >
      {children} <span aria-hidden="true">→</span>
    </Link>
  );
}
