import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FeatureCard } from "@/components/site/Card";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { AudienceCards } from "@/components/site/Blocks";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  Users, GraduationCap, BookOpen, HeartHandshake, Brain, Compass, Sparkles, Lightbulb,
  MessagesSquare, Heart, Star, Calendar, School, ArrowRight,
} from "lucide-react";

const AUDIENCE = [
  { icon: GraduationCap, title: "Students", desc: "Life skills, confidence, and future readiness." },
  { icon: BookOpen, title: "Teachers", desc: "Capability building for the modern classroom." },
  { icon: HeartHandshake, title: "Parents", desc: "Tools to raise emotionally intelligent children." },
  { icon: School, title: "School Leaders", desc: "Whole-school human development partnerships." },
];

const STUDENT = [
  { icon: Sparkles, title: "Life Skills", desc: "The skills schools don't teach but life always tests." },
  { icon: Lightbulb, title: "Confidence Building", desc: "Inner strength, self-belief, and voice." },
  { icon: MessagesSquare, title: "Communication", desc: "Speaking, listening, and expressing." },
  { icon: HeartHandshake, title: "Emotional Intelligence", desc: "Awareness, regulation, empathy." },
  { icon: Brain, title: "Study Mindset", desc: "Focus, habits, and learning strategy." },
  { icon: Compass, title: "Leadership", desc: "Self-leadership and responsibility." },
  { icon: Heart, title: "Character", desc: "Values, integrity, and kindness." },
  { icon: Star, title: "Creativity", desc: "Imagination, expression, and original thinking." },
  { icon: GraduationCap, title: "Career & Future Readiness", desc: "Clarity, exploration, and direction." },
];

const TEACHER = [
  { icon: MessagesSquare, title: "Classroom communication", desc: "Clear, warm, effective communication with students." },
  { icon: Sparkles, title: "Student motivation", desc: "Inspiring engagement, ownership, and growth." },
  { icon: Heart, title: "Emotional awareness", desc: "Reading classrooms and responding wisely." },
  { icon: Compass, title: "Mentoring mindset", desc: "Coaching students into capability." },
  { icon: Star, title: "Positive learning environment", desc: "Safe, energetic, growth-oriented classrooms." },
];

const PARENT = [
  { icon: MessagesSquare, title: "Communication with children", desc: "Conversations that build trust and confidence." },
  { icon: HeartHandshake, title: "Emotional support", desc: "Helping children name and manage feelings." },
  { icon: Compass, title: "Positive discipline", desc: "Boundaries with warmth, not fear." },
  { icon: Lightbulb, title: "Confidence building", desc: "Helping children believe in themselves." },
  { icon: Brain, title: "Growth mindset at home", desc: "A home culture where learning is loved." },
];

const FORMATS = [
  { icon: Calendar, title: "Assemblies" },
  { icon: Users, title: "Workshops" },
  { icon: Sparkles, title: "Life skills modules" },
  { icon: HeartHandshake, title: "Parent sessions" },
  { icon: BookOpen, title: "Teacher development" },
  { icon: Compass, title: "Student leadership programs" },
];

const FAQS = [
  { q: "Can you partner with our school?", a: "Yes. We design whole-school programs, teacher development, and parent engagement together." },
  { q: "Do you offer one-off sessions?", a: "We do, though deeper outcomes come from structured journeys across a term or year." },
];

export const Route = createFileRoute("/schools-youth")({
  head: () => ({
    ...pageMeta({
      title: "School & Youth Development — WayMaker Skills™",
      description:
        "Building confident, resilient, responsible, and future-ready learners — programs for schools, students, teachers, and parents.",
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
      <PageHero
        eyebrow="School & Youth Development"
        title="Building confident, resilient, future-ready learners."
        subtitle="Human development partnerships that grow confidence, character, and capability across the whole school ecosystem."
        badges={["Whole-school", "Students · Teachers · Parents", "Life skills & character", "Future readiness"]}
      >
        <CTAButton to="/contact" variant="primary">Plan a School Program <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/wami" variant="secondary">Explore WAMI™</CTAButton>
      </PageHero>

      <Section eyebrow="Who we support" title="A whole-school approach." center>
        <AudienceCards items={AUDIENCE} />
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Student development" title="Skills that schools don't teach but life always tests." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STUDENT.map((p, i) => <FeatureCard key={p.title} icon={p.icon} title={p.title} delay={i * 40}>{p.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section eyebrow="Teacher development" title="Equipping educators for human development." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEACHER.map((p, i) => <FeatureCard key={p.title} icon={p.icon} title={p.title} delay={i * 50}>{p.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Parent engagement" title="Aligned home–school growth." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PARENT.map((p, i) => <FeatureCard key={p.title} icon={p.icon} title={p.title} delay={i * 50}>{p.desc}</FeatureCard>)}
        </div>
      </Section>

      <Section eyebrow="School program formats" title="Flexible by design." center>
        <AudienceCards items={FORMATS.map((f) => ({ icon: f.icon, title: f.title, desc: "Customizable to your school's needs and calendar." }))} />
        <div className="text-center mt-10">
          <CTAButton to="/contact" variant="gold">Create a future-ready school community</CTAButton>
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
