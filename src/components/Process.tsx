const processSteps = [
  {
    title: "Förstudie",
    text: "Analys av behov, mål, risker och tekniska förutsättningar.",
  },
  {
    title: "Planering",
    text: "Tidplan, budget, struktur och projektsamordning.",
  },
  {
    title: "Genomförande",
    text: "Byggledning, uppföljning och kvalitetssäkring.",
  },
  {
    title: "Slutbesiktning",
    text: "Överlämning, dokumentation och slutlig uppföljning.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#F8F6F2] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
            Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            En tydlig process genom hela projektet
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/60">
            Vi arbetar strukturerat och transparent för att skapa kontroll,
            tydlighet och effektiva projektgenomföranden.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="relative">
              {index !== processSteps.length - 1 && (
                <div className="absolute left-full top-1/2 hidden h-[2px] w-6 -translate-y-1/2 bg-[#d6a950] lg:block" />
              )}

              <div className="relative flex h-full min-h-[180px] flex-col rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d6a950] hover:shadow-xl">

                <h3 className="mb-4 text-2xl font-bold text-black">
                  {step.title}
                </h3>

                <p className="leading-7 text-black/65">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}