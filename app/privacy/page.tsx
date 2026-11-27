import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Layout";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false } };

// TODO: replace with a reviewed privacy policy before launch.
export default function PrivacyPage() {
  return (
    <>
      <PageHero crumb="Privacy Policy" title="Privacy Policy" lead="How we handle the information you send us." />
      <Section>
        <div className="flex max-w-3xl flex-col gap-4.5">
        <p>
          When you send an enquiry through this website we collect your name, organisation, email address, phone
          number and the details in your message. We use this information only to respond to your enquiry and to
          provide the training or consulting services you ask about.
        </p>
        <p>We do not sell your information. [Add details on storage, retention, analytics and your rights.]</p>
        <p>
          Questions? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-blue">{site.email}</a>.
        </p>
        </div>
      </Section>
    </>
  );
}
