import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/layout/ContactLinks";
import { PageHero } from "@/components/layout/PageHero";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Layout";
import { Heading } from "@/components/ui/Typography";
import { parseService } from "@/lib/enquiry/schema";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send BluePik Consult a training or consulting enquiry. Email bluepikconsult@gmail.com or call +233 256 915 959.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const initialService = parseService((await searchParams).service);

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Tell us what you want to achieve"
        lead="For training enquiries, share the topic, the number of participants and your preferred dates. For consulting enquiries, briefly describe the challenge and the outcome you want to achieve."
      />

      <Section containerClassName="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr]">
        <Card interactive={false} padding="lg" className="shadow-[0_20px_50px_rgba(10,33,71,0.06)]">
          {/* key resets the form if the ?service= link changes */}
          <ContactForm key={initialService} initialService={initialService} />
        </Card>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5.5 rounded-[20px] bg-brand-navy p-7 text-brand-haze md:p-9">
            <Heading size="subtitle" tone="dark">Contact details</Heading>
            <ContactLinks variant="card" />
          </div>
          <Card interactive={false}>
            <Heading as="h3" size="subtitle" className="text-lg!">What to include</Heading>
            <p className="text-[15px]"><strong className="text-brand-ink">Training:</strong> the topic, number of participants and preferred dates.</p>
            <p className="text-[15px]"><strong className="text-brand-ink">Consulting:</strong> the challenge you face and the outcome you want.</p>
          </Card>
        </div>
      </Section>
    </>
  );
}
