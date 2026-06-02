const focusAreas = [
  ["01", "Projektledning"],
  ["02", "Byggledning"],
  ["03", "Beställarstöd"],
];

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7a3f]">
              Vad vi erbjuder
            </p>

            <h2 className="max-w-5xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] text-[#111111] sm:text-[44px] md:text-[58px] lg:text-[66px]">
              Struktur, kvalitet, ekonomi och tydlig kommunikation genom hela
              byggprocessen.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-xl text-base leading-7 text-[#111111]/[0.64] md:text-lg md:leading-8">
              Vi erbjuder projektledning, byggledning och beställarstöd för
              bygg- och anläggningsprojekt genom hela processen från idé och
              planering till färdigställande och överlämning.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-y border-[#111111]/[0.12] md:grid-cols-3">
          {focusAreas.map(([number, value]) => (
            <div
              key={value}
              className="border-b border-[#111111]/[0.12] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[#111111]/[0.42]">
                {number}
              </p>
              <p className="text-2xl font-medium tracking-[-0.025em] text-[#111111] md:text-[32px]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
