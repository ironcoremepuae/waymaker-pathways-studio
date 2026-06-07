import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Ear,
  Handshake,
  HeartHandshake,
  MessagesSquare,
  Mic,
  Sparkles,
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
    icon: Mic,
    title: "Clarity of expression",
    desc: "Speaking and writing ideas in a way others can truly understand.",
  },
  {
    icon: Ear,
    title: "Listening and empathy",
    desc: "Paying attention to what is said, unsaid, and emotionally present.",
  },
  {
    icon: Sparkles,
    title: "Presentation confidence",
    desc: "Presence, structure, and audience connection.",
  },
  {
    icon: Briefcase,
    title: "Professional communication",
    desc: "Clearer workplace communication across channels and roles.",
  },
  {
    icon: Users,
    title: "Interpersonal communication",
    desc: "Healthier day-to-day dialogue and relationship-building.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "Using communication to align, not just to inform.",
  },
  {
    icon: MessagesSquare,
    title: "Conflict handling",
    desc: "Turning difficult conversations into clearer understanding.",
  },
  {
    icon: Handshake,
    title: "Influence",
    desc: "Building trust and moving people through credibility.",
  },
];

const OUTCOMES = [
  "Clearer thinking",
  "Confident speaking",
  "Stronger listening",
  "Better presentations",
  "Healthier conversations",
  "More responsible influence",
];

const FAQS = [
  {
    q: "Is communication skills training only for public speaking?",
    a: "No. It also includes listening, conversation quality, feedback, influence, collaboration, and conflict handling.",
  },
  {
    q: "Who can benefit from communication training?",
    a: "Students, professionals, leaders, educators, and teams can all benefit from stronger communication capability.",
  },
  {
    q: "How is communication connected to leadership?",
    a: "Leadership depends on clarity, trust, difficult conversations, and influence, all of which rely on communication skill.",
  },
  {
    q: "Can communication training be combined with emotional intelligence work?",
    a: "Yes. Communication often improves most when paired with self-awareness, regulation, and empathy.",
  },
];

export const Route = createFileRoute("/communication-skills-training")({
  head: () => ({
    ...pageMeta({
      title: "Communication Skills Training | WayMaker Skills™",
      description:
        "Communication skills training from WayMaker Skills™ for clarity, listening, presentation confidence, collaboration, and influence.",
      path: ROUTES.communication,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Communication Skills Training", path: ROUTES.communication },
        ]),
      ),
      jsonLd(
        serviceLd(
          "Communication Skills Training",
          "Communication development for clarity, confidence, listening, collaboration, and influence.",
          ROUTES.communication,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: CommunicationPage,
});

function CommunicationPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Communication Skills Training"
        title="Express clearly. Listen deeply. Connect meaningfully."
        subtitle="WayMaker Skills™ communication training helps people build clarity, confidence, listening, collaboration, and credible influence."
        badges={["Clarity", "Listening", "Confidence", "Influence"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Improve Communication Skills <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.programs} variant="secondary">
          Explore Programs
        </CTAButton>
      </PageHero>

      <Section eyebrow="Why it matters" title="Communication is a core life and leadership skill.">
        <div className="max-w-3xl text-lg leading-relaxed text-[color:var(--charcoal)]">
          Communication shapes how people work, learn, lead, collaborate, and relate. It is not
          limited to speaking in public. It includes listening, explaining, asking, influencing,
          responding to conflict, and building trust in real situations.
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="What we develop"
        title="Communication capabilities that transfer into real life."
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
        <QuoteBlock quote="Stronger communication starts before the mouth. It begins with clearer thought, steadier emotion, and more intentional presence." />
      </Section>

      <Section eyebrow="FAQ" title="Communication training questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
