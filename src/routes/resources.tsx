import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { BookOpen, ArrowRight } from "lucide-react";

const CATEGORIES = [
  "Human Development", "Leadership", "Emotional Intelligence", "Communication",
  "Parenting", "Student Growth", "Future Skills", "Well-being",
];

const ARTICLES = [
  { title: "Why Human Development Matters More Than Ever", cat: "Human Development",
    excerpt: "Why developing people — not just teaching them — is the work of our time." },
  { title: "The Role of Emotional Intelligence in Future Success", cat: "Emotional Intelligence",
    excerpt: "How EI quietly shapes careers, relationships, and well-being." },
  { title: "Helping Children Build Confidence Through Life Skills", cat: "Parenting",
    excerpt: "Practical ways parents and schools can grow confident, capable children." },
  { title: "Communication Skills for Leadership and Life", cat: "Communication",
    excerpt: "Clarity, listening, and influence — the most underrated leadership skills." },
  { title: "From Knowledge to Capability: The WayMaker Approach", cat: "Human Development",
    excerpt: "How NOVA™ and LQ™ turn information into lived capability." },
  { title: "Building Resilience in a Changing World", cat: "Well-being",
    excerpt: "Resilience isn't toughness — it's adaptive strength built on awareness." },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    ...pageMeta({
      title: "Resources for Growth — WayMaker Skills™",
      description:
        "Insights on human development, leadership, emotional intelligence, communication, parenting, student growth, and future skills.",
      path: "/resources",
    }),
    scripts: [jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Resources", path: "/resources" }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Resources & Insights"
        title="Resources for Growth."
        subtitle="Insights on human development, leadership, emotional intelligence, communication, parenting, student growth, and future skills."
        badges={["Articles", "Frameworks", "Reflections", "Coming soon: tools & guides"]}
      >
        <CTAButton to="/contact" variant="primary">Suggest a Topic <ArrowRight className="h-4 w-4" /></CTAButton>
      </PageHero>

      <Section eyebrow="Featured categories" title="Browse by topic." center>
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <span key={c} className="rounded-full bg-white border border-[color:var(--border)] px-4 py-2 text-sm font-medium text-[color:var(--teal-deep)] shadow-soft">
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-[color:var(--ivory)]" eyebrow="Featured" title="Recent writing." center>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.title} delay={i * 50}>
              <article className="card-lift gradient-border h-full rounded-2xl bg-white border border-[color:var(--border)] p-7 shadow-soft">
                <div className="text-xs tracking-widest uppercase text-[color:var(--gold)] font-semibold">{a.cat}</div>
                <h3 className="font-display text-xl text-[color:var(--teal-dark)] mt-2 leading-snug">{a.title}</h3>
                <p className="mt-3 text-[color:var(--muted-ink)] text-sm leading-relaxed">{a.excerpt}</p>
                <div className="mt-5 text-xs text-[color:var(--muted-ink)] inline-flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Coming soon
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-[color:var(--muted-ink)]">
          More resources, tools, and articles will be added as WayMaker Skills™ grows.
        </p>
      </Section>

      <Section center title="Impact Stories Coming Soon">
        <p className="max-w-2xl mx-auto text-[color:var(--muted-ink)] text-lg leading-relaxed">
          We're documenting outcomes from pilot programs and partnerships. Real stories from real partners will appear
          here as our work grows.
        </p>
      </Section>

      <FinalCTA />
      <div className="h-16" />
    </Layout>
  );
}
