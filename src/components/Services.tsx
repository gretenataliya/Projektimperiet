import Image from "next/image";

const services = [
  {
    title: "Projektledning",
    label: "Planering och styrning",
    text: "Planering, upphandling, samordning, uppföljning, kvalitet, tidsplanering, ekonomihantering och kontraktsskrivning.",
    link: "/projektledning",
    image: "/hero.png",
  },
  {
    title: "Byggledning",
    label: "Ledning i produktion",
    text: "Byggmöten, produktionsuppföljning, ÄTA-hantering, samordning på arbetsplatsen och kontroll av utförande och framdrift.",
    link: "/byggledning",
    image: "/om-oss.jpg",
  },
  {
    title: "Beställarstöd",
    label: "Stöd genom processen",
    text: "Rådgivning och stöd genom hela byggprocessen, från tidiga utredningar till upphandling, slutbesiktning och överlämning.",
    link: "/bestallarstod",
    image: "/hero.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f6f4ef] px-5 py-20 text-[#111111] sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 grid gap-8 border-t border-[#111111]/[0.12] pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
              Våra tjänster
            </p>
            <h2 className="max-w-5xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Stöd i varje skede, från planering till färdig överlämning.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#111111]/[0.62] md:text-lg md:leading-8 lg:col-span-4">
            Tjänsterna kan användas var för sig eller kombineras beroende på
            projektets omfattning, organisation och behov av kontroll.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-8 border-t border-[#111111]/[0.12] pt-10 lg:grid-cols-12 lg:items-center lg:gap-14"
            >
              <a
                href={service.link}
                className={`group relative block min-h-[320px] overflow-hidden md:min-h-[520px] lg:col-span-7 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
                aria-label={`Läs mer om ${service.title}`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.45] to-transparent opacity-80 transition group-hover:opacity-90" />
              </a>

              <div className="lg:col-span-5">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a7a3f]">
                  0{index + 1} / {service.label}
                </p>

                <h3 className="text-[32px] font-medium leading-[1.04] tracking-[-0.025em] md:text-[52px]">
                  {service.title}
                </h3>

                <p className="mt-6 max-w-xl text-base leading-7 text-[#111111]/[0.66] md:text-lg md:leading-8">
                  {service.text}
                </p>

                <a
                  href={service.link}
                  className="mt-8 inline-flex border-b border-[#111111] pb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#111111] transition hover:border-[#9a7a3f] hover:text-[#9a7a3f]"
                >
                  Läs mer
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
