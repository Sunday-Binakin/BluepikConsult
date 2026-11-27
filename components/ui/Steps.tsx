import type { Step } from "@/lib/content/services";
import { Card } from "./Card";
import { Grid } from "./Layout";
import { Heading } from "./Typography";

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex size-10 flex-none items-center justify-center rounded-full bg-brand-navy font-display text-[15px] font-bold text-white">
      {String(n).padStart(2, "0")}
    </span>
  );
}

/** Numbered process steps, plain or in cards. */
export function Steps({ steps, boxed = false }: { steps: Step[]; boxed?: boolean }) {
  return (
    <Grid cols={steps.length === 3 ? 3 : 4}>
      {steps.map((step, i) => {
        const body = (
          <>
            <StepNumber n={i + 1} />
            <Heading as="h3" size="subtitle">{step.title}</Heading>
            <p className="text-[15px]">{step.text}</p>
          </>
        );
        return boxed ? (
          <Card key={step.title}>{body}</Card>
        ) : (
          <div key={step.title} className="flex flex-col gap-3.5">{body}</div>
        );
      })}
    </Grid>
  );
}
