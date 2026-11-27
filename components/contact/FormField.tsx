import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export const inputClass =
  "min-h-12.5 w-full rounded-[10px] border-[1.5px] border-[#c9d5e4] bg-white px-3.5 py-3 text-base text-brand-ink " +
  "placeholder:text-[#8a94a3] focus:border-brand-blue focus:outline-3 focus:outline-brand-blue/25 " +
  "aria-[invalid=true]:border-[#b42318]";

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-sm text-[#b42318]">
      {message}
    </p>
  );
}

/** Label + control + error message, wired together for screen readers. */
export function FormField({
  name,
  label,
  error,
  full,
  children,
}: {
  name: string;
  label: string;
  error?: string;
  full?: boolean;
  children: (props: { id: string; name: string; "aria-invalid": boolean; "aria-describedby"?: string; className: string }) => ReactNode;
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div className={cn("flex flex-col gap-2", full && "sm:col-span-2")}>
      <label htmlFor={id} className="text-sm font-semibold text-brand-ink">
        {label}
      </label>
      {children({ id, name, "aria-invalid": !!error, "aria-describedby": error ? errorId : undefined, className: inputClass })}
      <FieldError id={errorId} message={error} />
    </div>
  );
}
