import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NAV, LOGO, BRAND } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-glass border-b border-white/40"
          : "bg-white/55 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative">
            <div className="absolute inset-0 bg-[color:var(--gold)]/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition" aria-hidden />
            <img src={LOGO} alt="WayMaker Skills logo" width={44} height={44} className="relative h-11 w-11 transition-transform group-hover:scale-105" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl text-[color:var(--teal-dark)]">{BRAND}</div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted-ink)] hidden sm:block">Human Development</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => {
            if ("children" in item) {
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
                      isOpen ? "text-[color:var(--teal-deep)]" : "text-[color:var(--charcoal)] hover:text-[color:var(--teal-deep)]"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-fade-in">
                      <div className="glass shadow-elegant rounded-2xl p-3 grid gap-1 w-[28rem]">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="group block rounded-xl px-3 py-2.5 hover:bg-[color:var(--teal-light)] transition"
                          >
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-semibold text-[color:var(--teal-dark)] group-hover:text-[color:var(--teal-deep)]">
                                {c.label}
                              </div>
                              <ArrowRight className="h-3.5 w-3.5 text-[color:var(--gold)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition" />
                            </div>
                            {c.desc && (
                              <div className="text-xs text-[color:var(--muted-ink)] mt-0.5 leading-snug">{c.desc}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={(item as any).to}
                to={(item as any).to}
                className="px-3 py-2 text-sm font-medium text-[color:var(--charcoal)] hover:text-[color:var(--teal-deep)] transition relative"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-[color:var(--teal-deep)] relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-[color:var(--gold)] after:rounded-full" }}
                activeOptions={{ exact: (item as any).to === "/" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="btn-shine ml-3 inline-flex items-center gap-1.5 rounded-full bg-teal-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            Book a Discovery Call <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-[color:var(--teal-dark)]"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-white animate-fade-in z-40">
          <div className="container-prose py-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto">
            {NAV.map((item) => {
              if ("children" in item) {
                return (
                  <details key={item.label} className="group rounded-xl border border-[color:var(--border)] overflow-hidden mb-2">
                    <summary className="flex items-center justify-between px-4 py-3 font-semibold cursor-pointer hover:bg-[color:var(--teal-light)]">
                      <span className="text-[color:var(--teal-dark)]">{item.label}</span>
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                    </summary>
                    <div className="bg-[color:var(--ivory)] p-2 space-y-0.5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2.5 rounded-md text-sm text-[color:var(--charcoal)] hover:text-[color:var(--teal-deep)] hover:bg-white"
                        >
                          <div className="font-medium">{c.label}</div>
                          {c.desc && <div className="text-xs text-[color:var(--muted-ink)] mt-0.5">{c.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <Link
                  key={(item as any).to}
                  to={(item as any).to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl font-semibold text-[color:var(--teal-dark)] hover:bg-[color:var(--teal-light)]"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-4 text-center rounded-full bg-teal-gradient px-5 py-3.5 text-sm font-semibold text-white shadow-soft"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
