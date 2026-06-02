"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#151515] text-white">
      <Image
        src="/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[#151515]/45" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/[0.55] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-[#151515] via-[#151515]/70 to-transparent" />

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto grid max-w-[1500px] grid-cols-3 items-center px-5 py-5 sm:px-8 md:px-12 md:py-7">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="group flex w-fit items-center gap-3 text-sm font-medium text-white/90 transition hover:text-[#d7b56d]"
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
          >
            <span className="flex h-4 w-6 flex-col justify-between">
              <span className="h-px w-6 bg-current transition group-hover:w-4" />
              <span className="h-px w-4 bg-current transition group-hover:w-6" />
              <span className="h-px w-6 bg-current transition group-hover:w-4" />
            </span>
            <span className="hidden sm:inline">Meny</span>
          </button>

          <Link href="/" className="flex justify-center" aria-label="Projektimperiet AB">
            <Image
              src="/logo.png"
              alt="Projektimperiet AB"
              width={240}
              height={80}
              priority
              className="h-auto w-[150px] md:w-[210px]"
              style={{ height: "auto" }}
            />
          </Link>

          <div className="flex justify-end">
            <a
              href="#contact"
              className="hidden border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition hover:border-white hover:bg-white hover:text-[#111111] sm:inline-flex"
            >
              Kontakt
            </a>
          </div>
        </div>
      </header>

      <div className="relative z-20 mx-auto flex min-h-[92svh] max-w-[1500px] items-end px-5 pb-12 pt-28 sm:px-8 md:px-12 md:pb-20">
        <div className="grid w-full gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-9">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7b56d] sm:text-xs">
              Projektimperiet AB
            </p>

            <h1 className="max-w-5xl text-[40px] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-[54px] md:text-[64px] lg:text-[76px]">
              Projektledning, byggledning & beställarstöd.
            </h1>
          </div>

          <div className="max-w-xl lg:col-span-3 lg:justify-self-end">
            <p className="text-base leading-7 text-white/[0.76] md:text-lg md:leading-8">
              Inom bygg- och anläggningsprojekt hjälper vi kunder att driva
              projekt effektivt, hållbart och kostnadskontrollerat från idé till
              överlämning.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#contact"
                className="inline-flex justify-center bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition hover:bg-[#d7b56d]"
              >
                Kontakta oss
              </a>

              <a
                href="#services"
                className="inline-flex justify-center border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#d7b56d] hover:text-[#d7b56d]"
              >
                Utforska tjänster
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-20 hidden border-t border-white/10 bg-black/[0.15] backdrop-blur-md md:block">
        <div className="mx-auto grid max-w-[1500px] grid-cols-3 px-12 py-5 text-xs uppercase tracking-[0.18em] text-white/[0.62]">
          <span>Byggprojekt</span>
          <span className="text-center">ROT-projekt</span>
          <span className="text-right">Anläggningsprojekt</span>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[999]">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Stäng meny genom att klicka utanför"
          />

          <aside className="absolute left-0 top-0 h-full w-full max-w-[520px] animate-[slideIn_.35s_ease-out] bg-[#111111] text-white shadow-2xl">
            <div className="flex h-full flex-col px-6 py-7 sm:px-10">
              <div className="mb-12 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt="Projektimperiet AB"
                  width={220}
                  height={70}
                  className="h-auto w-[170px]"
                  style={{ height: "auto" }}
                />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="relative h-10 w-10 text-white transition hover:text-[#d7b56d]"
                  aria-label="Stäng meny"
                >
                  <span className="absolute left-2 top-1/2 h-px w-6 rotate-45 bg-current" />
                  <span className="absolute left-2 top-1/2 h-px w-6 -rotate-45 bg-current" />
                </button>
              </div>

              <nav className="flex flex-col border-t border-white/10">
                {menuLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-center justify-between border-b border-white/10 py-5 text-2xl font-medium tracking-[-0.02em] transition hover:text-[#d7b56d]"
                  >
                    {label}
                    <span className="h-px w-8 bg-current transition group-hover:w-12" />
                  </a>
                ))}
              </nav>

              <div className="mt-10">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7b56d]">
                  Huvudtjänster
                </p>

                <div className="space-y-4">
                  {serviceLinks.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-white/10 pb-4 text-base text-white/[0.72] transition hover:border-[#d7b56d] hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
                  Projektimperiet AB
                </p>
                <p className="mt-3 max-w-sm text-lg leading-7 text-white/[0.76]">
                  Struktur, styrning och tydliga beslut genom hela byggresan.
                </p>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
