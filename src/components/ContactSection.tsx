export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a950]">
            Kontakt
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Kontakta Projektimperiet AB
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
            Oavsett om du representerar en BRF, fastighetsägare, entreprenör
            eller beställare hjälper vi dig att skapa ett tryggt och väl
            genomfört projekt.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#d6a950]">
                E-post
              </p>
              <a href="mailto:info@projektimperiet.se" className="text-xl font-semibold text-black hover:text-[#d6a950]">
                info@projektimperiet.se
              </a>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#d6a950]">
                Telefon
              </p>
              <a href="tel:+46701234567" className="text-xl font-semibold text-black hover:text-[#d6a950]">
                +46 70 123 45 67
              </a>
            </div>

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#d6a950]">
                Plats
              </p>
              <p className="text-xl font-semibold text-black">
                Stockholm, Sverige
              </p>
            </div>
          </div>
        </div>

        <form className="rounded-[2.5rem] bg-[#F8F6F2] p-8 md:p-12">
          <h3 className="text-2xl font-bold text-black">Skicka en förfrågan</h3>

          <p className="mt-4 leading-7 text-black/70">
            Fyll i dina uppgifter så återkommer vi så snart som möjligt.
          </p>

          <div className="mt-8 grid gap-5">
            <input className="rounded-full border border-black/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#d6a950]" placeholder="Namn" />
            <input className="rounded-full border border-black/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#d6a950]" placeholder="E-post" />
            <input className="rounded-full border border-black/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#d6a950]" placeholder="Telefon" />
            <textarea className="resize-none rounded-[1.5rem] border border-black/10 bg-white px-5 py-4 text-sm outline-none focus:border-[#d6a950]" placeholder="Berätta kort om projektet" rows={5} />

            <button className="w-fit rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#d6a950] hover:text-black">
              Skicka förfrågan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}