import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { site } from "@/lib/content/site";

type ContactItem = { icon: IconName; label: string; value: string; href?: string; external?: boolean };

/** Single source for how contact details are listed (footer + contact page). */
export const contactItems: ContactItem[] = [
  { icon: "mail", label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: "phone", label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: "whatsapp", label: "WhatsApp", value: "Chat with us", href: site.whatsappHref, external: true },
  { icon: "pin", label: "Location", value: `${site.location} · serving clients across Africa` },
];

export function ContactLinks({ variant, className }: { variant: "footer" | "card"; className?: string }) {
  const card = variant === "card";
  return (
    <ul className={cn("flex flex-col", card ? "gap-5" : "gap-3.5", className)}>
      {contactItems.map(({ icon, label, value, href, external }) => {
        const content = (
          <>
            <span
              className={cn(
                "flex flex-none items-center justify-center",
                card ? "size-11.5 rounded-[14px] bg-white/12 text-white" : "text-brand-blue",
              )}
            >
              <Icon name={icon} size={card ? 22 : 18} />
            </span>
            <span>
              {card ? <span className="block text-[13px] text-[#a9c4ec]">{label}</span> : null}
              {value}
            </span>
          </>
        );
        const rowClass = cn("flex items-center gap-3.5", card ? "text-white" : "text-[#dce6f5] hover:text-white");
        return (
          <li key={label}>
            {href ? (
              <a href={href} className={rowClass} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {content}
              </a>
            ) : (
              <div className={rowClass}>{content}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
