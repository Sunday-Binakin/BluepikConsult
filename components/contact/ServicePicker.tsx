import { cn } from "@/lib/cn";
import { SERVICE_LABELS, SERVICES, type Service } from "@/lib/enquiry/schema";

export function ServicePicker({ value, onChange }: { value: Service; onChange: (s: Service) => void }) {
  return (
    <div className="flex flex-col gap-2.5">
      <span id="service-label" className="text-sm font-semibold text-brand-ink">What do you need?</span>
      <div role="group" aria-labelledby="service-label" className="flex flex-wrap gap-2.5">
        {SERVICES.map((s) => (
          <button
            key={s}
            type="button"
            aria-pressed={value === s}
            onClick={() => onChange(s)}
            className={cn(
              "min-h-11.5 rounded-full border-[1.5px] px-4.5 text-[15px] font-semibold transition-colors",
              value === s
                ? "border-brand-navy bg-brand-navy text-white"
                : "border-[#c9d5e4] bg-white text-brand-ink hover:border-brand-navy",
            )}
          >
            {SERVICE_LABELS[s]}
          </button>
        ))}
      </div>
    </div>
  );
}
