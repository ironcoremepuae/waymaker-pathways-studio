import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { LOGO, BRAND, TAGLINE, CONTACT, FOOTER_LINKS, SOCIAL_LINKS } from "@/data/site";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";

type LinkTo = ComponentProps<typeof Link>["to"];

const SOCIAL_ICONS = [Linkedin, Instagram, Youtube];

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[color:var(--teal-dark)] text-[color:var(--ivory)]">
      <div
        className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[color:var(--teal-rich)]/25 blur-3xl"
        aria-hidden
      />

      <div className="container-prose relative grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img
              src={LOGO}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl bg-white/10 p-1"
            />
            <div>
              <div className="font-display text-2xl text-white">{BRAND}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">
                Human Development
              </div>
            </div>
          </div>
          <p className="max-w-md leading-relaxed text-white/75">
            {TAGLINE}. {BRAND} helps individuals and organizations build the intelligence, skills,
            and confidence to thrive in life, learning, and leadership.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {CONTACT.location}
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            {SOCIAL_LINKS.map((social, i) => {
              const Icon = SOCIAL_ICONS[i];

              if (!social.href) {
                return (
                  <span
                    key={social.label}
                    aria-label={`${social.label} link coming soon`}
                    title={`${social.label} link coming soon`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/40"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                );
              }

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-[color:var(--gold)] hover:text-[color:var(--teal-dark)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {title}
            </h4>
            <ul className="space-y-2.5">
              {links.map((l, i) => (
                <li key={`${l.to}-${i}`}>
                  <Link
                    to={l.to as LinkTo}
                    className="text-sm text-white/75 transition hover:text-[color:var(--gold-soft)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 md:flex-row">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
            <span>
              {"\u00A9"} {new Date().getFullYear()} {BRAND}. All rights reserved.
            </span>
            <span className="hidden text-white/30 md:inline">{"\u2022"}</span>
            <span>Company website of {BRAND}.</span>
            <span className="hidden text-white/30 md:inline">{"\u2022"}</span>
            <span>
              Founder:{" "}
              <a
                href="https://sanjo.in"
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--gold-soft)] hover:text-white"
              >
                sanjo.in
              </a>
            </span>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-[color:var(--gold-soft)] hover:text-white"
          >
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
