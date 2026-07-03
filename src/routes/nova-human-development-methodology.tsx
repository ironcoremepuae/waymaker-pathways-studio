import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Compass,
  Crown,
  Eye,
  FlaskConical,
  GraduationCap,
  Heart,
  HeartHandshake,
  Layers,
  Leaf,
  LineChart,
  Lightbulb,
  MessagesSquare,
  Puzzle,
  School,
  Sparkles,
  Target,
  Users,
  UsersRound,
} from "lucide-react";
import type { CSSProperties } from "react";
import { AudienceCards, Timeline } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/Section";
import { LOGO, NOVA_STEPS } from "@/data/site";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

const INTEGRATES = [
  { icon: Brain, title: "Psychology" },
  { icon: Layers, title: "Human Development" },
  { icon: FlaskConical, title: "Behavioral Insight" },
  { icon: Compass, title: "Leadership Principles" },
  { icon: Sparkles, title: "Future Skills" },
  { icon: BookOpen, title: "Experiential Learning" },
];

const GROWTH_SHAPE_STEPS = [
  {
    icon: Lightbulb,
    title: "Discover",
    desc: "Gain fresh perspectives and deeper self-understanding.",
  },
  {
    icon: Brain,
    title: "Develop",
    desc: "Build practical capabilities through guided experiences.",
  },
  {
    icon: ArrowRight,
    title: "Apply",
    desc: "Translate learning into confident everyday action.",
  },
  {
    icon: Eye,
    title: "Reflect",
    desc: "Strengthen growth through feedback and continuous improvement.",
  },
];

const EXPERIENCE_OUTCOMES = [
  {
    icon: Compass,
    title: "Clarity",
    desc: "Understand yourself and your direction.",
  },
  {
    icon: Briefcase,
    title: "Capability",
    desc: "Develop practical life and workplace skills.",
  },
  {
    icon: ArrowRight,
    title: "Confidence",
    desc: "Apply learning with purpose and ownership.",
  },
  {
    icon: Sparkles,
    title: "Growth",
    desc: "Create sustainable change that lasts.",
  },
];

const WAYMAKER_DIFFERENCE = [
  {
    icon: BookOpen,
    title: "Evidence-Informed",
    desc: "Learning grounded in research and best practices.",
  },
  {
    icon: Target,
    title: "Practical",
    desc: "Designed for real-life application, not just theory.",
  },
  {
    icon: HeartHandshake,
    title: "Human-Centred",
    desc: "Focused on people, relationships, and meaningful growth.",
  },
  {
    icon: LineChart,
    title: "Sustainable",
    desc: "Building capabilities that continue beyond the program.",
  },
];

const APPLIES = [
  { icon: GraduationCap, title: "Students", desc: "Confidence, decision-making, and life skills." },
  { icon: BookOpen, title: "Educators", desc: "Reflection-led growth in learning environments." },
  {
    icon: HeartHandshake,
    title: "Parents",
    desc: "Awareness and practical support for children's development.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Behavior change that improves how work is done.",
  },
  { icon: Compass, title: "Leaders", desc: "Self-leadership before people leadership." },
  {
    icon: Users,
    title: "Corporate Teams",
    desc: "Better collaboration, maturity, and accountability.",
  },
  { icon: UsersRound, title: "Communities", desc: "Shared growth language that can scale." },
  { icon: School, title: "Institutions", desc: "A development pathway that works across systems." },
];

const FAQS = [
  {
    q: "What does NOVA\u2122 stand for?",
    a: "NOVA\u2122 stands for Notice, Own, Visualize, and Act. It is the human development methodology used by WayMaker Skills\u2122.",
  },
  {
    q: "How is NOVA\u2122 used in programs?",
    a: "It structures how people move from awareness and reflection into ownership, direction, and practical action during a learning journey.",
  },
  {
    q: "Is NOVA\u2122 only for leadership training?",
    a: "No. NOVA\u2122 can be used across student growth, school programs, coaching, leadership development, and workplace capability building.",
  },
  {
    q: "Why does methodology matter in human development?",
    a: "A clear methodology helps learning stay coherent. It reduces the gap between what people hear in a session and what they can actually do afterward.",
  },
];

const NOVA_HERO_CAPABILITIES = [
  { icon: Crown, title: "Leadership Development", angle: 0 },
  { icon: Heart, title: "Emotional Intelligence", angle: 45 },
  { icon: Brain, title: "Critical Thinking", angle: 90 },
  { icon: Sparkles, title: "Creativity & Innovation", angle: 135 },
  { icon: Users, title: "Collaboration & Teamwork", angle: 180 },
  { icon: Leaf, title: "Adaptability & Resilience", angle: 225 },
  { icon: Puzzle, title: "Problem Solving", angle: 270 },
  { icon: MessagesSquare, title: "Communication Excellence", angle: 315 },
] as const;

const NOVA_DIAGRAM_CENTER = { x: 300, y: 300 };
const NOVA_HERO_ICON_RADIUS_PERCENT = 34;

function polarPoint(angle: number, radius: number) {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: NOVA_DIAGRAM_CENTER.x + Math.cos(radians) * radius,
    y: NOVA_DIAGRAM_CENTER.y + Math.sin(radians) * radius,
  };
}

function orbitPosition(angle: number, radiusPercent: number): CSSProperties {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(radians) * radiusPercent}%`,
    top: `${50 + Math.sin(radians) * radiusPercent}%`,
  };
}

const NOVA_OUTER_POINTS = NOVA_HERO_CAPABILITIES.map(({ angle }) => polarPoint(angle, 228));
const NOVA_INNER_POINTS = NOVA_HERO_CAPABILITIES.map(({ angle }) => polarPoint(angle + 22.5, 172));
const NOVA_OUTER_POLYGON = NOVA_OUTER_POINTS.map(({ x, y }) => `${x},${y}`).join(" ");
const NOVA_INNER_POLYGON = NOVA_INNER_POINTS.map(({ x, y }) => `${x},${y}`).join(" ");
const NOVA_WEB_LINES = NOVA_OUTER_POINTS.flatMap((point, index) => [
  { from: point, to: NOVA_INNER_POINTS[index] },
  {
    from: point,
    to: NOVA_INNER_POINTS[(index + NOVA_INNER_POINTS.length - 1) % NOVA_INNER_POINTS.length],
  },
]);

export const Route = createFileRoute("/nova-human-development-methodology")({
  head: () => ({
    ...pageMeta({
      title: "NOVA\u2122 Methodology | Human Development Framework",
      description:
        "Discover NOVA\u2122, the human development methodology from WayMaker Skills\u2122 that helps people move from awareness to ownership, direction, and action.",
      path: ROUTES.nova,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "NOVA\u2122 Methodology", path: ROUTES.nova },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: NovaPage,
});

function NovaPage() {
  return (
    <Layout>
      <section className="nova-hero relative isolate overflow-hidden pt-8 pb-16 md:pt-10 md:pb-20 lg:pt-12 lg:pb-20">
        <div className="nova-hero-backdrop" aria-hidden="true" />
        <div className="nova-hero-grid" aria-hidden="true" />
        <div className="nova-hero-wave" aria-hidden="true" />

        <div className="container-prose relative">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.94fr)] xl:gap-10">
            <div className="max-w-[42rem]">
              <div className="nova-hero-animate">
                <div className="nova-hero-kicker">
                  <span className="nova-hero-kicker-dot" />
                  NOVA&#8482; Methodology
                </div>
              </div>

              <h1
                className="nova-hero-title nova-hero-animate mt-6"
                style={{ animationDelay: "80ms" } as CSSProperties}
              >
                From awareness
                <br />
                to action.
              </h1>

              <p
                className="nova-hero-subtitle nova-hero-animate mt-4"
                style={{ animationDelay: "150ms" } as CSSProperties}
              >
                From potential to practical growth.
              </p>

              <p
                className="nova-hero-description nova-hero-animate mt-4 max-w-[38rem] text-base leading-relaxed md:text-[1.05rem]"
                style={{ animationDelay: "220ms" } as CSSProperties}
              >
                WayMaker Skills&#8482; empowers individuals and organizations to grow with clarity,
                build capability, and create meaningful impact.
              </p>

              <div
                className="nova-hero-animate mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                style={{ animationDelay: "290ms" } as CSSProperties}
              >
                <CTAButton to={ROUTES.programs} variant="primary">
                  Explore Programs <ArrowRight className="h-4 w-4" />
                </CTAButton>
                <a href="#nova-overview" className="nova-hero-btn-secondary">
                  Learn More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div
              className="nova-hero-animate lg:-mt-6"
              style={{ animationDelay: "140ms" } as CSSProperties}
            >
              <div className="nova-hero-visual" aria-hidden="true">
                <div className="nova-hero-visual-glow nova-hero-visual-glow-left" />
                <div className="nova-hero-visual-glow nova-hero-visual-glow-right" />
                <div className="nova-hero-ring nova-hero-ring-outer" />
                <div className="nova-hero-ring nova-hero-ring-middle" />
                <div className="nova-hero-ring nova-hero-ring-inner" />

                <svg viewBox="0 0 600 600" className="nova-hero-network">
                  <defs>
                    <linearGradient id="nova-line-gradient" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d6a638" stopOpacity="0.16" />
                      <stop offset="48%" stopColor="#fffdf7" stopOpacity="0.96" />
                      <stop offset="100%" stopColor="#d6a638" stopOpacity="0.5" />
                    </linearGradient>
                    <radialGradient id="nova-core-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                      <stop offset="55%" stopColor="#ffffff" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                    </radialGradient>
                    <filter id="nova-soft-glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <circle cx="300" cy="300" r="244" className="nova-hero-svg-aura" />
                  <circle cx="300" cy="300" r="228" className="nova-hero-svg-ring" />
                  <circle
                    cx="300"
                    cy="300"
                    r="188"
                    className="nova-hero-svg-ring nova-hero-svg-ring-soft"
                  />
                  <circle
                    cx="300"
                    cy="300"
                    r="146"
                    className="nova-hero-svg-ring nova-hero-svg-ring-faint"
                  />

                  {NOVA_INNER_POINTS.map((point, index) => (
                    <line
                      key={`radial-${index}`}
                      x1={NOVA_DIAGRAM_CENTER.x}
                      y1={NOVA_DIAGRAM_CENTER.y}
                      x2={point.x}
                      y2={point.y}
                      className="nova-hero-svg-line"
                      stroke="url(#nova-line-gradient)"
                    />
                  ))}

                  {NOVA_WEB_LINES.map(({ from, to }, index) => (
                    <line
                      key={`web-${index}`}
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      className="nova-hero-svg-line nova-hero-svg-line-soft"
                      stroke="url(#nova-line-gradient)"
                    />
                  ))}

                  <polygon
                    points={NOVA_OUTER_POLYGON}
                    className="nova-hero-svg-polygon"
                    fill="none"
                    stroke="url(#nova-line-gradient)"
                  />
                  <polygon
                    points={NOVA_INNER_POLYGON}
                    className="nova-hero-svg-polygon nova-hero-svg-polygon-soft"
                    fill="none"
                    stroke="url(#nova-line-gradient)"
                  />

                  {NOVA_OUTER_POINTS.map(({ x, y }, index) => (
                    <circle
                      key={`outer-point-${index}`}
                      cx={x}
                      cy={y}
                      r="5.5"
                      className="nova-hero-svg-point"
                      filter="url(#nova-soft-glow)"
                    />
                  ))}

                  {NOVA_INNER_POINTS.map(({ x, y }, index) => (
                    <circle
                      key={`inner-point-${index}`}
                      cx={x}
                      cy={y}
                      r="4"
                      className="nova-hero-svg-point nova-hero-svg-point-soft"
                      filter="url(#nova-soft-glow)"
                    />
                  ))}

                  <circle cx="300" cy="300" r="124" fill="url(#nova-core-glow)" />
                </svg>

                <div className="nova-hero-core">
                  <div className="nova-hero-core-logo-wrap">
                    <img src={LOGO} alt="" className="nova-hero-core-logo" />
                  </div>
                  <div className="nova-hero-core-title">HUMAN POTENTIAL</div>
                  <div className="nova-hero-core-meta">Purpose &#8226; Growth &#8226; Impact</div>
                </div>

                {NOVA_HERO_CAPABILITIES.map(({ icon: Icon, title, angle }, index) => (
                  <div
                    key={title}
                    className="nova-hero-node"
                    style={
                      {
                        "--nova-node-delay": `${index * 70}ms`,
                      } as CSSProperties
                    }
                  >
                    <div
                      className="nova-hero-node-icon-shell"
                      style={orbitPosition(angle, NOVA_HERO_ICON_RADIUS_PERCENT)}
                    >
                      <div className="nova-hero-node-icon">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div
                      className="nova-hero-node-label-shell"
                      style={orbitPosition(angle, NOVA_HERO_ICON_RADIUS_PERCENT)}
                    >
                      <div className="nova-hero-node-label">{title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:hidden sm:grid-cols-2">
            {NOVA_HERO_CAPABILITIES.map(({ icon: Icon, title }) => (
              <div
                key={`mobile-${title}`}
                className="rounded-2xl border border-white/75 bg-white/72 p-4 shadow-soft backdrop-blur"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--gold)]/35 bg-white text-[color:var(--teal-deep)] shadow-[0_16px_32px_-24px_rgba(15,95,99,0.45)]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-sm font-semibold leading-tight text-[color:var(--teal-dark)]">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        id="nova-overview"
        eyebrow={"What NOVA\u2122 is"}
        title="A repeatable human development pathway."
      >
        <div className="grid gap-8 text-lg leading-relaxed text-[color:var(--charcoal)] md:grid-cols-2">
          <p>
            NOVA&#8482; is the methodology behind WayMaker Skills&#8482; programs. It exists to
            close the gap between insight and behavior. Instead of stopping at understanding, it
            guides people into ownership, direction, and action.
          </p>
          <p>
            That makes NOVA&#8482; useful across different contexts. The audience may change, but
            the need stays consistent: people need a simple, disciplined way to move from
            reflection into capability.
          </p>
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="The four stages"
        title="Notice. Own. Visualize. Act."
        center
      >
        <Timeline
          steps={NOVA_STEPS.map((step) => ({ code: step.code, title: step.name, desc: step.desc }))}
        />
      </Section>

      <Section
        eyebrow={"What NOVA\u2122 integrates"}
        title="A multidisciplinary foundation."
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INTEGRATES.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 60}>
              Insights and practices from {item.title.toLowerCase()} shape how the learning journey
              is designed.
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="In practice"
        title="How Meaningful Growth takes Shape."
        center
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-[color:var(--muted-ink)]">
            Every transformation begins with greater awareness and grows through purposeful
            learning, practical application, and continuous reflection. WayMaker Skills&#8482;
            creates experiences that help individuals develop the capabilities needed to thrive in
            life, learning, and work.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {GROWTH_SHAPE_STEPS.map(({ icon: Icon, title, desc }, index) => (
            <FeatureCard key={title} icon={Icon} title={title} delay={index * 60}>
              {desc}
            </FeatureCard>
          ))}
        </div>

        <div className="mt-14">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--teal-deep)]">
              What You'll Experience
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERIENCE_OUTCOMES.map(({ icon: Icon, title, desc }, index) => (
              <FeatureCard key={title} icon={Icon} title={title} delay={index * 60}>
                {desc}
              </FeatureCard>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--teal-deep)]">
              The WayMaker Difference
            </div>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WAYMAKER_DIFFERENCE.map(({ icon: Icon, title, desc }, index) => (
              <FeatureCard key={title} icon={Icon} title={title} delay={index * 60}>
                {desc}
              </FeatureCard>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Where it applies" title="Designed for every life stage." center>
        <AudienceCards items={APPLIES} />
      </Section>

      <Section eyebrow="FAQ" title={"Questions about NOVA\u2122."} center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title={"Build a NOVA\u2122-based development journey."}
        text={
          "From classrooms to corporate teams, NOVA\u2122 gives growth a clear pathway instead of leaving change to chance."
        }
      />
      <div className="h-16" />
    </Layout>
  );
}
