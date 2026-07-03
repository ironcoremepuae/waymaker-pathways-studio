import { ArrowRight } from "lucide-react";
import {
  Brain,
  Crown,
  Globe2,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
} from "lucide-react";
import type { ComponentProps } from "react";
import { CTAButton } from "./CTA";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ROUTES } from "@/data/routes";

const LQ_CAPABILITY_ROWS = [
  [
    {
      icon: Crown,
      title: "Leadership Development",
      desc: "Inspire, influence, and create impact.",
    },
    {
      icon: MessagesSquare,
      title: "Communication Excellence",
      desc: "Express, listen, and connect with clarity.",
    },
    {
      icon: HeartHandshake,
      title: "Emotional Intelligence",
      desc: "Understand, manage, and leverage emotions.",
    },
    {
      icon: Brain,
      title: "Critical Thinking",
      desc: "Analyze deeply and think with clarity.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      desc: "Solve problems and make better decisions.",
    },
  ],
  [
    {
      icon: Sparkles,
      title: "Creativity & Innovation",
      desc: "Generate ideas and drive meaningful innovation.",
    },
    {
      icon: Users,
      title: "Collaboration & Teamwork",
      desc: "Work together and achieve greater outcomes.",
    },
    {
      icon: Globe2,
      title: "Adaptability",
      desc: "Embrace change and thrive in uncertainty.",
    },
    {
      icon: ShieldCheck,
      title: "Resilience",
      desc: "Bounce back, grow, and stay future-ready.",
    },
    {
      icon: Target,
      title: "Strategic Thinking",
      desc: "See the big picture and create smart strategies.",
    },
  ],
  [
    {
      icon: HeartHandshake,
      title: "Relationship Management",
      desc: "Build trust and nurture meaningful relationships.",
    },
    {
      icon: Star,
      title: "Professional Excellence",
      desc: "Deliver quality, take ownership, and grow continuously.",
    },
    {
      icon: Rocket,
      title: "Future-Ready Skills",
      desc: "Stay relevant and prepared for what’s next.",
    },
  ],
];

export function LQCapabilitiesShowcase({
  showCta = true,
  ctaTo = ROUTES.lq,
  className = "",
}: {
  showCta?: boolean;
  ctaTo?: ComponentProps<typeof CTAButton>["to"];
  className?: string;
}) {
  return (
    <Section
      className={`relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(214,166,56,0.14),transparent_28%),linear-gradient(180deg,_#fffdfa_0%,_#faf8f1_50%,_#f3f8f3_100%)] ${className}`.trim()}
    >
      <div
        className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(8,80,84,0.08),transparent_70%)]"
        aria-hidden
      />
      <div
        className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[color:var(--gold-soft)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute right-[-8rem] top-20 h-80 w-80 rounded-full bg-[color:var(--teal-light)]/45 blur-3xl"
        aria-hidden
      />

      <div className="relative">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--teal-deep)]">
              LQ™ Framework
            </div>
            <h2 className="mt-4 text-4xl leading-tight text-[color:var(--teal-dark)] md:text-6xl">
              Building Human Capabilities That Matter.
            </h2>
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[color:var(--gold)]/70" />
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[color:var(--muted-ink)]">
              The LQ™ Framework develops the human capabilities that drive success across education,
              leadership, and the workplace. It builds the underlying capacities that enable lasting
              performance, adaptability, and purposeful growth.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-12 space-y-4 xl:pb-20">
          {LQ_CAPABILITY_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={[
                "grid gap-4",
                row.length === 5 ? "md:grid-cols-2 xl:grid-cols-5" : "md:grid-cols-3 xl:max-w-4xl",
                rowIndex === 2 ? "xl:pr-48" : "",
              ].join(" ")}
            >
              {row.map((item, itemIndex) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={(rowIndex * 5 + itemIndex) * 70}>
                    <div className="card-lift group relative h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_rgba(7,55,66,0.08)] backdrop-blur-sm">
                      <div
                        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/60 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,166,56,0.12),transparent_38%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <div className="flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--border)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.95),_rgba(235,245,241,0.95))] shadow-inner">
                            <Icon className="h-7 w-7 text-[color:var(--teal-deep)]" />
                          </div>
                        </div>
                        <h3 className="mt-5 text-center font-display text-2xl leading-tight text-[color:var(--teal-dark)]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-center text-sm leading-relaxed text-[color:var(--muted-ink)]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}

          <svg
            viewBox="0 0 520 220"
            className="pointer-events-none absolute bottom-[-2.75rem] right-[-2rem] hidden h-[18rem] w-[32rem] opacity-95 xl:block"
            aria-hidden
          >
            <defs>
              <linearGradient id="lq-mountain-a" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#d8efe5" />
                <stop offset="100%" stopColor="#b8d8cb" />
              </linearGradient>
              <linearGradient id="lq-mountain-b" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#e6f3ec" />
                <stop offset="100%" stopColor="#cfe5da" />
              </linearGradient>
              <linearGradient id="lq-path" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#fff8e4" />
                <stop offset="100%" stopColor="#f2d98a" />
              </linearGradient>
            </defs>
            <path d="M8 212 L110 130 L184 206 Z" fill="url(#lq-mountain-b)" />
            <path d="M84 212 L200 98 L306 212 Z" fill="url(#lq-mountain-a)" />
            <path d="M246 212 L354 118 L462 212 Z" fill="url(#lq-mountain-b)" />
            <path d="M332 212 L432 136 L514 212 Z" fill="#e8f4ee" />
            <path
              d="M236 214 C250 178 280 156 294 126 C306 100 294 70 282 42"
              fill="none"
              stroke="url(#lq-path)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M236 214 C250 178 280 156 294 126 C306 100 294 70 282 42"
              fill="none"
              stroke="#fffdf6"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path d="M281 32 L281 55" stroke="#c9941d" strokeWidth="3" strokeLinecap="round" />
            <path d="M281 32 L302 39 L281 46 Z" fill="#d6a638" />
          </svg>
        </div>

        {showCta ? (
          <div className="relative mt-10 text-center">
            <CTAButton to={ctaTo} className="btn-shine">
              Explore the LQ™ Framework <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
