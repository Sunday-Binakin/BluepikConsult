import { site } from "@/lib/content/site";
import { consoleMailer } from "./console";
import { createGmailMailer } from "./gmail";
import type { Mailer } from "./types";

export type { Mailer, MailMessage } from "./types";

let mailer: Mailer | undefined;

/** Picks the mail transport from environment variables (created once per server). */
export function getMailer(): Mailer {
  if (mailer) return mailer;
  const user = process.env.GMAIL_USER;
  const appPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (user && appPassword) {
    mailer = createGmailMailer({ user, appPassword, fromName: `${site.name} Website` });
  } else {
    if (process.env.NODE_ENV === "production") {
      console.warn("[mail] GMAIL_USER / GMAIL_APP_PASSWORD not set — enquiries are only logged.");
    }
    mailer = consoleMailer;
  }
  return mailer;
}

/** Inbox that receives enquiries. */
export function getEnquiryInbox(): string {
  return process.env.ENQUIRY_TO_EMAIL || process.env.GMAIL_USER || site.email;
}
