import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/site/Layout";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, Section } from "@/components/site/Section";
import { ROUTES } from "@/data/routes";
import { BRAND, CONTACT } from "@/data/site";
import { breadcrumbLd, jsonLd, pageMeta } from "@/lib/seo";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Globe,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  School,
  Send,
  Sparkles,
  Star,
} from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  org: z.string().trim().max(200).optional().or(z.literal("")),
  type: z.string().min(1, "Please choose an enquiry type"),
  message: z.string().trim().min(10, "Please share a few details").max(2000),
});

const ENQUIRY_TYPES = [
  {
    icon: Briefcase,
    label: "Corporate Training",
    detail: "Leadership, communication, emotional intelligence, and team capability programs.",
  },
  {
    icon: School,
    label: "School Program",
    detail: "Life skills, student development, teacher development, and parent engagement.",
  },
  {
    icon: GraduationCap,
    label: "Student Development",
    detail: "Confidence, communication, future readiness, and life skills for learners.",
  },
  {
    icon: Sparkles,
    label: "Coaching & Mentoring",
    detail: "Growth support for clarity, confidence, reflection, and purposeful action.",
  },
  {
    icon: Star,
    label: "WAMI™",
    detail: "Children's life skills experiences for schools, parents, and learning communities.",
  },
  {
    icon: HeartHandshake,
    label: "Partnership",
    detail: "Collaborations, pilots, ecosystem building, and aligned growth initiatives.",
  },
  {
    icon: CheckCircle2,
    label: "Assessment & Development Tools",
    detail:
      "Discover strengths, identify growth opportunities, and receive evidence-informed insights for individuals, teams, and organizations.",
  },
  {
    icon: MessageCircle,
    label: "Not Sure Where to Start?",
    detail: "We'll help you find the right program, service, or conversation based on your goals.",
  },
] as const;

const FAQS = [
  { q: "How quickly do you respond?", a: "We typically respond within 2 business days." },
  {
    q: "Can we schedule a discovery call?",
    a: "Yes. Mention your preferred format in the message and we'll arrange the next step.",
  },
  {
    q: "Do you work outside India?",
    a: "Yes. We can discuss online, hybrid, and location-specific delivery depending on the engagement.",
  },
  {
    q: "Can programs be customized?",
    a: "Yes. Programs are shaped around audience needs, outcomes, format, and context.",
  },
  {
    q: "Do you work with schools and companies?",
    a: `Yes. ${BRAND} works with schools, educators, students, professionals, leaders, and organizations.`,
  },
  {
    q: "Is the enquiry form free?",
    a: "Yes. The form is only for starting a conversation and understanding fit.",
  },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact WayMaker Skills™",
      description: `Contact ${BRAND} for school programs, corporate training, coaching, WAMI™, partnerships, and human development conversations.`,
      path: ROUTES.contact,
    }),
    scripts: [
      jsonLd(
        breadcrumbLd([
          { name: "Home", path: ROUTES.home },
          { name: "Contact", path: ROUTES.contact },
        ]),
      ),
      jsonLd(faqJsonLd(FAQS)),
    ],
  }),
  component: Page,
});

function Page() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);

    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setSent(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={`Start a Conversation with ${BRAND}`}
        subtitle="Tell us about your audience, goals, and context. We'll help shape the right human development pathway."
        badges={[
          "Schools • Corporate • Individuals",
          "Customized programs",
          "Response within 2 business days",
        ]}
      >
        <a
          href="#form"
          className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-elegant"
        >
          Send an enquiry <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      <Section
        eyebrow="Best reasons to contact us"
        title="Choose the Path that Fits your Goals."
        center
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {ENQUIRY_TYPES.map((type, i) => (
            <Reveal key={type.label} delay={i * 40} className="h-full">
              <button
                type="button"
                onClick={() => {
                  setSelectedType(type.label);
                  document.getElementById("form")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`card-lift gradient-border flex h-full w-full flex-col rounded-2xl border p-6 text-left shadow-soft transition-all ${
                  selectedType === type.label
                    ? "border-[color:var(--teal-deep)] bg-[color:var(--teal-light)]"
                    : "border-[color:var(--border)] bg-white"
                }`}
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)]">
                  <type.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-xl text-[color:var(--teal-dark)]">
                  {type.label}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  {type.detail}
                </p>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="form" className="bg-[color:var(--ivory)]">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft md:p-10">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-[color:var(--teal-deep)]" />
                  <h2 className="mt-4 text-3xl">Thanks for reaching out.</h2>
                  <p className="mt-2 text-[color:var(--muted-ink)]">
                    Your enquiry has been captured in this local form state. Backend or email
                    delivery integration is still required before launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <h2 className="font-display text-3xl text-[color:var(--teal-dark)]">
                      Tell us what you need
                    </h2>
                    <p className="text-sm leading-relaxed text-[color:var(--muted-ink)]">
                      Share your audience, goals, format, timing, and any context that will help us
                      recommend the right next step.
                    </p>
                  </div>

                  <Field label="Name" name="name" error={errors.name} required />
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field
                      label="Phone"
                      name="phone"
                      error={errors.phone}
                      placeholder="Optional, if you'd like a call back"
                    />
                  </div>
                  <Field
                    label="Organization / Institution"
                    name="org"
                    error={errors.org}
                    placeholder="School, company, or community name"
                  />
                  <div>
                    <label
                      htmlFor="type"
                      className="mb-1.5 block text-sm font-semibold text-[color:var(--teal-dark)]"
                    >
                      Enquiry Type <span className="text-[color:var(--gold)]">*</span>
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      aria-invalid={errors.type ? "true" : "false"}
                      aria-describedby={errors.type ? "type-error" : "type-help"}
                      className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40"
                    >
                      <option value="" disabled>
                        Choose one…
                      </option>
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type.label} value={type.label}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <p id="type-help" className="mt-1 text-xs text-[color:var(--muted-ink)]">
                      Choose the closest fit if you are not fully sure.
                    </p>
                    {errors.type && (
                      <p id="type-error" className="mt-1 text-sm text-red-600">
                        {errors.type}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-[color:var(--teal-dark)]"
                    >
                      Message <span className="text-[color:var(--gold)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : "message-help"}
                      placeholder="Tell us who the audience is, what outcomes matter, what format you prefer, and any timelines or constraints."
                      className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40"
                    />
                    <p id="message-help" className="mt-1 text-xs text-[color:var(--muted-ink)]">
                      More context helps us suggest a more relevant program or conversation.
                    </p>
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <p className="text-xs text-[color:var(--muted-ink)]">
                    Your information will only be used to respond to your enquiry.
                  </p>
                  <button
                    type="submit"
                    className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-elegant"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <aside className="space-y-5">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl bg-teal-gradient p-8 text-white shadow-elegant">
                <div
                  className="absolute -right-12 -bottom-16 h-64 w-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl glow"
                  aria-hidden
                />
                <h3 className="relative font-display text-2xl text-white">Reach us directly</h3>
                <div className="relative mt-5 space-y-3 text-sm text-white/85">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4" /> {CONTACT.email}
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4" /> {CONTACT.phone}
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" /> {CONTACT.location}
                  </div> */}
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4" /> {BRAND} company website
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft">
                <h3 className="font-display text-xl text-[color:var(--teal-dark)]">
                  What happens after you enquire?
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--muted-ink)]">
                  <li>We review your audience, context, and goals.</li>
                  <li>We suggest a suitable program, framework, or discovery conversation.</li>
                  <li>We clarify format, scope, timing, and the right next steps.</li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common Questions" center>
        <div className="mx-auto max-w-3xl">
          <FAQList items={FAQS} />
        </div>
      </Section>
      <div className="h-16" />
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-[color:var(--teal-dark)]"
      >
        {label} {required && <span className="text-[color:var(--gold)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={errorId}
        className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] transition focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40"
      />
      {error && (
        <p id={errorId} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
