import Image from "next/image"
import avatarPic from "../../public/avatar.jpeg"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MotionLink } from "@/components/motionWrappers"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

export default function Home() {
  return (
    <main className="">
      <div className="max-w-2xl">
        <Image alt="Photo of Rik" src={avatarPic} className="e h-24 w-24 rounded-full" />
        <div className="mt-8 text-zinc-800 dark:text-zinc-100">
          <h1 className="text-5xl font-bold tracking-tight">Lead Software Engineer.</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">10+ years of professional experience in cloud computing, mobile and web development.</h2>
        </div>
        <div className="mt-6 leading-7">
          Hi! <b>I'm Rik</b>, a software engineer based in Brooklyn, NY. I have over a decade of experience as a tech lead working in Big Tech like Amazon and
          Snap - from creating Digital Rights Management systems, to scaling computer-vision-powered grocery stores, and now building Snapchat's high volume
          telemetry SDKs.
        </div>
        <div className="mt-6 flex items-center gap-x-6">
          <button
            type="button"
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Hire me!
          </button>
          <SocialLink title="LinkedIn" href="https://www.linkedin.com/in/rikbrown" icon={faLinkedin} />
          <SocialLink title="Github" href="https://github.com/rikbrown" icon={faGithub} />
          <SocialLink title="Instagram (mainly cat photos)" href="https://www.instagram.com/rikontherun/" icon={faInstagram} />
        </div>
      </div>
    </main>
  )
}

function SocialLink({ title, href, icon }: { title: string; href: string; icon: IconDefinition }) {
  return (
    <MotionLink {...{ title, href }} target="_blank" className="text-white opacity-60" whileHover={{ opacity: 1 }}>
      <FontAwesomeIcon icon={icon} className="h-6 w-6" />
    </MotionLink>
  )
}
