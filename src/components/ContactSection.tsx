const contactRows = [
  ["E-post", "info@projektimperiet.se"],
  ["Telefon", "+46 70 123 45 67"],
  ["Plats", "Stockholm, Sverige"],
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#151515] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px] border-t border-white/[0.14] pt-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
              Kontakt
            </p>

            <h2 className="max-w-4xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] text-white sm:text-[44px] md:text-[58px]">
              Vill du diskutera ett bygg- eller anläggningsprojekt?
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/[0.64] md:text-lg md:leading-8">
              Oavsett om du representerar en kommun, fastighetsutvecklare,
              fastighetsägare eller BRF hjälper vi dig skapa ett tryggt och väl
              genomfört projekt.
            </p>

            <div className="mt-12 divide-y divide-white/[0.14] border-y border-white/[0.14]">
              {contactRows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d7b56d]">
                    {label}
                  </p>
                  <p className="text-lg font-medium text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            action="mailto:info@projektimperiet.se"
            method="post"
            encType="text/plain"
            className="lg:col-span-5 lg:col-start-8"
          >
            <div className="grid gap-7">
              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.48]">
                  Namn
                </span>
                <input
                  name="namn"
                  required
                  className="w-full border-b border-white/[0.24] bg-transparent py-4 text-base text-white outline-none transition placeholder:text-white/[0.34] focus:border-[#d7b56d]"
                  placeholder="För- och efternamn"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.48]">
                  E-post
                </span>
                <input
                  name="epost"
                  type="email"
                  required
                  className="w-full border-b border-white/[0.24] bg-transparent py-4 text-base text-white outline-none transition placeholder:text-white/[0.34] focus:border-[#d7b56d]"
                  placeholder="namn@foretag.se"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.48]">
                  Telefon
                </span>
                <input
                  name="telefon"
                  className="w-full border-b border-white/[0.24] bg-transparent py-4 text-base text-white outline-none transition placeholder:text-white/[0.34] focus:border-[#d7b56d]"
                  placeholder="+46"
                />
              </label>

              <label className="block">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.16em] text-white/[0.48]">
                  Projekt
                </span>
                <textarea
                  name="projekt"
                  required
                  rows={5}
                  className="w-full resize-none border-b border-white/[0.24] bg-transparent py-4 text-base leading-7 text-white outline-none transition placeholder:text-white/[0.34] focus:border-[#d7b56d]"
                  placeholder="Beskriv kort projektet och vilket stöd ni söker."
                />
              </label>

              <button
                type="submit"
                className="mt-3 w-fit bg-white px-7 py-4 text-sm font-semibold text-[#111111] transition hover:bg-[#d7b56d]"
              >
                Skicka förfrågan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
