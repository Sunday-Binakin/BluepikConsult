import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Layout";
import { SectionHeading } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <Section containerClassName="flex flex-col items-center text-center">
      <SectionHeading
        as="h1"
        eyebrow="Page not found"
        title="We couldn't find that page"
        lead="The link may be out of date. Try one of these instead."
        align="center"
      />
      <div className="flex flex-col gap-3.5 sm:flex-row">
        <ButtonLink href="/">Go to home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
      </div>
    </Section>
  );
}
