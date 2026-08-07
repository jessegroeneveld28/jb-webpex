"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DEALS = {
  basis: { was: 650, now: 520 },
  pro: { was: 900, now: 720 },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 10.5L8 14.5L16 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 6.2V10l2.6 1.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M11.2 3.5H16.5V8.8L9.3 16L4 10.7L11.2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="13.6" cy="6.4" r="1" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3 10H17M10 3C12 5.2 12 14.8 10 17M10 3C8 5.2 8 14.8 10 17"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.3 11.7L11.7 8.3M9 6.5L9.9 5.6C11.2 4.3 13.2 4.3 14.4 5.6C15.7 6.9 15.7 8.9 14.4 10.1L13.5 11M11 13.5L10.1 14.4C8.9 15.7 6.9 15.7 5.6 14.4C4.3 13.2 4.3 11.2 5.6 9.9L6.5 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SummerDealCard() {
  const basisSavings = DEALS.basis.was - DEALS.basis.now;
  const proSavings = DEALS.pro.was - DEALS.pro.now;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
      className="group relative w-full sm:w-[22rem] lg:w-[23rem] shrink-0"
    >
      <div
        className="absolute -inset-1 rounded-2xl bg-amber/15 blur-2xl animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute -inset-1 rounded-2xl bg-amber/30 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-amber/30 bg-gradient-to-br from-espresso-2 via-espresso to-black/70 backdrop-blur p-7 sm:p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_45px_-18px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:scale-[1.02] group-hover:border-amber/45">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber/25 via-amber/10 to-transparent border border-amber/40 text-amber text-[11px] uppercase tracking-wider px-3.5 py-1.5 shadow-[0_0_14px_rgba(227,162,75,0.25)]">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-glow shrink-0" />
          Tijdelijke zomerdeal &middot; 20% korting
        </span>

        <div className="mt-7 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <span className="text-sm text-cream/70 pt-1">Horeca Basis</span>
            <div className="flex flex-col items-end">
              <span className="flex items-baseline gap-2">
                <span className="text-[13px] text-cream/30 line-through">
                  &euro;{DEALS.basis.was}
                </span>
                <span className="font-display text-[1.725rem] leading-none text-cream">
                  &euro;{DEALS.basis.now}
                </span>
              </span>
              <span className="mt-1.5 text-[11px] text-amber/80">
                Je bespaart &euro;{basisSavings}
              </span>
            </div>
          </div>
          <div className="flex items-start justify-between gap-4 pt-5 border-t border-cream/10">
            <span className="text-sm text-cream/70 pt-1">Horeca Pro</span>
            <div className="flex flex-col items-end">
              <span className="flex items-baseline gap-2">
                <span className="text-[13px] text-cream/30 line-through">
                  &euro;{DEALS.pro.was}
                </span>
                <span className="font-display text-[1.725rem] leading-none text-amber">
                  &euro;{DEALS.pro.now}
                </span>
              </span>
              <span className="mt-1.5 text-[11px] text-amber/80">
                Je bespaart &euro;{proSavings}
              </span>
            </div>
          </div>
        </div>

        <ul className="mt-6 space-y-2">
          {[
            "Binnen 14 dagen online",
            "Volledig mobiel geoptimaliseerd",
            "Geen verborgen kosten",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[12.5px] text-cream/55"
            >
              <CheckIcon className="w-3 h-3 text-amber/70 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center gap-1.5 text-[11px] text-cream/40">
          <span className="w-1 h-1 rounded-full bg-amber animate-pulse-glow shrink-0" />
          Nog enkele plekken beschikbaar deze maand
        </p>

        <a
          href="#contact"
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink hover:bg-amber-dim hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(227,162,75,0.45)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-cream"
        >
          Claim zomerdeal
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden texture-linen">
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-amber/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-[24rem] w-[24rem] rounded-full bg-wine/20 blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-14 pb-24 lg:pt-20 lg:pb-36">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-6 h-px bg-amber/60" />
            Websites voor horeca &middot; heel Nederland
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-display font-bold leading-[1.04] text-[2.75rem] sm:text-6xl lg:text-[4.75rem] tracking-tight text-cream"
          >
            Een online visitekaartje dat smaakt naar meer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-zinc-300 max-w-xl leading-relaxed"
          >
            Wij bouwen moderne websites voor horecazaken die indruk maken.
            Van een sfeervolle uitstraling tot een moeiteloze reservering op
            mobiel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pakketten"
              className="inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm sm:text-base font-semibold text-ink hover:bg-amber-dim transition-colors focus-visible:outline-2 focus-visible:outline-cream"
            >
              Bekijk de pakketten
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3.5 text-sm sm:text-base font-medium text-cream hover:border-cream/50 transition-colors focus-visible:outline-2 focus-visible:outline-amber"
            >
              Plan een gratis intake
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            className="mt-14 grid grid-cols-2 sm:inline-grid sm:grid-flow-col divide-x divide-y sm:divide-y-0 divide-cream/10 rounded-xl border border-cream/10 bg-espresso-2/50 backdrop-blur-sm overflow-hidden w-fit"
          >
            <div className="flex items-center justify-center gap-2.5 px-4 py-2">
              <ClockIcon className="w-3.5 h-3.5 text-amber shrink-0" />
              <dt className="sr-only">Levertijd</dt>
              <dd className="text-xs sm:text-sm text-zinc-300 whitespace-nowrap">
                Live in 10 dagen
              </dd>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2">
              <TagIcon className="w-3.5 h-3.5 text-amber shrink-0" />
              <dt className="sr-only">Startprijs</dt>
              <dd className="text-xs sm:text-sm text-zinc-300 whitespace-nowrap">
                Vanaf &euro;{DEALS.basis.now}
              </dd>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2">
              <GlobeIcon className="w-3.5 h-3.5 text-amber shrink-0" />
              <dt className="sr-only">Werkwijze</dt>
              <dd className="text-xs sm:text-sm text-zinc-300 whitespace-nowrap">
                100% online proces
              </dd>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-4 py-2">
              <LinkIcon className="w-3.5 h-3.5 text-amber shrink-0" />
              <dt className="sr-only">Preview</dt>
              <dd className="text-xs sm:text-sm text-zinc-300 whitespace-nowrap">
                Live preview
              </dd>
            </div>
          </motion.dl>
        </div>

        <SummerDealCard />
        </div>
      </div>
    </section>
  );
}

function BrowserMock({
  url,
  name,
  type,
  pakket,
  image,
}: {
  url: string;
  name: string;
  type: string;
  pakket: string;
  image: string;
}) {
  return (
    <div className="rounded-2xl overflow-hidden border border-cream/10 bg-espresso-2">
      <div className="flex items-center gap-4 px-3 py-2.5 bg-espresso-3 border-b border-cream/5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cream/25" />
          <span className="w-2 h-2 rounded-full bg-amber/50" />
          <span className="w-2 h-2 rounded-full bg-wine/60" />
        </div>
        <div className="flex-1 rounded-full bg-espresso px-3 py-1 text-[11px] text-cream/40 truncate">
          {url}
        </div>
      </div>
      <Image
        src={image}
        alt={`Website voorbeeld voor ${name}`}
        width={1366}
        height={768}
        className="block w-full h-auto object-contain"
        sizes="(min-width: 768px) 50vw, 100vw"
      />
      <div className="flex items-center justify-between px-4 py-3 border-t border-cream/5">
        <div>
          <p className="font-display text-sm text-cream">{name}</p>
          <p className="text-[11px] text-cream/40">{type}</p>
        </div>
        <span className="text-[10px] uppercase tracking-wide text-taupe border border-taupe/30 rounded-full px-2 py-1">
          {pakket}
        </span>
      </div>
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      url: "eatandchill.nl",
      name: "Eat & Chill",
      type: "Restaurant & lounge",
      pakket: "Horeca Pro",
      image: "/italiaans.png",
    },
    {
      url: "martinis.nl",
      name: "Martini's",
      type: "Italiaans restaurant",
      pakket: "Horeca Pro",
      image: "/eatenchill.png",
    },
  ];

  return (
    <section id="portfolio" className="bg-espresso border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
            Stijl &amp; structuur
          </p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Zo kan jouw website eruitzien.
          </h2>
          <p className="mt-5 text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Elke JB WebPex-website wordt op maat gebouwd rond de sfeer van
            jouw zaak. Dit zijn voorbeelden van de stijl, structuur en
            onderdelen die we opleveren.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.url} delay={i * 0.1}>
              <BrowserMock {...p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteScan() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="website-scan" className="bg-espresso border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="relative">
          <div
            className="absolute -inset-1 sm:-inset-1.5 rounded-3xl bg-amber/30 blur-2xl animate-pulse-glow"
            aria-hidden="true"
          />

          <div className="relative rounded-3xl border border-amber/30 bg-gradient-to-br from-espresso-2 via-espresso to-black/60 p-8 sm:p-10 lg:p-14 overflow-hidden shadow-[0_0_50px_-12px_rgba(227,162,75,0.4)]">
            <div
              className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-amber/10 blur-[100px]"
              aria-hidden="true"
            />

            <div className="relative grid lg:grid-cols-5 gap-12 lg:gap-14">
              <Reveal className="lg:col-span-2">
                <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
                  Gratis &amp; vrijblijvend
                </p>
                <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-cream leading-tight">
                  Ontvang een gratis website scan
                </h2>
                <p className="mt-5 text-zinc-300 text-lg leading-relaxed">
                  Laat je huidige website-link achter. Ik bekijk je site en
                  stuur je binnen 24 uur 3 concrete tips om meer klanten te
                  halen.
                </p>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-3">
                {submitted ? (
                  <div className="rounded-2xl border border-amber/30 bg-espresso/60 p-10 text-center">
                    <p className="font-display text-2xl text-cream mb-2">
                      Bedankt!
                    </p>
                    <p className="text-zinc-300 leading-relaxed">
                      Je aanvraag is binnen. Je hoort binnen 24 uur van me met
                      3 concrete tips voor jouw website.
                    </p>
                  </div>
                ) : (
                  <form
                    name="website-scan"
                    method="POST"
                    data-netlify="true"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const params = new URLSearchParams();
                      new FormData(form).forEach((value, key) => {
                        params.append(key, value.toString());
                      });
                      try {
                        await fetch("/__forms.html", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                          },
                          body: params.toString(),
                        });
                        setSubmitted(true);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    className="rounded-2xl border border-cream/10 bg-espresso/60 backdrop-blur p-8 space-y-6"
                  >
                    <input type="hidden" name="form-name" value="website-scan" />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="scan-naam"
                          className="block text-sm text-cream/70 mb-2"
                        >
                          Naam
                        </label>
                        <input
                          id="scan-naam"
                          name="naam"
                          type="text"
                          required
                          className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                          placeholder="Je naam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="scan-email"
                          className="block text-sm text-cream/70 mb-2"
                        >
                          E-mailadres
                        </label>
                        <input
                          id="scan-email"
                          name="email"
                          type="email"
                          required
                          className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                          placeholder="jij@jouwzaak.nl"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="scan-website"
                        className="block text-sm text-cream/70 mb-2"
                      >
                        Huidige website (URL)
                      </label>
                      <input
                        id="scan-website"
                        name="website"
                        type="url"
                        required
                        className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                        placeholder="https://jouwzaak.nl"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="scan-verbeteren"
                        className="block text-sm text-cream/70 mb-2"
                      >
                        Wat wil je verbeteren?{" "}
                        <span className="text-cream/40">(optioneel)</span>
                      </label>
                      <textarea
                        id="scan-verbeteren"
                        name="verbeteren"
                        rows={3}
                        className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors resize-none"
                        placeholder="Bijv. meer reserveringen, modernere uitstraling, snellere laadtijd..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-amber px-8 py-3.5 text-sm font-semibold text-ink hover:bg-amber-dim transition-colors focus-visible:outline-2 focus-visible:outline-cream"
                    >
                      Vraag gratis scan aan
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Werkwijze() {
  const steps = [
    {
      n: "01",
      title: "Online intake",
      body: "In een korte videocall bespreken we jouw zaak: sfeer, menukaart, foto's en wat je online wilt bereiken.",
    },
    {
      n: "02",
      title: "Design & feedback",
      body: "Wij bouwen jouw website en delen een live preview-link via Netlify. Je kijkt live mee en geeft feedback.",
    },
    {
      n: "03",
      title: "Oplevering",
      body: "Na akkoord koppelen we jouw domeinnaam en zetten we de site live. Klaar om gasten te ontvangen.",
    },
  ];

  return (
    <section id="werkwijze" className="bg-espresso-2 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Reveal className="max-w-2xl mb-16">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
            Hoe we werken
          </p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Van intake tot live, in drie stappen.
          </h2>
          <p className="mt-5 text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Geen kantoorbezoek, geen wachttijden. Het hele proces verloopt
            online &mdash; zodat jij je kunt richten op jouw zaak.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
          <div className="hidden md:block absolute top-6 left-6 right-[calc(33.333%-40px)] h-px bg-cream/10" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="relative">
              <div className="flex items-center gap-4 md:block">
                <span className="text-sm text-amber bg-espresso-2 md:bg-espresso-3 border border-amber/30 rounded-full w-12 h-12 flex items-center justify-center shrink-0 relative z-10">
                  {s.n}
                </span>
                <h3 className="font-display font-bold tracking-tight text-xl text-cream md:mt-6">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 md:mt-3 text-zinc-300 leading-relaxed">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const basisFeatures = [
    "Mobielvriendelijke website (one-pager of basisstructuur)",
    "Digitale, overzichtelijke menukaart",
    "Openingstijden, locatie & Google Maps",
    "Werkend contactformulier",
    "Snel live via Netlify",
  ];

  const proFeatures = [
    "Alles uit Horeca Basis",
    "Uitgebreide site: Home, Menu, FAQ, Over ons, Contact",
    "Interactieve menukaart + fotogalerij",
    "Koppeling met Formitable, Resengo of TheFork",
    "Basis SEO-optimalisatie voor Google",
    "Hulp bij domeinnaam & volledige oplevering",
  ];

  return (
    <section id="pakketten" className="bg-espresso border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Reveal className="max-w-2xl mb-6">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
            Pakketten &amp; tarieven
          </p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Kies de aanpak die past bij jouw zaak.
          </h2>
          <p className="mt-5 text-zinc-300 text-lg sm:text-xl leading-relaxed">
            Meer dan 80% van je gasten bekijkt je website vandaag op de
            mobiel, vaak vlak voordat ze een tafel boeken. Beide pakketten
            worden volledig mobielvriendelijk gebouwd en binnen twee weken
            live gezet.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          {/* Horeca Basis */}
          <Reveal>
            <div className="rounded-2xl border border-cream/10 bg-espresso-2 p-8 lg:p-10 h-full flex flex-col">
              <p className="text-xs uppercase tracking-wide text-taupe mb-4">
                Voor een snelle, professionele start
              </p>
              <h3 className="font-display font-bold tracking-tight text-2xl text-cream mb-2">
                Horeca Basis
              </h3>
              <div className="flex items-center flex-wrap gap-x-3 gap-y-2 mb-8">
                <span className="text-zinc-500 line-through text-lg">
                  &euro;{DEALS.basis.was}
                </span>
                <span className="font-display text-4xl text-cream">
                  &euro;{DEALS.basis.now}
                </span>
                <span className="text-cream/50 text-sm">eenmalig</span>
                <span className="inline-flex items-center rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[11px] px-2.5 py-1">
                  -20% zomerdeal
                </span>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {basisFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-zinc-300">
                    <CheckIcon className="w-4 h-4 mt-1 text-amber shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex justify-center items-center rounded-full border border-cream/25 px-6 py-3.5 text-sm font-medium text-cream hover:border-cream/50 transition-colors focus-visible:outline-2 focus-visible:outline-amber"
              >
                Kies Horeca Basis
              </a>
            </div>
          </Reveal>

          {/* Horeca Pro — signature "reserveringsbon" card */}
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl border-2 border-amber bg-espresso-2 shadow-[0_0_60px_-15px_rgba(227,162,75,0.35)] lg:-translate-y-3 h-full flex flex-col">
              <span className="absolute -top-3 right-6 sm:right-10 rotate-[-6deg] text-[11px] uppercase tracking-wider text-wine bg-cream border-2 border-wine rounded-sm px-3 py-1">
                Meest gekozen
              </span>

              {/* stub */}
              <div className="relative p-8 lg:p-10 pb-7">
                <p className="text-xs uppercase tracking-wide text-amber/80 mb-4">
                  Voor zaken die willen groeien
                </p>
                <h3 className="font-display font-bold tracking-tight text-2xl text-cream mb-2">
                  Horeca Pro
                </h3>
                <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
                  <span className="text-zinc-500 line-through text-lg">
                    &euro;{DEALS.pro.was}
                  </span>
                  <span className="font-display text-4xl text-cream">
                    &euro;{DEALS.pro.now}
                  </span>
                  <span className="text-cream/50 text-sm">eenmalig</span>
                  <span className="inline-flex items-center rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[11px] px-2.5 py-1">
                    -20% zomerdeal
                  </span>
                </div>
              </div>

              {/* perforation */}
              <div className="relative border-t-2 border-dashed border-cream/15">
                <span className="absolute -left-[11px] -top-[11px] w-5 h-5 rounded-full bg-espresso" />
                <span className="absolute -right-[11px] -top-[11px] w-5 h-5 rounded-full bg-espresso" />
              </div>

              {/* items */}
              <div className="p-8 lg:p-10 pt-7 flex-1 flex flex-col">
                <ul className="space-y-3 mb-10 flex-1">
                  {proFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <CheckIcon className="w-4 h-4 mt-1 text-amber shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex justify-center items-center rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink hover:bg-amber-dim transition-colors focus-visible:outline-2 focus-visible:outline-cream"
                >
                  Kies Horeca Pro
                </a>
                <p className="mt-4 text-center text-xs text-cream/45">
                  Gasten reserveren voortaan rechtstreeks via jouw eigen site.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Kan ik de website na oplevering zelf beheren en aanpassen?",
    a: "Ja, je kunt eenvoudig zelf teksten, foto's en de menukaart bijwerken. Na oplevering leggen we je kort uit hoe dit werkt.",
  },
  {
    q: "Wat moet ik zelf aanleveren voor de bouw?",
    a: "Je levert simpelweg je logo, de menukaart en eventuele sfeerfoto's aan. Wij zorgen voor het ontwerp en de techniek.",
  },
  {
    q: "Zit ik vast aan maandelijkse vaste kosten of een abonnement?",
    a: "Nee, we werken met transparante, eenmalige tarieven zonder verborgen maandelijkse kosten.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-espresso overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-2 focus-visible:outline-amber"
      >
        <span className="font-display font-bold tracking-tight text-lg text-cream">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="shrink-0 text-amber"
        >
          <ChevronIcon className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-zinc-300 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-espresso-2 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
            Veelgestelde vragen
          </p>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Nog vragen? Dit wilden anderen ook weten.
          </h2>
        </Reveal>

        <div className="max-w-3xl space-y-4">
          {FAQS.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.08}>
              <FAQItem
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-espresso-2 border-t border-cream/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-14">
          <Reveal className="lg:col-span-2">
            <p className="text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-4">
              Contact
            </p>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-cream leading-tight">
              Klaar voor meer gasten aan tafel?
            </h2>
            <p className="mt-5 text-zinc-300 text-lg sm:text-xl leading-relaxed">
              Plan een gratis, vrijblijvende videocall in. Binnen tien
              minuten weten we welk pakket bij jouw zaak past &mdash; en
              binnen twee weken staat jouw website live.
            </p>
            <dl className="mt-10 space-y-4 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <dt className="flex items-center justify-center w-6 h-6 rounded-full bg-amber/10 text-amber shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </dt>
                <dd>Reactie binnen 1 werkdag</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="flex items-center justify-center w-6 h-6 rounded-full bg-amber/10 text-amber shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </dt>
                <dd>Vrijblijvend en kosteloos</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="flex items-center justify-center w-6 h-6 rounded-full bg-amber/10 text-amber shrink-0">
                  <CheckIcon className="w-3 h-3" />
                </dt>
                <dd>Werkzaam door heel Nederland</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-amber/30 bg-espresso p-10 text-center">
                <p className="font-display text-2xl text-cream mb-2">
                  Bedankt!
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  We hebben je aanvraag ontvangen en nemen binnen 1 werkdag
                  contact met je op.
                </p>
              </div>
            ) : (
              <form
                name="intake"
                method="POST"
                data-netlify="true"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const params = new URLSearchParams();
                  new FormData(form).forEach((value, key) => {
                    params.append(key, value.toString());
                  });
                  try {
                    await fetch("/__forms.html", {
                      method: "POST",
                      headers: { "Content-Type": "application/x-www-form-urlencoded" },
                      body: params.toString(),
                    });
                    setSubmitted(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                className="rounded-2xl border border-cream/10 bg-espresso p-8 lg:p-10 space-y-6"
              >
                <input type="hidden" name="form-name" value="intake" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="naam" className="block text-sm text-cream/70 mb-2">
                      Naam
                    </label>
                    <input
                      id="naam"
                      name="naam"
                      type="text"
                      required
                      className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="zaak" className="block text-sm text-cream/70 mb-2">
                      Naam van de zaak
                    </label>
                    <input
                      id="zaak"
                      name="zaak"
                      type="text"
                      required
                      className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                      placeholder="Bijv. Bistro Noir"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-cream/70 mb-2">
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors"
                    placeholder="jij@jouwzaak.nl"
                  />
                </div>

                <div>
                  <label htmlFor="pakket" className="block text-sm text-cream/70 mb-2">
                    Interesse in
                  </label>
                  <select
                    id="pakket"
                    name="pakket"
                    defaultValue="Horeca Pro"
                    className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream focus:outline-none focus:border-amber transition-colors"
                  >
                    <option>Horeca Basis &mdash; &euro;{DEALS.basis.now} (zomerdeal)</option>
                    <option>Horeca Pro &mdash; &euro;{DEALS.pro.now} (zomerdeal)</option>
                    <option>Weet ik nog niet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bericht" className="block text-sm text-cream/70 mb-2">
                    Vertel kort over jouw zaak
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    rows={4}
                    className="w-full rounded-lg bg-espresso-2 border border-cream/15 px-4 py-3 text-cream placeholder:text-cream/30 focus:outline-none focus:border-amber transition-colors resize-none"
                    placeholder="Type keuken, sfeer, huidige website (indien aanwezig)..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-amber px-8 py-3.5 text-sm font-semibold text-ink hover:bg-amber-dim transition-colors focus-visible:outline-2 focus-visible:outline-cream"
                >
                  Vraag gratis intake aan
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Portfolio />
        <WebsiteScan />
        <Werkwijze />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
