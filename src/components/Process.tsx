"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Tydlighet",
    text: "Vi skapar struktur kring mål, förutsättningar, ansvar och kommunikation så att alla parter vet vad som gäller.",
    points: ["Mål", "Ansvar", "Kommunikation"],
  },
  {
    title: "Struktur",
    text: "Vi följer upp tid, ekonomi, kvalitet och risker för att projektet ska drivas effektivt och kostnadskontrollerat.",
    points: ["Tidplan", "Budget", "Kvalitet"],
  },
  {
    title: "Samarbete",
    text: "Vi arbetar nära beställare, konsulter och entreprenörer för att skapa tydlighet mellan alla parter.",
    points: ["Samordning", "Byggmöten", "Rapportering"],
  },
  {
    title: "Förebyggande",
    text: "Vi arbetar proaktivt för att förebygga problem innan de uppstår och skapa hållbara lösningar med långsiktigt värde.",
    points: ["Risker", "Beslut", "Långsiktigt värde"],
  },
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="bg-[#f6f4ef] px-5 py-20 text-[#111111] sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-12 lg:items-start">
        <div className="lg:sticky lg:top-10 lg:col-span-5">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
            Vårt arbetssätt
          </p>

          <h2 className="text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
            Tydlighet, struktur och nära samarbete.
          </h2>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#111111]/[0.64] md:text-lg md:leading-8">
            Genom god kommunikation och ett lösningsorienterat arbetssätt
            skapar vi effektiva projekt med hög kvalitet och långsiktigt värde.
          </p>

            <div className="relative mt-10 hidden min-h-[340px] overflow-hidden lg:block">
            <Image
              src="/om-oss.jpg"
              alt=""
              fill
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/[0.55] to-transparent" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-y border-[#111111]/[0.14]">
            {steps.map((step, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={step.title} className="border-b border-[#111111]/[0.14] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="grid w-full grid-cols-[44px_1fr_32px] items-center gap-4 py-7 text-left md:grid-cols-[72px_1fr_40px] md:py-9"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs uppercase tracking-[0.16em] text-[#9a7a3f]">
                      0{index + 1}
                    </span>
                    <span className="text-2xl font-medium tracking-[-0.02em] text-[#111111] md:text-4xl">
                      {step.title}
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
                    <div className="grid gap-8 pb-9 md:grid-cols-[1fr_0.8fr] md:pl-[72px]">
                      <p className="max-w-2xl text-base leading-7 text-[#111111]/[0.64] md:text-lg md:leading-8">
                        {step.text}
                      </p>

                      <div className="space-y-3">
                        {step.points.map((point) => (
                          <p
                            key={point}
                            className="border-t border-[#111111]/[0.12] pt-3 text-sm font-medium uppercase tracking-[0.14em] text-[#111111]/[0.7]"
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
    </section>
  );
}
