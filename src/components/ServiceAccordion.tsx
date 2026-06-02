"use client";

import { useState } from "react";

const items = [
  {
    title: "Projektledning",
    intro:
      "Vi ansvarar för att planera, leda och följa upp projekt genom samtliga skeden. Målet är att skapa struktur, kontroll och trygghet genom hela byggprocessen.",
    points: [
      "Projektplanering och projektstyrning",
      "Budgetering och ekonomihantering",
      "Upphandling och anbudsutvärdering",
      "Kontraktsskrivning och avtalsadministration",
      "Samordning mellan konsulter, entreprenörer och beställare",
      "Kvalitetsstyrning och riskhantering",
      "Uppföljning av tid, kostnad och kvalitet",
      "Kommunikation och rapportering till beställare och intressenter",
    ],
  },
  {
    title: "Byggledning",
    intro:
      "Vi representerar beställaren ute i produktionen och säkerställer att entreprenaden genomförs enligt kontrakt, handlingar och gällande krav.",
    points: [
      "Ledning av byggmöten",
      "Produktionsuppföljning",
      "Samordning på arbetsplatsen",
      "Hantering av ÄTA-arbeten",
      "Kvalitets- och arbetsmiljöuppföljning",
      "Kontroll av utförande och framdrift",
      "Dokumentation och rapportering",
      "Uppföljning av tidplan och ekonomi",
    ],
  },
  {
    title: "Beställarstöd",
    intro:
      "Vi erbjuder stöd till beställare genom hela byggprocessen, från tidiga utredningar till slutbesiktning och överlämning.",
    points: [
      "Rådgivning inför projektstart",
      "Stöd vid upphandling och entreprenadform",
      "Granskning av handlingar och avtal",
      "Teknisk och administrativ rådgivning",
      "Ekonomisk uppföljning",
      "Stöd vid myndighetskontakter",
      "Riskbedömningar och beslutsunderlag",
      "Stöd vid besiktningar och slutskede",
    ],
  },
];

export default function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-t border-[#111111]/[0.14] pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
              Tjänster i detalj
            </p>

            <h2 className="text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Vad som ingår i uppdraget.
            </h2>

            <p className="mt-7 max-w-md text-base leading-7 text-[#111111]/[0.62] md:text-lg md:leading-8">
              En mer detaljerad översikt över hur vi kan stötta projektet i
              planering, produktion och beslutsfattande.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border-y border-[#111111]/[0.14]">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-[#111111]/[0.14] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="grid w-full grid-cols-[44px_1fr_32px] items-center gap-4 py-7 text-left md:grid-cols-[72px_1fr_40px] md:py-9"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs uppercase tracking-[0.16em] text-[#8f713b]">
                        0{index + 1}
                      </span>
                      <span className="text-2xl font-medium tracking-[-0.02em] text-[#111111] md:text-[34px]">
                        {item.title}
                      </span>
                      <span className="relative h-8 w-8 justify-self-end text-[#111111]/70">
                        <span className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 bg-current" />
                        <span
                          className={`absolute left-1/2 top-1/2 h-6 w-px -translate-y-1/2 bg-current transition ${
                            isOpen ? "rotate-90 opacity-0" : "opacity-100"
                          }`}
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="grid gap-8 pb-9 md:grid-cols-[0.85fr_1.15fr] md:pl-[72px]">
                        <p className="max-w-xl text-base leading-7 text-[#111111]/[0.64] md:text-lg md:leading-8">
                          {item.intro}
                        </p>

                        <div className="grid gap-x-8 sm:grid-cols-2">
                          {item.points.map((point) => (
                            <p
                              key={point}
                              className="border-t border-[#111111]/[0.12] py-4 text-sm font-medium leading-6 text-[#111111]/[0.76]"
                            >
                              {point}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
