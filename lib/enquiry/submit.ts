import type { Mailer } from "@/lib/mail/types";
import { buildAutoReply, buildNotification } from "./messages";
import type { Enquiry } from "./schema";

/**
 * Use case: deliver an enquiry. Depends only on the Mailer interface,
 * so the transport (Gmail, console, another provider) can be swapped freely.
 */
export async function submitEnquiry(enquiry: Enquiry, mailer: Mailer, inbox: string): Promise<void> {
  await mailer.send(buildNotification(enquiry, inbox));

  // The auto-reply is a courtesy: a failure must not fail the enquiry.
  try {
    await mailer.send(buildAutoReply(enquiry));
  } catch (error) {
    console.warn("[enquiry] auto-reply failed", error);
  }
}
