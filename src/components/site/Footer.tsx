import { Link } from "@tanstack/react-router";
import { LOGO, BRAND, TAGLINE, CONTACT, FOOTER_LINKS } from "@/data/site";
import { Mail, MapPin, ArrowRight, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--teal-dark)] text-[color:var(--ivory)] relative overflow-hidden">
      <div className="absolute -top-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--gold)]/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[color:var(--teal-rich)]/25 blur-3xl" aria-hidden />

      <div className="container-prose py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] relative">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={LOGO} alt="" width={48} height={48} className="h-12 w-12 bg-white/10 rounded-xl p-1" />
            <div>
              <div className="font-display text-2xl text-white">{BRAND}</div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-white/60">Human Development</div>
            </div>
          </div>
          <p className="text-white/75 leading-relaxed max-w-md">
            {TAGLINE}. WayMaker Skills™ helps individuals and organizations build the
            intelligence, skills, and confidence to thrive in life, learning, and leadership.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/70">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {CONTACT.email}</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {CONTACT.location}</div>
          </div>
          <div className="mt-6 flex items-center gap-2">
            {[Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-[color:var(--gold)] hover:text-[color:var(--teal-dark)] text-white/80 flex items-center justify-center transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white text-sm tracking-[0.22em] uppercase font-sans font-semibold mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((l, i) => (
                <li key={`${l.to}-${i}`}>
                  <Link to={l.to as any} className="text-white/75 hover:text-[color:var(--gold-soft)] transition text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 relative">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span>© {new Date().getFullYear()} {BRAND}. All rights reserved.</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span>Company website of WayMaker Skills™.</span>
            <span className="hidden md:inline text-white/30">•</span>
            <span>
              Founder:{" "}
              <a href="https://sanjo.in" target="_blank" rel="noreferrer" className="text-[color:var(--gold-soft)] hover:text-white">sanjo.in</a>
            </span>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-1 text-[color:var(--gold-soft)] hover:text-white">
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
