import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV, LOGO, BRAND } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-soft" : "bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="WayMaker Skills logo" width={44} height={44} className="h-11 w-11 transition-transform group-hover:scale-105" />
          <div className="leading-tight">
            <div className="font-display text-xl md:text-2xl text-[color:var(--teal-dark)]">{BRAND}</div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-[color:var(--muted-ink)] hidden sm:block">Human Development</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV.map((item) => {
            if ("children" in item && item.children) {
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[color:var(--charcoal)] hover:text-[color:var(--teal-deep)] transition"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                  {isOpen && (
                    <div className="absolute top-full left-0 pt-2 min-w-64 animate-fade-in">
                      <div className="bg-white shadow-elegant rounded-xl border border-[color:var(--border)] p-2">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-3 py-2 rounded-lg text-sm text-[color:var(--charcoal)] hover:bg-[color:var(--teal-light)] hover:text-[color:var(--teal-deep)] transition"
                          >
                            {c.label}
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
                key={item.to}
                to={item.to as string}
                className="px-3 py-2 text-sm font-medium text-[color:var(--charcoal)] hover:text-[color:var(--teal-deep)] transition"
                activeProps={{ className: "px-3 py-2 text-sm font-semibold text-[color:var(--teal-deep)]" }}
                activeOptions={{ exact: (item.to as string) === "/" }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center rounded-full bg-teal-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            Book a Discovery Call
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
        <div className="lg:hidden bg-white border-t border-[color:var(--border)] shadow-elegant animate-fade-in">
          <div className="container-prose py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {NAV.map((item) => {
              if ("children" in item && item.children) {
                return (
                  <details key={item.label} className="group">
                    <summary className="flex items-center justify-between px-3 py-2.5 rounded-lg font-medium cursor-pointer hover:bg-[color:var(--teal-light)]">
                      {item.label}
                      <ChevronDown className="h-4 w-4 group-open:rotate-180 transition" />
                    </summary>
                    <div className="pl-3 mt-1 space-y-0.5">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-2 rounded-md text-sm text-[color:var(--muted-ink)] hover:text-[color:var(--teal-deep)]"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to as string}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg font-medium hover:bg-[color:var(--teal-light)]"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block mt-3 text-center rounded-full bg-teal-gradient px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
