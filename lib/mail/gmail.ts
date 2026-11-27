import nodemailer from "nodemailer";
import type { Mailer } from "./types";

/**
 * Sends mail through Gmail's SMTP server using a Google App Password.
 * Gmail always sends "from" the authenticated account; replies go to replyTo.
 */
export function createGmailMailer(options: { user: string; appPassword: string; fromName: string }): Mailer {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: options.user, pass: options.appPassword },
  });

  return {
    async send(message) {
      await transport.sendMail({
        from: { name: options.fromName, address: options.user },
        to: message.to,
        replyTo: message.replyTo,
        subject: message.subject,
        text: message.text,
        html: message.html,
      });
    },
  };
}
