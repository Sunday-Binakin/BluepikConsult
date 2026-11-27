import type { SignKind } from "@/lib/simulator/content";

const labels: Record<SignKind, string> = {
  stop: "Red octagonal STOP sign",
  warning: "Red-bordered triangular warning sign",
  prohibition: "Red-bordered circular speed-limit sign",
  mandatory: "Blue circular mandatory sign with an ahead arrow",
};

/** The four sign families, drawn in SVG. */
export function RoadSign({ kind, size = 150 }: { kind: SignKind; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 100" role="img" aria-label={labels[kind]}>
      {kind === "stop" && (
        <>
          <polygon points="35,4 75,4 101,30 101,70 75,96 35,96 9,70 9,30" fill="#D92D20" stroke="#fff" strokeWidth="4" />
          <text x="55" y="59" textAnchor="middle" fontWeight="800" fontSize="24" fill="#fff">STOP</text>
        </>
      )}
      {kind === "warning" && (
        <>
          <polygon points="55,6 105,94 5,94" fill="#fff" stroke="#D92D20" strokeWidth="10" strokeLinejoin="round" />
          <circle cx="55" cy="58" r="7" fill="#0A2147" />
          <path d="M45 80h20M55 68v10" stroke="#0A2147" strokeWidth="6" strokeLinecap="round" />
        </>
      )}
      {kind === "prohibition" && (
        <>
          <circle cx="55" cy="50" r="44" fill="#fff" stroke="#D92D20" strokeWidth="10" />
          <text x="55" y="62" textAnchor="middle" fontWeight="800" fontSize="34" fill="#0A2147">50</text>
        </>
      )}
      {kind === "mandatory" && (
        <>
          <circle cx="55" cy="50" r="46" fill="#0B5FD0" />
          <path d="M55 74V30M39 44l16-16 16 16" stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}
