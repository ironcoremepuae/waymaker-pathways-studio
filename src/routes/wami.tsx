import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { CTAButton, FinalCTA } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { pageMeta, jsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";
import { BookOpen, Gamepad2, Trophy, Palette, MessagesSquare, Heart, Sparkles, Star } from "lucide-react";

const SECTIONS = [
  { icon: BookOpen, title: "Stories", desc: "Stories that grow confidence, courage, and character." },
  { icon: Palette, title: "Activity Books", desc: "Hands-on activities that turn ideas into experiences." },
  { icon: Trophy, title: "Skill Challenges", desc: "Bite-sized challenges that build real-world skills." },
  { icon: Gamepad2, title: "Games", desc: "Playful learning that sticks and inspires." },
  { icon: Sparkles, title: "Creativity", desc: "Imagination, expression, and original thinking." },
  { icon: MessagesSquare, title: "Communication", desc: "Voice, listening, and confident expression." },
  { icon: Heart, title: "Character", desc: "Values, kindness, and responsibility." },
  { icon: Star, title: "Confidence", desc: "Self-belief that lasts beyond childhood." },
];

const FAQS = [
  { q: "Who is WAMI™ for?", a: "Children and the schools, parents, and educators who shape their growth." },
  { q: "How is WAMI™ delivered?", a: "Through stories, activity books, games, challenges, and experiential learning experiences." },
];

export const Route = createFileRoute("/wami")({
  head: () => ({
    ...pageMeta({
      title: "WAMI™ — The Superstar of Skills",
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
      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-[color:var(--gold-soft)]/40 via-[color:var(--ivory)] to-[color:var(--teal-light)]">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[color:var(--gold)]/30 blur-3xl floaty" aria-hidden />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[color:var(--teal-deep)]/20 blur-3xl floaty" aria-hidden />
        <div className="container-prose relative">
          <div className="max-w-3xl reveal">
            <div className="text-xs tracking-[0.22em] uppercase text-[color:var(--teal-deep)] font-semibold mb-4">For Children</div>
            <h1 className="text-5xl md:text-7xl">
              <span className="text-gradient-teal">WAMI</span>
              <span className="text-[color:var(--gold)] align-top text-2xl ml-1">™</span>
            </h1>
            <p className="mt-4 font-display text-3xl text-[color:var(--teal-dark)] italic">The Superstar of Skills</p>
            <p className="mt-6 text-lg text-[color:var(--muted-ink)] leading-relaxed">
              WAMI™ is the children's learning ecosystem of WayMaker Skills™. Through stories, challenges,
              activity books, games, and experiential learning, WAMI™ helps children develop confidence, creativity,
              communication, character, and future-ready life skills.
            </p>
            <div className="mt-8"><CTAButton to="/contact" variant="gold">Explore WAMI™ Programs</CTAButton></div>
          </div>
        </div>
      </section>

      <Section eyebrow="The WAMI™ world" title="Where skills become superpowers." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTIONS.map((s) => (
            <div key={s.title} className="card-lift rounded-3xl bg-white border border-[color:var(--border)] p-6 shadow-soft">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--gold)] text-[color:var(--teal-dark)]">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-[color:var(--teal-dark)]">{s.title}</h3>
              <p className="mt-2 text-[color:var(--muted-ink)] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="WAMI™ questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <FinalCTA title="Bring WAMI™ to your children." text="Schools, parents, and partners — let's grow the next generation together." />
      <div className="h-16" />
    </Layout>
  );
}
