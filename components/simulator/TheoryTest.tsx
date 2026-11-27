"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { cn } from "@/lib/cn";
import { QUESTIONS } from "@/lib/simulator/content";
import { THEORY_PASS_RATIO, type Answers } from "@/lib/simulator/scoring";

const KEYS = ["A", "B", "C", "D"];

export function TheoryTest({ onFinish }: { onFinish: (answers: Answers) => void }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>([]);
  const q = QUESTIONS[index];
  const last = index === QUESTIONS.length - 1;

  const choose = (option: number) =>
    setAnswers((a) => {
      const next = a.slice();
      next[index] = option;
      return next;
    });

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Eyebrow>Testing · Question {index + 1} of {QUESTIONS.length}</Eyebrow>
        <span className="text-sm text-brand-slate">Pass mark {Math.round(THEORY_PASS_RATIO * 100)}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-brand-mist">
        <div className="h-full rounded-full bg-brand-blue transition-[width]" style={{ width: `${((index + 1) / QUESTIONS.length) * 100}%` }} />
      </div>

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-4">
          <Heading as="h2" size="subtitle" className="md:text-2xl">{q.text}</Heading>
        </legend>
        {q.options.map((label, i) => {
          const selected = answers[index] === i;
          return (
            <label
              key={label}
              className={cn(
                "flex min-h-13 cursor-pointer items-center gap-3 rounded-xl border-[1.5px] bg-white px-4 py-3.5 text-brand-ink",
                selected ? "border-brand-navy bg-brand-mist font-semibold" : "border-[#c9d5e4] hover:border-brand-navy",
              )}
            >
              <input type="radio" name={`q-${index}`} className="sr-only" checked={selected} onChange={() => choose(i)} />
              <span className="flex size-7 flex-none items-center justify-center rounded-full bg-brand-mist text-sm font-bold text-brand-navy">
                {KEYS[i]}
              </span>
              {label}
            </label>
          );
        })}
      </fieldset>

      <div className="flex flex-wrap justify-between gap-3">
        <Button variant="outline" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
          Previous
        </Button>
        <Button onClick={() => (last ? onFinish(answers) : setIndex((i) => i + 1))}>
          {last ? "Finish test" : "Next question"}
        </Button>
      </div>
    </div>
  );
}
