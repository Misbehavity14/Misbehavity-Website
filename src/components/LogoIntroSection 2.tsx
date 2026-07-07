import { clientLogos } from "@/data/clientLogos";

export function LogoIntroSection() {
  return (
    <section id="intro" className="section-shell">
      <div className="divider-line mb-10" />
      <p className="section-kicker">
        Logo Intro Section
      </p>
      <h2 className="section-heading">
        Client logo introduction placeholder.
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {clientLogos.map((client) => (
          <div
            key={client.name}
            className="surface-panel p-5"
          >
            <p className="font-medium text-foreground">{client.name}</p>
            <p className="mt-2 text-sm text-muted-copy">{client.logoPath}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
