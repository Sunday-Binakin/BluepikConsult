import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Container } from "@/components/ui/Layout";
import { Logo } from "@/components/ui/Media";
import { footerNav, site } from "@/lib/content/site";
import { ContactLinks } from "./ContactLinks";
import { CtaBand } from "./CtaBand";

export function Footer() {
  return (
    <>
      <CtaBand />
      <footer className="bg-brand-ink pt-16 pb-7 text-[15px] text-[#b7c5da] md:pt-18">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
            <div className="flex flex-col gap-4.5">
              <Logo variant="lockup-white" className="w-[176px]" />
              <p className="max-w-sm">{site.description}</p>
              <p className="text-eyebrow text-[#8ea3c2]">{site.tagline}</p>
            </div>

            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className="mb-4 text-[15px] font-semibold text-white">{group.title}</h2>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-[#dce6f5] hover:text-white">{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="mb-4 text-[15px] font-semibold text-white">Get in touch</h2>
              <ContactLinks variant="footer" />
            </div>
          </div>

          <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-6 text-sm">
            <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
            <Link href="/privacy" className="text-[#dce6f5] hover:text-white">Privacy Policy</Link>
          </div>
        </Container>
      </footer>

      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BluePik Consult on WhatsApp"
        className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-transform hover:scale-105"
      >
        <Icon name="whatsapp" size={28} />
      </a>
    </>
  );
}
