const services = [
  ["Projektledning", "Vi leder bygg- och anläggningsprojekt från start till mål med fokus på struktur, kvalitet, ekonomi och resultat.", "/projektledning"],
  ["Projektstyrning", "Kontroll över tidplan, budget, resurser och entreprenadprocesser för minskade risker.", "/projektstyrning"],
  ["Budget & kalkyl", "Kostnadsbedömningar, investeringsunderlag och ekonomisk uppföljning för trygga beslut.", "/budget-kalkyl"],
  ["Byggledning", "Beställarstöd ute i produktionen med fokus på avtal, kvalitet och tidplan.", "/byggledning"],
  ["Projekteringsledning", "Samordning mellan arkitekter, konstruktörer, konsulter och entreprenörer.", "/projekteringsledning"],
  ["Förstudier & projektanalyser", "Analys av möjligheter, risker, kostnader och tekniska förutsättningar innan projektstart.", "/forstudier-projektanalyser"],
  ["Byggbeskrivningar", "Tekniska beskrivningar och dokumentation som skapar tydlighet genom hela projektet.", "/byggbeskrivningar"],
  ["Entreprenadstöd", "Stöd med entreprenadavtal, handlingar, upphandling och riskbedömning.", "/entreprenadstod"],
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
            Våra specialistområden
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Specialistområden inom bygg och projektledning
          </h2>
        </div>

        <div className="divide-y divide-black/10 border-y border-black/10">
          {services.map(([title, text, link], index) => (
            <a
              key={title}
              href={link}
              className="group grid gap-6 py-8 transition hover:bg-[#F8F6F2] md:grid-cols-[80px_1fr_1.4fr_60px] md:items-center md:px-6"
            >
              <span className="text-sm font-bold tracking-[0.18em] text-[#d6a950]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-2xl font-bold text-black transition group-hover:text-[#d6a950]">
                {title}
              </h3>

              <p className="max-w-2xl leading-7 text-black/60">{text}</p>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-black transition group-hover:border-[#d6a950] group-hover:bg-[#d6a950]">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}