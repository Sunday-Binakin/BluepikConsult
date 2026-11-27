import type { IconName } from "@/components/ui/Icon";

/** Everything listed on /projects. Add an entry here and it appears on the page. */
export type ProjectEntry = {
  slug: string;
  href: string;
  kind: "case-study" | "insight" | "tool";
  title: string;
  summary: string;
  tags: string[];
  cta: string;
};

export const projects: ProjectEntry[] = [
  {
    slug: "ghanadrive",
    href: "/projects/ghanadrive",
    kind: "case-study",
    title: "GhanaDrive: digital training records for Ghana's driving schools",
    summary:
      "How we supported the Ghana National Association of Driving Schools with a platform that records candidate enrolment and class attendance, so the required training hours can be evidenced and reported.",
    tags: ["Client project", "Driver training", "Digital project support"],
    cta: "Read the case study",
  },
  {
    slug: "driver-training-and-testing",
    href: "/projects/driver-training-and-testing",
    kind: "insight",
    title: "Driver training and testing in Ghana: where it stands and how to strengthen it",
    summary: "The law, the licensing journey, the gaps, and the role technology can play in producing safer drivers.",
    tags: ["Insight", "8 min read"],
    cta: "Read the article",
  },
  {
    slug: "driver-simulator",
    href: "/projects/driver-simulator",
    kind: "tool",
    title: "Driver simulator: practise like a learner, test like a candidate",
    summary: "Road-sign lessons, a stop-line driving exercise, a theory test and hazard perception, all in your browser.",
    tags: ["Interactive", "Training & testing"],
    cta: "Try the simulator",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)!;

/* ---------------- GhanaDrive case study ---------------- */

export const ghanaDrive = {
  // TODO: confirm role and timeline with BluePik Consult
  glance: [
    { label: "Client", value: "GhanaDrive — Ghana National Association of Driving Schools" },
    { label: "Stakeholder", value: "Driver and Vehicle Licensing Authority (DVLA)" },
    { label: "Our role", value: "[Requirements, project management, backend delivery — confirm]" },
    { label: "Timeline", value: "[2026 — confirm]" },
  ],
  delivered: [
    { title: "Biometric enrolment", text: "each candidate is registered in person with a fingerprint." },
    { title: "Fingerprint attendance", text: "candidates check in to each class, building a verifiable record of training hours." },
    { title: "School portal", text: "driving schools manage candidates, classes and records in one place." },
    { title: "Regulator reporting", text: "reports that DVLA's training, testing and licensing team can use with stakeholders." },
  ],
  steps: [
    { title: "Register", text: "The candidate signs up with an accredited driving school." },
    { title: "Enrol biometrics", text: "The candidate's fingerprint is captured in person at enrolment." },
    { title: "Attend and check in", text: "Each class is logged with a fingerprint check-in, adding up the hours." },
    { title: "Report", text: "Completed training records are available to the school and the regulator." },
  ],
  // TODO: replace placeholders with real figures (or remove the section)
  results: [
    { value: "[X]", label: "driving schools onboarded" },
    { value: "[Y]", label: "candidates enrolled" },
    { value: "[Z]", label: "training hours recorded" },
    { value: "[N]", label: "regions covered" },
  ],
  quote: "[Optional quote from a GhanaDrive or DVLA representative.]",
} satisfies Record<string, unknown>;

/* ---------------- Driver training & testing article ---------------- */

export const driverTrainingArticle = {
  published: "November 2026",
  keyStats: [
    { value: "2,949", label: "people killed on Ghana's roads in 2025, the highest in 35 years", accent: false },
    { value: "+18%", label: "rise in road deaths from 2024 to 2025", accent: false },
    { value: "48 hours", label: "minimum certified training before a learner's licence", accent: true },
    { value: "70%", label: "minimum score to pass the computer-based theory test", accent: true },
  ],
  journey: [
    { title: "Certified training", text: "At least 48 hours at a DVLA-certified driving school, covering the Highway Code and practical vehicle handling." },
    { title: "Theory test", text: "A computer-based test on road signs, traffic rules and defensive driving. The pass mark is 70%." },
    { title: "Practical test", text: "A driving test with a DVLA examiner, both in controlled site conditions and in real traffic." },
    { title: "Licence", text: "Successful candidates are issued a licence, which must later be renewed." },
  ],
  regulations: [
    { ref: "Regulation 39(1)", text: "a learner-licence applicant must show at least 48 hours of basic training certified by a recognised driver training institution." },
    { ref: "Regulation 44(3e)", text: "drivers upgrading to a higher licence class must prove they attended an upgrading programme." },
    { ref: "Regulation 46(7B)", text: "drivers renewing a licence must show evidence of refresher training." },
  ],
  technology: [
    { icon: "clipboard" as IconName, title: "Verified training records", text: "Digital enrolment and attendance give each candidate a training record that schools can manage and the regulator can check before a test is booked." },
    { icon: "monitor" as IconName, title: "Accessible theory testing", text: "DVLA has said it will offer the computer-based theory test in local languages, so candidates are judged on their knowledge, not their English." },
    { icon: "truck" as IconName, title: "Simulator-based assessment", text: "In October 2026, DVLA's Chief Executive said the Authority is far advanced in introducing simulator testing, placing applicants in a virtual environment to assess how they react to road scenarios." },
    { icon: "dashboard" as IconName, title: "Data for decisions", text: "Linking training, test and crash data shows which schools, topics and regions need attention, so effort goes where it saves the most lives." },
  ],
  sources: [
    { title: "Graphic Online — Road crashes killed 2,949 in Ghana in 2025, the highest in 35 years", url: "https://www.graphic.com.gh/news/general-news/road-crashes-killed-2-949-in-ghana-in-2025-the-highest-in-35-years-road-safety-authority.html" },
    { title: "Citi Newsroom — 2,949 killed in 14,743 road crashes across Ghana in 2025", url: "https://citinewsroom.com/2026/01/2949-killed-in-14743-road-crashes-across-ghana-in-2025/" },
    { title: "Ghana News Agency — GHANADRIVE demands enforcement of new driver training rules", url: "https://gna.org.gh/2026/09/ghanadrive-demands-enforcement-of-new-driver-training-rules-to-improve-road-safety/" },
    { title: "MyJoyOnline — What Ghana's new road rules (L.I. 2519) mean for motorists", url: "https://www.myjoyonline.com/okada-towing-and-digital-fines-what-ghanas-new-road-rules-mean-for-motorists/" },
    { title: "Citi Newsroom — How to get a driver's licence in Ghana in 2026", url: "https://citinewsroom.com/2026/04/explainer-how-to-get-a-drivers-license-in-ghana-in-2026/" },
    { title: "GhanaWeb — DVLA launches computer-based technology for theory driving test", url: "https://www.ghanaweb.com/GhanaHomePage/regional/DVLA-launches-computer-based-technology-for-theory-driving-test-237109" },
    { title: "MyJoyOnline — DVLA plans simulator-based driving tests", url: "https://www.myjoyonline.com/dvla-plans-simulator-based-driving-tests-to-assess-prospective-drivers-in-ghana/" },
    { title: "Modern Ghana — Ghana faces shortage of professional driving instructors", url: "https://www.modernghana.com/news/1376766/ghana-faces-shortage-of-professional-driving-instr.html" },
    { title: "Ghana News Agency — GHANADRIVE ready to provide professional training for Okada riders", url: "https://gna.org.gh/2025/02/ghanadrive-ready-to-provide-professional-training-for-okada-riders" },
    { title: "Pulse Ghana — 1,937 killed, 10,957 injured between January and August 2025", url: "https://www.pulse.com.gh/story/1937-killed-10957-injured-in-road-accidents-between-january-and-august-2025-nrsa-2025093013372387745" },
  ],
};
