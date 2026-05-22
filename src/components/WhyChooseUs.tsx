const benefits = [
  "Hög teknisk och ekonomisk kompetens",
  "Erfarenhet från komplexa byggprojekt",
  "Stark beställarförståelse",
  "Personligt engagemang i varje uppdrag",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] bg-black p-8 text-white md:p-14">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6a950]">
                Varför välja oss?
              </p>

              <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Trygg styrning för bättre byggprojekt.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-white/65">
                Vi kombinerar teknisk kompetens, ekonomisk förståelse och tydlig
                kommunikation för att skapa trygghet från start till mål.
              </p>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d6a950]/60 hover:bg-white/[0.08]"
                  >
                    <p className="text-lg font-bold leading-snug">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.5rem] bg-[#d6a950] p-7 text-black">
                <p className="text-xl font-bold leading-snug">
                  Fokus på kvalitet, tydlighet och resultat i varje uppdrag.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}