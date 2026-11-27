"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Layout";
import { Logo } from "@/components/ui/Media";
import { cn } from "@/lib/cn";
import { mainNav } from "@/lib/content/site";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]); // close the menu after navigating

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" aria-label="BluePik Consult — home" className="flex-none">
          <Logo variant="lockup" priority className="w-[132px] md:w-[160px]" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 xl:flex">
          {mainNav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors",
                  active
                    ? "rounded-none font-semibold text-brand-navy shadow-[inset_0_-2px_0_var(--color-brand-blue)]"
                    : "text-brand-ink hover:bg-brand-mist hover:text-brand-blue",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href="/contact" size="sm" className="hidden md:inline-flex">
            Send an Enquiry
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-xl border border-brand-line text-brand-navy xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? "close" : "menu"} size={22} strokeWidth={2} />
          </button>
        </div>
      </Container>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={cn("border-t border-brand-line bg-white xl:hidden", open ? "block" : "hidden")}
      >
        <Container className="flex flex-col pt-3 pb-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className="border-b border-brand-line px-1 py-3.5 text-lg font-medium text-brand-ink aria-[current=page]:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-5">Send an Enquiry</ButtonLink>
        </Container>
      </nav>
    </header>
  );
}
