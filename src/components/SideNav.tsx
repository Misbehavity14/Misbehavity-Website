const navItems = [
  { label: "How we misbehave", href: "#misbehave" },
  { label: "Our troubled past", href: "#past" },
  { label: "Tell us what’s troubling you", href: "#contact" },
];

export function SideNav() {
  return (
    <nav
      aria-label="Featured section navigation"
      className="pointer-events-auto absolute bottom-8 right-0 z-20 translate-x-[74%] overflow-visible md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-[75%]"
    >
      <ul className="flex w-80 flex-col gap-2 rounded-l-[2rem] bg-accent py-5 pl-5 pr-9 text-background shadow-2xl sm:w-96 md:py-7 md:pl-7">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-label={`Jump to ${item.label}`}
              className="group flex w-full origin-right items-center justify-between gap-5 rounded-l-full py-3 pl-4 pr-8 text-left text-base font-semibold text-background/55 transition duration-500 ease-out hover:-translate-x-48 hover:bg-background hover:text-accent focus:-translate-x-48 focus:bg-background focus:text-accent focus:outline-none sm:hover:-translate-x-56 sm:focus:-translate-x-56 md:text-lg"
            >
              <span className="max-w-56 truncate transition-all duration-300 group-hover:max-w-80 group-focus:max-w-80">
                {item.label}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-8 bg-background/35 transition group-hover:bg-accent group-focus:bg-accent"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
