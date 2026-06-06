import { Link } from "@tanstack/react-router";
import { LOGO, BRAND, TAGLINE, CONTACT, FOOTER_LINKS } from "@/data/site";
import { Mail, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-[color:var(--teal-dark)] text-[color:var(--ivory)]">
      <div className="container-prose py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={LOGO} alt="" width={48} height={48} className="h-12 w-12 bg-white/10 rounded-xl p-1" />
            <div>
              <div className="font-display text-2xl text-white">{BRAND}</div>
              <div className="text-xs tracking-[0.18em] uppercase text-white/60">Human Development</div>
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
        </div>

        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white text-sm tracking-[0.18em] uppercase font-sans font-semibold mb-4">{title}</h4>
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

      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
          <Link to="/contact" className="inline-flex items-center gap-1 text-[color:var(--gold-soft)] hover:text-white">
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
