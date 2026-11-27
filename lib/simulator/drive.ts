/**
 * Stop-line drill as a pure state machine. Position runs 0 → 100 along the approach;
 * the stop line is at STOP_LINE and a good stop is anywhere in [GOOD_FROM, STOP_LINE).
 */

export const MAX_SPEED = 5;
export const STOP_LINE = 77;
export const GOOD_FROM = 62;
const STEP_PER_SPEED = 0.35; // position gained per tick per speed level

export type DriveStatus = "ready" | "driving" | "passed" | "failed";
export type DriveState = { pos: number; speed: number; status: DriveStatus; message: string };

export const initialDrive: DriveState = { pos: 0, speed: 0, status: "ready", message: "Press Accelerate to move off." };

const finished = (s: DriveState) => s.status === "passed" || s.status === "failed";

export function accelerate(s: DriveState): DriveState {
  if (finished(s)) return s;
  return { ...s, status: "driving", speed: Math.min(MAX_SPEED, s.speed + 1), message: "Moving. Watch the line and brake in good time." };
}

export function brake(s: DriveState): DriveState {
  if (s.status !== "driving") return s;
  const speed = Math.max(0, s.speed - 1);
  if (speed > 0) return { ...s, speed };
  if (s.pos >= GOOD_FROM) {
    return { ...s, speed: 0, status: "passed", message: "Well done: a full stop just before the line. Now look both ways before moving off." };
  }
  return { ...s, speed: 0, message: "Stopped too early. Creep forward until you are just before the line." };
}

/** Advance one tick (call ~10 times a second). */
export function tick(s: DriveState): DriveState {
  if (s.status !== "driving" || s.speed === 0) return s;
  const pos = s.pos + s.speed * STEP_PER_SPEED;
  if (pos >= STOP_LINE) {
    return { pos: STOP_LINE, speed: 0, status: "failed", message: "You crossed the stop line. Brake earlier and stop just before the white line." };
  }
  return { ...s, pos };
}
