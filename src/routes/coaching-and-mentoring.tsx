import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Compass,
  Eye,
  GraduationCap,
  Heart,
  Lightbulb,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { AudienceCards, QuoteBlock, Timeline } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";

const WHO = [
  {
    icon: Sparkles,
    title: "Individuals",
    desc: "People seeking clarity, confidence, and meaningful next steps.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Support for direction, confidence, and personal growth.",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Career reflection, communication, and leadership readiness.",
  },
  {
    icon: Users,
    title: "Emerging leaders",
    desc: "Growth in self-leadership and relational capability.",
  },
];

const AREAS = [
  {
    icon: Compass,
    title: "Personal clarity",
    desc: "Direction, decisions, and a clearer sense of purpose.",
  },
  {
    icon: Lightbulb,
    title: "Confidence",
    desc: "Strengthening inner trust and voice through reflection and practice.",
  },
  {
    icon: GraduationCap,
    title: "Career readiness",
    desc: "Communication, mindset, and more intentional next moves.",
  },
  {
    icon: Heart,
    title: "Life skills",
    desc: "The deeper capabilities that shape daily behavior and growth.",
  },
  {
    icon: Briefcase,
    title: "Leadership growth",
    desc: "Building self-leadership before broader responsibility.",
  },
  {
    icon: Brain,
    title: "Mindset and habits",
    desc: "Working on patterns that influence how growth compounds.",
  },
  { icon: Eye, title: "Reflection", desc: "Making space for honest awareness and useful insight." },
  {
    icon: BookOpen,
    title: "Action planning",
    desc: "Turning clarity into practical commitments and follow-through.",
  },
  { icon: Target, title: "Purposeful action", desc: "Creating traction, not only understanding." },
];

const PROCESS = [
  {
    title: "Discover",
    desc: "Understand context, growth goals, and the real questions beneath the surface.",
  },
  {
    title: "Reflect",
    desc: "Surface patterns, assumptions, strengths, and tensions that need attention.",
  },
  { title: "Clarify", desc: "Turn reflection into clearer priorities, direction, and choices." },
  { title: "Act", desc: "Translate insight into practical behavior and next-step commitments." },
  {
    title: "Grow",
    desc: "Review progress, refine direction, and strengthen sustainable capability.",
  },
];

const FAQS = [
  {
    q: "What is the difference between coaching and mentoring?",
    a: "Coaching often supports reflection and self-discovery, while mentoring can include guidance shaped by experience. WayMaker Skills™ can support both depending on the need.",
  },
  {
    q: "Who is coaching and mentoring for?",
    a: "It can support students, professionals, emerging leaders, and individuals looking for greater clarity, confidence, and action.",
  },
  {
    q: "Can coaching focus on leadership or communication growth?",
    a: "Yes. Coaching and mentoring can align with leadership, communication, emotional intelligence, direction-setting, and broader personal development.",
  },
  {
    q: "Is this only one-to-one?",
    a: "No. Support can happen one-to-one or in selected group formats, depending on the context.",
  },
];

export const Route = createFileRoute("/coaching-and-mentoring")({
  head: () => ({
    ...pageMeta({
      title: "Coaching and Mentoring | WayMaker Skills™",
      description:
        "Coaching and mentoring from WayMaker Skills™ for clarity, confidence, growth, leadership, and purposeful action.",
      path: ROUTES.coachingMentoring,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Coaching and Mentoring", path: ROUTES.coachingMentoring },
        ]),
      ),
      jsonLd(
        serviceLd(
          "Coaching and Mentoring",
          "Guided development journeys for clarity, confidence, growth, and action.",
          ROUTES.coachingMentoring,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: CoachingPage,
});

function CoachingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Coaching and Mentoring"
        title="Guided growth for clarity, confidence, and purposeful action."
        subtitle="WayMaker Skills™ coaching and mentoring creates structured space for reflection, direction, and practical next steps."
        badges={["1:1 support", "Group formats", "Clarity", "Growth in action"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Start a Conversation <ArrowRight className="h-4 w-4" />
        </CTAButton>
      </PageHero>

      <Section
        eyebrow="Who it is for"
        title="Built for people who want more intentional growth."
        center
      >
        <AudienceCards items={WHO} />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Areas of support"
        title="What coaching and mentoring can work on."
        center
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, index) => (
            <FeatureCard key={area.title} icon={area.icon} title={area.title} delay={index * 40}>
              {area.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="The process" title="A reflective path that leads to action." center>
        <Timeline steps={PROCESS} />
      </Section>

      <Section>
        <QuoteBlock quote="Coaching is valuable when reflection becomes clear action instead of staying as private insight." />
      </Section>

      <Section eyebrow="FAQ" title="Coaching and mentoring questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA title="Start a coaching conversation." />
      <div className="h-16" />
    </Layout>
  );
}
