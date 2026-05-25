export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden md:min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-20 md:min-h-screen md:px-6">
        <div className="max-w-4xl">
          <p className="mb-5 max-w-[300px] text-xs font-semibold uppercase tracking-[0.22em] text-[#d6a950] sm:max-w-none sm:text-sm">
            Projektledning • Projektstyrning • Teknisk samordning
          </p>

          <h1 className="max-w-[330px] text-[2.45rem] font-bold leading-[0.95] tracking-[-0.04em] text-white sm:max-w-4xl sm:text-5xl md:text-7xl">
            Vi leder byggprojekt från idé till färdigt resultat
          </h1>

          <p className="mt-6 max-w-[330px] text-base leading-7 text-white/80 sm:max-w-2xl sm:text-lg sm:leading-8">
            Projektimperiet AB erbjuder projektledning, projektstyrning och
            teknisk samordning för BRF:er, fastighetsägare, entreprenörer och
            beställare.
          </p>

          <div className="mt-8 flex max-w-[330px] flex-col gap-3 sm:max-w-none sm:flex-row">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-[#d6a950] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white"
            >
              Kontakta oss
            </a>

            <a
              href="#services"
              className="inline-flex justify-center rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d6a950] hover:text-[#d6a950]"
            >
              Våra tjänster
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}