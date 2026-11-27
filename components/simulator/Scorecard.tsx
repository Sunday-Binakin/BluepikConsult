import { Button, ButtonLink } from "@/components/ui/Button";
import { Eyebrow, Heading } from "@/components/ui/Typography";
import { HAZARD_GOOD, HAZARD_MAX, scoreTheory, verdict, wrongAnswers, type SimResults } from "@/lib/simulator/scoring";

const verdicts = {
  incomplete: { title: "Your results so far", text: "Complete the theory test, hazard perception and the stop-line drill to get a full scorecard." },
  ready: { title: "You are on track", text: "You passed every module. Keep up the practice with a certified instructor before your DVLA tests." },
  practise: { title: "Keep practising", text: "Look at the modules below that need work, then try again." },
};

function ScoreTile({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-brand-cloud p-5">
      <span className="text-eyebrow text-brand-slate">{label}</span>
      <span className="font-display text-[34px] font-bold text-brand-navy">{value}</span>
      <span className="text-sm">{note}</span>
    </div>
  );
}

export function Scorecard({ results, onRestart }: { results: SimResults; onRestart: () => void }) {
  const v = verdicts[verdict(results)];
  const theory = results.theory ? scoreTheory(results.theory) : null;
  const review = results.theory ? wrongAnswers(results.theory) : [];

  return (
    <div className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-1.5">
        <Eyebrow>Scorecard</Eyebrow>
        <Heading className="md:text-[30px]">{v.title}</Heading>
        <p>{v.text}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <ScoreTile
          label="Theory test"
          value={theory ? `${theory.correct}/${theory.total}` : "—"}
          note={theory ? (theory.passed ? "Pass (70% or more)" : "Below the 70% pass mark") : "Not taken yet"}
        />
        <ScoreTile
          label="Hazard perception"
          value={results.hazard === null ? "—" : `${results.hazard}/${HAZARD_MAX}`}
          note={results.hazard === null ? "Not taken yet" : results.hazard >= HAZARD_GOOD ? "Good early response" : "Respond earlier to developing hazards"}
        />
        <ScoreTile
          label="Stop-line drill"
          value={results.drive === null ? "—" : results.drive ? "Pass" : "Retry"}
          note={results.drive === null ? "Not attempted yet" : results.drive ? "Stopped at the line" : "Crossed the stop line"}
        />
      </div>

      {review.length > 0 && (
        <div className="flex flex-col gap-2.5">
          <Heading as="h3" size="subtitle">Questions to review</Heading>
          {review.map((r) => (
            <div key={r.question} className="rounded-xl border border-brand-line px-4 py-3.5">
              <p className="font-semibold text-brand-ink">{r.question}</p>
              <p className="text-[15px]">Correct answer: {r.correct}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
        <Button variant="outline" onClick={onRestart}>Start again</Button>
        <ButtonLink href="/contact?service=training">Ask about a training programme</ButtonLink>
      </div>
      <p className="text-sm text-brand-slate">Practice tool only. Not an official DVLA test.</p>
    </div>
  );
}
