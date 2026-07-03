import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  Compass,
  GraduationCap,
  HeartHandshake,
  School,
  Users,
} from "lucide-react";
import { AudienceCards, OutcomeGrid } from "@/components/site/Blocks";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { LQCapabilitiesShowcase } from "@/components/site/LQCapabilitiesShowcase";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { LQ_DIMENSIONS } from "@/data/site";
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
  "Professional Excellence",
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
  {
    icon: Compass,
    title: "Leaders",
    desc: "A broader model for mature, responsible leadership.",
  },
  {
    icon: Users,
    title: "Teams",
    desc: "Shared growth across thinking, feeling, communication, and action.",
  },
  {
    icon: School,
    title: "Schools",
    desc: "Build future ready students, teachers & ecosystems.",
  },
  {
    icon: Building2,
    title: "Organizations",
    desc: "Develop a culture of continuous learning and growth.",
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
  const heroAside = (
    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-[0_24px_60px_rgba(7,55,66,0.16)] backdrop-blur">
      <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(214,166,56,0.28),transparent_28%),linear-gradient(135deg,_#0d5259_0%,_#13717c_45%,_#f0d587_100%)] p-6 text-white shadow-inner">
        <div className="rounded-[1.25rem] border border-white/20 bg-black/10 p-5 backdrop-blur-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            Life intelligence framework visual
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {LQ_DIMENSIONS.map((dimension) => (
              <span
                key={dimension.code}
                className="rounded-full border border-white/25 bg-white/12 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white"
              >
                {dimension.code}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-3xl leading-tight text-[color:var(--teal-dark)]">
          The five dimensions
        </h3>
        <ul className="mt-5 space-y-3">
          {LQ_DIMENSIONS.map((dimension) => (
            <li
              key={dimension.code}
              className="flex items-center gap-3 text-lg text-[color:var(--muted-ink)]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--gold)]" aria-hidden />
              {dimension.code}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <Layout>
      <PageHero
        eyebrow="LQ™ Framework"
        title="Life Intelligence Quotient™ (LQ)"
        subtitle="Knowledge alone does not determine success."
        badges={["THINK", "FEEL", "CONNECT", "ACT", "ADAPT"]}
        aside={heroAside}
      >
        <p className="basis-full max-w-3xl text-lg leading-relaxed text-[color:var(--muted-ink)] md:text-xl">
          The ability to apply intelligence effectively in real-life situations is what enables
          individuals to navigate complexity, lead confidently, build relationships, and create
          meaningful impact. The LQ™ Framework is Way Maker Skills™' signature model for developing
          Applied Intelligence. Built around five interconnected dimensions, it provides a practical
          framework for understanding how individuals learn, lead, communicate, perform, and adapt.
        </p>

        <CTAButton to={ROUTES.programs} variant="primary">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </CTAButton>

        <a
          href="https://waymakerskills.com/lq-life-intelligence-quotient-framework"
          target="_blank"
          rel="noreferrer"
          className="btn-shine inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-6 py-3 text-sm font-semibold text-[color:var(--teal-deep)] transition-all hover:-translate-y-0.5 hover:border-[color:var(--teal-deep)]"
        >
          Learn More at WayMaker Skills™
        </a>
      </PageHero>

      <Section eyebrow="Why LQ™ matters" title="Knowledge alone does not determine Effectiveness.">
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          LQ™ gives WayMaker Skills™ a practical map for applied intelligence. It helps explain why
          people may know what to do and still struggle in real contexts. The framework broadens the
          picture to include emotional awareness, communication, action, and adaptability alongside
          thinking.
        </div>
      </Section>

      <LQCapabilitiesShowcase showCta={false} />

      <Section eyebrow="What it becomes" title="The Capabilities LQ™ supports in Practice." center>
        <OutcomeGrid items={OUTCOMES} />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Where it applies"
        title="Built for Different Audiences and Life Stages."
        center
      >
        <AudienceCards items={APPLIES} />
      </Section>

      <Section className="bg-[color:var(--teal-dark)] text-white" center>
        <h2 className="text-4xl text-white md:text-5xl">Start building Life Intelligence.</h2>
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
