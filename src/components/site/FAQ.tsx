import { ChevronDown } from "lucide-react";

export type FAQ = { q: string; a: string };

export function FAQList({ items }: { items: FAQ[] }) {
  return (
    <div className="divide-y divide-[color:var(--border)] rounded-2xl border border-[color:var(--border)] bg-white shadow-soft overflow-hidden">
      {items.map((f, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer items-start justify-between gap-4 p-6 hover:bg-[color:var(--teal-light)]/40 transition">
            <span className="font-display text-xl text-[color:var(--teal-dark)]">{f.q}</span>
            <ChevronDown className="mt-1.5 h-5 w-5 shrink-0 text-[color:var(--teal-deep)] transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-6 -mt-2 text-[color:var(--muted-ink)] leading-relaxed">{f.a}</div>
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
