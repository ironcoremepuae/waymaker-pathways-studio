import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQ = { q: string; a: string };

export function FAQList({
  items,
  className,
  itemClassName,
  summaryClassName,
  questionClassName,
  iconClassName,
  answerClassName,
}: {
  items: FAQ[];
  className?: string;
  itemClassName?: string;
  summaryClassName?: string;
  questionClassName?: string;
  iconClassName?: string;
  answerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft",
        !itemClassName && "divide-y divide-[color:var(--border)]",
        className,
      )}
    >
      {items.map((f, i) => (
        <details key={i} className={cn("group", itemClassName)}>
          <summary
            className={cn(
              "flex cursor-pointer items-start justify-between gap-4 p-6 transition hover:bg-[color:var(--teal-light)]/40",
              summaryClassName,
            )}
          >
            <span
              className={cn(
                "font-display text-xl text-[color:var(--teal-dark)]",
                questionClassName,
              )}
            >
              {f.q}
            </span>
            <ChevronDown
              className={cn(
                "mt-1.5 h-5 w-5 shrink-0 text-[color:var(--teal-deep)] transition-transform group-open:rotate-180",
                iconClassName,
              )}
            />
          </summary>
          <div
            className={cn(
              "px-6 pb-6 -mt-2 leading-relaxed text-[color:var(--muted-ink)]",
              answerClassName,
            )}
          >
            {f.a}
          </div>
        </details>
      ))}
    </div>
  );
}

export function faqJsonLd(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
