import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  Compass,
  GraduationCap,
  Heart,
  HeartHandshake,
  Lightbulb,
  MessagesSquare,
  School,
  Sparkles,
  Star,
} from "lucide-react";
import { AudienceCards } from "@/components/site/Blocks";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { breadcrumbLd, jsonLd, pageMeta, serviceLd } from "@/lib/seo";

const AUDIENCE = [
  {
    icon: GraduationCap,
    title: "Students",
    desc: "Life skills, confidence, communication, and future readiness.",
  },
  {
    icon: BookOpen,
    title: "Teachers",
    desc: "Growth-oriented capability for the modern classroom.",
  },
  {
    icon: HeartHandshake,
    title: "Parents",
    desc: "Support for confidence, communication, and emotional growth at home.",
  },
  {
    icon: School,
    title: "School leaders",
    desc: "Whole-school partnerships for human development.",
  },
];

const STUDENT = [
  {
    icon: Sparkles,
    title: "Life skills",
    desc: "Practical capabilities that help young people navigate life beyond academics.",
  },
  {
    icon: Lightbulb,
    title: "Confidence",
    desc: "Self-belief built through participation, reflection, and expression.",
  },
  {
    icon: MessagesSquare,
    title: "Communication",
    desc: "Voice, listening, dialogue, and social confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional intelligence",
    desc: "Awareness, regulation, empathy, and maturity.",
  },
  {
    icon: Brain,
    title: "Learning mindset",
    desc: "Focus, habits, resilience, and reflective growth.",
  },
  {
    icon: Compass,
    title: "Leadership",
    desc: "Self-leadership, responsibility, and contribution.",
  },
];

const TEACHER = [
  {
    icon: MessagesSquare,
    title: "Classroom communication",
    desc: "Clearer, calmer, more effective communication with learners.",
  },
  {
    icon: Sparkles,
    title: "Student motivation",
    desc: "Creating environments where participation and ownership grow.",
  },
  {
    icon: Heart,
    title: "Emotional awareness",
    desc: "Responding more wisely to classroom energy and student needs.",
  },
  {
    icon: Compass,
    title: "Mentoring mindset",
    desc: "Seeing development as more than subject delivery.",
  },
];

const PARENT = [
  {
    icon: MessagesSquare,
    title: "Communication at home",
    desc: "Conversations that strengthen trust and clarity.",
  },
  {
    icon: HeartHandshake,
    title: "Emotional support",
    desc: "Helping children understand and navigate feelings.",
  },
  {
    icon: Compass,
    title: "Positive discipline",
    desc: "Guidance with warmth, boundaries, and respect.",
  },
  {
    icon: Lightbulb,
    title: "Confidence-building",
    desc: "Raising children with stronger inner belief and agency.",
  },
];

const FORMATS = [
  {
    icon: GraduationCap,
    title: "Student workshops",
    desc: "Age-aware sessions that build confidence, communication, and life skills.",
  },
  {
    icon: BookOpen,
    title: "Teacher development",
    desc: "Programs that support classroom capability and mentoring mindsets.",
  },
  {
    icon: HeartHandshake,
    title: "Parent sessions",
    desc: "Conversations and guidance for aligned home support.",
  },
  {
    icon: Sparkles,
    title: "Whole-school pathways",
    desc: "Longer development partnerships with multiple stakeholder groups.",
  },
];

const FAQS = [
  {
    q: "Can WayMaker Skills™ partner with our school?",
    a: "Yes. School partnerships can include student programs, teacher development, parent engagement, and broader human development planning.",
  },
  {
    q: "Do you offer one-off sessions as well as longer programs?",
    a: "Yes. We can support both one-time experiences and deeper journeys, depending on the outcomes you want.",
  },
  {
    q: "What age groups can these programs support?",
    a: "Programs can be adapted to different school stages and audience maturity levels.",
  },
  {
    q: "How does WAMI™ relate to school and youth programs?",
    a: "WAMI™ is the children’s life skills ecosystem within WayMaker Skills™ and can support age-appropriate child development pathways.",
  },
];

export const Route = createFileRoute("/school-youth-development-programs")({
  head: () => ({
    ...pageMeta({
      title: "School & Youth Development Programs | WayMaker Skills™",
      description:
        "School and youth development programs from WayMaker Skills™ for students, teachers, parents, and school leaders.",
      path: ROUTES.schoolsYouth,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "School & Youth Development Programs", path: ROUTES.schoolsYouth },
        ]),
      ),
      jsonLd(
        serviceLd(
          "School and Youth Development Programs",
          "Human development programs for students, teachers, parents, and school ecosystems.",
          ROUTES.schoolsYouth,
        ),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: SchoolsYouthPage,
});

function SchoolsYouthPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="School & Youth Development Programs"
        title="Building Confident, Resilient, Future-ready Learners."
        subtitle="WayMaker Skills™ supports students, teachers, parents, and school leaders through practical human development programs."
        badges={["Students", "Teachers", "Parents", "Whole-school partnerships"]}
      >
        <CTAButton to={ROUTES.contact} variant="primary">
          Plan a School Program <ArrowRight className="h-4 w-4" />
        </CTAButton>
        <CTAButton to={ROUTES.wami} variant="secondary">
          Explore WAMI™
        </CTAButton>
      </PageHero>

      <Section eyebrow="Who we support" title="A Whole-school Approach." center>
        <AudienceCards items={AUDIENCE} />
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Student development"
        title="Capabilities young people need beyond Academics."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STUDENT.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 40}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Teacher development"
        title="Equipping Educators for Human Development."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TEACHER.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 40}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Parent engagement"
        title="Extending Growth beyond the Classroom."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PARENT.map((item, index) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} delay={index * 40}>
              {item.desc}
            </FeatureCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Formats" title="Flexible School Program Formats." center>
        <AudienceCards items={FORMATS} />
      </Section>

      <Section eyebrow="FAQ" title="School Partnership Questions." center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>

      <FinalCTA
        title="Create a future-ready school pathway."
        text="If you are building student growth, teacher capability, or a wider school culture, we can shape the next step with you."
      />
      <div className="h-16" />
    </Layout>
  );
}
