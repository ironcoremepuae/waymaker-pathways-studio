import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type LinkProps = ComponentProps<typeof Link>;

export function CTAButton({
  to,
  variant = "primary",
  children,
  ...rest
}: { to: string; variant?: "primary" | "secondary" | "gold" | "ghost"; children: ReactNode } & Omit<LinkProps, "to" | "children">) {
  const styles =
    variant === "primary"
      ? "bg-teal-gradient text-white shadow-soft hover:shadow-elegant"
      : variant === "gold"
      ? "bg-[color:var(--gold)] text-[color:var(--teal-dark)] shadow-gold hover:brightness-105"
      : variant === "ghost"
      ? "bg-white/10 text-white border border-white/30 hover:bg-white/20"
      : "bg-white text-[color:var(--teal-deep)] border border-[color:var(--border)] hover:border-[color:var(--teal-deep)]";
  return (
    <Link
      to={to as any}
      {...rest}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${styles}`}
    >
      {children}
    </Link>
  );
}

export function FinalCTA({
  title = "Ready to Transform Potential into Purpose?",
  text = "Partner with WayMaker Skills™ to build confident learners, capable professionals, responsible leaders, and future-ready communities.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-prose">
        <div className="relative rounded-3xl bg-teal-gradient text-white p-10 md:p-16 overflow-hidden shadow-elegant">
          <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[color:var(--gold)]/30 blur-3xl glow" aria-hidden />
          <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative max-w-3xl">
            <h2 className="text-white text-4xl md:text-5xl leading-tight">{title}</h2>
            <p className="mt-5 text-white/85 text-lg leading-relaxed">{text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/contact" variant="gold">Start a Conversation</CTAButton>
              <CTAButton to="/programs" variant="ghost">Explore Programs</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
