import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactSection from "@/src/components/ContactSection";

export default function ProjektledningPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-black py-32 text-white">
          <div className="absolute inset-0 opacity-20">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/hero.jpg')",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a950]">
              Tjänst
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Projektledning inom bygg och anläggning
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Vi leder byggprojekt från idé till färdig leverans med fokus på
              kvalitet, struktur, ekonomi och tydlig kommunikation genom hela
              processen.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-black">
                Vi tar ansvar för hela projektet
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-black/70">
                <p>
                  Projektimperiet AB hjälper fastighetsägare, BRF:er,
                  entreprenörer och beställare att driva byggprojekt med tydlig
                  struktur och effektiv projektstyrning.
                </p>

                <p>
                  Vi ansvarar för planering, samordning, uppföljning och
                  kommunikation mellan alla involverade parter för att säkerställa
                  att projektet genomförs enligt tidplan, budget och kvalitetskrav.
                </p>

                <p>
                  Med bred erfarenhet inom byggbranschen hjälper vi våra kunder
                  att minimera risker och skapa effektiva projektgenomföranden.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F8F6F2] p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a950]">
                Detta ingår
              </p>

              <div className="space-y-5">
                {[
                  "Projektplanering",
                  "Tidplan & budgetuppföljning",
                  "Samordning mellan entreprenörer",
                  "Kvalitetssäkring",
                  "Riskhantering",
                  "Beställarstöd",
                  "Löpande projektuppföljning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white p-4"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d6a950] text-sm font-bold text-black">
                      ✓
                    </span>

                    <p className="font-semibold text-black">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}