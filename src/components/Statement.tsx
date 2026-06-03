"use client";

import { useEffect, useState } from "react";

export default function Statement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const timer = setInterval(() => {
      start += 2;

      if (start >= 100) {
        start = 100;
        clearInterval(timer);
      }

      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#111111] px-5 py-24 text-center text-white md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-[90px] font-medium leading-none tracking-[-0.05em] text-[#d7b56d] md:text-[180px]">
          {count}%
        </div>

        <h2 className="mt-4 text-[34px] font-medium tracking-[-0.03em] md:text-[60px]">
          Fokus på kvalitet
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Kontroll över tid, ekonomi och kvalitet genom hela byggprocessen.
        </p>
      </div>
    </section>
  );
}