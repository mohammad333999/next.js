export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "خانه",
      href: "/dashboard",
    },
    {
      label: "نقشه",
      href: "/myPages/map",
    },
    {
      label: "پروفایل",
      href: "/myPages/profile",
    },
    {
      label: "دسترسی",
      href: "/myPages/access",
    },
    {
      label: "تنظیمات",
      href: "/myPages/settings",
    },
    // {
    //   label: "About",
    //   href: "/myPages/aboutUser",
    // },
  ],
  navMenuItems: [
    {
      label: "خانه",
      href: "/dashboard",
    },
    {
      label: "نقشه",
      href: "/myPages/map",
    },
    {
      label: "پروفایل",
      href: "/myPages/profile",
    },
    {
      label: "دسترسی",
      href: "/myPages/access",
    },
    {
      label: "تنظیمات",
      href: "/myPages/settings",
    },
    // {
    //   label: "About",
    //   href: "/myPages/aboutUser",
    // },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
