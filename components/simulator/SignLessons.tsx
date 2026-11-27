"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { LESSONS } from "@/lib/simulator/content";
import { RoadSign } from "./RoadSign";

export function SignLessons({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);
  const lesson = LESSONS[index];
  const last = index === LESSONS.length - 1;

  return (
    <div className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-1.5">
        <Eyebrow>Training · Lesson {index + 1} of {LESSONS.length}</Eyebrow>
        <Heading className="md:text-[30px]">{lesson.title}</Heading>
      </div>
      <div className="flex flex-wrap items-center gap-8">
        <div className="flex size-55 flex-none items-center justify-center rounded-[20px] bg-brand-cloud">
          <RoadSign kind={lesson.kind} />
        </div>
        <div className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
          <p className="text-lg font-semibold text-brand-ink">{lesson.rule}</p>
          <p>{lesson.detail}</p>
          <p className="rounded-xl bg-brand-mist px-4 py-3.5 text-[15px]">
            <strong className="text-brand-navy">Instructor tip:</strong> {lesson.tip}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-3">
        <Button variant="outline" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
          Previous
        </Button>
        <Button onClick={() => (last ? onFinish() : setIndex((i) => i + 1))}>
          {last ? "Go to the stop-line drill" : "Next lesson"}
        </Button>
      </div>
    </div>
  );
}
