import { z } from "zod";

/** Shared by the contact form (client) and the API route (server) — one set of rules. */

export const SERVICES = ["training", "consulting", "unsure"] as const;
export type Service = (typeof SERVICES)[number];

export const SERVICE_LABELS: Record<Service, string> = {
  training: "Online Training",
  consulting: "Consulting",
  unsure: "Not sure yet",
};

export function parseService(value: unknown): Service {
  return SERVICES.includes(value as Service) ? (value as Service) : "training";
}

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");
const requiredText = (message: string, max: number) =>
  z.string({ required_error: message }).trim().min(1, message).max(max);

export const enquirySchema = z.object({
  name: requiredText("Please enter your name.", 120),
  organisation: optionalText(160),
  email: z.string({ required_error: "Please enter a valid email address." }).trim().email("Please enter a valid email address."),
  phone: optionalText(40),
  service: z.enum(SERVICES),
  area: optionalText(120),
  participants: optionalText(10),
  dates: optionalText(120),
  message: requiredText("Please add a short message.", 5000),
  consent: z.literal("yes", { errorMap: () => ({ message: "Please confirm we may contact you." }) }),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryField = keyof Enquiry;
export type EnquiryErrors = Partial<Record<EnquiryField, string>>;

/** Validate unknown input; returns data or a flat field → message map. */
export function validateEnquiry(input: unknown):
  | { ok: true; data: Enquiry }
  | { ok: false; errors: EnquiryErrors } {
  const result = enquirySchema.safeParse(input);
  if (result.success) return { ok: true, data: result.data };
  const errors: EnquiryErrors = {};
  for (const [field, messages] of Object.entries(result.error.flatten().fieldErrors)) {
    if (messages?.[0]) errors[field as EnquiryField] = messages[0];
  }
  return { ok: false, errors };
}

/** Name of the hidden anti-spam field. Real people leave it empty. */
export const HONEYPOT_FIELD = "website";
