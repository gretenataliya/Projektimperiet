import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ContactSection from "@/src/components/ContactSection";

export default function ProjektstyrningPage() {
  return (
    <>
      <Header />

      <main className="bg-white">
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
              Projektstyrning för byggprojekt
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Vi säkerställer kontroll över tidplan, budget, resurser och
              entreprenadprocesser för effektiva och trygga projekt.
            </p>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-black">
                Struktur och kontroll genom hela projektet
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-black/70">
                <p>
                  Projektstyrning handlar om att skapa kontroll, tydlighet och
                  effektivitet genom hela byggprocessen.
                </p>

                <p>
                  Vi hjälper våra kunder att hantera tidplaner, ekonomi,
                  resurser och samordning för att minimera risker och säkerställa
                  projektets kvalitet.
                </p>

                <p>
                  Genom tydlig uppföljning och strukturerad projektledning skapar
                  vi tryggare och mer lönsamma byggprojekt.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#F8F6F2] p-8">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a950]">
                Detta ingår
              </p>

              <div className="space-y-5">
                {[
                  "Tidplanering",
                  "Budgetkontroll",
                  "Resursplanering",
                  "Riskhantering",
                  "Projektuppföljning",
                  "Entreprenadsamordning",
                  "Rapportering & dokumentation",
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