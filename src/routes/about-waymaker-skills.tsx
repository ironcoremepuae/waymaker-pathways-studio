import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Brain, Compass, Eye, Flame, Sparkles, Target, Users } from "lucide-react";
import { EcosystemGrid, QuoteBlock } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { BRAND, CONTACT } from "@/data/site";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";

const PHILOSOPHY = [
  {
    icon: Brain,
    title: "Psychology-informed",
    desc: "We build around how people actually think, feel, decide, and change.",
  },
  {
    icon: Compass,
    title: "Designed for real life",
    desc: "Growth has to transfer into classrooms, meetings, homes, and communities.",
  },
  {
    icon: Flame,
    title: "Experiential by design",
    desc: "Reflection, dialogue, practice, and application matter more than one-way delivery.",
  },
  {
    icon: Eye,
    title: "Whole-person development",
    desc: "We work on mindset, emotion, communication, action, and purpose together.",
  },
  {
    icon: Sparkles,
    title: "Capability over information",
    desc: "The aim is not more content. The aim is more usable human capability.",
  },
  {
    icon: Target,
    title: "Purpose-driven outcomes",
    desc: "We connect growth with responsibility, contribution, and meaningful direction.",
  },
];

const ECOSYSTEM = [
  {
    tag: "Methodology",
    title: "NOVA™",
    desc: "The developmental pathway that helps people move from awareness to action.",
    to: ROUTES.nova,
  },
  {
    tag: "Framework",
    title: "LQ™ Framework",
    desc: "Five dimensions of life intelligence that shape effective behavior and growth.",
    to: ROUTES.lq,
  },
  {
    tag: "Programs",
    title: "Human Development Programs",
    desc: "Learning experiences designed to develop human capability across schools, workplaces, leadership, families, and communities.",
    to: ROUTES.programs,
  },
  {
    tag: "Children",
    title: "WAMI™",
    desc: "A children’s life skills ecosystem built around confidence, creativity, and character.",
    to: ROUTES.wami,
  },
];

const AUDIENCE_GROUPS = [
  "Schools and educational institutions building future-ready learners and teachers.",
  "Organizations developing leadership, communication, culture, and resilience.",
  "Families and parents who want to support children with stronger life skills.",
  "Individuals and emerging leaders seeking clarity, confidence, and applied growth.",
];

const FAQS = [
  {
    q: "What is WayMaker Skills™?",
    a: "WayMaker Skills™ is a human development organization that designs frameworks, programs, and learning experiences to help people build practical capability for life, leadership, learning, and work.",
  },
  {
    q: "What does WayMaker Skills™ do?",
    a: "We create human development programs, leadership and communication training, emotional intelligence work, school and youth programs, coaching journeys, and children’s life skills experiences.",
  },
  {
    q: "Is WayMaker Skills™ a training company?",
    a: "Training is one part of what we do, but the work is broader than event delivery. We focus on deeper human development through frameworks, methodology, reflection, and application.",
  },
  {
    q: "How is WayMaker Skills™ different from a regular training provider?",
    a: "We work from a coherent development system that combines methodology, framework, and program design. That helps learning move beyond one-off inspiration into usable behavior and growth.",
  },
  {
    q: "Who does WayMaker Skills™ work with?",
    a: "We work with schools, educators, students, parents, leaders, professionals, teams, and organizations that want more intentional human capability building.",
  },
  {
    q: "Is sanjo.in part of this website?",
    a: "No. sanjo.in is Sanjo Mathew’s personal brand and profile website. This website is the company website for WayMaker Skills™.",
  },
];

export const Route = createFileRoute("/about-waymaker-skills")({
  head: () => ({
    ...pageMeta({
      title: "About WayMaker Skills™ | Human Development Organization",
      description:
        "Learn what WayMaker Skills™ means by human development, who we work with, and how our frameworks and programs turn potential into purposeful action.",
      path: ROUTES.about,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "About WayMaker Skills™", path: ROUTES.about },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About WayMaker Skills™"
        title="Developing Human Capability for a Changing World"
        subtitle="We help individuals, educators, leaders, and organizations build the thinking, behavioural, and leadership capabilities needed to thrive in an increasingly complex world. Through practical learning experiences and evidence-informed development, we transform potential into measurable growth."
        badges={[
          "Human development",
          "Applied intelligence",
          "Schools, Workplaces, Communities",
          "Practical, Purposeful, Transformative",
        ]}
      >
        <CTAButton to={ROUTES.programs} variant="primary">
          Explore Programs <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.contact} variant="secondary">
          Book a discovery call
        </CTAButton>
      </PageHero>

      <Section eyebrow="Who we are" title={`What ${BRAND} is designed to do.`}>
        <div className="grid gap-8 md:grid-cols-2 text-lg leading-relaxed text-[color:var(--charcoal)]">
          <p>
            {BRAND} exists to help people develop the human capabilities that modern life and work
            demand—self-awareness, communication, emotional intelligence, leadership, resilience,
            adaptability, and purposeful action. We bring together psychology, education,
            behavioural science, and experiential learning to help people apply these capabilities
            with confidence in the real world.
          </p>
          <p>
            This website represents {BRAND} our organization, programs, and learning solutions.
            Sanjo Mathew's personal profile, thought leadership, and individual work can be found at{" "}
            <a
              className="text-[color:var(--teal-deep)] underline underline-offset-4"
              href={CONTACT.founderSite}
              target="_blank"
              rel="noreferrer"
            >
              sanjo.in
            </a>
            .
          </p>
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Human development"
        title="We develop Human Capability through Applied Intelligence."
      >
        <div className="space-y-5 text-lg leading-relaxed text-[color:var(--charcoal)]">
          <p>
            Human development is not just about motivation, information, or short-term performance.
            It is about helping a person grow in how they think, feel, relate, decide, and act. It
            includes the capabilities that influence behavior under pressure, shape relationships,
            and determine whether learning can actually be applied.
          </p>
          <p>
            That is why our work sits across schools, organizations, leadership journeys, personal
            growth, and children’s life skills. Different audiences face different contexts, but the
            underlying need is similar: stronger human capability that can travel into life.
          </p>
        </div>
      </Section>

      <Section eyebrow="Why we exist" title="Why WayMaker Skills™ exists.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft">
            <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">
              The gap we keep seeing
            </h3>
            <p className="mt-3 leading-relaxed text-[color:var(--muted-ink)]">
              People often have information without the capability to use it well. Students may know
              content but struggle with confidence. Teams may know what good communication looks
              like but fail under stress. Leaders may know strategy but lack the maturity to guide
              people well.
            </p>
          </div>
          <div className="rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant">
            <h3 className="font-display text-2xl text-white">Our response</h3>
            <p className="mt-3 leading-relaxed text-white/85">
              We build development experiences that help people notice more clearly, own growth more
              intentionally, act more responsibly, and carry capability into the places that matter:
              classrooms, families, careers, communities, and leadership roles.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Who we work with" title="Who we serve.">
        <div className="grid gap-5 md:grid-cols-2">
          {AUDIENCE_GROUPS.map((group) => (
            <div
              key={group}
              className="flex gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft"
            >
              <Users className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" />
              <p className="leading-relaxed text-[color:var(--charcoal)]">{group}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="What makes us different"
        title="A Coherent Ecosystem, not Disconnected Sessions."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 60}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="The ecosystem"
        title="How the WayMaker Skills™ system fits together."
        center
      >
        <EcosystemGrid items={ECOSYSTEM} />
      </Section>

      <Section>
        <QuoteBlock
          quote="When human development becomes Intentional, Extraordinary lives become Possible."
          author="WayMaker Skills™"
        />
      </Section>

      <Section eyebrow="FAQ" title="Common Questions about the Organization." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Build the Right Human Development Pathway."
        text="If you are shaping learners, teams, leaders, or communities, we can design the next step together."
      />
      <div className="h-16" />
    </Layout>
  );
}
