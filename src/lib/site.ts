export const site = {
  name: "BIOS",
  fullName: "Black In Open Source",
  description:
    "BIOS (Black In Open Source) is a global community connecting, supporting, and amplifying Black developers, engineers, architects, contributors, maintainers, and technology leaders in open source.",
  url: "https://bios-community.org", // TODO: replace with your real domain once live
  foundedDate: "2024-01-15",
  founder: "Olamide Kosile",
  linkedinGroup: "https://www.linkedin.com/groups/25140003/",
  facebook: "https://www.facebook.com/groups/1027019636324994/",
  github: "https://github.com/Mide69/BIOS",
  email: "hello@bios-community.org", // TODO: replace with your real contact email
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "News" },
  { href: "/join", label: "Join Us" },
];

export const socialLinks = [
  { label: "LinkedIn", href: site.linkedinGroup, icon: "linkedin" as const },
  { label: "Facebook", href: site.facebook, icon: "facebook" as const },
  { label: "GitHub", href: site.github, icon: "github" as const },
];
