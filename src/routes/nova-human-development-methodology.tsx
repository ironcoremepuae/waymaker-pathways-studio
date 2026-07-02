import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Compass,
  Eye,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Layers,
  LineChart,
  Lightbulb,
  School,
  Sparkles,
  Target,
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
        subtitle="NOVA™ is the proprietary human development methodology that powers every WayMaker Skills™ experience. Designed to unlock human potential and build practical capability, it equips individuals, teams, and organizations to navigate challenges, accelerate growth, and create meaningful impact."
        badges={["Notice", "Own", "Visualize", "Act", "Evidence-informed"]}
      >
        <CTAButton to={ROUTES.programs} variant="primary">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.contact} variant="secondary">
          Discover NOVA™
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
        title="How Meaningful Growth takes Shape."
        center
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-[color:var(--muted-ink)]">
            Every transformation begins with greater awareness and grows through purposeful
            learning, practical application, and continuous reflection. WayMaker Skills™ creates
            experiences that help individuals develop the capabilities needed to thrive in life,
            learning, and work.
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
