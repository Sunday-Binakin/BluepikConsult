/**
 * Simulator lessons and theory questions.
 * IMPORTANT: have a certified driving instructor review these before public launch.
 * To add a question, append to QUESTIONS — the test adapts automatically.
 */

export type SignKind = "stop" | "warning" | "prohibition" | "mandatory";

export type Lesson = { kind: SignKind; title: string; rule: string; detail: string; tip: string };

export type Question = { text: string; options: string[]; answer: number };

export const LESSONS: Lesson[] = [
  {
    kind: "stop",
    title: "Stop signs",
    rule: "Red octagon: stop completely, then give way.",
    detail: "Bring the vehicle to a full stop at the line, even if the road looks clear. Move off only when it is safe and you are not forcing other traffic to slow down.",
    tip: "A rolling stop is a stop you did not make. Count “one, two” with the car still.",
  },
  {
    kind: "warning",
    title: "Warning signs",
    rule: "Red-bordered triangle: a hazard is ahead.",
    detail: "Warning signs tell you to expect something: a junction, a bend, a school or people on the road. They give you time to slow down and look.",
    tip: "Ease off the accelerator as soon as you see one, and scan for what it is warning you about.",
  },
  {
    kind: "prohibition",
    title: "Prohibition signs",
    rule: "Red-bordered circle: something you must not do.",
    detail: "Circles with a red border give orders, such as a maximum speed, no entry or no overtaking. This example sets a speed limit you must not exceed.",
    tip: "A speed limit is a maximum, not a target. Drive slower when conditions demand it.",
  },
  {
    kind: "mandatory",
    title: "Mandatory signs",
    rule: "Blue circle: something you must do.",
    detail: "Blue circles give positive instructions, such as which direction to go or which lane to use.",
    tip: "Triangles warn, red circles forbid, blue circles instruct. Learn the shape before the symbol.",
  },
];

export const QUESTIONS: Question[] = [
  { text: "What does a red octagonal sign mean?", options: ["Slow down if the road is busy", "Stop completely and give way", "No entry for all vehicles", "Give way only to buses"], answer: 1 },
  { text: "A triangular sign with a red border is usually a…", options: ["Warning of a hazard ahead", "Mandatory instruction", "Direction sign", "Parking sign"], answer: 0 },
  { text: "A circular sign with a red border usually tells you…", options: ["Information about services", "Something you must not do", "The direction to a town", "That you have priority"], answer: 1 },
  { text: "A blue circular sign gives…", options: ["A warning", "A prohibition", "An instruction you must follow", "Tourist information"], answer: 2 },
  { text: "In Ghana, vehicles drive on which side of the road?", options: ["Left", "Right", "Either side", "Centre"], answer: 1 },
  { text: "The traffic light changes from green to amber as you approach. What should you do?", options: ["Speed up to get through", "Stop, unless you are so close that stopping would be unsafe", "Sound your horn and continue", "Stop suddenly whatever is behind you"], answer: 1 },
  { text: "A pedestrian is waiting at a zebra crossing. What should you do?", options: ["Flash your lights and drive on", "Sound your horn to warn them", "Slow down and be ready to stop to let them cross", "Keep your speed so you pass quickly"], answer: 2 },
  { text: "Before moving off from the side of the road, you should…", options: ["Check mirrors and blind spot, then signal if needed", "Sound the horn and pull out", "Rely on other drivers to let you in", "Move off quickly to join the traffic"], answer: 0 },
  { text: "On a wet road, your following distance should…", options: ["Stay the same", "Be shorter so you can see better", "Be increased", "Only matter at night"], answer: 2 },
  { text: "Approaching a roundabout in Ghana, you should normally give way to…", options: ["Traffic already on the roundabout", "Traffic behind you", "Vehicles on your right only", "No one; you have priority"], answer: 0 },
];
