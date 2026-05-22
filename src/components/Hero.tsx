export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6a950]">
            Projektledning • Projektstyrning • Teknisk samordning
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
            Vi leder byggprojekt från idé till färdigt resultat
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">
            Projektimperiet AB erbjuder projektledning, projektstyrning och
            teknisk samordning för BRF:er, fastighetsägare, entreprenörer och
            beställare.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-[#d6a950] px-7 py-4 text-sm font-semibold text-black transition hover:bg-white"
            >
              Kontakta oss
            </a>

            <a
              href="#services"
              className="inline-flex rounded-full border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#d6a950] hover:text-[#d6a950]"
            >
              Våra tjänster
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}