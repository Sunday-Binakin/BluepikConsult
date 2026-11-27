export type MailMessage = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

/** Anything that can send an email. Implementations: Gmail SMTP, console (dev). */
export interface Mailer {
  send(message: MailMessage): Promise<void>;
}
