import { cn } from "@/lib/utils";

type Tone = "charcoal" | "ivory" | "ember" | "white";

const toneClass: Record<Tone, string> = {
  charcoal: "text-charcoal",
  ivory: "text-ivory",
  ember: "text-ember",
  white: "text-white",
};

/** Wordmark. The ember "Pro" is the only accent, so the name stays readable on charcoal and ivory. */
export function Logo({
  tone = "charcoal",
  className,
}: {
  tone?: Tone;
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-baseline font-display text-[1.35rem] leading-none tracking-tight select-none sm:text-[1.5rem]", toneClass[tone], className)}>
      Tek<span className={tone === "ember" ? undefined : "text-ember"}>Pro</span>Sys
    </span>
  );
}

export function LogoMark({ className }: { tone?: Tone; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-grid aspect-square w-10 place-items-center rounded-xl bg-ember font-display text-lg leading-none text-ivory select-none",
        className,
      )}
    >
      T
    </span>
  );
}
