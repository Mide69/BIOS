export const site = {
  name: "BIOS",
  fullName: "Black In Open Source",
  description:
    "BIOS (Black In Open Source) is a community for Black developers, engineers, designers, DevOps professionals, cloud practitioners, technical writers, maintainers, and technology enthusiasts building, contributing, and leading in the open-source ecosystem.",
  tagline: "Building. Contributing. Leading.",
  url: "https://blackinopensource.org",
  foundedDate: "2024-01-15",
  founder: "Olamide Kosile",
  linkedinGroup: "https://www.linkedin.com/groups/25140003/",
  facebook: "https://www.facebook.com/groups/1027019636324994/",
  github: "https://github.com/Mide69/BIOS",
  email: "hello@blackinopensource.org", // TODO: activate this mailbox (see free business email options we discussed)
  googleAnalyticsId: "G-3STXQE21D5",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/resources", label: "Resources" },
  { href: "/join", label: "Join Us" },
];

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedinGroup, icon: "linkedin" as const },
  { label: "Facebook", href: site.facebook, icon: "facebook" as const },
  { label: "GitHub", href: site.github, icon: "github" as const },
];
