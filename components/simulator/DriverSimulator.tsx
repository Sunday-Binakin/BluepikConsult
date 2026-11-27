"use client";

import { useState } from "react";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";
import { emptyResults, type SimResults } from "@/lib/simulator/scoring";
import { HazardPerception } from "./HazardPerception";
import { Scorecard } from "./Scorecard";
import { SignLessons } from "./SignLessons";
import { StopLineDrill } from "./StopLineDrill";
import { TheoryTest } from "./TheoryTest";

type Screen = "overview" | "signs" | "drive" | "theory" | "hazard" | "results";

/** Menu structure: one place to add, remove or reorder modules. */
const menu: { group?: string; items: { id: Screen; label: string; blurb?: string }[] }[] = [
  { items: [{ id: "overview", label: "Overview" }] },
  {
    group: "Training",
    items: [
      { id: "signs", label: "1 · Road-sign lessons", blurb: "Learn the four sign families and what each asks you to do." },
      { id: "drive", label: "2 · Stop-line drill", blurb: "Control your speed and stop just before the line at a STOP junction." },
    ],
  },
  {
    group: "Testing",
    items: [
      { id: "theory", label: "3 · Theory test", blurb: "10 questions. Score 70% or more to pass, like the DVLA test." },
      { id: "hazard", label: "4 · Hazard perception", blurb: "Spot a developing hazard as early as you can. Up to 5 points." },
    ],
  },
  { group: "Results", items: [{ id: "results", label: "Scorecard" }] },
];

export function DriverSimulator() {
  const [screen, setScreen] = useState<Screen>("overview");
  const [results, setResults] = useState<SimResults>(emptyResults);
  // Changing the key remounts a module, resetting its internal state.
  const [run, setRun] = useState(0);

  const save = (patch: Partial<SimResults>) => setResults((r) => ({ ...r, ...patch }));
  const restart = () => {
    setResults(emptyResults);
    setRun((n) => n + 1);
    setScreen("overview");
  };

  return (
    <div className="flex flex-wrap items-start gap-6">
      <nav aria-label="Simulator modules" className="flex w-full flex-col gap-1 rounded-[18px] border border-brand-line bg-brand-cloud p-4 lg:w-60 lg:flex-none">
        {menu.map((section, i) => (
          <div key={section.group ?? i} className="flex flex-col gap-1">
            {section.group && <span className="text-eyebrow px-3 pt-3.5 pb-1.5 text-brand-slate">{section.group}</span>}
            {section.items.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-current={screen === item.id ? "step" : undefined}
                onClick={() => setScreen(item.id)}
                className={cn(
                  "min-h-11 rounded-[10px] px-3 py-2.5 text-left text-[15px] font-medium",
                  screen === item.id ? "bg-brand-navy text-white" : "text-brand-ink hover:bg-brand-mist",
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div key={`${screen}-${run}`} className="min-h-[640px] min-w-0 flex-[999_1_560px] rounded-[20px] border border-brand-line bg-white p-5 shadow-[0_20px_50px_rgba(10,33,71,0.06)] md:p-8">
        {screen === "overview" && <Overview onOpen={setScreen} />}
        {screen === "signs" && <SignLessons onFinish={() => setScreen("drive")} />}
        {screen === "drive" && <StopLineDrill onResult={(drive) => save({ drive })} />}
        {screen === "theory" && <TheoryTest onFinish={(theory) => { save({ theory }); setScreen("results"); }} />}
        {screen === "hazard" && <HazardPerception onResult={(hazard) => save({ hazard })} />}
        {screen === "results" && <Scorecard results={results} onRestart={restart} />}
      </div>
    </div>
  );
}

function Overview({ onOpen }: { onOpen: (s: Screen) => void }) {
  const modules = menu.flatMap((section) =>
    section.items.filter((i) => i.blurb).map((i) => ({ ...i, group: section.group! })),
  );
  return (
    <div className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-2">
        <Eyebrow>Overview</Eyebrow>
        <Heading className="md:text-[30px]">How the simulator works</Heading>
        <p>Work through the two training modules first, then take the two tests. Your scorecard shows how ready you are.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {modules.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => onOpen(m.id)}
            className="flex flex-col gap-2.5 rounded-2xl border border-brand-line bg-white p-6 text-left transition hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(4,63,141,0.08)]"
          >
            <Eyebrow>{m.group}</Eyebrow>
            <Heading as="h3" size="subtitle">{m.label.replace(/^\d · /, "")}</Heading>
            <p className="text-[15px]">{m.blurb}</p>
          </button>
        ))}
      </div>
      <p className="rounded-xl bg-brand-cloud px-4 py-3.5 text-sm text-brand-slate">
        Practice tool only. This is not an official DVLA test and does not count towards a licence.
      </p>
    </div>
  );
}
