import Image from "next/image";

const customers = [
  "Kommuner och offentliga beställare",
  "Fastighetsutvecklare",
  "Fastighetsägare",
  "Bostadsrättsföreningar",
];

export default function Customers() {
  return (
    <section id="customers" className="bg-[#151515] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
                Våra kunder
              </p>

              <h2 className="text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
                Vi hjälper kunder med olika behov, organisationer och projekt.
              </h2>
            </div>

            <p className="mt-8 max-w-xl text-base leading-7 text-white/[0.66] md:text-lg md:leading-8">
              Vi anpassar arbetssättet efter organisation, beslutsvägar och
              projektets omfattning, kundens behov och organisationens
              förutsättningar.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[560px]">
              <Image
                src="/om-oss.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/[0.35] to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                <div className="divide-y divide-white/[0.18] border-y border-white/[0.18]">
                  {customers.map((customer, index) => (
                    <div
                      key={customer}
                      className="grid grid-cols-[48px_1fr] items-center py-5"
                    >
                      <span className="text-xs uppercase tracking-[0.16em] text-[#d7b56d]">
                        0{index + 1}
                      </span>
                      <span className="text-xl font-medium tracking-[-0.02em] text-white md:text-[30px]">
                        {customer}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
