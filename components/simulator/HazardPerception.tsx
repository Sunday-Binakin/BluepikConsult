"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { useInterval } from "@/lib/hooks/useInterval";
import { CLIP_LENGTH, hazardPoints, sceneAt } from "@/lib/simulator/hazard";
import { HAZARD_MAX } from "@/lib/simulator/scoring";

type Clip = { t: number; running: boolean; clickT: number | null; score: number | null };
const idle: Clip = { t: 0, running: false, clickT: null, score: null };

export function HazardPerception({ onResult }: { onResult: (points: number) => void }) {
  const [clip, setClip] = useState<Clip>(idle);

  useInterval(() => {
    const t = clip.t + 1;
    if (t < CLIP_LENGTH) {
      setClip({ ...clip, t });
      return;
    }
    const score = hazardPoints(clip.clickT);
    setClip({ ...clip, t, running: false, score });
    onResult(score);
  }, clip.running ? 100 : null);

  const scene = sceneAt(clip.t);
  const flagged = clip.clickT !== null;
  const status = clip.running
    ? flagged ? "Hazard flagged. Keep watching…" : "Watching the road…"
    : clip.score !== null ? `Clip finished: you scored ${clip.score} of ${HAZARD_MAX}.` : "Press Start, then watch the road.";

  return (
    <div className="flex flex-col gap-4.5">
      <div className="flex flex-col gap-1.5">
        <Eyebrow>Testing · Hazard perception</Eyebrow>
        <Heading className="md:text-[30px]">Click as soon as you see a developing hazard</Heading>
        <p>You are driving along a street with parked cars. Earlier clicks score more, but clicking before anything develops scores nothing.</p>
      </div>

      <svg viewBox="0 0 640 340" className="w-full rounded-2xl bg-[#2F7D46]" role="img" aria-label="Moving street scene with parked cars on the right">
        <rect x="170" y="0" width="300" height="340" fill="#3A4556" />
        <rect x="470" y="0" width="60" height="340" fill="#C9C2B4" />
        <rect x="110" y="0" width="60" height="340" fill="#C9C2B4" />
        {scene.dashes.map((y, i) => <rect key={i} x="318" y={y} width="4" height="26" fill="#fff" opacity=".8" />)}
        <rect x="404" y="60" width="54" height="88" rx="10" fill="#7A869A" />
        <rect x="404" y="176" width="54" height="88" rx="10" fill="#B54708" />
        <rect x="404" y="292" width="54" height="88" rx="10" fill="#475467" />
        {scene.ball && <circle cx={scene.ball.x} cy="168" r="9" fill="#FFD84D" stroke="#0A2147" strokeWidth="2" />}
        {scene.child && (
          <g transform={`translate(${scene.child.x} 172)`}>
            <circle r="11" fill="#5B3A29" />
            <rect x="-10" y="10" width="20" height="22" rx="6" fill="#D92D20" />
          </g>
        )}
        <rect x="250" y="250" width="56" height="86" rx="12" fill="#0B7BE8" />
        <rect x="258" y="262" width="40" height="18" rx="4" fill="#BFDDFF" />
        {flagged && (
          <g>
            <rect x="20" y="20" width="150" height="40" rx="10" fill="#fff" />
            <text x="95" y="46" textAnchor="middle" fontWeight="700" fontSize="16" fill="#043F8D">Hazard flagged</text>
          </g>
        )}
      </svg>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={() => setClip({ ...idle, running: true })} disabled={clip.running}>
          {clip.running ? "Playing…" : clip.score !== null ? "Play again" : "Start clip"}
        </Button>
        <button
          type="button"
          className="min-h-14 rounded-[14px] bg-[#b42318] px-7 font-bold text-white disabled:opacity-50"
          onClick={() => setClip({ ...clip, clickT: clip.t })}
          disabled={!clip.running || flagged}
        >
          Hazard!
        </button>
        <p role="status" className="font-semibold text-brand-ink">{status}</p>
      </div>
    </div>
  );
}
