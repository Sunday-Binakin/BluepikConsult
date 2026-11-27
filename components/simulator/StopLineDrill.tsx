"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";
import { useInterval } from "@/lib/hooks/useInterval";
import { MAX_SPEED, accelerate, brake, initialDrive, tick } from "@/lib/simulator/drive";

const TICK_MS = 100;
const controlClass = "min-h-14 min-w-16 rounded-[14px] px-5 font-bold text-white disabled:opacity-50";

export function StopLineDrill({ onResult }: { onResult: (passed: boolean) => void }) {
  const [drive, setDrive] = useState(initialDrive);

  /** Apply a transition and report the result the moment the drill ends. */
  const update = (next: typeof drive) => {
    setDrive(next);
    if (next.status !== drive.status && (next.status === "passed" || next.status === "failed")) {
      onResult(next.status === "passed");
    }
  };

  useInterval(() => update(tick(drive)), drive.status === "driving" ? TICK_MS : null);

  const carY = 330 - drive.pos * 3;
  const done = drive.status === "passed" || drive.status === "failed";

  return (
    <div className="flex flex-col gap-4.5">
      <div className="flex flex-col gap-1.5">
        <Eyebrow>Training · Stop-line drill</Eyebrow>
        <Heading className="md:text-[30px]">Stop just before the white line</Heading>
        <p>Press Accelerate to move off. Use Brake to slow down and come to a full stop with the front of the car just before the STOP line.</p>
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <svg viewBox="0 0 400 400" className="w-full max-w-[400px] flex-[0_1_400px] rounded-2xl bg-[#2F7D46]" role="img" aria-label="Top-down view of the learner car approaching a STOP junction">
          <rect x="150" y="0" width="100" height="400" fill="#3A4556" />
          <rect x="0" y="20" width="400" height="80" fill="#3A4556" />
          {[120, 190, 260, 330].map((y) => <rect key={y} x="198" y={y} width="4" height="30" fill="#fff" opacity=".8" />)}
          <rect x="200" y="98" width="50" height="6" fill="#fff" />
          <text x="225" y="128" textAnchor="middle" fontWeight="800" fontSize="13" fill="#fff" opacity=".9">STOP</text>
          <polygon points="262,108 274,96 290,96 302,108 302,124 290,136 274,136 262,124" fill="#D92D20" stroke="#fff" strokeWidth="2" />
          <text x="282" y="120" textAnchor="middle" fontWeight="800" fontSize="9" fill="#fff">STOP</text>
          <g transform={`translate(208 ${carY})`}>
            <rect width="34" height="58" rx="8" fill="#0B7BE8" />
            <rect x="5" y="8" width="24" height="13" rx="3" fill="#BFDDFF" />
            <rect x="5" y="38" width="24" height="10" rx="3" fill="#8EC2FF" />
            <rect x="11" y="24" width="12" height="10" rx="2" fill="#FFD84D" />
            <text x="17" y="32" textAnchor="middle" fontWeight="800" fontSize="8" fill="#0A2147">L</text>
          </g>
        </svg>

        <div className="flex min-w-0 flex-[1_1_220px] flex-col gap-4">
          <div className="rounded-[14px] bg-brand-cloud p-4">
            <span className="text-eyebrow text-brand-slate">Speed</span>
            <div className="mt-2 flex gap-1.5" role="meter" aria-label="Speed" aria-valuemin={0} aria-valuemax={MAX_SPEED} aria-valuenow={drive.speed}>
              {Array.from({ length: MAX_SPEED }, (_, i) => (
                <span key={i} className={cn("h-3.5 flex-1 rounded", i < drive.speed ? "bg-brand-blue" : "bg-brand-line")} />
              ))}
            </div>
          </div>
          <p
            role="status"
            className={cn(
              "min-h-12 font-semibold",
              drive.status === "passed" ? "text-[#1a7f45]" : drive.status === "failed" ? "text-[#b42318]" : "text-brand-ink",
            )}
          >
            {drive.message}
          </p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className={cn(controlClass, "bg-[#1a7f45]")} onClick={() => update(accelerate(drive))} disabled={done}>
              Accelerate
            </button>
            <button type="button" className={cn(controlClass, "bg-[#b42318]")} onClick={() => update(brake(drive))} disabled={drive.status !== "driving"}>
              Brake
            </button>
            <Button variant="outline" onClick={() => setDrive(initialDrive)}>Reset</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
