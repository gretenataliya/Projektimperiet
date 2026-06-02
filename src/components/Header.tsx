"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Hem", "/"],
  ["Tjänster", "/#services"],
  ["Projektområden", "/#project-areas"],
  ["Process", "/#process"],
  ["Kontakt", "/#contact"],
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/95 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Projektimperiet AB">
          <Image
            src="/logo.png"
            alt="Projektimperiet AB"
            width={220}
            height={70}
            className="h-auto w-[170px] md:w-[210px]"
            style={{ height: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-white/[0.72] transition hover:text-[#d7b56d]"
            >
              {label}
            </a>
          ))}
        </nav>

          <Link
            href="/#contact"
            className="hidden border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white hover:text-[#111111] md:inline-flex"
          >
            Kontakt
          </Link>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 text-white md:hidden"
          aria-label="Öppna meny"
          aria-expanded={isOpen}
        >
          <span className="h-px w-7 bg-current" />
          <span className="h-px w-7 bg-current" />
          <span className="h-px w-7 bg-current" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#111111] px-5 py-6 sm:px-8 md:hidden">
          <nav className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {links.map(([label, href]) => (
              <a
                key={label}
                onClick={() => setIsOpen(false)}
                href={href}
                className="py-5 text-xl font-medium text-white transition hover:text-[#d7b56d]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
