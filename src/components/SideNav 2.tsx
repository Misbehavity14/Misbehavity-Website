const navItems = [
  { label: "Hero", href: "#hero" },
  { label: "Intro", href: "#intro" },
  { label: "Misbehave", href: "#misbehave" },
  { label: "Past", href: "#past" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Contact", href: "#contact" },
];

export function SideNav() {
  return (
    <nav aria-label="Section navigation" className="fixed right-6 top-1/2 z-20">
      <ul className="flex -translate-y-1/2 flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="block h-2.5 w-2.5 rounded-full border border-divider bg-background transition hover:border-accent hover:bg-accent"
            >
              <span className="sr-only">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
