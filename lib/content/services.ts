import type { IconName } from "@/components/ui/Icon";

/** A titled item with an icon and short description — the shape most cards render. */
export type Feature = { title: string; text: string; icon: IconName };
export type Step = { title: string; text: string };

export type TrainingArea = Feature & { topics: string[] };

export const focusAreas: { label: string; icon: IconName }[] = [
  { label: "Transport", icon: "truck" },
  { label: "Logistics", icon: "warehouse" },
  { label: "Supply Chain", icon: "network" },
  { label: "Business Operations", icon: "gear" },
];

export const trainingAreas: TrainingArea[] = [
  {
    title: "Supply Chain and Logistics",
    text: "Inventory management, distribution planning, warehouse operations and supply chain performance.",
    topics: ["Inventory management", "Distribution planning", "Warehouse operations", "Supply chain performance"],
    icon: "warehouse",
  },
  {
    title: "Transport and Fleet Operations",
    text: "Fleet planning, driver performance, road safety management and transport service delivery.",
    topics: ["Fleet planning", "Driver performance", "Road safety management", "Transport service delivery"],
    icon: "truck",
  },
  {
    title: "Business Operations",
    text: "Process mapping, service quality, performance measurement and continuous improvement.",
    topics: ["Process mapping", "Service quality", "Performance measurement", "Continuous improvement"],
    icon: "process",
  },
  {
    title: "Digital Tools for Operations",
    text: "Using data, dashboards and tracking systems to monitor performance and support decisions.",
    topics: ["Using data", "Dashboards", "Tracking systems", "Monitoring performance", "Decision support"],
    icon: "dashboard",
  },
];

export const trainingFormats: Feature[] = [
  { title: "Live online workshops", text: "Interactive sessions with real-time discussion, delivered online so participants join from anywhere.", icon: "monitor" },
  { title: "Short courses", text: "Focused programmes on one topic, built around case studies and practical exercises.", icon: "book" },
  { title: "Customised team training", text: "Programmes designed around your team's roles, experience and the decisions they make every day.", icon: "users" },
];

export const trainingSteps: Step[] = [
  { title: "Enquire", text: "Share the topic, number of participants and preferred dates." },
  { title: "Tailor", text: "We shape content to participants' roles, experience and goals." },
  { title: "Deliver online", text: "Live sessions with case studies, discussion and exercises." },
  { title: "Apply at work", text: "Participants leave ready to use what they learned." },
];

export const consultingServices: Feature[] = [
  { title: "Operational reviews", text: "Examine existing processes, identify bottlenecks and prioritise improvements.", icon: "search" },
  { title: "Transport and logistics advisory", text: "Review fleet utilisation, distribution practices and transport service performance.", icon: "truck" },
  { title: "Procedures and performance measures", text: "Develop standard operating procedures, clarify responsibilities and select indicators for tracking results.", icon: "clipboard" },
  { title: "Training and curriculum design", text: "Identify learning needs and develop course outlines, training materials and assessments.", icon: "cap" },
  { title: "Digital project support", text: "Define business requirements for digital tools and plan how they will fit into existing workflows.", icon: "code" },
];

export const consultingSteps: Step[] = [
  { title: "Discovery conversation", text: "We discuss how your organisation works and what you want to improve." },
  { title: "Review", text: "We look at processes, data and practice to find where difficulties arise." },
  { title: "Recommendations", text: "A practical plan with actions that fit your priorities and resources." },
  { title: "Implementation support", text: "Procedures, training and measures to help the changes stick." },
];

export const howWeWork: Step[] = [
  { title: "Understand", text: "We learn how you or your organisation works, where difficulties arise and what you want to improve." },
  { title: "Assess the options", text: "We look at the choices available and what fits your priorities, people and resources." },
  { title: "Build a practical plan", text: "You leave with skills or actions you can apply straight away — not theory on a shelf." },
];
