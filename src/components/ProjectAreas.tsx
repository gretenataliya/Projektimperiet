import Image from "next/image";

const areas = [
  {
    title: "Byggprojekt",
    text: "Projektledning för nybyggnationer inom offentlig och privat sektor, från bostäder och kommersiella fastigheter till samhällsfastigheter.",
    image: "/byggprojekt.jpg",
  },
  {
    title: "ROT-projekt",
    text: "Stöd vid renovering, ombyggnad och tillbyggnad där planering, samordning och hänsyn till boende eller verksamhet är avgörande.",
    image: "/rot-projekt.jpg",
  },
  {
    title: "Anläggningsprojekt",
    text: "Samordning av mark- och anläggningsprojekt, exempelvis finplanering, gator, VA, infrastruktur, markarbeten och offentliga miljöer.",
    image: "/anlaggningsprojekt.png",
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
              Byggprojekt, ROT-projekt och anläggningsprojekt
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-[#111111]/[0.62] md:text-lg md:leading-8 lg:col-span-4">
            Vi leder och samordnar bygg- och anläggningsprojekt med fokus på kvalitet, tidplan, ekonomi och tydliga beslutsvägar.
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
