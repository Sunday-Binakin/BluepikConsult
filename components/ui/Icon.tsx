import type { ReactNode } from "react";

/** 24×24 stroke icons. Colour follows `currentColor`, size via the `size` prop. */
const paths = {
  truck: <><path d="M2 7h11v9H2zM13 10h4l4 3v3h-8" /><circle cx="6" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></>,
  warehouse: <><path d="M3 9l9-5 9 5v11H3z" /><path d="M7 20v-6h10v6M7 17h10" /></>,
  network: <><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="5" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M7.3 11l9.4-5M7.3 13l9.4 5" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" /></>,
  process: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><path d="M10 6.5h4a3 3 0 0 1 3 3V14" /></>,
  dashboard: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M6 14v-3M10 14V8M14 14v-5M18 14v-2" /></>,
  monitor: <><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /><circle cx="12" cy="10" r="2.5" /></>,
  training: <><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4M9 9l2 2 4-4" /></>,
  growth: <><path d="M3 20h18M6 16V10M11 16V6M16 16v-4M20 4l-4 4-3-2-5 4" /></>,
  book: <><path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4z" /><path d="M8 9h8M8 13h6" /></>,
  users: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20a6 6 0 0 1 12 0M14 20a4.5 4.5 0 0 1 7-3.7" /></>,
  user: <><circle cx="12" cy="7" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  building: <><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></>,
  clipboard: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v3h6V3M9 11h6M9 15h4" /></>,
  cap: <><path d="M2 8l10-5 10 5-10 5z" /><path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></>,
  code: <><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2" /></>,
  check: <path d="M4 12l5 5L20 6" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
  pin: <><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  whatsapp: <><path d="M4 20l1.3-3.9A8 8 0 1 1 8.2 19z" /><path d="M9 9.5c.3 2 2.2 4.2 4.6 5l1.2-1.3 1.8.9c-.2 1-1 1.7-2 1.7-3.6 0-6.9-3.3-6.9-6.9 0-1 .7-1.8 1.7-2l.9 1.8z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof paths;

type IconProps = { name: IconName; size?: number; strokeWidth?: number; className?: string };

export function Icon({ name, size = 24, strokeWidth = 1.8, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
