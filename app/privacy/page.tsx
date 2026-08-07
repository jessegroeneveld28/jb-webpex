import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacyverklaring — JB WebPex",
  description:
    "Lees hoe JB WebPex omgaat met persoonsgegevens die via het intake- en contactformulier worden verzameld, conform de AVG/GDPR.",
};

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-8 sm:py-10 border-t border-cream/10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-mono text-xs text-amber/80 shrink-0">{n}</span>
        <h2 className="font-display text-2xl sm:text-[1.75rem] text-cream leading-snug">
          {title}
        </h2>
      </div>
      <div className="space-y-4 text-zinc-300 text-base sm:text-lg leading-relaxed pl-0 sm:pl-9">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-espresso texture-linen">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <p className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase text-amber/90 mb-6 flex items-center gap-3">
            <span className="inline-block w-6 h-px bg-amber/60" />
            Juridisch
          </p>
          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl tracking-tight text-cream mb-4">
            Privacyverklaring
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed max-w-xl">
            JB WebPex gaat zorgvuldig om met de persoonsgegevens die je met
            ons deelt. In deze verklaring lees je welke gegevens we
            verzamelen, waarom, en welke rechten je hebt.
          </p>
          <p className="mt-6 font-mono text-xs text-cream/40">
            Laatst bijgewerkt: 5 augustus 2026
          </p>

          <div className="mt-14">
            <Section n="01" title="Wie is verantwoordelijk voor je gegevens">
              <p>
                JB WebPex is de verwerkingsverantwoordelijke voor de
                persoonsgegevens die via deze website worden verzameld. Dat
                betekent dat JB WebPex bepaalt welke gegevens worden
                verwerkt en met welk doel, en verantwoordelijk is voor een
                zorgvuldige en rechtmatige verwerking conform de Algemene
                Verordening Gegevensbescherming (AVG/GDPR).
              </p>
              <p className="text-zinc-400 text-sm">
                Contactgegevens JB WebPex
                <br />
                E-mail: jbwebpex.info@gmail.com
                <br />
                KVK-nummer: 42120657
              </p>
            </Section>

            <Section n="02" title="Welke gegevens we verzamelen">
              <p>
                We verzamelen alleen de persoonsgegevens die je zelf actief
                invult via het intake- of contactformulier op deze website.
                Dat zijn:
              </p>
              <ul className="space-y-2 list-disc pl-5 marker:text-amber">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer (indien opgegeven)</li>
                <li>Naam van je bedrijf of zaak</li>
                <li>De inhoud van je bericht of wensen</li>
              </ul>
              <p>
                We verzamelen geen gegevens buiten wat je zelf invult, en
                gebruiken geen tracking- of advertentiecookies op deze
                website.
              </p>
            </Section>

            <Section n="03" title="Waarom we deze gegevens verzamelen">
              <p>We gebruiken je gegevens uitsluitend om:</p>
              <ul className="space-y-2 list-disc pl-5 marker:text-amber">
                <li>
                  Contact met je op te nemen naar aanleiding van je aanvraag,
                  intake-verzoek of interesse in een actie zoals de
                  zomerdeal.
                </li>
                <li>
                  De webdesign-diensten die je bij ons afneemt voor te
                  bereiden en uit te voeren, van intake tot oplevering.
                </li>
              </ul>
              <p>
                We gebruiken je gegevens niet voor marketingdoeleinden
                waarvoor je geen toestemming hebt gegeven.
              </p>
            </Section>

            <Section n="04" title="Hoe lang we je gegevens bewaren">
              <p>
                We bewaren persoonsgegevens niet langer dan noodzakelijk voor
                het doel waarvoor ze zijn verzameld. Gegevens uit
                aanvragen die niet tot een samenwerking leiden, verwijderen
                we binnen een redelijke termijn. Gegevens die deel uitmaken
                van een lopende of afgeronde opdracht bewaren we zolang als
                nodig is voor die samenwerking en eventuele wettelijke
                (fiscale) bewaarplichten.
              </p>
            </Section>

            <Section n="05" title="Delen met derden">
              <p>
                JB WebPex verkoopt jouw persoonsgegevens nooit aan derden. We
                delen gegevens alleen wanneer dat noodzakelijk is voor het
                uitvoeren van onze dienstverlening (bijvoorbeeld hosting via
                Netlify) of wanneer we daartoe wettelijk verplicht zijn. Met
                partijen die in onze opdracht gegevens verwerken maken we
                afspraken om een vergelijkbaar niveau van beveiliging en
                vertrouwelijkheid te waarborgen.
              </p>
            </Section>

            <Section n="06" title="Hoe we je gegevens beveiligen">
              <p>
                We nemen passende technische en organisatorische maatregelen
                om je persoonsgegevens te beschermen tegen verlies,
                misbruik of onbevoegde toegang.
              </p>
            </Section>

            <Section n="07" title="Jouw rechten">
              <p>Je hebt op elk moment het recht op:</p>
              <ul className="space-y-2 list-disc pl-5 marker:text-amber">
                <li>Inzage in de persoonsgegevens die we van je hebben</li>
                <li>Correctie van onjuiste of onvolledige gegevens</li>
                <li>Verwijdering van je persoonsgegevens</li>
                <li>Beperking of bezwaar tegen de verwerking</li>
                <li>Overdraagbaarheid van je gegevens</li>
              </ul>
              <p>
                Wil je gebruikmaken van een van deze rechten? Neem contact
                met ons op via het contactformulier of e-mail. Je hebt ook
                het recht om een klacht in te dienen bij de Autoriteit
                Persoonsgegevens.
              </p>
            </Section>

            <Section n="08" title="Wijzigingen in deze verklaring">
              <p>
                We kunnen deze privacyverklaring van tijd tot tijd aanpassen,
                bijvoorbeeld bij wijzigingen in onze dienstverlening of
                wetgeving. De meest actuele versie staat altijd op deze
                pagina.
              </p>
            </Section>

            <Section n="09" title="Contact">
              <p>
                Heb je vragen over deze privacyverklaring of over hoe we met
                je gegevens omgaan? Neem gerust contact op via het{" "}
                <Link
                  href="/#contact"
                  className="text-amber hover:text-amber-dim underline underline-offset-4 transition-colors"
                >
                  contactformulier
                </Link>{" "}
                op onze website.
              </p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
