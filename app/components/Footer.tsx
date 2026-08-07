import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20 flex flex-col items-center text-center">
        <span className="font-body font-bold tracking-tight text-lg text-cream whitespace-nowrap">
          JB WebPex
        </span>
        <span className="mt-3 font-mono text-xs text-cream/40">
          Werkzaam door heel Nederland
        </span>

        <div className="mt-4 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-cream/60">
          <a
            href="mailto:jbwebpex.info@gmail.com"
            className="hover:text-cream transition-colors"
          >
            jbwebpex.info@gmail.com
          </a>
          <span className="hidden sm:inline text-cream/20" aria-hidden="true">
            &middot;
          </span>
          <a href="tel:+31630507332" className="hover:text-cream transition-colors">
            06 30 50 73 32
          </a>
        </div>

        <p className="mt-8 text-xs italic text-neutral-400 max-w-sm">
          Van eerste indruk tot volle tafels. Wij bouwen horecasites die werken.
        </p>

        <div className="mt-8 pt-6 border-t border-cream/10 w-full flex justify-center">
          <p className="font-mono text-xs text-cream/40 flex flex-wrap items-center justify-center gap-2">
            <Link href="/privacy" className="hover:text-cream/70 transition-colors">
              Privacybeleid
            </Link>
            <span aria-hidden="true">&middot;</span>
            <a
              href="/algemene-voorwaarden.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cream/70 transition-colors"
            >
              Algemene voorwaarden
            </a>
            <span aria-hidden="true">&middot;</span>
            &copy; 2026 JB WebPex. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
}
