const benefits = [
  "Säkerställer kvalitet i varje skede",
  "Skyddar tidplan och budget",
  "Skapar tydlighet mellan parter",
  "Förebygger problem innan de blir kostsamma",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
              Varför Projektimperiet
            </p>

            <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Tydlig styrning gör komplexa projekt lättare att leda.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8 lg:col-span-4 lg:col-start-9">
            Vi kombinerar teknisk förståelse med strukturerad kommunikation,
            affärsmässig kontroll och ett tydligt beställarperspektiv.
          </p>
        </div>

        <div className="mt-16 divide-y divide-white/[0.15] border-y border-white/[0.15]">
          {benefits.map((benefit, index) => (
            <div
              key={benefit}
              className="grid gap-4 py-7 md:grid-cols-[96px_1fr] md:items-center"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[#d7b56d]">
                0{index + 1}
              </span>
              <p className="text-2xl font-medium tracking-[-0.02em] text-white md:text-4xl">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
