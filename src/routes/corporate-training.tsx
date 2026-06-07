import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { OutcomeGrid, QuoteBlock } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  Compass, MessagesSquare, HeartHandshake, ShieldCheck, Users, Sparkles, Briefcase,
  Layers, Target, Brain, ArrowRight,
} from "lucide-react";

const SECTIONS = [
  { icon: Compass, title: "Leadership Development", desc: "From frontline managers to senior leaders." },
  { icon: Briefcase, title: "Manager Capability Building", desc: "Coaching, feedback, and people development." },
  { icon: MessagesSquare, title: "Communication & Collaboration", desc: "Clarity, listening, influence, and team communication." },
  { icon: HeartHandshake, title: "Emotional Intelligence at Work", desc: "Self-awareness, empathy, and relationship effectiveness." },
  { icon: ShieldCheck, title: "Resilience & Well-being", desc: "Sustainable performance and mental fitness." },
  { icon: Users, title: "Team Effectiveness", desc: "Trust, alignment, accountability, and results." },
  { icon: Target, title: "Accountability & Ownership", desc: "Behaviors that shape consistent performance." },
  { icon: Layers, title: "Culture & Behavioral Transformation", desc: "Beliefs and behaviors that shape your organization." },
  { icon: Sparkles, title: "Future-Ready Workplace Skills", desc: "Adaptability, creativity, and learning agility." },
];

const OUTCOMES = [
  "Better communication", "Stronger leadership", "Improved collaboration",
  "Higher accountability", "Greater adaptability", "Healthier workplace culture",
  "Stronger execution", "Improved emotional maturity",
];

const FORMATS = [
  { icon: Brain, title: "Half-day workshops", desc: "Focused, high-energy capability sessions." },
  { icon: Brain, title: "Full-day workshops", desc: "Deeper immersion with applied practice." },
  { icon: Layers, title: "Multi-session programs", desc: "Behavior change across weeks, not hours." },
  { icon: Compass, title: "Leadership cohorts", desc: "Structured journeys for emerging and senior leaders." },
  { icon: Users, title: "Team interventions", desc: "Targeted work on trust, alignment, performance." },
  { icon: Sparkles, title: "Coaching & mentoring", desc: "1:1 and group growth for key talent." },
];

const WHY = [
  { icon: Brain, title: "Psychology-informed", desc: "Rooted in how people actually change behavior." },
  { icon: Sparkles, title: "Practical & experiential", desc: "Built for the room and the workplace." },
  { icon: Target, title: "Outcome-focused", desc: "Designed to produce measurable behavior shifts." },
  { icon: HeartHandshake, title: "Human-centered", desc: "Respectful, engaging, energizing learning." },
  { icon: Layers, title: "Customizable", desc: "Shaped to your industry, leaders, and context." },
  { icon: Compass, title: "Reflection-driven", desc: "Insight that becomes identity and action." },
];

const FAQS = [
  { q: "Do you customize for our industry?", a: "Yes. Programs are tailored to your context, leaders, and outcomes." },
  { q: "Do you measure impact?", a: "We design measurable behavior and capability outcomes for every engagement." },
  { q: "Can you run hybrid or online?", a: "Yes — on-site, hybrid, and online formats are all supported." },
  { q: "How are programs priced?", a: "Pricing is customized to scope, format, and duration. Reach out and we'll scope it together." },
];

export const Route = createFileRoute("/corporate-training")({
  head: () => ({
    ...pageMeta({
      title: "Corporate Training — WayMaker Skills™",
      description:
        "Build capable teams, confident leaders, and future-ready organizations. Corporate training across leadership, communication, EI, well-being, and culture.",
      path: "/corporate-training",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Corporate Training", path: "/corporate-training" }])),
      jsonLd(serviceLd("Corporate Training", "Human development and capability building for organizations.", "/corporate-training")),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Corporate Training & Workplace Development"
        title="Build capable teams, confident leaders, and future-ready organizations."
        subtitle="Behavior-shifting programs across leadership, communication, EI, resilience, and future skills — built around your context and outcomes."
        badges={["Customizable", "On-site · Hybrid · Online", "Outcome-focused", "Leader & team development"]}
      >
        <CTAButton to="/contact" variant="primary">Discuss a Corporate Program <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/leadership" variant="secondary">See Leadership</CTAButton>
      </PageHero>

      <Section eyebrow="Corporate capability areas" title="A complete capability portfolio." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((s, i) => (
            <FeatureCard key={s.title} icon={s.icon} title={s.title} delay={i * 50}>{s.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Business outcomes" title="Designed for real organizational impact." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section eyebrow="Program formats" title="Flexible delivery, designed for behavior change." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FORMATS.map((f, i) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} delay={i * 50}>{f.desc}</FeatureCard>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-[color:var(--muted-ink)]">All formats are fully customizable.</p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Why companies choose us" title="Built for depth and behavior change." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY.map((w, i) => (
            <FeatureCard key={w.title} icon={w.icon} title={w.title} delay={i * 50}>{w.desc}</FeatureCard>
          ))}
        </div>
      </Section>

      <Section>
        <QuoteBlock quote="Behavior changes when people change — and people change when learning meets reflection, practice, and purpose." />
      </Section>

      <Section eyebrow="FAQ" title="Corporate program questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA title="Plan a workplace development program." />
      <div className="h-16" />
    </Layout>
  );
}
