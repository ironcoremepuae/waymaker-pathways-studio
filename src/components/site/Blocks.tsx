import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

/* ---------- Timeline ---------- */
export function Timeline({ steps }: { steps: { code?: string; title: string; desc: string }[] }) {
  return (
    <ol className="relative max-w-3xl mx-auto border-l-2 border-[color:var(--teal-deep)]/25 pl-8 space-y-10">
      {steps.map((s, i) => (
        <Reveal key={s.title} delay={i * 80} as="li" className="relative">
          <div className="absolute -left-[2.4rem] top-0 h-12 w-12 rounded-full bg-teal-gradient text-white flex items-center justify-center font-display text-xl shadow-elegant">
            {s.code ?? i + 1}
          </div>
          <div className="ml-2">
            <div className="text-xs tracking-widest uppercase text-[color:var(--gold)] font-semibold">
              Step {i + 1}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-[color:var(--teal-dark)] mt-1">
              {s.title}
            </h3>
            <p className="mt-2 text-[color:var(--muted-ink)] text-base md:text-lg leading-relaxed">
              {s.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/* ---------- Bento Tile ---------- */
export function BentoTile({
  icon: Icon,
  title,
  children,
  className = "",
  tone = "ivory",
}: {
  icon?: LucideIcon;
  title: string;
  children?: ReactNode;
  className?: string;
  tone?: "ivory" | "teal" | "gold" | "white";
}) {
  const tones: Record<string, string> = {
    ivory: "bg-[color:var(--ivory)] text-[color:var(--teal-dark)]",
    teal: "bg-teal-gradient text-white",
    gold: "bg-[color:var(--gold)]/15 text-[color:var(--teal-dark)]",
    white: "bg-white text-[color:var(--teal-dark)]",
  };
  return (
    <div
      className={`gradient-border card-lift relative rounded-3xl border border-[color:var(--border)] p-7 shadow-soft overflow-hidden ${tones[tone]} ${className}`}
    >
      {Icon && (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-[color:var(--teal-deep)]">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <div className="leading-relaxed text-[0.95rem] opacity-90">{children}</div>
    </div>
  );
}

/* ---------- Outcome Pill grid ---------- */
export function OutcomeGrid({ items }: { items: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
      {items.map((o, i) => (
        <Reveal key={o} delay={i * 40}>
          <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] px-5 py-4 text-center shadow-soft">
            <div className="font-semibold text-[color:var(--teal-dark)]">{o}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Quote block ---------- */
export function QuoteBlock({
  quote,
  author,
  role,
}: {
  quote: string;
  author?: string;
  role?: string;
}) {
  return (
    <Reveal>
      <figure className="relative overflow-hidden rounded-3xl bg-teal-gradient text-white p-10 md:p-14 shadow-elegant">
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-[color:var(--gold)]/30 blur-3xl glow"
          aria-hidden
        />
        <Quote className="h-10 w-10 text-[color:var(--gold-soft)] mb-4" />
        <blockquote className="font-display text-2xl md:text-3xl leading-snug relative">
          "{quote}"
        </blockquote>
        {(author || role) && (
          <figcaption className="mt-6 text-sm text-white/80">
            {author && <span className="font-semibold">{author}</span>}
            {role && <span className="opacity-80"> — {role}</span>}
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}

/* ---------- Ecosystem block ---------- */
export function EcosystemGrid({
  items,
}: {
  items: { title: string; desc: string; to: string; tag: string }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {items.map((e, i) => (
        <Reveal key={e.title} delay={i * 80}>
          <Link
            to={e.to as LinkTo}
            className="gradient-border card-lift block rounded-3xl bg-white border border-[color:var(--border)] p-7 shadow-soft"
          >
            <div className="text-xs tracking-widest uppercase font-semibold text-[color:var(--gold)]">
              {e.tag}
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-[color:var(--teal-dark)] mt-2">
              {e.title}
            </h3>
            <p className="mt-3 text-[color:var(--muted-ink)] leading-relaxed">{e.desc}</p>
            <div className="mt-5 text-sm font-semibold text-[color:var(--teal-deep)]">
              Explore →
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Audience cards ---------- */
export function AudienceCards({
  items,
}: {
  items: { icon?: LucideIcon; title: string; desc: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((a, i) => (
        <Reveal key={a.title} delay={i * 60}>
          <div className="card-lift gradient-border rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
            {a.icon && (
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)]">
                <a.icon className="h-5 w-5" />
              </div>
            )}
            <div className="font-display text-xl text-[color:var(--teal-dark)]">{a.title}</div>
            <div className="text-sm text-[color:var(--muted-ink)] mt-1.5 leading-relaxed">
              {a.desc}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
