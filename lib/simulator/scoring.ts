import { QUESTIONS, type Question } from "./content";

/** DVLA's computer-based theory test pass mark. */
export const THEORY_PASS_RATIO = 0.7;
export const HAZARD_MAX = 5;
export const HAZARD_GOOD = 3;

export type Answers = (number | undefined)[];

export function scoreTheory(answers: Answers, questions: Question[] = QUESTIONS) {
  const correct = questions.reduce((n, q, i) => n + (answers[i] === q.answer ? 1 : 0), 0);
  return { correct, total: questions.length, passed: correct / questions.length >= THEORY_PASS_RATIO };
}

export function wrongAnswers(answers: Answers, questions: Question[] = QUESTIONS) {
  return questions
    .filter((q, i) => answers[i] !== q.answer)
    .map((q) => ({ question: q.text, correct: q.options[q.answer] }));
}

/** Results gathered across the modules. `null` = not attempted yet. */
export type SimResults = {
  theory: Answers | null;
  hazard: number | null;
  drive: boolean | null;
};

export const emptyResults: SimResults = { theory: null, hazard: null, drive: null };

export function verdict(r: SimResults): "incomplete" | "ready" | "practise" {
  if (r.theory === null || r.hazard === null || r.drive === null) return "incomplete";
  return scoreTheory(r.theory).passed && r.hazard >= HAZARD_GOOD && r.drive ? "ready" : "practise";
}
