import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const SOCIALS = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rikbrown",
    icon: faLinkedin,
  },
  {
    title: "Github",
    href: "https://github.com/rikbrown",
    icon: faGithub,
  },
  {
    title: "Instagram (mainly cat photos)",
    href: "https://www.instagram.com/rikontherun/",
    icon: faInstagram,
  },
] as const
