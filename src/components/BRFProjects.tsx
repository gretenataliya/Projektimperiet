const projectTypes = [
  "Vindsvåningar",
  "Stambyten",
  "Fasadrenoveringar",
  "Balkongprojekt",
  "Takrenoveringar",
  "Lokalombyggnationer",
  "Totalrenoveringar",
  "Anläggningsarbeten",
  "Kommersiella ombyggnationer",
  "Komplexa ombyggnationer",
];

export default function BRFProjects() {
  return (
    <section className="relative overflow-hidden bg-black py-30 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/hero.png')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6a950]">
              BRF & Fastighetsprojekt
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Stöd för BRF:er, fastighetsägare och komplexa byggprojekt.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Vi hjälper bostadsrättsföreningar och fastighetsägare genom hela
              processen, från tidig analys och upphandling till byggledning,
              samordning och slutbesiktning.
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
                Se tjänster
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-white/10 p-8 backdrop-blur-md md:p-10">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
              Exempel på projekt
            </p>

            <div className="flex flex-wrap gap-3">
              {projectTypes.map((project) => (
                <span
                  key={project}
                  className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white/85"
                >
                  {project}
                </span>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-2xl font-bold leading-snug">
                Från förstudie och upphandling till byggledning och
                slutbesiktning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}