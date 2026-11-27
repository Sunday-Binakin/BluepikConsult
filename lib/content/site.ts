export const site = {
  name: "BluePik Consult",
  tagline: "Training · Skills Development · Management Consultancy",
  description:
    "Specialised online training and practical business consulting in transport, logistics, supply chain management and business operations.",
  email: "bluepikconsult@gmail.com",
  phone: "+233 256 915 959",
  phoneHref: "tel:+233256915959",
  whatsappHref: "https://wa.me/233256915959",
  location: "Ghana", // TODO: add city once confirmed
  responseTime: "1–2 working days", // TODO: confirm
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bluepikconsult.com",
} as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/training", label: "Online Training" },
  { href: "/consulting", label: "Consulting" },
  { href: "/who-we-work-with", label: "Who We Work With" },
  { href: "/contact", label: "Contact" },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/who-we-work-with", label: "Who We Work With" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/training", label: "Online Training" },
      { href: "/consulting", label: "Consulting Services" },
      { href: "/training", label: "Customised Team Training" },
      { href: "/consulting", label: "Operational Reviews" },
    ],
  },
];
