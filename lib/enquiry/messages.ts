import { site } from "@/lib/content/site";
import type { MailMessage } from "@/lib/mail/types";
import { SERVICE_LABELS, type Enquiry } from "./schema";

/** Builds the two emails an enquiry produces. Pure functions — easy to test and change. */

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function rows(e: Enquiry): [string, string][] {
  const training = e.service === "training";
  const all: [string, string][] = [
    ["Name", e.name],
    ["Organisation", e.organisation],
    ["Email", e.email],
    ["Phone / WhatsApp", e.phone],
    ["Service", SERVICE_LABELS[e.service]],
    ["Training area", training ? e.area : ""],
    ["Participants", training ? e.participants : ""],
    ["Preferred dates", training ? e.dates : ""],
    ["Message", e.message],
  ];
  return all.filter(([, v]) => v.trim() !== "");
}

export function buildNotification(e: Enquiry, to: string): MailMessage {
  const r = rows(e);
  return {
    to,
    replyTo: e.email,
    subject: `New ${SERVICE_LABELS[e.service]} enquiry from ${e.name}`,
    text: r.map(([k, v]) => `${k}: ${v}`).join("\n"),
    html:
      `<h2 style="font-family:sans-serif;color:#043F8D">New website enquiry</h2>` +
      `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">` +
      r.map(([k, v]) => `<tr><td valign="top"><strong>${k}</strong></td><td>${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`).join("") +
      `</table>`,
  };
}

export function buildAutoReply(e: Enquiry): MailMessage {
  return {
    to: e.email,
    subject: "We've received your enquiry — BluePik Consult",
    text:
      `Hello ${e.name},\n\n` +
      `Thank you for contacting BluePik Consult. We've received your ${SERVICE_LABELS[e.service].toLowerCase()} enquiry ` +
      `and will be in touch within ${site.responseTime}.\n\n` +
      `BluePik Consult\n${site.email} · ${site.phone}`,
  };
}
