import type { Mailer } from "./types";

/** Development fallback: prints emails to the terminal instead of sending them. */
export const consoleMailer: Mailer = {
  async send(message) {
    console.log(
      `\n[mail:console] To: ${message.to}${message.replyTo ? ` (reply-to ${message.replyTo})` : ""}\n` +
        `Subject: ${message.subject}\n\n${message.text}\n`,
    );
  },
};
