"use client";

import Link from "next/link";

function handleSectionNav(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  e.preventDefault();
  el.classList.remove("section-enter");
  void el.offsetWidth; // force reflow so the animation can replay on repeat clicks
  el.classList.add("section-enter");
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `/${hash}`);
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-espresso/80 border-b border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-5">
        <Link href="/" className="rounded-sm flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-amber">
          <span className="font-body font-bold text-xl tracking-tight text-cream">
            JB WebPex
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-amber translate-y-[1px]" />
        </Link>

        <nav className="hidden md:flex items-center gap-9 font-body text-sm text-cream/70">
          <Link
            href="/#portfolio"
            onClick={(e) => handleSectionNav(e, "#portfolio")}
            className="hover:text-cream transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/#pakketten"
            onClick={(e) => handleSectionNav(e, "#pakketten")}
            className="hover:text-cream transition-colors"
          >
            Pakketten
          </Link>
          <Link
            href="/#werkwijze"
            onClick={(e) => handleSectionNav(e, "#werkwijze")}
            className="hover:text-cream transition-colors"
          >
            Werkwijze
          </Link>
          <Link
            href="/#faq"
            onClick={(e) => handleSectionNav(e, "#faq")}
            className="hover:text-cream transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleSectionNav(e, "#contact")}
            className="hover:text-cream transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/#contact"
          onClick={(e) => handleSectionNav(e, "#contact")}
          className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-sm font-medium text-cream hover:border-amber hover:text-amber transition-colors focus-visible:outline-2 focus-visible:outline-amber"
        >
          Gratis intake
        </Link>
      </div>
    </header>
  );
}
