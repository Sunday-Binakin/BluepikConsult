import Image from "next/image";
import { cn } from "@/lib/cn";

const logos = {
  lockup: { src: "/brand/logo-lockup.svg", width: 464, height: 127 },
  "lockup-white": { src: "/brand/logo-lockup-white.svg", width: 464, height: 127 },
  stacked: { src: "/brand/logo-stacked.svg", width: 336, height: 262 },
  "stacked-white": { src: "/brand/logo-stacked-white.svg", width: 336, height: 262 },
} as const;

/** Vector logo — stays sharp at any size and screen density. */
export function Logo({
  variant = "lockup",
  className,
  priority,
}: {
  variant?: keyof typeof logos;
  className?: string;
  priority?: boolean;
}) {
  const logo = logos[variant];
  return (
    <Image
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt="BluePik Consult"
      className={cn("h-auto", className)}
      priority={priority}
      unoptimized
    />
  );
}

/** Placeholder until real photography is supplied — swap for next/image. */
export function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-end overflow-hidden rounded-[20px] border border-brand-line bg-linear-to-br from-[#e3edfa] to-[#c9dbf3] p-4",
        className,
      )}
    >
      <span className="rounded-lg bg-white/85 px-2.5 py-1.5 text-[13px] font-medium text-brand-navy">Photo: {label}</span>
    </div>
  );
}

/** Decorative rising bars from the logo, for navy backgrounds. */
export function RisingBars({ heights = [80, 130, 190, 250] }: { heights?: number[] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-2.5 -right-5 flex items-end gap-3.5 opacity-15">
      {heights.map((h, i) => (
        <i key={i} className="block w-11 rounded-t-md bg-white" style={{ height: h }} />
      ))}
    </div>
  );
}
