import Image from "next/image";

const areas = [
  {
    title: "Byggprojekt",
    text: "Nybyggnationer inom både offentlig och privat sektor, exempelvis bostäder, kommersiella fastigheter och samhällsfastigheter.",
    image: "/hero.png",
  },
  {
    title: "ROT-projekt",
    text: "Renovering, ombyggnad och tillbyggnad av befintliga fastigheter där planering, samordning och hänsyn till pågående verksamhet är avgörande.",
    image: "/om-oss.jpg",
  },
  {
    title: "Anläggningsprojekt",
    text: "Mark och anläggning, exempelvis finplanering, gator, VA, infrastruktur, markarbeten och offentliga miljöer.",
    image: "/hero.png",
  },
];

export default function ProjectAreas() {
  return (
    <section id="project-areas" className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-8 border-t border-[#111111]/[0.12] pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
              Våra projektområden
            </p>

            <h2 className="max-w-5xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Byggprojekt, ROT-projekt och anläggningsprojekt.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#111111]/[0.62] md:text-lg md:leading-8 lg:col-span-4">
            Vi säkerställer att projekten genomförs enligt krav, handlingar och
            uppsatta mål, oavsett projektets omfattning.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {areas.map((area, index) => (
            <article
              key={area.title}
              className="group relative min-h-[430px] overflow-hidden bg-[#111111] md:min-h-[560px]"
            >
              <Image
                src={area.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/[0.82] via-black/[0.28] to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                  0{index + 1}
                </p>

                <h3 className="text-[30px] font-medium leading-[1.04] tracking-[-0.025em] text-white md:text-[42px]">
                  {area.title}
                </h3>

                <p className="mt-5 max-w-md text-base leading-7 text-white/[0.72]">
                  {area.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
