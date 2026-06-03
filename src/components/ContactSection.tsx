export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-t border-white/15 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
              Kontakt
            </p>

            <h2 className="max-w-2xl text-[34px] font-medium leading-[1.06] tracking-[-0.025em] sm:text-[44px] md:text-[58px]">
              Låt oss prata om ditt projekt.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              Kontakta oss för projektledning, byggledning eller beställarstöd
              inom bygg-, ROT- och anläggningsprojekt.
            </p>

            <div className="mt-12 space-y-0 border-y border-white/15">
              <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/15 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                  E-post
                </p>
                <a
                  href="mailto:info@projektimperiet.se"
                  className="font-medium text-white transition hover:text-[#d7b56d]"
                >
                  info@projektimperiet.se
                </a>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/15 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                  Telefon
                </p>
                <a
                  href="tel:+46701234567"
                  className="font-medium text-white transition hover:text-[#d7b56d]"
                >
                  +46 70 123 45 67
                </a>
              </div>

              <div className="grid grid-cols-[110px_1fr] gap-4 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                  Plats
                </p>
                <p className="font-medium text-white">Stockholm, Sverige</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form className="border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8 md:p-10">
              <div className="mb-10">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d7b56d]">
                  Förfrågan
                </p>

                <h3 className="text-[28px] font-medium leading-tight tracking-[-0.025em] md:text-[40px]">
                  Berätta kort om projektet.
                </h3>
              </div>

              <div className="grid gap-7">
                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Namn
                  </span>
                  <input
                    className="w-full border-b border-white/20 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b56d]"
                    placeholder="För- och efternamn"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    E-post
                  </span>
                  <input
                    type="email"
                    className="w-full border-b border-white/20 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b56d]"
                    placeholder="namn@foretag.se"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    className="w-full border-b border-white/20 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b56d]"
                    placeholder="+46"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                    Projekt
                  </span>
                  <textarea
                    className="min-h-[130px] w-full resize-none border-b border-white/20 bg-transparent pb-4 text-base text-white outline-none transition placeholder:text-white/35 focus:border-[#d7b56d]"
                    placeholder="Beskriv kort projektet och vilket stöd ni söker."
                  />
                </label>

                <button
                  type="submit"
                  className="mt-4 w-fit bg-[#d7b56d] px-8 py-4 text-sm font-semibold text-[#111111] transition hover:bg-white"
                >
                  Skicka förfrågan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}