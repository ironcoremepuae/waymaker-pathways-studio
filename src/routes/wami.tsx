import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { AudienceCards } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import {
  BookOpen, Gamepad2, Trophy, Palette, MessagesSquare, Heart, Sparkles, Star,
  GraduationCap, HeartHandshake, Lightbulb, Users, ArrowRight,
} from "lucide-react";

const ELEMENTS = [
  { icon: BookOpen, title: "Stories", desc: "Stories that grow confidence, courage, and character." },
  { icon: Palette, title: "Activity Books", desc: "Hands-on activities that turn ideas into experience." },
  { icon: Trophy, title: "Skill Challenges", desc: "Bite-sized challenges that build real-world skills." },
  { icon: Gamepad2, title: "Games", desc: "Playful learning that sticks and inspires." },
  { icon: Sparkles, title: "Creative Tasks", desc: "Imagination, expression, and original thinking." },
  { icon: MessagesSquare, title: "Communication Practice", desc: "Voice, listening, and confident expression." },
  { icon: Heart, title: "Reflection Activities", desc: "Gentle ways to grow inner awareness." },
  { icon: Star, title: "Character Building", desc: "Values, kindness, and responsibility." },
];

const SKILLS = [
  { icon: Lightbulb, title: "Confidence", desc: "Self-belief that lasts beyond childhood." },
  { icon: Sparkles, title: "Creativity", desc: "Imagination and original thinking." },
  { icon: MessagesSquare, title: "Communication", desc: "Speaking, listening, expressing." },
  { icon: Heart, title: "Character", desc: "Values, integrity, and kindness." },
  { icon: Star, title: "Curiosity", desc: "A lifelong love of learning." },
  { icon: Users, title: "Collaboration", desc: "Playing, sharing, and growing with others." },
  { icon: HeartHandshake, title: "Emotional Awareness", desc: "Naming and navigating feelings." },
  { icon: Trophy, title: "Problem-solving", desc: "Thinking through challenges with confidence." },
];

const FAQS = [
  { q: "Who is WAMI™ for?", a: "Children and the schools, parents, and educators who shape their growth." },
  { q: "How is WAMI™ delivered?", a: "Through stories, activity books, games, challenges, and experiential learning experiences." },
  { q: "Can schools use WAMI™?", a: "Yes — WAMI™ is designed to support both school and home learning." },
];

export const Route = createFileRoute("/wami")({
  head: () => ({
    ...pageMeta({
      title: "WAMI™ — The Superstar of Skills | WayMaker Skills™",
      description:
        "WAMI™ is the children's learning ecosystem of WayMaker Skills™ — building confidence, creativity, communication, and character through experiential learning.",
      path: "/wami",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "WAMI™", path: "/wami" }])),
      jsonLd(serviceLd("WAMI™ Children's Learning Ecosystem", "Stories, games, challenges, and activity-based learning for children.", "/wami")),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="WAMI™ · For Children"
        title="The Superstar of Skills."
        subtitle="WAMI™ is the children's learning ecosystem of WayMaker Skills™ — building confidence, creativity, communication, and character through experiential learning."
        badges={["Stories", "Games", "Challenges", "Activity Books"]}
        variant="playful"
      >
        <CTAButton to="/contact" variant="gold">Explore WAMI™ Programs <ArrowRight className="h-4 w-4" /></CTAButton>
        <CTAButton to="/schools-youth" variant="secondary">For Schools</CTAButton>
      </PageHero>

      <Section eyebrow="What is WAMI™?" title="A whole little world built for growing humans.">
        <p className="max-w-3xl text-lg text-[color:var(--charcoal)] leading-relaxed">
          Through stories, challenges, activity books, games, and experiential learning, WAMI™ helps children
          develop confidence, creativity, communication, character, and future-ready life skills — at their own pace,
          in their own voice.
        </p>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="WAMI™ learning elements" title="Where skills become superpowers." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ELEMENTS.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card-lift gradient-border h-full rounded-3xl bg-white border border-[color:var(--border)] p-6 shadow-soft">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--gold)] text-[color:var(--teal-dark)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">{s.title}</h3>
                <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills WAMI™ builds" title="The 8 Cs of WAMI™." center>
        <AudienceCards items={SKILLS} />
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="For parents & schools" title="Home learning meets school learning." center>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 shadow-soft h-full">
              <div className="inline-flex h-11 w-11 rounded-xl bg-[color:var(--gold)]/20 text-[color:var(--teal-deep)] items-center justify-center">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl text-[color:var(--teal-dark)] mt-4">At home</h3>
              <p className="mt-2 text-[color:var(--muted-ink)] leading-relaxed">
                WAMI™ gives parents simple, joyful ways to grow life skills, character, and confidence into
                everyday family life.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl bg-teal-gradient text-white p-8 shadow-elegant h-full relative overflow-hidden">
              <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-[color:var(--gold)]/30 blur-3xl" aria-hidden />
              <div className="relative">
                <div className="inline-flex h-11 w-11 rounded-xl bg-white/15 text-white items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl mt-4">At school</h3>
                <p className="mt-2 text-white/85 leading-relaxed">
                  WAMI™ slots into classrooms, assemblies, and life skills modules — bringing structured fun and
                  experiential growth to whole-school programs.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="WAMI™ questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA
        title="Bring WAMI™ to your learning community."
        text="Schools, parents, and partners — let's grow the next generation together."
      />
      <div className="h-16" />
    </Layout>
  );
}
