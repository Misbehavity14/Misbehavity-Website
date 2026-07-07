export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen flex-col px-6 pb-0 pt-20"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-14 pb-16">
        <h2
          id="contact-heading"
          className="max-w-5xl text-4xl font-semibold uppercase leading-tight tracking-[0.08em] text-foreground sm:text-6xl"
        >
          Tell us what&rsquo;s{" "}
          <span className="inline-block -rotate-2 font-serif italic tracking-[0.16em] text-foreground">
            troubling
          </span>{" "}
          you?
        </h2>

        <div className="grid gap-12 lg:grid-cols-[minmax(20rem,28rem)_1fr] lg:items-center">
          <form
            className="text-accent"
            aria-label="Misbehavity contact form"
          >
            <div className="space-y-8">
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-3 h-12 w-full border-0 border-b border-accent/60 bg-transparent px-0 text-foreground outline-none transition placeholder:text-muted-copy focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  Brand / Company
                </span>
                <input
                  type="text"
                  name="company"
                  className="mt-3 h-12 w-full border-0 border-b border-accent/60 bg-transparent px-0 text-foreground outline-none transition placeholder:text-muted-copy focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="text-sm font-black uppercase tracking-[0.2em]">
                  What&rsquo;s troubling you?
                </span>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-3 w-full resize-none border-0 border-b border-accent/60 bg-transparent px-0 py-3 text-foreground outline-none transition placeholder:text-muted-copy focus:border-accent"
                />
              </label>
            </div>

            <button
              type="button"
              className="mt-10 border border-accent px-6 py-3 text-sm font-black uppercase tracking-[0.18em] text-accent transition hover:bg-accent hover:text-background"
            >
              Send the problem
            </button>
          </form>

          <div className="lg:pl-20">
            <p className="font-serif text-3xl font-normal leading-tight text-foreground sm:text-5xl">
              Bring us the problem you can see.
              <br />
              We&rsquo;ll look for the one underneath.
            </p>
            <a
              href="mailto:hello@misbehavity.in"
              className="mt-12 inline-block font-serif text-3xl font-normal italic text-accent transition hover:text-foreground sm:text-5xl"
            >
              hello@misbehavity.in
            </a>
          </div>
        </div>
      </div>

      <footer className="-mx-6 bg-accent px-6 py-4 text-background">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 text-xs font-black uppercase tracking-[0.16em]">
          <span>Misbehavity Consulting LLP, India</span>
          <span>Brand Strategy</span>
          <span>Creative Consulting</span>
          <span>Mumbai / India</span>
          <a href="mailto:hello@misbehavity.in" className="hover:underline">
            hello@misbehavity.in
          </a>
        </div>
      </footer>
    </section>
  );
}
