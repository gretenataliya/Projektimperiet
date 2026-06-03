export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <img
              src="/logo.png"
              alt="Projektimperiet"
              className="h-auto w-[210px]"
            />

            <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
              Projektledning, byggledning och beställarstöd för bygg-, ROT- och
              anläggningsprojekt.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
              Företaget
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <a href="#services" className="block transition hover:text-white">
                Tjänster
              </a>
              <a
                href="#project-areas"
                className="block transition hover:text-white"
              >
                Projektområden
              </a>
              <a href="#process" className="block transition hover:text-white">
                Varför Projektimperiet
              </a>
              <a href="#contact" className="block transition hover:text-white">
                Kontakt
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
              Tjänster
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <a
                href="/projektledning"
                className="block transition hover:text-white"
              >
                Projektledning
              </a>
              <a
                href="/byggledning"
                className="block transition hover:text-white"
              >
                Byggledning
              </a>
              <a
                href="/bestallarstod"
                className="block transition hover:text-white"
              >
                Beställarstöd
              </a>
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
              Kontakt
            </p>

            <div className="space-y-3 text-sm text-white/60">
              <p>Stockholm, Sverige</p>
              <a
                href="mailto:info@projektimperiet.se"
                className="block transition hover:text-white"
              >
                info@projektimperiet.se
              </a>
              <a
                href="tel:+46701234567"
                className="block transition hover:text-white"
              >
                +46 70 123 45 67
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Projektimperiet AB</p>

          <div className="flex gap-6">
            <a href="/integritetspolicy" className="transition hover:text-white">
              Integritetspolicy
            </a>
            <a href="/anvandarvillkor" className="transition hover:text-white">
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}