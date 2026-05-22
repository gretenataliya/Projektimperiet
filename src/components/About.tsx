export default function About() {
  return (
    <section id="about" className="bg-[#F8F6F2] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* TOP SECTION */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
              Om Projektimperiet
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-black md:text-5xl">
              Vi hjälper dig genom hela byggprocessen
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-black/70">
              <p>
                Projektimperiet AB erbjuder tjänster inom byggbranschen med
                fokus på projektledning, projektstyrning och teknisk samordning
                för privata och kommersiella fastighetsägare, BRF:er,
                beställare och entreprenörer.
              </p>

              <p>
                Vi bevakar våra kunders intressen med drivkraft, engagemang och
                hög teknisk kompetens. Våra insatser anpassas efter projektets
                ekonomiska, funktionella och praktiska krav.
              </p>

              <p>
                Med bred erfarenhet inom bygg, entreprenad och
                fastighetsutveckling hjälper vi våra kunder att fatta rätt
                beslut, säkerställa kvalitet och skapa effektiva
                projektgenomföranden.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="h-[560px] rounded-[2.5rem] bg-cover bg-center shadow-xl"
            style={{
              backgroundImage: "url('/om-oss.jpg')",
            }}
          />
        </div>

        {/* BOTTOM CARDS */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <div className="w-[320px] rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-black">
              Teknisk kompetens
            </h3>

            <p className="leading-7 text-black/65">
              Vi skapar struktur och kvalitet i varje steg av projektet.
            </p>
          </div>

          <div className="w-[320px] rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-black">
              Tydlig samordning
            </h3>

            <p className="leading-7 text-black/65">
              Vi samordnar parter, processer och beslut genom hela byggresan.
            </p>
          </div>

          <div className="w-[320px] rounded-[2rem] border border-black/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h3 className="mb-3 text-xl font-bold text-black">
              Trygg projektstyrning
            </h3>

            <p className="leading-7 text-black/65">
              Från idé och förstudie till färdigt, kvalitetssäkrat projekt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}