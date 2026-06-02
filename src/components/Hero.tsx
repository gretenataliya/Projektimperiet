"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    ["Tjänster", "#services"],
    ["Projektområden", "#project-areas"],
    ["Kunder", "#customers"],
    ["Process", "#process"],
    ["Kontakt", "#contact"],
  ];

  const serviceLinks = [
    ["Projektledning", "/projektledning"],
    ["Byggledning", "/byggledning"],
    ["Beställarstöd", "/bestallarstod"],
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A1720] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-[#1A1720]/25 to-[#1A1720]" />

      {/* Top navigation */}
      <div className="absolute left-0 right-0 top-0 z-30">
        <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 py-7">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-3 text-sm font-medium text-white transition hover:text-[#d6a950]"
            aria-label="Öppna meny"
          >
            <span className="text-2xl leading-none">☰</span>
            <span>Meny</span>
          </button>

          <a href="/" className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Projektimperiet AB"
              width={220}
              height={80}
              priority
              className="h-auto w-[130px] md:w-[180px]"
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

      {/* Hero content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-40 md:pb-28">
        <div className="max-w-5xl">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d6a950] md:text-xs">
            Projektimperiet AB
          </p>

          <h1 className="max-w-5xl text-[2.6rem] font-medium leading-[1.03] tracking-[-0.045em] text-white sm:text-5xl md:text-[4.25rem]">
            Vi leder bygg- och anläggningsprojekt från idé till överlämning.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
            Vi hjälper kommuner, fastighetsutvecklare, fastighetsägare och
            BRF:er att driva projekt med struktur, kvalitet, ekonomi och tydlig
            kommunikation.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-semibold text-[#111111] transition hover:bg-[#d6a950]"
            >
              Kontakta oss
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-sm font-medium text-white transition hover:border-[#d6a950] hover:text-[#d6a950]"
            >
              Utforska tjänster
            </a>
          </div>
        </div>
      </div>

      {/* Bottom category bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-3 px-6 py-6 text-[11px] font-medium uppercase tracking-[0.28em] text-white/65">
          <a href="#project-areas" className="transition hover:text-[#d6a950]">
            Byggprojekt
          </a>

          <a
            href="#project-areas"
            className="text-center transition hover:text-[#d6a950]"
          >
            ROT-projekt
          </a>

          <a
            href="#project-areas"
            className="text-right transition hover:text-[#d6a950]"
          >
            Anläggningsprojekt
          </a>
        </div>
      </div>

      {/* Side menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/55 backdrop-blur-sm"
            aria-label="Stäng meny"
          />

          <aside className="absolute left-0 top-0 h-full w-full max-w-[460px] animate-[slideIn_.35s_ease-out] border-r border-white/10 bg-[#1A1720] text-white shadow-2xl">
            <div className="flex h-full flex-col px-8 py-8">
              <div className="mb-12 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="Projektimperiet AB"
                  width={220}
                  height={70}
                  className="h-auto w-[175px]"
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
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-xl font-medium transition hover:text-[#d6a950]"
                  >
                    {label}
                    <span className="transition group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                ))}
              </nav>

              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
                  Våra huvudtjänster
                </p>

                <div className="grid gap-3">
                  {serviceLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 font-medium transition hover:border-[#d6a950] hover:bg-[#d6a950] hover:text-black"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6a950]">
                  Projektimperiet AB
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug">
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