"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const menuLinks = [
    ["Tjänster", "#services"],
    ["Projektområden", "#project-areas"],
    ["Varför Projektimperiet", "#process"],
    ["Kontakt", "#contact"],
  ];

  const serviceLinks = [
    ["Projektledning", "/projektledning"],
    ["Byggledning", "/byggledning"],
    ["Beställarstöd", "/bestallarstod"],
  ];

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#1A1720] text-white">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#1A1720]/25 to-[#1A1720]" />

      <div className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-5 sm:px-6 sm:py-7">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#d6a950]"
            aria-label="Öppna meny"
          >
            <span className="text-2xl leading-none">☰</span>
            <span className="hidden sm:inline">Meny</span>
          </button>

          <a href="/" className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Projektimperiet AB"
              width={220}
              height={80}
              priority
              className="h-auto w-[108px] sm:w-[140px] md:w-[180px]"
            />
          </a>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="hidden border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d6a950] hover:text-[#d6a950] sm:inline-flex"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pb-16 pt-24 sm:items-end sm:px-6 sm:pb-28 sm:pt-40">
        <div className="max-w-5xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#d6a950] sm:mb-5 sm:text-[11px] md:text-xs">
            Projektimperiet AB
          </p>

          <h1 className="max-w-5xl text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-[4.25rem]">
            Vi leder bygg- och anläggningsprojekt från idé till överlämning.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-white/75 sm:max-w-2xl sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Projektledning, byggledning och beställarstöd för bygg-, ROT- och
            anläggningsprojekt.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#d6a950] sm:px-8 sm:py-4"
            >
              Kontakta oss
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-[#d6a950] hover:text-[#d6a950] sm:px-8 sm:py-4"
            >
              Utforska tjänster
            </a>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label="Stäng meny"
          />

          <aside className="absolute left-0 top-0 h-full w-full max-w-[460px] animate-[slideIn_.35s_ease-out] overflow-y-auto overscroll-contain border-r border-white/10 bg-[#1A1720] text-white shadow-2xl">
            <div className="flex min-h-full flex-col px-6 py-7 sm:px-8 sm:py-8">
              <div className="mb-10 flex items-center justify-between sm:mb-12">
                <Image
                  src="/logo.png"
                  alt="Projektimperiet AB"
                  width={220}
                  height={70}
                  className="h-auto w-[145px] sm:w-[175px]"
                />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl leading-none text-white transition hover:text-[#d6a950]"
                  aria-label="Stäng meny"
                >
                  ×
                </button>
              </div>

              <nav className="flex flex-col">
                {menuLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-lg font-medium transition hover:text-[#d6a950] sm:text-xl"
                  >
                    {label}
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-9 sm:mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
                  Våra huvudtjänster
                </p>

                <div className="grid gap-3">
                  {serviceLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-sm font-medium transition hover:border-[#d6a950] hover:bg-[#d6a950] hover:text-black sm:text-base"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a950]">
                  Projektimperiet AB
                </p>
                <p className="mt-3 text-base font-semibold leading-snug sm:text-lg">
                  Projektledning, byggledning och beställarstöd.
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}