import { Icon, type IconName } from "@/components/ui/Icon";
import { RisingBars } from "@/components/ui/Media";

/** Decorative card visuals for the projects list (no photos needed). */

const ghanaDriveFeatures: { icon: IconName; label: string }[] = [
  { icon: "user", label: "Biometric enrolment" },
  { icon: "clipboard", label: "Class attendance" },
  { icon: "warehouse", label: "Driving school portal" },
  { icon: "dashboard", label: "Regulator reports" },
];

export function GhanaDriveVisual() {
  return (
    <div className="flex h-full items-center justify-center bg-brand-navy p-10">
      <RisingBars heights={[60, 110, 160]} />
      <ul className="relative grid w-full max-w-[380px] grid-cols-2 gap-3.5">
        {ghanaDriveFeatures.map((f) => (
          <li key={f.label} className="flex flex-col gap-2.5 rounded-[14px] border border-white/18 bg-white/10 p-4.5 text-white">
            <Icon name={f.icon} size={28} className="text-brand-sky" />
            <span className="text-[15px] font-semibold">{f.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ArticleVisual() {
  return (
    <div className="flex h-full flex-wrap items-end gap-7 bg-brand-mist p-9">
      <div className="flex flex-col gap-1">
        <span className="font-display text-5xl leading-none font-bold text-brand-navy">2,949</span>
        <span className="text-sm">road deaths in Ghana in 2025</span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-display text-5xl leading-none font-bold text-brand-blue">48 hrs</span>
        <span className="text-sm">minimum training before a licence</span>
      </div>
    </div>
  );
}

export function SimulatorVisual() {
  return (
    <div className="flex h-full items-center justify-center bg-brand-ink p-5">
      <svg viewBox="0 0 320 150" className="w-full max-w-[320px]" role="img" aria-label="Top-down road with a car approaching a stop line">
        <rect x="110" y="0" width="100" height="150" fill="#3A4556" />
        <rect x="0" y="50" width="320" height="50" fill="#3A4556" />
        <rect x="158" y="105" width="4" height="14" fill="#fff" opacity=".8" />
        <rect x="158" y="128" width="4" height="14" fill="#fff" opacity=".8" />
        <rect x="164" y="100" width="46" height="4" fill="#fff" />
        <rect x="172" y="112" width="22" height="34" rx="5" fill="#0B7BE8" />
        <rect x="176" y="118" width="14" height="9" rx="2" fill="#8EC2FF" />
        <polygon points="232,24 240,16 251,16 259,24 259,35 251,43 240,43 232,35" fill="#D92D20" />
        <text x="245.5" y="33" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fff">STOP</text>
      </svg>
    </div>
  );
}
