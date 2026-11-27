# BluePik Consult website

Next.js 15 + Tailwind CSS v4 website for BluePik Consult — specialised online training and practical business consulting.

## Run it locally

Requires Node.js 20+.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. Until Gmail is set up (below), enquiries from the contact form are printed in the
terminal instead of emailed — handy for testing.

## Send enquiries through Gmail

The form sends email through Gmail's SMTP server using a **Google App Password** (Google no longer allows your
normal password for this).

1. Sign in to the Gmail account that should send the emails (e.g. bluepikconsult@gmail.com).
2. Turn on **2-Step Verification**: https://myaccount.google.com/security
3. Create an **App Password**: https://myaccount.google.com/apppasswords — name it "BluePik website" and copy the
   16-character code.
4. In `.env.local` (and later in your hosting provider's environment variables):

   ```
   GMAIL_USER=bluepikconsult@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ENQUIRY_TO_EMAIL=bluepikconsult@gmail.com
   ```

5. Restart `npm run dev` and send a test enquiry. You'll receive the enquiry (reply goes straight to the sender) and
   the sender receives an automatic confirmation.

Notes: emails are sent *from* the Gmail account. Gmail allows roughly 500 messages a day — plenty for a contact form.
Never commit `.env.local`.

## Work on it with Claude Code

Run `claude` in this folder. Claude Code reads `CLAUDE.md` (architecture, brand tokens, conventions);
`REQUIREMENTS.md` has the full spec. Example requests:

- "Add the founder's name, bio and photo to the About page."
- "Replace the photo placeholders with images from public/photos."
- "Add a testimonials entry for …"

## Edit text

Almost all copy lives in `lib/content/` — `site.ts` (contact details, navigation), `services.ts` (training and
consulting), `company.ts` (mission, values, founder, sectors, testimonials).

## Deploy

Vercel is the simplest host: push to GitHub, import at https://vercel.com, add the variables from `.env.example`,
then connect your domain. Any Node.js host works (`npm run build && npm start`).
