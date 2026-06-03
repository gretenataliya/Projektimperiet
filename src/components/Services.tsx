import Image from "next/image";

const services = [
  {
    title: "Projektledning",
    text: "Projektledning för bygg- och anläggningsprojekt med fokus på tid, ekonomi, kvalitet och riskhantering genom hela projektets livscykel.",
    link: "/projektledning",
    image: "/projektledning.png",
  },
  {
    title: "Byggledning",
    text: "Byggledning som säkerställer att entreprenaden genomförs enligt tidplan, kontrakt, handlingar och uppsatta projektmål.",
    link: "/byggledning",
    image: "/byggledning.jpg",
  },
  {
    title: "Beställarstöd",
    text: "Beställarstöd genom hela byggprocessen, från tidiga utredningar och upphandling till slutbesiktning och överlämning.",
    link: "/bestallarstod",
    image: "/bestallarstod1.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-5 py-16 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 grid gap-6 border-t border-[#111111]/[0.12] pt-8 sm:mb-14 sm:gap-8 sm:pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f] sm:mb-6">
              Tjänster
            </p>

            <h2 className="max-w-5xl text-[30px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Projektledning, byggledning och beställarstöd.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-[#111111]/[0.62] sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:col-span-4">
            Vi hjälper kommuner, fastighetsutvecklare, fastighetsägare och bostadsrättsföreningar att planera, styra och följa upp bygg- och anläggningsprojekt från första beslut till färdig överlämning.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.link}
              className={`group relative min-h-[360px] overflow-hidden bg-[#111111] sm:min-h-[460px] ${
               index === 0
               ? "lg:col-span-7 lg:min-h-[520px]"
               : index === 2
               ? "lg:col-span-6 lg:min-h-[250px]"
               : "lg:col-span-5 lg:min-h-[250px]"
              }`}
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 58vw, 100vw"
                    : "(min-width: 1024px) 42vw, 100vw"
                }
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.84] via-black/[0.3] to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                

                <h3
                  className={`font-medium leading-[1.04] tracking-[-0.025em] text-white ${
                    index === 0
                      ? "text-[30px] sm:text-[38px] md:text-[52px]"
                      : "text-[30px] sm:text-[36px] md:text-[40px]"
                  }`}
                >
                  {service.title}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-6 text-white/[0.72] sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                  {service.text}
                </p>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d] sm:mt-8">
                  Läs mer
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}