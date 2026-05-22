export default function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold tracking-tight text-black">
            PROJEKTIMPERIET AB
          </h3>

          <p className="mt-6 max-w-md leading-7 text-black/70">
            Din partner inom bygg- och anläggningsprojekt.
          </p>

          <div className="mt-6 space-y-2 text-black/70">
            <p>Stockholm, Sverige</p>
            <p>info@projektimperiet.se</p>
            <p>+46 XX XXX XX XX</p>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#d6a950]">
            Snabblänkar
          </h4>

          <div className="space-y-4 text-black/70">
            <a href="#" className="block transition hover:text-[#d6a950]">
              Hem
            </a>
            <a href="#services" className="block transition hover:text-[#d6a950]">
              Tjänster
            </a>
            <a href="#about" className="block transition hover:text-[#d6a950]">
              Om oss
            </a>
            <a href="#contact" className="block transition hover:text-[#d6a950]">
              Kontakt
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[#d6a950]">
            Tjänster
          </h4>

        <div className="space-y-4 text-black/70">
  <a
    href="/projektledning"
    className="block transition hover:text-[#d6a950]"
  >
    Projektledning
  </a>

  <a
    href="/projektstyrning"
    className="block transition hover:text-[#d6a950]"
  >
    Projektstyrning
  </a>

  <a
    href="/budget-kalkyl"
    className="block transition hover:text-[#d6a950]"
  >
    Budget & kalkyl
  </a>

  <a
    href="/byggledning"
    className="block transition hover:text-[#d6a950]"
  >
    Byggledning
  </a>

  <a
    href="/projekteringsledning"
    className="block transition hover:text-[#d6a950]"
  >
    Projekteringsledning
  </a>

  <a
    href="/forstudier-projektanalyser"
    className="block transition hover:text-[#d6a950]"
  >
    Förstudier & projektanalyser
  </a>

  <a
    href="/byggbeskrivningar"
    className="block transition hover:text-[#d6a950]"
  >
    Byggbeskrivningar
  </a>

  <a
    href="/entreprenadstod"
    className="block transition hover:text-[#d6a950]"
  >
    Kontraktskrivning & entreprenadstöd
  </a>
</div>


        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-black/10 px-6 pt-8 text-sm text-black/50 md:flex-row">
        <p>© 2026 Projektimperiet AB</p>

        <div className="flex gap-6">
          <p>Integritetspolicy</p>
          <p>Användarvillkor</p>
        </div>
      </div>
    </footer>
  );
}