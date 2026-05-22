"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/">
          <Image
            src="/logo.png"
            alt="Projektimperiet AB"
            width={220}
            height={70}
            className="h-auto w-[190px] md:w-[220px]"
            priority
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          <a href="#" className="text-sm font-medium text-white transition hover:text-[#d6a950]">Hem</a>
          <a href="#services" className="text-sm font-medium text-white transition hover:text-[#d6a950]">Tjänster</a>
          <a href="#about" className="text-sm font-medium text-white transition hover:text-[#d6a950]">Om oss</a>
          <a href="#contact" className="text-sm font-medium text-white transition hover:text-[#d6a950]">Kontakt</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#d6a950] px-6 py-3 text-sm font-semibold text-black transition hover:bg-white md:inline-flex"
        >
          Starta projekt
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Öppna meny"
        >
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
          <span className="h-0.5 w-7 bg-white" />
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a onClick={() => setIsOpen(false)} href="#" className="text-white hover:text-[#d6a950]">Hem</a>
            <a onClick={() => setIsOpen(false)} href="#services" className="text-white hover:text-[#d6a950]">Tjänster</a>
            <a onClick={() => setIsOpen(false)} href="#about" className="text-white hover:text-[#d6a950]">Om oss</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="text-white hover:text-[#d6a950]">Kontakt</a>

            <a
              onClick={() => setIsOpen(false)}
              href="#contact"
              className="mt-2 w-fit rounded-full bg-[#d6a950] px-6 py-3 text-sm font-semibold text-black"
            >
              Starta projekt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}