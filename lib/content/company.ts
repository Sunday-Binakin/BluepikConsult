import type { IconName } from "@/components/ui/Icon";
import type { Step } from "./services";

export const mission =
  "To equip professionals with practical skills through specialised online training and help organisations solve operational challenges and improve performance through tailored consulting.";

export const vision =
  "To become a trusted partner in Ghana and across Africa for professional development and operational improvement in transport, logistics, supply chain management and business operations.";

// TODO: confirm wording with BluePik Consult
export const values: Step[] = [
  { title: "Practical", text: "Everything we teach or recommend must work in a real operation." },
  { title: "Tailored", text: "Programmes and advice fit your roles, priorities and resources." },
  { title: "Trusted", text: "Clear, honest guidance you can rely on." },
  { title: "Results-focused", text: "We measure success by what improves after we leave." },
];

// TODO: replace with the founder's real details
export const founder = {
  name: "Moses Collins Tetteh",
  role: "CEO",
  bio: "Moses Collins Tetteh is the CEO of BluePik Consult, bringing over a decade of experience in transport, logistics, and operations management. He founded the company to address the gap in practical, tailored training and consulting services for professionals and organisations in these sectors.",
};

export const audiences: { title: string; text: string; icon: IconName; href: string; cta: string }[] = [
  { title: "Professionals", text: "Build practical skills for career development in logistics, transport, supply chain or operations roles.", icon: "user", href: "/training", cta: "Browse training" },
  { title: "Organisations strengthening teams", text: "Customised training for teams, tailored to participants' roles, experience and learning goals.", icon: "users", href: "/contact?service=training", cta: "Request a training programme" },
  { title: "Businesses reviewing operations", text: "Consulting support to review transport, logistics or operating practices and plan improvements.", icon: "building", href: "/consulting", cta: "Explore consulting" },
];

export const sectors: { title: string; icon: IconName }[] = [
  { title: "Transport and fleet operators", icon: "truck" },
  { title: "Logistics businesses", icon: "warehouse" },
  { title: "Training institutions", icon: "cap" },
  { title: "Organisations with in-house operations teams", icon: "gear" },
];

/** Add real testimonials here; the section renders only when the list is not empty. */
export const testimonials: { quote: string; name: string; role: string }[] = [];
