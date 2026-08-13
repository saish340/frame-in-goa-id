import type { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "solid" | "outline" | "pink";
};

export function HHButton({ tone = "solid", className, children, ...rest }: BtnProps) {
  return (
    <button
      {...rest}
      className={cn(
        "label-mono inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold transition-all duration-200 active:translate-y-px disabled:opacity-45",
        tone === "solid" &&
          "ribbon-frame bg-primary text-primary-foreground hover:brightness-110 hover:shadow-[5px_5px_0_0_var(--ink)]",
        tone === "pink" &&
          "ribbon-frame bg-accent text-accent-foreground hover:brightness-110 hover:shadow-[5px_5px_0_0_var(--ink)]",
        tone === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

type FieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string };

export function HHField({ label, className, ...rest }: FieldProps) {
  return (
    <label className="group block">
      <span className="label-mono text-muted-foreground group-focus-within:text-primary block pb-2 transition-colors">
        {label}
      </span>
      <input
        {...rest}
        className={cn(
          "bg-deep/70 placeholder:text-muted-foreground/60 focus:border-primary w-full border-b-2 border-border px-3 py-3 font-mono text-sm tracking-wide text-foreground outline-none transition-colors",
          className,
        )}
      />
    </label>
  );
}

export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="label-mono border border-border px-3 py-1.5 font-bold">{children}</span>
  );
}
