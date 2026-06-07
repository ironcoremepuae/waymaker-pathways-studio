import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Compass,
  HeartHandshake,
  Layers,
  Lightbulb,
  MessagesSquare,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
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
    icon: Compass,
    title: "Self-leadership",
    desc: "Leading self before attempting to lead others.",
  },
  {
    icon: ShieldCheck,
    title: "Responsible leadership",
    desc: "Integrity, maturity, and values in action.",
  },
  {
    icon: MessagesSquare,
    title: "Communication and influence",
    desc: "Clarity, presence, and credible conversations.",
  },
  {
    icon: Scale,
    title: "Decision-making",
    desc: "Judgment that remains steady under pressure and ambiguity.",
  },
  {
    icon: Target,
    title: "Accountability",
    desc: "Taking ownership for behavior, team direction, and outcomes.",
  },
  { icon: Users, title: "Team leadership", desc: "Trust-building, alignment, and people growth." },
  {
    icon: HeartHandshake,
    title: "Emotional maturity",
    desc: "Awareness and regulation that shape better leadership.",
  },
  {
    icon: Brain,
    title: "Strategic thinking",
    desc: "Seeing patterns, systems, and longer-term implications.",
  },
  {
    icon: Lightbulb,
    title: "Execution",
    desc: "Moving from intention into consistent leadership practice.",
  },
  {
    icon: Sparkles,
    title: "Influence",
    desc: "Helping people move through credibility, not pressure.",
  },
  {
    icon: Layers,
    title: "Future-ready leadership",
    desc: "Leading through complexity, change, and uncertainty.",
  },
];

const OUTCOMES = [
  "Clearer self-leadership",
  "Stronger communication",
  "Better decisions",
  "Greater accountability",
  "Stronger teams",
  "Healthier leadership presence",
];

const FAQS = [
  {
    q: "Who is leadership training for?",
    a: "Leadership training can support managers, founders, emerging leaders, educators, and teams with leadership responsibilities.",
  },
  {
    q: "Do you only focus on senior leaders?",
    a: "No. Leadership development can begin with self-leadership and grow through different career stages and roles.",
  },
  {
    q: "How is leadership connected to emotional intelligence?",
    a: "Leaders rely on awareness, regulation, empathy, and communication to influence responsibly and sustain trust.",
  },
  {
    q: "Can leadership training be part of a larger corporate program?",
    a: "Yes. It can sit within broader workplace capability journeys that include communication, resilience, and team effectiveness.",
  },
];

export const Route = createFileRoute("/leadership-development-training")({
  head: () => ({
    ...pageMeta({
      title: "Leadership Development Training | WayMaker Skills™",
      description:
        "Leadership development training from WayMaker Skills™ for self-leadership, communication, accountability, and people growth.",
      path: ROUTES.leadership,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Leadership Development Training", path: ROUTES.leadership },
        ]),
      ),
      jsonLd(
        serviceLd(
          "Leadership Development Training",
          "Leadership development for self-leadership, team leadership, and responsible influence.",
          ROUTES.leadership,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: LeadershipPage,
});

function LeadershipPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Leadership Development Training"
        title="Develop leaders who can lead themselves and grow others."
        subtitle="WayMaker Skills™ leadership development supports maturity, communication, judgment, accountability, and responsible influence."
        badges={["Self-leadership", "People leadership", "Accountability", "Future-ready"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Build Leadership Capability <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.corporateTraining} variant="secondary">
          Corporate Training
        </CTAButton>
      </PageHero>

      <Section
        eyebrow="What leadership means here"
        title="Leadership is a way of being, not only a position."
      >
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          We see leadership as a human capability before it becomes an organizational title. That
          means better leadership grows from clearer self-awareness, better communication, stronger
          judgment, and more responsible action in relationships and systems.
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="What we develop"
        title="Capabilities that define modern leaders."
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

      <Section eyebrow="Outcomes" title="What leaders carry forward." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section>
        <QuoteBlock quote="Leadership becomes credible when the person behind the role becomes steadier, clearer, and more responsible." />
      </Section>

      <Section eyebrow="FAQ" title="Leadership training questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA title="Develop responsible, capable leaders." />
      <div className="h-16" />
    </Layout>
  );
}
