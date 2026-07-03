import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Briefcase,
  Compass,
  HeartHandshake,
  Layers,
  MessagesSquare,
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

const SECTIONS = [
  {
    icon: Compass,
    title: "Leadership development",
    desc: "Self-leadership, people leadership, and responsible influence.",
  },
  {
    icon: Briefcase,
    title: "Manager capability",
    desc: "Feedback, coaching, accountability, and team development.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    desc: "Clarity, collaboration, listening, and difficult conversations.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional intelligence",
    desc: "Maturity, empathy, and relationship effectiveness at work.",
  },
  {
    icon: ShieldCheck,
    title: "Resilience and well-being",
    desc: "Sustainable performance under pressure and change.",
  },
  {
    icon: Users,
    title: "Team effectiveness",
    desc: "Trust, alignment, and healthier shared behavior.",
  },
  {
    icon: Target,
    title: "Ownership",
    desc: "Execution and accountability that translate into daily practice.",
  },
  {
    icon: Layers,
    title: "Culture shaping",
    desc: "Behavioral patterns that influence the wider system.",
  },
  {
    icon: Sparkles,
    title: "Future-ready skills",
    desc: "Adaptability, learning agility, and collaboration.",
  },
];

const OUTCOMES = [
  "Clearer communication",
  "Stronger leadership behavior",
  "Healthier collaboration",
  "Higher accountability",
  "Greater adaptability",
  "Better workplace maturity",
];

const FAQS = [
  {
    q: "Do you customize corporate programs?",
    a: "Yes. Corporate engagements are shaped to business context, audience level, and capability goals.",
  },
  {
    q: "Can programs combine leadership, communication, and emotional intelligence?",
    a: "Yes. Those themes often work best when designed as part of one coherent development journey.",
  },
  {
    q: "Do you work with managers as well as wider teams?",
    a: "Yes. Programs can focus on leaders, managers, frontline teams, or a broader capability mix.",
  },
  {
    q: "Can you run one-time workshops and longer journeys?",
    a: "Yes. We can support both focused workshops and deeper multi-session development programs.",
  },
];

export const Route = createFileRoute("/corporate-training-programs")({
  head: () => ({
    ...pageMeta({
      title: "Corporate Training Programs | WayMaker Skills™",
      description:
        "Corporate training programs from WayMaker Skills™ for leadership, communication, emotional intelligence, resilience, and team capability.",
      path: ROUTES.corporateTraining,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Corporate Training Programs", path: ROUTES.corporateTraining },
        ]),
      ),
      jsonLd(
        serviceLd(
          "Corporate Training Programs",
          "Human development and workplace capability programs for organizations.",
          ROUTES.corporateTraining,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: CorporateTrainingPage,
});

function CorporateTrainingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Corporate Training Programs"
        title="Build Capable Teams, Confident Leaders, and Healthier Workplace Behavior."
        subtitle="WayMaker Skills™ designs corporate training programs that strengthen leadership, communication, emotional intelligence, resilience, and team effectiveness."
        badges={["Leadership", "Communication", "EI", "Customizable delivery"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Discuss a Corporate Program <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.leadership} variant="secondary">
          Leadership Training
        </CTAButton>
      </PageHero>

      <Section eyebrow="Capability areas" title="What we help Organizations Develop." center>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 40}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="What changes"
        title="Business-relevant Outcomes."
        center
      >
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section eyebrow="Why this matters" title="Programs built around Behavior.">
        <div className="grid gap-6 md:grid-cols-2 text-lg leading-relaxed text-[color:var(--charcoal)]">
          <p>
            Workplace capability is shaped by how people think, communicate, regulate pressure,
            handle feedback, lead others, and work across differences. Those are human behaviors, so
            they need human development rather than information-only training.
          </p>
          <p>
            That is why WayMaker Skills™ combines frameworks, reflection, and applied learning. The
            goal is to support more mature and useful behavior inside real teams and real work.
          </p>
        </div>
      </Section>

      <Section>
        <QuoteBlock quote="Organizations improve when the human behaviors behind performance become more intentional." />
      </Section>

      <Section eyebrow="FAQ" title="Corporate Program Questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Plan a Corporate Capability Journey."
        text="Tell us the team, leadership level, or business context you want to support, and we can shape the right program."
      />
      <div className="h-16" />
    </Layout>
  );
}
