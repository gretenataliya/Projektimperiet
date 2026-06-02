import Image from "next/image";

const footerLinks = [
  ["Tjänster", "#services"],
  ["Projektområden", "#project-areas"],
  ["Kunder", "#customers"],
  ["Process", "#process"],
  ["Kontakt", "#contact"],
];

const serviceLinks = [
  ["Projektledning", "/projektledning"],
  ["Byggledning", "/byggledning"],
  ["Beställarstöd", "/bestallarstod"],
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 py-14 text-white sm:px-8 md:py-20 lg:px-12">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Image
              src="/logo.png"
              alt="Projektimperiet AB"
              width={240}
              height={80}
              className="h-auto w-[190px]"
              style={{ height: "auto" }}
            />

            <p className="mt-7 max-w-md text-base leading-7 text-white/60">
              Projektledning, byggledning och beställarstöd för bygg-, ROT- och
              anläggningsprojekt.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6">
            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                Navigation
              </h4>
              <div className="space-y-3">
                {footerLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                Tjänster
              </h4>
              <div className="space-y-3">
                {serviceLinks.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-sm text-white/60 transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7b56d]">
                Kontakt
              </h4>
              <div className="space-y-3 text-sm text-white/60">
                <p>Stockholm, Sverige</p>
                <a
                  href="mailto:info@projektimperiet.se"
                  className="block transition hover:text-white"
                >
                  info@projektimperiet.se
                </a>
                <a href="tel:+46701234567" className="block transition hover:text-white">
                  +46 70 123 45 67
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-8 text-sm text-white/40 md:flex-row">
          <p>© 2026 Projektimperiet AB</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Integritetspolicy
            </a>
            <a href="#" className="transition hover:text-white">
              Användarvillkor
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
