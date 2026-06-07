import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTA";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { RESOURCE_ARTICLES } from "@/data/resources";
import { BRAND } from "@/data/site";
import { breadcrumbLd, jsonLd, pageMeta, absoluteUrl } from "@/lib/seo";
import { ArrowRight, Clock3 } from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

function getArticle(slug: string) {
  return RESOURCE_ARTICLES.find((article) => article.slug === slug);
}

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);

    if (!article) {
      throw notFound();
    }

    return article;
  },
  head: ({ loaderData }) => {
    const article = loaderData!;

    return {
      ...pageMeta({
        title: `${article.title} | ${BRAND}`,
        description: article.description,
        path: `/resources/${article.slug}`,
      }),
      scripts: [
        jsonLd(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: article.title, path: `/resources/${article.slug}` },
          ]),
        ),
        jsonLd(faqJsonLd(article.faqs)),
        jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          author: {
            "@type": "Organization",
            name: BRAND,
          },
          publisher: {
            "@type": "Organization",
            name: BRAND,
          },
          mainEntityOfPage: absoluteUrl(`/resources/${article.slug}`),
        }),
      ],
    };
  },
  component: ResourceArticlePage,
});

function ResourceArticlePage() {
  const article = Route.useLoaderData();

  return (
    <Layout>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        subtitle={article.description}
        badges={[article.readTime, article.audience, `${BRAND} Resource`]}
      >
        <CTAButton to="/contact" variant="primary">
          Discuss This Topic <ArrowRight className="h-4 w-4" />
        </CTAButton>
      </PageHero>

      <Section eyebrow="Overview" title="What this article explores">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr]">
          <aside className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--ivory)] p-6">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal-deep)]">
              <Clock3 className="h-4 w-4" /> {article.readTime}
            </div>
            <div className="mt-6 text-xs uppercase tracking-[0.22em] text-[color:var(--gold)]">
              Table of contents
            </div>
            <ul className="mt-4 space-y-3">
              {article.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-[color:var(--teal-dark)] hover:text-[color:var(--gold)]"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-6 text-lg leading-relaxed text-[color:var(--charcoal)]">
            <p>{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-3xl text-[color:var(--teal-dark)]">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-[color:var(--charcoal)]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section
        className="bg-[color:var(--ivory)]"
        eyebrow="Related paths"
        title="Keep exploring"
        center
      >
        <div className="grid gap-5 md:grid-cols-3">
          {article.relatedLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to as LinkTo}
              className="card-lift rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft"
            >
              <div className="font-display text-xl text-[color:var(--teal-dark)]">{item.label}</div>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--teal-deep)]">
                Visit page <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions about this topic" center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={article.faqs} />
        </div>
      </Section>
      <div className="h-16" />
    </Layout>
  );
}
