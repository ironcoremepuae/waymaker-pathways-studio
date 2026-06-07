import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Compass,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Layers,
  School,
  Sparkles,
  Users,
  UsersRound,
} from "lucide-react";
import { AudienceCards, Timeline } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { NOVA_STEPS } from "@/data/site";
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

const PROGRAM_PROCESS = [
  {
    title: "Notice the current reality",
    desc: "Increase awareness of patterns, context, strengths, and constraints.",
  },
  {
    title: "Own the growth task",
    desc: "Build responsibility, mindset, and willingness to act differently.",
  },
  {
    title: "Visualize a better response",
    desc: "Create a clearer internal picture of the desired change and direction.",
  },
  {
    title: "Act in the real world",
    desc: "Move the insight into behavior, decision-making, communication, and practice.",
  },
  {
    title: "Repeat and deepen",
    desc: "Growth strengthens when the cycle is revisited with reflection and application.",
  },
];

const APPLIES = [
  { icon: GraduationCap, title: "Students", desc: "Confidence, decision-making, and life skills." },
  { icon: BookOpen, title: "Educators", desc: "Reflection-led growth in learning environments." },
  {
    icon: HeartHandshake,
    title: "Parents",
    desc: "Awareness and practical support for children’s development.",
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
    q: "What does NOVA™ stand for?",
    a: "NOVA™ stands for Notice, Own, Visualize, and Act. It is the human development methodology used by WayMaker Skills™.",
  },
  {
    q: "How is NOVA™ used in programs?",
    a: "It structures how people move from awareness and reflection into ownership, direction, and practical action during a learning journey.",
  },
  {
    q: "Is NOVA™ only for leadership training?",
    a: "No. NOVA™ can be used across student growth, school programs, coaching, leadership development, and workplace capability building.",
  },
  {
    q: "Why does methodology matter in human development?",
    a: "A clear methodology helps learning stay coherent. It reduces the gap between what people hear in a session and what they can actually do afterward.",
  },
];

export const Route = createFileRoute("/nova-human-development-methodology")({
  head: () => ({
    ...pageMeta({
      title: "NOVA™ Methodology | Human Development Framework",
      description:
        "Discover NOVA™, the human development methodology from WayMaker Skills™ that helps people move from awareness to ownership, direction, and action.",
      path: ROUTES.nova,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "NOVA™ Methodology", path: ROUTES.nova },
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
      <PageHero
        eyebrow="NOVA™ Methodology"
        title="From awareness to action. From potential to practical growth."
        subtitle="NOVA™ is the WayMaker Skills™ methodology for helping people notice more clearly, own growth more intentionally, visualize direction, and act with purpose."
        badges={["Notice", "Own", "Visualize", "Act", "Evidence-informed"]}
      >
        <CTAButton to={ROUTES.programs} variant="primary">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.contact} variant="secondary">
          Discuss a Program
        </CTAButton>
      </PageHero>

      <Section eyebrow="What NOVA™ is" title="A repeatable human development pathway.">
        <div className="grid gap-8 md:grid-cols-2 text-lg leading-relaxed text-[color:var(--charcoal)]">
          <p>
            NOVA™ is the methodology behind WayMaker Skills™ programs. It exists to close the gap
            between insight and behavior. Instead of stopping at understanding, it guides people
            into ownership, direction, and action.
          </p>
          <p>
            That makes NOVA™ useful across different contexts. The audience may change, but the need
            stays consistent: people need a simple, disciplined way to move from reflection into
            capability.
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

      <Section eyebrow="What NOVA™ integrates" title="A multidisciplinary foundation." center>
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
        title="How NOVA™ shows up inside a program."
        center
      >
        <Timeline steps={PROGRAM_PROCESS} />
      </Section>

      <Section eyebrow="Where it applies" title="Designed for every life stage." center>
        <AudienceCards items={APPLIES} />
      </Section>

      <Section eyebrow="FAQ" title="Questions about NOVA™." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Build a NOVA™-based development journey."
        text="From classrooms to corporate teams, NOVA™ gives growth a clear pathway instead of leaving change to chance."
      />
      <div className="h-16" />
    </Layout>
  );
}
