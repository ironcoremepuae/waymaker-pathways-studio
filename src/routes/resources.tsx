import { createFileRoute, Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { FinalCTA, CTAButton } from "@/components/site/CTA";
import { Reveal } from "@/components/site/Reveal";
import { BRAND } from "@/data/site";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { RESOURCE_ARTICLES, RESOURCE_CATEGORIES } from "@/data/resources";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

export const Route = createFileRoute("/resources")({
  head: () => ({
    ...pageMeta({
      title: "Resources | Human Development Insights",
      description: `Explore ${BRAND} articles on human development, emotional intelligence, communication, parenting, resilience, and future-ready growth.`,
      path: "/resources",
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero
        eyebrow="Resources & Insights"
        title="A Knowledge Hub for Human Development."
        subtitle={`Read practical, original insights from ${BRAND} on life skills, leadership, emotional intelligence, communication, parenting, resilience, and future-ready growth.`}
        badges={["Articles", "Frameworks", "Audience insights", "Practical guidance"]}
      >
        <CTAButton to="/contact" variant="primary">
          Suggest a Topic <ArrowRight className="h-4 w-4" />
        </CTAButton>
      </PageHero>

      <Section eyebrow="Why this hub exists" title="The Thinking Edge." center>
        <div className="mx-auto max-w-4xl space-y-4 text-center text-lg leading-relaxed text-[color:var(--charcoal)]">
          <p>{`The Resources section exists to make the ideas behind ${BRAND} more visible and more useful. It is where partners, parents, educators, professionals, and leaders can explore the thinking that shapes our programs.`}</p>
          <p>
            Each resource focuses on practical human development themes such as confidence,
            communication, emotional intelligence, resilience, leadership, and life skills. The goal
            is to give visitors something worth reading now while also helping them discover the
            programs, frameworks, and conversations that fit their context.
          </p>
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Categories"
        title="Browse by Topic."
        center
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {RESOURCE_CATEGORIES.map((category, i) => (
            <Reveal key={category.name} delay={i * 50}>
              <div className="card-lift h-full rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
                <div className="font-display text-xl text-[color:var(--teal-dark)]">
                  {category.name}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  {category.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Featured articles" title="Read the Latest Insights." center>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {RESOURCE_ARTICLES.map((article, i) => (
            <Reveal key={article.slug} delay={i * 50}>
              <article className="card-lift gradient-border flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">
                    {article.category}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs text-[color:var(--muted-ink)]">
                    <Clock3 className="h-3.5 w-3.5" /> {article.readTime}
                  </div>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-snug text-[color:var(--teal-dark)]">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  {article.description}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--charcoal)]">
                  {article.intro}
                </p>
                <div className="mt-6 pt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--teal-deep)]">
                  Best for: {article.audience}
                </div>
                <Link
                  to={`/resources/${article.slug}` as LinkTo}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal-deep)]"
                >
                  Read article <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="How to use these resources"
        title="Use them as a Starting Point for the Right Conversation."
        center
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            "Share them with school leaders, parents, or team stakeholders who want to understand the thinking behind a program.",
            "Use them to identify which capability area matters most right now, from communication to resilience to leadership.",
            "Follow the related links in each article to move from insight into a real program or discovery conversation.",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 60}>
              <div className="rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft">
                <BookOpen className="h-5 w-5 text-[color:var(--gold)]" />
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-ink)]">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FinalCTA
        title="Looking for a Program behind the ideas?"
        text={`Tell us your audience and goals, and we will help you find the right ${BRAND} pathway.`}
      />
      <div className="h-16" />
    </Layout>
  );
}
