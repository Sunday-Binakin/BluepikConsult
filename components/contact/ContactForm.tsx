"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Heading } from "@/components/ui/Typography";
import { trainingAreas } from "@/lib/content/services";
import { site } from "@/lib/content/site";
import { HONEYPOT_FIELD, validateEnquiry, type EnquiryErrors, type Service } from "@/lib/enquiry/schema";
import { FieldError, FormField } from "./FormField";
import { ServicePicker } from "./ServicePicker";

type Status = "idle" | "sending" | "sent" | "error";

const messageHints: Record<Service, string> = {
  training: "Tell us about the topic, participants' roles and learning goals.",
  consulting: "Briefly describe the challenge and the outcome you want to achieve.",
  unsure: "Tell us what you are trying to achieve.",
};

export function ContactForm({ initialService }: { initialService: Service }) {
  const [service, setService] = useState<Service>(initialService);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = { ...Object.fromEntries(new FormData(form)), service };

    const result = validateEnquiry(payload); // same rules as the server
    if (!result.ok) {
      setErrors(result.errors);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.status === 422) {
        const body = (await res.json()) as { errors?: EnquiryErrors };
        setErrors(body.errors ?? {});
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") return <SuccessMessage onReset={() => setStatus("idle")} />;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Heading size="subtitle" className="md:text-[26px]">Send an enquiry</Heading>
        <p className="text-[15px]">We usually reply within {site.responseTime}.</p>
      </div>

      <ServicePicker value={service} onChange={setService} />

      <div className="grid gap-4.5 sm:grid-cols-2">
        <FormField name="name" label="Full name *" error={errors.name}>
          {(p) => <input {...p} type="text" autoComplete="name" placeholder="e.g. Ama Mensah" />}
        </FormField>
        <FormField name="organisation" label="Organisation">
          {(p) => <input {...p} type="text" autoComplete="organization" placeholder="Company or 'Individual'" />}
        </FormField>
        <FormField name="email" label="Email *" error={errors.email}>
          {(p) => <input {...p} type="email" autoComplete="email" placeholder="you@example.com" />}
        </FormField>
        <FormField name="phone" label="Phone / WhatsApp">
          {(p) => <input {...p} type="tel" autoComplete="tel" placeholder="+233" />}
        </FormField>

        {service === "training" ? (
          <>
            <FormField name="area" label="Training area" full>
              {(p) => (
                <select {...p} defaultValue={trainingAreas[0].title}>
                  {trainingAreas.map((a) => (
                    <option key={a.title}>{a.title}</option>
                  ))}
                  <option>Other</option>
                </select>
              )}
            </FormField>
            <FormField name="participants" label="Number of participants" error={errors.participants}>
              {(p) => <input {...p} type="number" min={1} inputMode="numeric" placeholder="e.g. 12" />}
            </FormField>
            <FormField name="dates" label="Preferred dates">
              {(p) => <input {...p} type="text" placeholder="e.g. March 2027" />}
            </FormField>
          </>
        ) : null}

        <FormField name="message" label="Message *" error={errors.message} full>
          {(p) => <textarea {...p} rows={5} placeholder={messageHints[service]} />}
        </FormField>

        {/* Anti-spam honeypot: hidden from people, bots tend to fill it in. */}
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 size-5 flex-none accent-brand-navy"
            />
            I agree to BluePik Consult contacting me about this enquiry.
          </label>
          <FieldError id="consent-error" message={errors.consent} />
        </div>
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-[#b42318]">
          Sorry, something went wrong. Please try again or email us at {site.email}.
        </p>
      ) : null}

      <Button type="submit" className="self-start max-sm:w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send an Enquiry"}
      </Button>
    </form>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div role="status" className="flex flex-col items-start gap-4 py-6">
      <span className="flex size-16 items-center justify-center rounded-full bg-[#e3f6ea] text-[#1a7f45]">
        <Icon name="check" size={30} strokeWidth={2.4} />
      </span>
      <Heading size="subtitle" className="md:text-[26px]">Thank you — your enquiry has been sent</Heading>
      <p>We&apos;ve emailed you a confirmation and will be in touch within {site.responseTime}.</p>
      <Button variant="outline" onClick={onReset}>Send another enquiry</Button>
    </div>
  );
}
