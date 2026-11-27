import { HAZARD_MAX } from "./scoring";

/**
 * Hazard-perception clip as a pure function of time (t = ticks of 100 ms).
 * A ball rolls out from between parked cars (the clue), then a child follows (the hazard).
 */

export const CLIP_LENGTH = 90; // 9 seconds
export const HAZARD_STARTS = 25; // earliest moment a click counts
const WINDOW = 10; // ticks per scoring band (1 second)

/** 5 points for the first second of the hazard, then 1 fewer each second; 0 if too early or too late. */
export function hazardPoints(clickT: number | null): number {
  if (clickT === null || clickT < HAZARD_STARTS) return 0;
  return Math.max(0, HAZARD_MAX - Math.floor((clickT - HAZARD_STARTS) / WINDOW));
}

export function sceneAt(t: number) {
  return {
    dashes: [0, 1, 2, 3, 4, 5].map((i) => ((i * 60 + t * 6) % 360) - 20),
    ball: t >= 22 && t < 40 ? { x: 430 - (t - 22) * 4 } : null,
    child: t >= 32 ? { x: 420 - Math.min(t - 32, 30) * 3.2 } : null,
  };
}
