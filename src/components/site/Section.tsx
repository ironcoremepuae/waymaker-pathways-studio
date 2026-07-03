import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className = "",
  eyebrow,
  title,
  subtitle,
  center = false,
  id,
}: {
  children?: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container-prose">
        {(eyebrow || title || subtitle) && (
          <Reveal>
            <div className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
              {eyebrow && (
                <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-3">
                  {eyebrow}
                </div>
              )}
              {title && <h2 className="text-4xl md:text-5xl leading-[1.1]">{title}</h2>}
              {subtitle && (
                <p className="mt-5 text-lg text-[color:var(--muted-ink)] leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  badges,
  children,
  aside,
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  badges?: string[];
  children?: ReactNode;
  aside?: ReactNode;
  variant?: "default" | "playful";
}) {
  const bg =
    variant === "playful"
      ? "bg-gradient-to-br from-[color:var(--gold-soft)]/40 via-[color:var(--ivory)] to-[color:var(--teal-light)]"
      : "bg-hero";
  return (
    <section className={`relative overflow-hidden ${bg} pt-20 pb-20 md:pt-28 md:pb-28`}>
      <div
        className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--gold)]/25 blur-3xl floaty"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-[color:var(--teal-deep)]/20 blur-3xl floaty"
        aria-hidden
      />
      <div
        className="absolute inset-0 dot-pattern opacity-[0.18] pointer-events-none"
        aria-hidden
      />
      <div
        className={`container-prose relative ${aside ? "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.78fr)] lg:gap-12" : ""}`}
      >
        <div className="max-w-4xl">
          {eyebrow && (
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3.5 py-1.5 text-[0.7rem] tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-5 border border-[color:var(--border)] shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] glow" />
                {eyebrow}
              </div>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">{title}</h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={160}>
              <p className="mt-6 text-xl md:text-2xl text-[color:var(--muted-ink)] leading-relaxed max-w-3xl font-light">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={220}>
              <div className="mt-8 flex flex-wrap items-center gap-3">{children}</div>
            </Reveal>
          )}
          {badges && badges.length > 0 && (
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full bg-white/80 backdrop-blur border border-[color:var(--border)] px-3 py-1.5 text-xs font-medium text-[color:var(--teal-deep)] shadow-soft"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          )}
        </div>
        {aside && (
          <Reveal delay={140}>
            <div className="relative mx-auto mt-12 w-full max-w-[17rem] sm:max-w-[20rem] lg:mt-0 lg:max-w-[24rem] lg:justify-self-end">
              {aside}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
