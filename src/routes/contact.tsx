import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/site/Layout";
import { PageHero, Section } from "@/components/site/Section";
import { pageMeta, jsonLd, breadcrumbLd } from "@/lib/seo";
import { FAQList, faqJsonLd } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT } from "@/data/site";
import {
  Mail, MapPin, Send, CheckCircle2, Briefcase, School, GraduationCap, Sparkles,
  HeartHandshake, Star, MessageCircle, ArrowRight, Globe,
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
  { icon: Briefcase, label: "Corporate Training" },
  { icon: School, label: "School Program" },
  { icon: GraduationCap, label: "Student Development" },
  { icon: Sparkles, label: "Coaching & Mentoring" },
  { icon: Star, label: "WAMI™" },
  { icon: HeartHandshake, label: "Partnership" },
  { icon: MessageCircle, label: "General Enquiry" },
];

const FAQS = [
  { q: "How quickly do you respond?", a: "We typically respond within 2 business days." },
  { q: "Can we schedule a discovery call?", a: "Yes — mention it in your message and we'll set one up." },
  { q: "Do you work outside India?", a: "Yes — we deliver online and hybrid programs globally, alongside on-site engagements." },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageMeta({
      title: "Contact — Start a Conversation | WayMaker Skills™",
      description:
        "Tell us your audience, goals, and context. We'll help shape the right development experience — corporate, school, coaching, WAMI™, or partnership.",
      path: "/contact",
    }),
    scripts: [
      jsonLd(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])),
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
      for (const i of result.error.issues) errs[i.path[0] as string] = i.message;
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
        title="Start a Conversation."
        subtitle="Tell us your audience, goals, and context. We'll help shape the right development experience."
        badges={["Customized programs", "Schools · Corporate · Individuals", "Responds within 2 days"]}
      >
        <a href="#form"
          className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient text-white px-6 py-3 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
          Send Enquiry <ArrowRight className="h-4 w-4" />
        </a>
      </PageHero>

      <Section eyebrow="What's this about?" title="Choose an enquiry type." center>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ENQUIRY_TYPES.map((t, i) => (
            <Reveal key={t.label} delay={i * 40}>
              <button
                type="button"
                onClick={() => {
                  setSelectedType(t.label);
                  document.getElementById("form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`card-lift gradient-border w-full text-left rounded-2xl border p-5 shadow-soft transition-all ${
                  selectedType === t.label
                    ? "border-[color:var(--teal-deep)] bg-[color:var(--teal-light)]"
                    : "border-[color:var(--border)] bg-white"
                }`}
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--teal-light)] text-[color:var(--teal-deep)]">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-lg text-[color:var(--teal-dark)]">{t.label}</div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="form" className="bg-[color:var(--ivory)]">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <Reveal>
            <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 md:p-10 shadow-soft">
              {sent ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 mx-auto text-[color:var(--teal-deep)]" />
                  <h2 className="mt-4 text-3xl">Thank you.</h2>
                  <p className="mt-2 text-[color:var(--muted-ink)]">Your message has been received. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <Field label="Name" name="name" error={errors.name} required />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" error={errors.email} required />
                    <Field label="Phone" name="phone" error={errors.phone} />
                  </div>
                  <Field label="Organization / Institution" name="org" error={errors.org} />
                  <div>
                    <label className="block text-sm font-semibold text-[color:var(--teal-dark)] mb-1.5">
                      Enquiry Type <span className="text-[color:var(--gold)]">*</span>
                    </label>
                    <select name="type" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40">
                      <option value="" disabled>Choose one…</option>
                      {ENQUIRY_TYPES.map((t) => <option key={t.label} value={t.label}>{t.label}</option>)}
                    </select>
                    {errors.type && <p className="mt-1 text-sm text-red-600">{errors.type}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[color:var(--teal-dark)] mb-1.5">
                      Message <span className="text-[color:var(--gold)]">*</span>
                    </label>
                    <textarea name="message" rows={5}
                      placeholder="Tell us about your audience, goals, and context."
                      className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40" />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  <p className="text-xs text-[color:var(--muted-ink)]">
                    Your information will only be used to respond to your enquiry.
                  </p>
                  <button type="submit"
                    className="btn-shine inline-flex items-center gap-2 rounded-full bg-teal-gradient text-white px-7 py-3.5 text-sm font-semibold shadow-soft hover:shadow-elegant transition-all">
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <aside className="space-y-5">
            <Reveal delay={120}>
              <div className="rounded-3xl bg-teal-gradient text-white p-8 shadow-elegant relative overflow-hidden">
                <div className="absolute -bottom-16 -right-12 w-64 h-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl glow" aria-hidden />
                <h3 className="text-white text-2xl font-display relative">Reach us</h3>
                <div className="mt-5 space-y-3 text-white/85 text-sm relative">
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> {CONTACT.email}</div>
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Kerala, India</div>
                  <div className="flex items-center gap-3"><Globe className="h-4 w-4" /> WayMaker Skills™ — Company website</div>
                </div>
                <p className="mt-6 text-sm text-white/70 relative">Phone number coming soon.</p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-3xl bg-white border border-[color:var(--border)] p-8 shadow-soft">
                <h3 className="font-display text-xl text-[color:var(--teal-dark)]">Why partner with us</h3>
                <ul className="mt-4 space-y-2 text-sm text-[color:var(--muted-ink)]">
                  <li>• Built for schools, professionals, and organizations</li>
                  <li>• Customized program design</li>
                  <li>• Evidence-informed methodology (NOVA™ · LQ™)</li>
                  <li>• Pilot programs and partnerships welcome</li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions." center>
        <div className="max-w-3xl mx-auto"><FAQList items={FAQS} /></div>
      </Section>

      <Section>
        <Reveal>
          <div className="relative rounded-3xl bg-teal-gradient text-white p-10 md:p-14 overflow-hidden shadow-elegant text-center">
            <div className="absolute -top-20 -right-12 w-72 h-72 rounded-full bg-[color:var(--gold)]/25 blur-3xl glow" aria-hidden />
            <h2 className="relative text-white text-3xl md:text-4xl">
              Let's design a meaningful development experience together.
            </h2>
          </div>
        </Reveal>
      </Section>
      <div className="h-16" />
    </Layout>
  );
}

function Field({ label, name, type = "text", error, required }: { label: string; name: string; type?: string; error?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[color:var(--teal-dark)] mb-1.5">
        {label} {required && <span className="text-[color:var(--gold)]">*</span>}
      </label>
      <input name={name} type={type}
        className="w-full rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 text-[color:var(--charcoal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-deep)]/40 transition" />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
