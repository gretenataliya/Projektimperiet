"use client";

import Image from "next/image";
import { useState } from "react";

const items = [
  {
    title: "Tydlighet",
    text: "Vi skapar struktur kring mål, förutsättningar, ansvar och kommunikation så att alla parter vet vad som gäller.",
    points: ["Mål", "Ansvar", "Kommunikation"],
    image: "/hero.png",
  },
  {
    title: "Struktur",
    text: "Vi följer upp tid, ekonomi, kvalitet och risker för att projektet ska drivas effektivt och kostnadskontrollerat.",
    points: ["Tidplan", "Budget", "Kvalitet"],
    image: "/om-oss.jpg",
  },
  {
    title: "Samarbete",
    text: "Vi arbetar nära beställare, konsulter och entreprenörer för att skapa tydlighet mellan alla parter.",
    points: ["Samordning", "Byggmöten", "Rapportering"],
    image: "/hero.png",
  },
  {
    title: "Förebyggande",
    text: "Vi arbetar proaktivt för att förebygga problem innan de uppstår och skapa hållbara lösningar med långsiktigt värde.",
    points: ["Risker", "Beslut", "Långsiktigt värde"],
    image: "/om-oss.jpg",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);
  const activeItem = items[openIndex] ?? items[0];

  return (
    <section
      id="process"
      className="bg-[#f6f4ef] px-5 py-20 text-[#111111] sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-8 border-t border-[#111111]/[0.12] pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
              Varför Projektimperiet
            </p>

            <h2 className="max-w-5xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Tydlighet, struktur och nära samarbete.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#111111]/[0.62] md:text-lg md:leading-8 lg:col-span-4">
            Genom god kommunikation och ett lösningsorienterat arbetssätt
            skapar vi effektiva projekt med hög kvalitet och långsiktigt värde.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left visual panel */}
          <div className="relative min-h-[520px] overflow-hidden bg-[#111111] lg:col-span-5">
            <Image
              src={activeItem.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/[0.88] via-black/[0.32] to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
                100%
              </p>

              <h3 className="max-w-xl text-[34px] font-medium leading-[1.04] tracking-[-0.025em] md:text-[48px]">
                Fokus på kvalitet
              </h3>

              <p className="mt-5 max-w-md text-base leading-7 text-white/[0.72]">
                Vi tror på tydlighet, struktur och ansvar genom hela
                byggprocessen.
              </p>

              <a
                href="/om-projektimperiet"
                className="mt-8 inline-flex border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d7b56d] hover:text-[#d7b56d]"
              >
                Läs mer om oss
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-[#111111]/[0.14]">
              {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-[#111111]/[0.14]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className={`grid w-full grid-cols-[44px_1fr_32px] items-center gap-4 px-0 py-7 text-left transition duration-300 md:grid-cols-[72px_1fr_40px] md:py-9 ${
                        isOpen
                          ? "bg-white px-5 shadow-sm md:px-7"
                          : "hover:bg-white/60 hover:px-5 md:hover:px-7"
                      }`}
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs uppercase tracking-[0.16em] text-[#9a7a3f]">
                        0{index + 1}
                      </span>

                      <span className="text-2xl font-medium tracking-[-0.02em] text-[#111111] md:text-4xl">
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
                      <div className="grid gap-8 bg-white px-5 pb-9 pt-1 md:grid-cols-[1fr_0.8fr] md:px-7 md:pl-[99px]">
                        <p className="max-w-2xl text-base leading-7 text-[#111111]/[0.64] md:text-lg md:leading-8">
                          {item.text}
                        </p>

                        <div className="space-y-3">
                          {item.points.map((point) => (
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
      </div>
    </section>
  );
}