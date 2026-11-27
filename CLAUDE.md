# BluePik Consult website — notes for Claude Code

Marketing site for **BluePik Consult** (Ghana): specialised online training and practical business consulting in
transport, logistics, supply chain management and business operations. Full spec: `REQUIREMENTS.md`.
Visual source of truth: the "BluePik Consult Website Designs" canvas in Claude (desktop + mobile for every page).

## Stack

- Next.js 15 (App Router, React 19, TypeScript strict)
- Tailwind CSS v4 — CSS-first config in `app/globals.css` (`@theme` tokens, `@utility` type scale). No `tailwind.config.js`.
- Zod — one enquiry schema shared by the form (client) and API route (server)
- Nodemailer — Gmail SMTP with a Google App Password
- Fonts via `next/font/google`: Poppins (`font-display`) for headings, Inter (`font-sans`) for body

Commands: `npm run dev` · `npm run build` · `npm run lint` · `npm run typecheck`

## Architecture

```
app/                      Routes only: compose components + content. No business logic.
  api/enquiry/route.ts    Thin controller: parse → validate → submitEnquiry()
components/
  ui/                     Generic, brand-styled building blocks (no page knowledge)
    Button  Card  Icon  Layout(Container/Section/Grid/Split)  Media(Logo/PhotoPlaceholder/RisingBars)  Steps  Typography
  layout/                 Site chrome: Header, Footer, CtaBand, PageHero, ContactLinks
  contact/                ContactForm (client), FormField, ServicePicker
lib/
  content/                ALL copy and data (site, services, company). Edit text here.
  enquiry/                schema.ts (Zod rules), messages.ts (email builders), submit.ts (use case)
  mail/                   Mailer interface + gmail.ts + console.ts; getMailer() picks one from env
  cn.ts                   className joiner
public/brand/             Vector SVG logos (lockup, stacked, white variants, mark)
```

## Principles to keep

- **DRY** — content lives once in `lib/content`; validation once in `lib/enquiry/schema.ts`; contact details once
  in `ContactLinks`. Pages map data into components rather than repeating markup.
- **KISS** — plain Tailwind classes, no UI framework, no state library. Add a dependency only when it removes real code.
- **SOLID**
  - Single responsibility: routes compose, components render, `lib/` holds logic.
  - Open/closed: extend via props/variant maps (`Button` `variant`, `Card` `tone`/`padding`, `Section` `tone`), not by editing call sites.
  - Dependency inversion: `submitEnquiry` depends on the `Mailer` interface, not on Gmail. To change provider, add a
    new `Mailer` in `lib/mail/` and select it in `getMailer()`.
- Don't fight a component with override classes (e.g. `className="md:p-9"` on Card). Add or use a prop instead —
  conflicting Tailwind utilities have no guaranteed winner.

## Brand tokens (Tailwind classes)

| Class suffix | Hex | Use |
| --- | --- | --- |
| `brand-navy` | #043F8D | Primary buttons, heroes, CTA band |
| `brand-blue` | #0B7BE8 | Links, eyebrows, icons, hover |
| `brand-slate` | #646A72 | Secondary text |
| `brand-ink` | #0A2147 | Headings, footer |
| `brand-body` | #3D4652 | Body text |
| `brand-mist` / `brand-cloud` | #EAF2FC / #F6F8FB | Tinted sections, tags |
| `brand-line` | #DCE4EF | Borders |

Type utilities: `text-display` (H1), `text-title` (H2), `text-subtitle` (H3), `text-lead`, `text-eyebrow` — use via
`<Heading size=…>` / `<SectionHeading>`. Body ≥16 px. Growth Blue only for large text, icons and links.

Logo: always `<Logo variant=…>` (SVG, sharp at any size). White variants on navy/ink. Never stretch or recolour.

## Responsive

Mobile-first, 360 px → 1440 px+, no horizontal scroll. Hamburger nav below `xl`; grids via `<Grid cols>`
(1 col on phones → 2 → 3/4); `<Split>` stacks below `lg`; buttons full-width on phones. Tap targets ≥44 px.

## Conventions

- British spelling (organisation, programme, prioritise).
- CTAs link to `/contact?service=training|consulting|unsure`; the form pre-selects the service.
- Each page exports `metadata` with a unique title and description.
- Placeholders are `[in square brackets]` or marked `TODO` — search both before launch.
- Accessibility: real `<button>`/`<a>`, labelled fields wired to errors with `aria-describedby`, visible focus.

## Open items

Founder details · city · real photos (replace `PhotoPlaceholder` with `next/image`) · domain · social links ·
testimonials (`lib/content/company.ts` → section appears automatically) · reviewed privacy policy ·
confirm response time in `lib/content/site.ts`.
