import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Layout";
import { RisingBars } from "@/components/ui/Media";
import { Eyebrow, Heading } from "@/components/ui/Typography";

/** Closing call to action shown above the footer on every page. */
export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-brand-haze md:py-22">
      <RisingBars heights={[90, 150, 210, 280]} />
      <Container className="relative flex flex-wrap items-center justify-between gap-8">
        <div className="flex max-w-2xl flex-col gap-3.5">
          <Eyebrow tone="dark">Let&apos;s talk</Eyebrow>
          <Heading tone="dark">Tell us what you want to achieve</Heading>
          <p className="text-lead text-brand-haze">
            Share a training topic or an operational challenge, and we&apos;ll help you define the next step.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:flex-wrap">
          <ButtonLink href="/contact?service=training" variant="white">Request Training</ButtonLink>
          <ButtonLink href="/contact?service=consulting" variant="ghost">Discuss a Consulting Project</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
