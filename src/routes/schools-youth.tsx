import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { Users, GraduationCap, BookOpen, HeartHandshake, Brain, Compass, Sparkles, Lightbulb, MessagesSquare } from "lucide-react";

const AUDIENCE = [
  { icon: GraduationCap, title: "Schools", desc: "Whole-school human development partnerships." },
  { icon: Users, title: "Students", desc: "Life skills, confidence, and future readiness." },
  { icon: BookOpen, title: "Teachers", desc: "Capability building for the modern classroom." },
  { icon: HeartHandshake, title: "Parents", desc: "Tools to raise emotionally intelligent children." },
];

const PROGRAMS = [
  { icon: Sparkles, title: "Life Skills", desc: "The skills schools don't teach but life always tests." },
  { icon: Lightbulb, title: "Confidence Building", desc: "Inner strength, self-belief, and voice." },
  { icon: MessagesSquare, title: "Communication Skills", desc: "Speaking, listening, expressing." },
  { icon: HeartHandshake, title: "Emotional Intelligence", desc: "Awareness, regulation, empathy." },
  { icon: Brain, title: "Study Mindset", desc: "Focus, habits, and learning strategy." },
  { icon: Compass, title: "Leadership for Students", desc: "Self-leadership and responsibility." },
  { icon: BookOpen, title: "Teacher Development", desc: "Equipping educators for human development." },
  { icon: Users, title: "Parent Engagement", desc: "Aligned home–school growth." },
  { icon: GraduationCap, title: "Career & Future Readiness", desc: "Clarity, exploration, and direction." },
];

const FAQS = [
  { q: "Can you partner with our school?", a: "Yes. We design whole-school programs, teacher development, and parent engagement together." },
  { q: "Do you offer one-off sessions?", a: "We do, though deeper outcomes come from structured journeys across a term or year." },
];

export const Route = createFileRoute("/schools-youth")({
  head: () => ({
    ...pageMeta({
      title: "Schools & Youth Development",
      description:
        "Human development programs for schools, students, teachers, and parents — building life skills, confidence, EI, leadership, and future readiness.",
      path: "/schools-youth",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Schools & Youth", path: "/schools-youth" }])),
      jsonLd(serviceLd("Schools & Youth Development", "Human development programs for schools and young people.", "/schools-youth")),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="For Schools & Youth" title="Building future-ready learners, teachers, and families."
        subtitle="Human development partnerships that grow confidence, character, and capability across the whole school ecosystem." />

      <Section eyebrow="Who we serve" title="A whole-school approach." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AUDIENCE.map((a) => <FeatureCard key={a.title} icon={a.icon} title={a.title}>{a.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Programs" title="What we deliver." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((p) => <FeatureCard key={p.title} icon={p.icon} title={p.title}>{p.desc}</FeatureCard>)}
        </div>
        <div className="text-center mt-10">
          <CTAButton to="/contact" variant="gold">Plan a School Program</CTAButton>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="School partnership questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
