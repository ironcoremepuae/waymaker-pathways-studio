import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function FeatureCard({
  icon: Icon,
  title,
  children,
  delay = 0,
}: {
  icon?: LucideIcon;
  title: string;
  children?: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="card-lift gradient-border group relative rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft h-full">
        {Icon && (
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)] group-hover:bg-[color:var(--teal-deep)] group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <h3 className="font-display text-2xl text-[color:var(--teal-dark)] mb-2">{title}</h3>
        <div className="text-[color:var(--muted-ink)] leading-relaxed text-[0.95rem]">
          {children}
        </div>
      </div>
    </Reveal>
  );
}
