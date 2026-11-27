# BluePik Consult Website — Requirements Specification

Copy of the requirements doc in Claude, adapted for this build (Next.js, Tailwind CSS, Gmail SMTP). November 2026.

## 1. Project overview

A six-page, fully responsive marketing website that turns visitors into training and consulting enquiries for
BluePik Consult — specialised online training and practical business consulting in transport, logistics, supply
chain management and business operations.

**Context.** Sole proprietorship based in Ghana serving individuals, businesses and institutions. Email
bluepikconsult@gmail.com · phone +233 256 915 959.

**Goals**

1. Generate qualified enquiries: every page ends in a clear call to action; one-step enquiry form.
2. Build credibility: mission, vision, approach and focus areas presented professionally and on-brand.
3. Explain the offer within 30 seconds: four training areas, five consulting services.
4. Work on every device; mobile is a primary channel.

**Primary CTAs:** Request Training · Discuss a Consulting Project · Send an Enquiry.
**Out of scope (phase 1):** payments, LMS, booking calendars, client log-ins.

## 2. Audience

| Persona | Who | Needs | Main CTA |
| --- | --- | --- | --- |
| Career builder | Individual professional in logistics, fleet or operations, often on mobile | Topics, format, how to sign up | Request Training |
| Team lead / HR / L&D | Organisation training a team | Customised programmes, group sizes, dates | Request a Training Programme |
| Operations decision-maker | Owner/manager of a transport operator, logistics business or institution | Consulting services, approach | Discuss a Consulting Project |

Sectors: transport and fleet operators, logistics businesses, training institutions, organisations with in-house
operations teams — Ghana and across Africa.

## 3. Sitemap

`/` · `/about` · `/training` · `/consulting` · `/who-we-work-with` · `/contact` · `/privacy` · 404.
All CTAs open `/contact?service=…` with the service pre-selected.

## 4. Brand

| Role | Name | Hex |
| --- | --- | --- |
| Primary | BluePik Navy | #043F8D |
| Accent | Growth Blue | #0B7BE8 |
| Secondary | Slate Grey | #646A72 |
| Dark | Deep Ink | #0A2147 |
| Tint | Sky Mist | #EAF2FC |
| Neutral | Cloud | #F6F8FB |
| Base | White | #FFFFFF |

- Headings Poppins 600/700; body Inter 400/500 at 16–18 px; eyebrows uppercase with 0.14em tracking.
- Logo supplied as SVG (vector) in `public/brand/`: horizontal lockup for the header, white lockup on dark,
  stacked logo on About. The mark and wordmark were traced from the supplied PNG; "CONSULT" and the tagline are set in
  Montserrat. Replace with the designer's master SVG if one becomes available.
- Motifs: logo's rising bars on navy; pill buttons; 16 px card radius; soft borders.

## 5. Pages

**Global:** sticky header (hamburger below 1280 px) · navy CTA band · footer with white logo, links, contact
details · floating WhatsApp button.

- **Home:** hero with two CTAs · focus-area strip · two service cards · four training areas · 3-step process · audience tiles.
- **About:** who we are · approach · mission + vision · values (to confirm) · founder (content needed).
- **Online Training:** three formats · four areas with topic tags · 4-step process · team-training CTA.
- **Consulting:** five services + "not sure" card · 4-step engagement · why BluePik.
- **Who We Work With:** three audiences with CTAs · four sectors · testimonials (shown once added).
- **Contact:** enquiry form + contact card + guidance · thank-you state.

## 6. Responsive

| Range | Layout |
| --- | --- |
| < 640 px | 1 column, full-width buttons, 20 px gutters, 64 px header |
| 640–1023 px | 2-column grids, hamburger menu |
| 1024–1279 px | 3–4 column grids, split sections side by side, hamburger menu |
| ≥ 1280 px | Full navigation, content max-width 1200 px |

Fluid type (`clamp`), body ≥16 px, tap targets ≥44 px, no horizontal scroll from 360 px.

## 7. Enquiry form

| Field | Required | Notes |
| --- | --- | --- |
| Full name | Yes | |
| Organisation | No | |
| Email | Yes | Validated |
| Phone / WhatsApp | No | |
| Service | Yes | Online Training · Consulting · Not sure yet |
| Training area, participants, dates | — | Shown for Training only |
| Message | Yes | Hint changes by service |
| Consent | Yes | |

- Same validation rules on client and server (shared Zod schema).
- On submit: notification to the inbox via **Gmail SMTP** (reply-to = sender), auto-reply to the sender, on-page thank-you.
- Spam: hidden honeypot field. Add Cloudflare Turnstile if spam appears.

## 8. Non-functional

| Area | Requirement |
| --- | --- |
| Performance | Lighthouse mobile 90+; LCP < 2.5 s on 4G |
| Accessibility | WCAG 2.2 AA |
| SEO | Unique titles/descriptions, Open Graph image, sitemap.xml, robots.txt, schema.org ProfessionalService |
| Security | HTTPS; secrets only in environment variables; Gmail App Password (never the account password) |
| Analytics | GA4 or Plausible; track CTA clicks and enquiries |
| Hosting | Vercel (recommended) + domain e.g. bluepikconsult.com |

## 9. Open items and acceptance

**Still needed:** designer's master SVG logo (optional) · founder name, photo, bio · city · domain · photography ·
social links · testimonials · confirmed values/process wording · privacy policy · response-time promise.

**Acceptance:** matches approved designs on mobile, tablet and desktop · every CTA pre-selects the right service ·
a test enquiry reaches bluepikconsult@gmail.com and the sender gets an auto-reply · Lighthouse mobile Performance 90+,
Accessibility 95+, SEO 95+.
