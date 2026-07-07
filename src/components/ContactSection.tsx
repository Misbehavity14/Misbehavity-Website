export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-20"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto flex min-h-[calc(100svh-10rem)] w-full max-w-7xl flex-col justify-between gap-14">
        <h2
          id="contact-heading"
          className="max-w-5xl text-5xl font-black uppercase leading-tight tracking-[0.08em] text-foreground sm:text-7xl"
        >
          Tell us what’s{" "}
          <span className="font-serif italic tracking-[0.2em]">troubling</span>{" "}
          you?
        </h2>

        <div className="grid gap-12 lg:grid-cols-[30rem_1fr] lg:items-center">
          <form
            className="border-2 border-accent p-8 text-accent sm:p-10"
            aria-label="Misbehavity contact form"
          >
            <h3 className="text-4xl font-medium text-accent">Contact Form</h3>
            <label className="mt-9 block">
              <span className="text-lg font-bold">Name</span>
              <input
                type="text"
                name="name"
                className="mt-3 h-12 w-full border border-accent/55 bg-transparent px-4 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="mt-7 block">
              <span className="text-lg font-bold">We will not spam</span>
              <input
                type="email"
                name="email"
                className="mt-3 h-12 w-full border border-accent/55 bg-transparent px-4 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <label className="mt-7 block">
              <span className="text-lg font-bold">Send us the love letter</span>
              <textarea
                name="message"
                rows={4}
                className="mt-3 w-full resize-none border border-accent/55 bg-transparent px-4 py-3 text-foreground outline-none transition focus:border-accent"
              />
            </label>
            <button
              type="button"
              className="mt-10 w-full bg-accent px-6 py-4 text-lg font-black text-background transition hover:bg-foreground"
            >
              Submit
            </button>
            <p className="mt-4 text-xs font-bold leading-5 text-accent/70">
              Your details stay with us. Never submit passwords.
            </p>
          </form>

          <div className="lg:pl-16">
            <p className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Bring us the problem you can see.
              <br />
              We&rsquo;ll look for the one underneath.
            </p>
            <a
              href="mailto:hello@misbehavity.in"
              className="mt-14 inline-block font-serif text-4xl font-semibold italic text-accent transition hover:text-foreground sm:text-6xl"
            >
              hello@misbehavity.in
            </a>
          </div>
        </div>

        <p className="font-serif text-2xl font-semibold text-foreground/85">
          Misbehavity Consulting LLP, India
        </p>
      </div>
    </section>
  );
}
