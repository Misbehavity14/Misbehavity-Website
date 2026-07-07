export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  imagePath: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "luxury-tiles",
    title: "Luxury Tiles",
    category: "Brand Campaign",
    summary: "Placeholder case study for a future Misbehavity project.",
    // Replace with the final case study asset later.
    imagePath: "/images/case-studies/luxury-tiles.jpg",
  },
  {
    slug: "sleepwell-refresh",
    title: "Sleepwell Refresh",
    category: "Creative Strategy",
    summary: "Placeholder case study for structure and layout testing.",
    // Replace with the final case study asset later.
    imagePath: "/images/case-studies/sleepwell-refresh.jpg",
  },
  {
    slug: "pidilite-launch",
    title: "Pidilite Launch",
    category: "Launch System",
    summary: "Placeholder case study to keep the grid populated for now.",
    // Replace with the final case study asset later.
    imagePath: "/images/case-studies/pidilite-launch.jpg",
  },
];
