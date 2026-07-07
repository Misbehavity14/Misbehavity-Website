const navItems = [
  { label: "How We Misbehave", href: "#misbehave" },
  { label: "Our Troubled (successful) Past", href: "#past" },
  { label: "Tell us what’s troubling you?", href: "#contact" },
];

export function SideNav() {
  return (
    <nav
      aria-label="Featured section navigation"
      className="pointer-events-auto absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-[54%] overflow-hidden rounded-l-[2rem] bg-accent py-7 pl-7 pr-14 text-background shadow-2xl md:block"
    >
      <ul className="flex w-72 flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              aria-label={`Jump to ${item.label}`}
              className="group flex w-full origin-right items-center justify-between gap-5 py-3 text-left text-lg font-semibold text-background/60 transition duration-300 hover:-translate-x-8 hover:text-background"
            >
              <span className="max-w-44 truncate transition-all duration-300 group-hover:max-w-64">
                {item.label}
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-background/45" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
