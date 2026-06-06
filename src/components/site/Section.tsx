import type { ReactNode } from "react";

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
          <div className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
            {eyebrow && (
              <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-3">
                {eyebrow}
              </div>
            )}
            {title && <h2 className="text-4xl md:text-5xl leading-[1.1]">{title}</h2>}
            {subtitle && <p className="mt-5 text-lg text-[color:var(--muted-ink)] leading-relaxed">{subtitle}</p>}
          </div>
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
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--gold)]/20 blur-3xl floaty" aria-hidden />
      <div className="absolute -bottom-32 -left-24 w-[32rem] h-[32rem] rounded-full bg-[color:var(--teal-deep)]/20 blur-3xl floaty" aria-hidden />
      <div className="container-prose relative">
        <div className="max-w-4xl reveal">
          {eyebrow && (
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">{title}</h1>
          {subtitle && (
            <p className="mt-6 text-xl md:text-2xl text-[color:var(--muted-ink)] leading-relaxed max-w-3xl font-light">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
