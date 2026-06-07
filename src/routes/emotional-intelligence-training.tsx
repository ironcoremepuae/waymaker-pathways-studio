import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Eye,
  Heart,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Waves,
} from "lucide-react";
import { OutcomeGrid, QuoteBlock } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";

const TOPICS = [
  {
    icon: Eye,
    title: "Self-awareness",
    desc: "Recognizing emotional patterns, triggers, and inner signals.",
  },
  {
    icon: Waves,
    title: "Regulation",
    desc: "Responding with steadiness instead of only reacting.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience",
    desc: "Recovering and adapting with greater inner strength.",
  },
  {
    icon: Sparkles,
    title: "Confidence",
    desc: "A quieter form of self-trust grounded in awareness.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    desc: "Understanding others without losing clarity or boundaries.",
  },
  {
    icon: Users,
    title: "Relationship management",
    desc: "Healthier connection, feedback, and collaboration.",
  },
  {
    icon: Brain,
    title: "Stress handling",
    desc: "Practical skills for pressure, ambiguity, and emotional load.",
  },
  { icon: Heart, title: "Well-being", desc: "Supporting sustainable behavior and inner balance." },
  {
    icon: Target,
    title: "Personal effectiveness",
    desc: "Turning emotional maturity into better decisions and actions.",
  },
];

const OUTCOMES = [
  "Greater self-awareness",
  "Calmer responses",
  "Stronger resilience",
  "Healthier relationships",
  "More emotional maturity",
  "Better well-being support",
];

const FAQS = [
  {
    q: "What is emotional intelligence training?",
    a: "It is training that helps people build awareness, regulation, empathy, resilience, and healthier relationship behavior.",
  },
  {
    q: "Who benefits from emotional intelligence development?",
    a: "Students, professionals, leaders, parents, educators, and teams can all benefit because emotional intelligence affects behavior across every setting.",
  },
  {
    q: "How is emotional intelligence connected to resilience?",
    a: "Resilience depends partly on awareness, regulation, perspective, and recovery, which are all strengthened by emotional intelligence work.",
  },
  {
    q: "Can emotional intelligence be part of leadership development?",
    a: "Yes. Emotional maturity is a core part of responsible, credible leadership.",
  },
];

export const Route = createFileRoute("/emotional-intelligence-training")({
  head: () => ({
    ...pageMeta({
      title: "Emotional Intelligence Training | WayMaker Skills™",
      description:
        "Emotional intelligence training from WayMaker Skills™ for self-awareness, regulation, empathy, resilience, and healthier relationships.",
      path: ROUTES.emotionalIntelligence,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Emotional Intelligence Training", path: ROUTES.emotionalIntelligence },
        ]),
      ),
      jsonLd(
        serviceLd(
          "Emotional Intelligence Training",
          "Emotional intelligence development for self-awareness, regulation, empathy, resilience, and relationship effectiveness.",
          ROUTES.emotionalIntelligence,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: EmotionalIntelligencePage,
});

function EmotionalIntelligencePage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Emotional Intelligence Training"
        title="Inner skills shape outer success."
        subtitle="WayMaker Skills™ emotional intelligence training helps people build self-awareness, emotional maturity, resilience, and healthier relationships."
        badges={["Self-awareness", "Regulation", "Empathy", "Resilience"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Build Emotional Intelligence <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.coachingMentoring} variant="secondary">
          Coaching and Mentoring
        </CTAButton>
      </PageHero>

      <Section
        eyebrow="Why it matters"
        title="Emotional intelligence is the quiet engine of effective behavior."
      >
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          Emotional intelligence influences how people respond to pressure, handle conflict, build
          trust, communicate with care, and recover after difficulty. It is not an optional soft
          layer. It is part of the human foundation behind better work, healthier relationships, and
          steadier leadership.
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="What we develop"
        title="Capabilities that support healthier, more effective behavior."
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic, index) => (
            <FeatureCard key={topic.title} icon={topic.icon} title={topic.title} delay={index * 40}>
              {topic.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcomes" title="What people carry forward." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section>
        <QuoteBlock quote="Awareness changes the quality of response. Better response changes the quality of life, work, and leadership." />
      </Section>

      <Section eyebrow="FAQ" title="Emotional intelligence training questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
