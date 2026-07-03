import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties, ComponentProps } from "react";
import novaImage from "@/assets/nova.png";
import wamiMascot from "@/assets/wami-logo.png";
import wamiWordmark from "@/assets/wami-text.png";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { ROUTES } from "@/data/routes";
import { pageMeta, jsonLd } from "@/lib/seo";
import {
  PROGRAMS,
  AUDIENCES,
  FAQS_GENERAL,
  GROWTH_PATHS,
  OUTCOMES,
  ENGAGEMENT_STEPS,
  TAGLINE,
  LOGO,
} from "@/data/site";
import {
  Brain,
  HeartHandshake,
  MessagesSquare,
  Compass,
  Sparkles,
  Target,
  GraduationCap,
  Users,
  BookOpen,
  Lightbulb,
  ShieldCheck,
  Microscope,
  Globe2,
  Scale,
  Layers,
  ArrowRight,
  Star,
  School,
  Baby,
  Briefcase,
  Building2,
  Crown,
  UserCircle2,
  Eye,
  Flag,
  TelescopeIcon,
  Rocket,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageMeta({
      title: "WayMaker Skills™ — Transforming Potential into Purpose",
      description:
        "Human development and applied intelligence for individuals, educators, leaders, and organizations. Discover NOVA™, LQ™, and our programs.",
      path: "/",
    }),
    scripts: [jsonLd(faqJsonLd(FAQS_GENERAL))],
  }),
  component: HomePage,
});

const HERO_PHRASES = ["Future Skills", "Leadership", "Emotional Intelligence", "Purpose", "Growth"];

const HERO_BADGES = [
  { icon: Crown, label: "Leadership", angle: 320, distance: "0.98" },
  { icon: Rocket, label: "Growth", angle: 40, distance: "0.98" },
  { icon: HeartHandshake, label: "Emotional IQ", angle: 90, distance: "1" },
  { icon: Target, label: "Purpose", angle: 150, distance: "0.96" },
  { icon: ShieldCheck, label: "Confidence", angle: 210, distance: "0.96" },
  { icon: Sparkles, label: "Future Skills", angle: 270, distance: "1" },
];

const HERO_IMPACT_CARDS = [
  {
    title: "Life Skills",
    text: "Confidence, creativity, and communication",
    icon: Sparkles,
  },
  {
    title: "Leadership",
    text: "Purpose-led growth for teams and learners",
    icon: Crown,
  },
  {
    title: "Future Readiness",
    text: "Skills for school, work, and life",
    icon: Rocket,
  },
];

const NOVA_HELP_ITEMS = [
  "Self-awareness",
  "Emotional resilience",
  "Decision clarity",
  "Human connection",
  "Purposeful action",
];

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

const WHY = [
  { icon: Brain, t: "Think critically", d: "Reason clearly in a noisy, fast-changing world." },
  {
    icon: MessagesSquare,
    t: "Communicate effectively",
    d: "Speak, listen, and influence with clarity.",
  },
  { icon: Crown, t: "Lead responsibly", d: "Decisions grounded in values and impact." },
  { icon: Sparkles, t: "Adapt confidently", d: "Move with change instead of resisting it." },
  {
    icon: HeartHandshake,
    t: "Build relationships",
    d: "Trust, empathy, and meaningful connection.",
  },
  { icon: Scale, t: "Make sound decisions", d: "Frameworks that turn judgment into action." },
];

const WHAT_WE_DO = [
  {
    icon: Compass,
    title: "Leadership Development",
    desc: "Develop leaders who inspire, influence, and create lasting impact.",
    badge: "Leadership",
    featured: true,
  },
  {
    icon: HeartHandshake,
    title: "Emotional Intelligence",
    desc: "Awareness, regulation, empathy, resilience.",
    badge: "Capability",
  },
  {
    icon: MessagesSquare,
    title: "Communication Excellence",
    desc: "Clarity, listening, presence, influence.",
    badge: "Capability",
  },
  {
    icon: Sparkles,
    title: "Future Skills",
    desc: "Adaptability, innovation, and lifelong learning for a changing world.",
    badge: "Future Readiness",
  },
  {
    icon: Lightbulb,
    title: "Coaching & Mentoring",
    desc: "Personalized guidance for meaningful growth.",
    badge: "Development",
  },
  {
    icon: ShieldCheck,
    title: "Well-being & Resilience",
    desc: "Build inner strength and sustain high performance.",
    badge: "Well-being",
  },
  {
    icon: Microscope,
    title: "Assessments & Tools",
    desc: "Evidence-based assessments that transform insight into growth.",
    badge: "Assessment",
  },
];

const DIFFERENCE = [
  { icon: Brain, title: "Psychology-based", d: "Grounded in human behavior research." },
  { icon: GraduationCap, title: "Experiential", d: "Learning through reflection and practice." },
  { icon: Globe2, title: "Future-focused", d: "Built for the world that's coming." },
  { icon: Layers, title: "Holistic", d: "Mind, heart, and action — together." },
  { icon: Scale, title: "Measurable", d: "Outcomes you can see and sustain." },
  { icon: Target, title: "Purpose-driven", d: "Capability shaped by meaning." },
];

const GROWTH_ICONS = [School, GraduationCap, Users, Briefcase, Building2, Crown, Baby];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="home-hero relative isolate overflow-hidden pt-12 pb-20 md:pt-18 md:pb-28 lg:min-h-[calc(100vh-5rem)] lg:pt-20">
        <div className="home-hero-bg" aria-hidden="true" />
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="home-hero-wave" aria-hidden="true" />
        <div className="home-hero-particles" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, index) => (
            <span key={index} className={"home-hero-particle home-hero-particle-" + (index + 1)} />
          ))}
        </div>

        <div className="container-prose relative grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(27rem,0.95fr)] lg:gap-12">
          <div className="home-hero-copy mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="home-hero-kicker inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/76 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--teal-deep)] shadow-glass backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[color:var(--gold)] shadow-[0_0_18px_rgba(214,166,56,0.75)]" />
              Human Development &bull; Applied Intelligence &bull; Future Skills
            </div>

            <h1 className="home-hero-title mt-6 text-5xl leading-[0.98] md:text-6xl lg:text-7xl xl:text-[5.35rem]">
              <span className="text-gradient-teal">WayMaker Skills</span>
              <span className="ml-1 align-top text-2xl text-[color:var(--gold)] md:text-3xl">
                &#8482;
              </span>
            </h1>

            <div className="home-hero-subtitle-wrap relative mt-5 inline-block">
              <p className="font-display text-2xl italic text-[color:var(--teal-dark)] md:text-3xl">
                {TAGLINE}
              </p>
              <span className="home-hero-underline" aria-hidden="true" />
            </div>

            <div className="home-hero-phrase mt-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--teal-deep)]/10 bg-white/72 px-4 py-2 text-sm font-semibold text-[color:var(--teal-dark)] shadow-soft backdrop-blur">
              <Sparkles className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
              <span className="text-[color:var(--muted-ink)]">Building</span>
              <span className="home-hero-phrase-rotator" aria-hidden="true">
                {HERO_PHRASES.map((phrase) => (
                  <span key={phrase}>{phrase}</span>
                ))}
              </span>
              <span className="sr-only">
                Building future skills, leadership, emotional intelligence, purpose, and growth.
              </span>
            </div>

            <p className="home-hero-description mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--muted-ink)] lg:mx-0">
              WayMaker Skills&#8482; is a Human Development and Applied Intelligence Organization
              dedicated to transforming potential into purpose.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <Link to={ROUTES.contact} className="home-hero-btn home-hero-btn-primary group">
                Book a Discovery Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to={ROUTES.programs} className="home-hero-btn home-hero-btn-secondary">
                Explore Programs
              </Link>
            </div>

            <div className="home-hero-impact mt-8 grid gap-3 sm:grid-cols-3">
              {HERO_IMPACT_CARDS.map(({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className="home-hero-impact-card"
                  style={{ animationDelay: String(260 + index * 90) + "ms" }}
                >
                  <Icon className="h-4 w-4 text-[color:var(--gold)]" aria-hidden />
                  <div className="mt-2 font-display text-lg leading-tight text-[color:var(--teal-dark)]">
                    {title}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[color:var(--muted-ink)]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-ink)] md:flex-nowrap md:whitespace-nowrap lg:justify-start">
              <span className="shrink-0 text-[color:var(--teal-deep)]">Built for</span>
              {["Schools", "Professionals", "Leaders", "Organizations"].map((audience) => (
                <span key={audience} className="home-hero-audience-chip shrink-0">
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="home-hero-visual relative mx-auto w-full max-w-[33rem] lg:max-w-[38rem]">
            <div className="home-hero-orb" aria-hidden="true" />
            <div className="home-hero-orbit home-hero-orbit-outer" aria-hidden="true" />
            <div className="home-hero-orbit home-hero-orbit-middle" aria-hidden="true" />
            <div className="home-hero-orbit home-hero-orbit-inner" aria-hidden="true" />

            <div className="home-hero-logo-card">
              <div className="home-hero-logo-glow" aria-hidden="true" />
              <div className="home-hero-logo-crop">
                <img
                  src={LOGO}
                  alt="WayMaker Skills logo"
                  width={480}
                  height={480}
                  className="home-hero-logo"
                />
              </div>
            </div>

            <div className="home-hero-shadow" aria-hidden="true" />

            <div className="home-hero-badge-ring" aria-hidden="true">
              {HERO_BADGES.map(({ icon: Icon, label, angle, distance }, index) => (
                <div
                  key={label}
                  className="home-hero-badge-slot"
                  style={
                    {
                      "--badge-angle": `${angle}deg`,
                      "--badge-distance": distance,
                      "--badge-delay": `${index * -0.7}s`,
                    } as CSSProperties
                  }
                >
                  <div className="home-hero-badge-upright">
                    <div className="home-hero-floating-badge">
                      <Icon className="h-4 w-4 text-[color:var(--teal-deep)]" aria-hidden />
                      <span>{label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="home-hero-scroll absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center text-[color:var(--teal-deep)]/72 md:flex">
          <span className="mb-1 text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
          <span className="home-hero-scroll-dots" aria-hidden="true" />
          <ChevronDown className="h-4 w-4" aria-hidden />
        </div>
      </section>

      {/* CHOOSE YOUR GROWTH PATH */}
      <Section
        eyebrow="Choose Your Growth Path"
        title="Find the right WayMaker Skills™ experience."
        subtitle="One framework, many doorways. Pick the audience you're shaping."
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GROWTH_PATHS.map((g, i) => {
            const Icon = GROWTH_ICONS[i % GROWTH_ICONS.length];
            return (
              <Reveal key={g.title} delay={i * 60}>
                <Link
                  to={g.to as LinkTo}
                  className="card-lift gradient-border group block rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-11 w-11 rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)] flex items-center justify-center group-hover:bg-teal-gradient group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <ArrowRight className="h-4 w-4 text-[color:var(--gold)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                  </div>
                  <div className="font-display text-xl text-[color:var(--teal-dark)]">
                    {g.title}
                  </div>
                  <p className="mt-2 text-sm text-[color:var(--muted-ink)] leading-relaxed">
                    {g.outcome}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* WHY */}
      <Section
        className="bg-gradient-to-b from-[color:var(--ivory)] to-white relative overflow-hidden"
        eyebrow="WHY HUMAN DEVELOPMENT IS THE FUTURE"
        title="Success Today Demands More Than Knowledge."
        subtitle="People need the human skills to adapt, lead, collaborate, and thrive."
        center
      >
        <div className="absolute top-0 right-0 w-96 h-96 dot-pattern opacity-30" aria-hidden />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 70}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-teal-gradient text-white flex items-center justify-center shrink-0">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl text-[color:var(--teal-dark)]">{w.t}</div>
                    <p className="text-sm text-[color:var(--muted-ink)] mt-1 leading-relaxed">
                      {w.d}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO - BENTO */}
      <Section
        className="bg-gradient-to-b from-white to-[color:var(--teal-light)]"
        eyebrow="What We Do"
        title="A Complete Human Development Ecosystem."
        center
      >
        <div className="home-ecosystem-grid">
          <Reveal delay={0} className="home-ecosystem-featured">
            <div className="home-ecosystem-card home-ecosystem-card-featured">
              <div className="home-ecosystem-copy">
                <span className="home-ecosystem-badge home-ecosystem-badge-featured">
                  {WHAT_WE_DO[0].badge}
                </span>
                <h3 className="home-ecosystem-featured-title">{WHAT_WE_DO[0].title}</h3>
                <span className="home-ecosystem-divider" aria-hidden="true" />
                <p className="home-ecosystem-featured-desc">{WHAT_WE_DO[0].desc}</p>
              </div>

              <div className="home-ecosystem-visual" aria-hidden="true">
                <div className="home-ecosystem-sky" />
                <div className="home-ecosystem-ring home-ecosystem-ring-outer" />
                <div className="home-ecosystem-ring home-ecosystem-ring-middle" />
                <div className="home-ecosystem-ring home-ecosystem-ring-inner" />
                <div className="home-ecosystem-core">
                  <img src={LOGO} alt="" className="home-ecosystem-core-logo" />
                </div>
                <div className="home-ecosystem-path" />
                <div className="home-ecosystem-figure" />
                <div className="home-ecosystem-horizon home-ecosystem-horizon-back" />
                <div className="home-ecosystem-horizon home-ecosystem-horizon-front" />

                {[
                  { label: "Vision", className: "home-ecosystem-node-top", icon: Eye },
                  { label: "Influence", className: "home-ecosystem-node-right-top", icon: Users },
                  { label: "Purpose", className: "home-ecosystem-node-right-bottom", icon: Target },
                  { label: "Growth", className: "home-ecosystem-node-bottom", icon: Sparkles },
                  {
                    label: "Emotional Intelligence",
                    className: "home-ecosystem-node-left-bottom",
                    icon: HeartHandshake,
                  },
                  {
                    label: "Integrity",
                    className: "home-ecosystem-node-left-top",
                    icon: ShieldCheck,
                  },
                ].map(({ label, className, icon: Icon }) => (
                  <div key={label} className={`home-ecosystem-node ${className}`}>
                    <span className="home-ecosystem-node-icon">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="home-ecosystem-node-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {WHAT_WE_DO.slice(1).map((c, i) => {
            const visualClass =
              c.title === "Future Skills"
                ? "home-ecosystem-card-wave"
                : c.title === "Coaching & Mentoring"
                  ? "home-ecosystem-card-mentoring"
                  : c.title === "Well-being & Resilience"
                    ? "home-ecosystem-card-lotus"
                    : c.title === "Assessments & Tools"
                      ? "home-ecosystem-card-radar"
                      : "";
            const layoutClass =
              c.title === "Future Skills"
                ? "home-ecosystem-wide"
                : i < 2
                  ? "home-ecosystem-compact"
                  : "home-ecosystem-third";

            return (
              <Reveal
                key={c.title}
                delay={(i + 1) * 50}
                className={layoutClass}
              >
                <div className={`home-ecosystem-card home-ecosystem-card-light ${visualClass}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="home-ecosystem-icon-wrap">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <span className="home-ecosystem-badge">{c.badge}</span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="home-ecosystem-card-title">{c.title}</h3>
                    <p className="home-ecosystem-card-desc">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* DIFFERENCE */}
      <Section
        eyebrow="The WayMaker Difference"
        title="Built on principles, designed for impact."
        center
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {DIFFERENCE.map(({ icon: Icon, title, d }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft h-full">
                <div className="mx-auto mb-3 h-12 w-12 rounded-xl bg-teal-gradient flex items-center justify-center text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-[color:var(--teal-dark)] text-sm">{title}</div>
                <div className="text-[11px] text-[color:var(--muted-ink)] mt-1 leading-snug">
                  {d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NOVA */}
      <Section className="bg-[color:var(--teal-dark)] text-white relative overflow-hidden">
        <div
          className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--gold)]/15 blur-3xl glow"
          aria-hidden
        />
        <div
          className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--teal-rich)]/30 blur-3xl"
          aria-hidden
        />
        <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-soft)] font-semibold mb-3">
              Methodology
            </div>
            <h2 className="text-white text-4xl md:text-5xl leading-tight">
              The NOVA™ Human Development Methodology
            </h2>
            <p className="mt-5 text-white/80 text-2xl leading-relaxed">
              From awareness to meaningful growth.
            </p>
            <p className="mt-5 text-white/80 text-lg leading-relaxed">
              NOVA™ is the human development methodology behind WayMaker Skills™ programs, helping
              individuals, teams, and organizations build clarity, resilience, confidence, and
              intentional action.
            </p>
            <div className="mt-6">
              <CTAButton to={ROUTES.nova} variant="gold" className="btn-shine">
                Discover NOVA™ <ArrowRight className="h-4 w-4" />
              </CTAButton>
            </div>
          </div>
          <Reveal>
            <div className="glass-dark rounded-[2rem] border border-white/10 p-6 md:p-8">
              <div className="rounded-[1.5rem] bg-white/5 p-4 md:p-6">
                <img
                  src={novaImage}
                  alt="NOVA methodology visual"
                  className="mx-auto w-full max-w-2xl object-contain"
                />
              </div>
              <div className="mt-8">
                <h3 className="font-display text-3xl text-white">What NOVA™ Helps Develop</h3>
                <div className="mt-5 space-y-3">
                  {NOVA_HELP_ITEMS.map((item, i) => (
                    <Reveal key={item} delay={i * 90}>
                      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-[color:var(--gold)]" />
                        <span className="text-lg text-white/85">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* LQ */}
      <Section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(214,166,56,0.14),transparent_28%),linear-gradient(180deg,_#fffdfa_0%,_#faf8f1_50%,_#f3f8f3_100%)]">
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
                The LQ™ Framework develops the human capabilities that drive success across
                education, leadership, and the workplace. It builds the underlying capacities that
                enable lasting performance, adaptability, and purposeful growth.
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

          <div className="relative mt-10 text-center">
            <CTAButton to={ROUTES.lq} className="btn-shine">
              Explore the LQ™ Framework <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* WHO WE SERVE */}
      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Who We Serve"
        title="Designed for the people who shape lives."
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <Link
                to={a.to as LinkTo}
                className="card-lift gradient-border group block rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full"
              >
                <UserCircle2 className="h-5 w-5 text-[color:var(--gold)]" />
                <div className="font-display text-xl text-[color:var(--teal-dark)] mt-3">
                  {a.title}
                </div>
                <p className="mt-1.5 text-sm text-[color:var(--muted-ink)]">{a.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[color:var(--teal-deep)] group-hover:gap-2 transition-all">
                  {a.cta} <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FEATURED PROGRAMS */}
      <Section eyebrow="Featured Programs" title="Where transformation begins." center>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {[
            "All",
            "Schools",
            "Corporate",
            "Youth",
            "Professionals",
            "Children",
            "Personal Growth",
          ].map((t, i) => (
            <span
              key={t}
              className={`text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full border ${
                i === 0
                  ? "bg-teal-gradient text-white border-transparent"
                  : "bg-white text-[color:var(--teal-deep)] border-[color:var(--border)]"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.slice(0, 6).map((p, i) => (
            <Reveal key={p.slug} delay={i * 60}>
              <Link
                to={ROUTES.programs as LinkTo}
                className="card-lift gradient-border group rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft block h-full"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-[0.18em] uppercase font-semibold px-2.5 py-1 rounded-full bg-[color:var(--ivory)] text-[color:var(--teal-deep)] border border-[color:var(--border)]">
                    {p.tag}
                  </span>
                  <Briefcase className="h-4 w-4 text-[color:var(--gold)]" />
                </div>
                <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">{p.title}</h3>
                <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-4 text-[10px] uppercase tracking-widest text-[color:var(--teal-deep)] font-semibold">
                  Best for
                </div>
                <div className="text-sm text-[color:var(--charcoal)]">{p.best}</div>
                <div className="mt-5 text-sm font-semibold text-[color:var(--teal-deep)] inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton to={ROUTES.programs}>See All Programs</CTAButton>
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section
        className="bg-gradient-to-b from-white to-[color:var(--teal-light)]"
        eyebrow="Outcomes We Help Build"
        title="What growth looks like, in practice."
        center
        subtitle="Capabilities you can see in real life, real work, and real relationships."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o} delay={i * 35}>
              <div className="card-lift rounded-2xl bg-white border border-[color:var(--border)] p-5 text-center shadow-soft h-full">
                <CheckCircle2 className="h-5 w-5 mx-auto text-[color:var(--gold)] mb-2" />
                <div className="font-semibold text-[color:var(--teal-dark)] text-sm">{o}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* HOW ENGAGEMENT WORKS */}
      <Section
        eyebrow="How Engagement Works"
        title="A five-step partnership."
        center
        subtitle="From discovery to lasting capability — clear, collaborative, accountable."
      >
        <div className="relative">
          <div
            className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[color:var(--teal-deep)]/35 to-transparent"
            aria-hidden
          />
          <div className="grid md:grid-cols-5 gap-6">
            {ENGAGEMENT_STEPS.map((s, i) => {
              const Icon = [Eye, Layers, Rocket, TelescopeIcon, Flag][i];
              return (
                <Reveal key={s.step} delay={i * 100}>
                  <div className="relative text-center">
                    <div className="relative mx-auto h-14 w-14 rounded-full bg-white border-2 border-[color:var(--teal-deep)] text-[color:var(--teal-deep)] flex items-center justify-center shadow-soft">
                      <Icon className="h-5 w-5" />
                      <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[color:var(--gold)] text-[color:var(--teal-dark)] text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <div className="mt-4 font-display text-xl text-[color:var(--teal-dark)]">
                      {s.step}
                    </div>
                    <p className="mt-1.5 text-sm text-[color:var(--muted-ink)] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* WAMI */}
      <Section className="home-wami-section relative overflow-hidden bg-[linear-gradient(135deg,#F3FBFF_0%,#FFF8E6_54%,#FFFFFF_100%)]">
        <span
          className="wami-star wami-star--yellow wami-star--md wami-star--float home-wami-star--1 left-[7%] top-[16%]"
          aria-hidden="true"
        />
        <span
          className="wami-star wami-star--blue wami-star--sm wami-star--twinkle home-wami-star--2 right-[12%] top-[18%]"
          aria-hidden="true"
        />
        <span
          className="wami-star wami-star--red wami-star--sm wami-star--drift home-wami-star--3 left-[46%] bottom-[16%]"
          aria-hidden="true"
        />
        <span
          className="wami-star wami-star--yellow wami-star--sm wami-star--twinkle home-wami-star--4 left-[16%] bottom-[12%]"
          aria-hidden="true"
        />
        <span
          className="wami-star wami-star--blue wami-star--md wami-star--float home-wami-star--5 right-[29%] top-[31%]"
          aria-hidden="true"
        />
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(24rem,1.02fr)] lg:gap-12 xl:grid-cols-[minmax(0,0.94fr)_minmax(28rem,1.06fr)] xl:gap-14">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D7F0FF] bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#064AAD] shadow-soft">
              <Star className="h-3.5 w-3.5 fill-[#FFD21F] text-[#064AAD]" aria-hidden />
              Children's Life Skills
            </div>
            <img
              src={wamiWordmark}
              alt="WAMI\u2122 The Way Maker Star"
              className="home-wami-wordmark mt-5 h-auto w-full max-w-[12rem]"
            />
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-[#064AAD] md:text-5xl">
              Meet WAMI&#8482; &mdash; The WayMaker Star for children's life skills
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[color:var(--muted-ink)]">
              WAMI&#8482; brings stories, games, activities, and joyful challenges together to help
              children practise confidence, creativity, communication, character, and practical life
              skills.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {["Stories", "Games", "Activities", "Life skills"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#D7F0FF] bg-white/86 px-3.5 py-1.5 text-sm font-semibold text-[#064AAD] shadow-[0_12px_28px_-24px_rgba(6,74,173,0.36)]"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTAButton
                to={ROUTES.wami}
                className="btn-shine bg-[#064AAD] text-white hover:bg-[#0755C8]"
              >
                Explore WAMI&#8482; <ArrowRight className="h-4 w-4" />
              </CTAButton>
              <CTAButton to={ROUTES.programs} variant="secondary">
                View Programs
              </CTAButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[31rem] lg:max-w-[34rem] lg:justify-self-end xl:max-w-[36rem]">
              <div
                className="absolute inset-x-2 bottom-3 top-10 rounded-[2.5rem] border-2 border-white bg-[linear-gradient(180deg,#FFD21F_0%,#EAF7FF_100%)] shadow-[0_30px_70px_-42px_rgba(6,74,173,0.45)] sm:inset-x-3 lg:inset-x-4"
                aria-hidden
              />
              <span
                className="wami-star wami-star--yellow wami-star--lg wami-star--float home-wami-star--6 left-4 top-3"
                aria-hidden="true"
              />
              <span
                className="wami-star wami-star--red wami-star--md wami-star--twinkle home-wami-star--7 right-8 top-8"
                aria-hidden="true"
              />
              <span
                className="wami-star wami-star--white wami-star--md wami-star--drift home-wami-star--8 right-5 bottom-20"
                aria-hidden="true"
              />
              <img
                src={wamiMascot}
                alt="WAMI\u2122 star mascot"
                className="home-wami-mascot relative z-10 mx-auto h-auto w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem] xl:max-w-[28rem] drop-shadow-[0_24px_34px_rgba(6,74,173,0.22)]"
              />
              <div className="relative z-20 -mt-3 grid grid-cols-2 gap-2.5 px-3 pb-4 sm:px-4 md:-mt-4 md:grid-cols-4 md:px-5">
                {["Confidence", "Creativity", "Communication", "Character"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/80 bg-white/90 px-3 py-2 text-center text-[0.72rem] leading-tight font-bold text-[#064AAD] shadow-soft sm:text-xs md:text-[0.8rem]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
      {/* FOUNDER */}
      <Section eyebrow="Founder" title="A vision rooted in human potential.">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch">
          <Reveal>
            <div className="relative rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant overflow-hidden h-full">
              <div
                className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl glow"
                aria-hidden
              />
              <div className="relative">
                <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--gold-soft)] mb-3">
                  Founder's Note
                </div>
                <p className="font-display text-2xl md:text-3xl leading-snug">
                  "Human potential flourishes when the mind finds clarity, the heart finds purpose,
                  and our actions create meaningful impact. True success is measured not only by
                  what we achieve, but by who we become."
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-white/20 pt-6">
                  <div className="h-14 w-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center font-display text-xl text-white">
                    SM
                  </div>
                  <div>
                    <div className="font-semibold text-white">Dr. Sanjo Cine Mathew</div>
                    <div className="text-xs text-white/70">Founder · WayMaker Skills™</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 shadow-soft h-full">
              <p className="text-lg text-[color:var(--charcoal)] leading-relaxed">
                Founded by <strong>Sanjo Mathew</strong>, WayMaker Skills™ brings together
                psychology, education, leadership, mentoring, coaching, and experiential learning to
                create meaningful human development experiences for individuals and organizations.
              </p>
              <p className="mt-4 text-[color:var(--muted-ink)]">
                Sanjo's personal profile is available at{" "}
                <a
                  className="text-[color:var(--teal-deep)] underline underline-offset-4 hover:text-[color:var(--gold)] transition"
                  href="https://sanjo.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  sanjo.in
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <CTAButton to={ROUTES.founder}>Meet the Founder</CTAButton>
                <CTAButton to={ROUTES.about} variant="secondary">
                  Our Story
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Resources"
        title="Ideas worth growing with."
        center
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Leadership",
            "Emotional Intelligence",
            "Parenting",
            "Student Development",
            "Communication",
            "Well-being",
            "Future Skills",
            "Human Development",
          ].map((c, i) => (
            <Reveal key={c} delay={i * 40}>
              <Link
                to={"/resources" as LinkTo}
                className="card-lift gradient-border group block rounded-2xl bg-white border border-[color:var(--border)] p-6 shadow-soft h-full"
              >
                <BookOpen className="h-5 w-5 text-[color:var(--gold)]" />
                <div className="font-display text-xl text-[color:var(--teal-dark)] mt-3">{c}</div>
                <div className="text-sm text-[color:var(--muted-ink)] mt-1">
                  Read articles & guides
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title="Common questions, answered." center>
        <div className="max-w-3xl mx-auto">
          <FAQList items={FAQS_GENERAL} />
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
