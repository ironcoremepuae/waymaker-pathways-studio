import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Compass,
  GraduationCap,
  HeartHandshake,
  Users,
} from "lucide-react";
import { AudienceCards, OutcomeGrid } from "@/components/site/Blocks";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { LQCapabilitiesShowcase } from "@/components/site/LQCapabilitiesShowcase";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

const OUTCOMES = [
  "Leadership development",
  "Communication excellence",
  "Emotional intelligence",
  "Critical thinking",
  "Problem solving",
  "Adaptability",
  "Resilience",
  "Purposeful action",
];

const APPLIES = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Confidence, direction, and life skills beyond academics.",
  },
  {
    icon: HeartHandshake,
    title: "Parents",
    desc: "A clearer lens on the skills children need for life.",
  },
  {
    icon: BookOpen,
    title: "Teachers",
    desc: "Human development language that supports better classrooms.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Capabilities that influence career growth and effectiveness.",
  },
  { icon: Compass, title: "Leaders", desc: "A broader model for mature, responsible leadership." },
  {
    icon: Users,
    title: "Teams",
    desc: "Shared growth across thinking, feeling, communication, and action.",
  },
];

const FAQS = [
  {
    q: "What is LQ™?",
    a: "LQ™ stands for Life Intelligence Quotient. It is the WayMaker Skills™ framework for understanding applied intelligence across five dimensions: THINK, FEEL, CONNECT, ACT, and ADAPT.",
  },
  {
    q: "How is LQ™ different from IQ or EQ alone?",
    a: "LQ™ takes a broader view. It includes thinking, emotional awareness, connection, action, and adaptability rather than treating intelligence as only cognitive or emotional.",
  },
  {
    q: "Where is the LQ™ framework used?",
    a: "It informs WayMaker Skills™ programs across schools, leadership development, communication, emotional intelligence, coaching, and workplace capability building.",
  },
  {
    q: "Why does life intelligence matter?",
    a: "Because real-world success depends on how people apply intelligence in context, not only on what they know in theory.",
  },
];

export const Route = createFileRoute("/lq-life-intelligence-quotient-framework")({
  head: () => ({
    ...pageMeta({
      title: "LQ™ Framework | Life Intelligence Quotient",
      description:
        "Explore the LQ™ framework from WayMaker Skills™ and see how THINK, FEEL, CONNECT, ACT, and ADAPT shape practical human capability.",
      path: ROUTES.lq,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "LQ™ Framework", path: ROUTES.lq },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: LQPage,
});

function LQPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="LQ™ Framework"
        title="Life Intelligence Quotient."
        subtitle="A five-dimensional framework for understanding how people think, feel, connect, act, and adapt in the real world."
        badges={["THINK", "FEEL", "CONNECT", "ACT", "ADAPT"]}
      >
        <CTAButton to={ROUTES.programs} variant="primary">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.contact} variant="secondary">
          Talk to Us
        </CTAButton>
      </PageHero>

      <Section eyebrow="Why LQ™ matters" title="Knowledge alone does not determine effectiveness.">
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          LQ™ gives WayMaker Skills™ a practical map for applied intelligence. It helps explain why
          people may know what to do and still struggle in real contexts. The framework broadens the
          picture to include emotional awareness, communication, action, and adaptability alongside
          thinking.
        </div>
      </Section>

      <LQCapabilitiesShowcase showCta={false} />

      <Section eyebrow="What it becomes" title="The capabilities LQ™ supports in practice." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Where it applies"
        title="Built for different audiences and life stages."
        center
      >
        <AudienceCards items={APPLIES} />
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" center>
        <h2 className="text-4xl text-white md:text-5xl">Start building life intelligence.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
          LQ™ helps connect frameworks to outcomes across leadership, communication, emotional
          intelligence, youth development, and broader human growth.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton to={ROUTES.communication} variant="gold">
            Communication Training
          </CTAButton>
          <CTAButton to={ROUTES.emotionalIntelligence} variant="ghost">
            Emotional Intelligence
          </CTAButton>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Questions about LQ™." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
