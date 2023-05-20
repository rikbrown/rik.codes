import Image from "next/image"
import avatarPic from "../../../public/avatar.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { Button } from "@/components/Button"
import Link from "next/link"
import { PageContainer } from "@/components/PageContainer"
import { Gallery } from "@/app/(home)/Gallery"
import { PageHeader } from "@/components/PageHeader"
import { SOCIALS } from "@/data/socials"

export default function Home() {
  return (
    <>
      <PageContainer>
        <section className="max-w-2xl">
          <Image priority alt="Photo of Rik Brown" src={avatarPic} className="mb-8 h-24 w-24 rounded-full" />

          <PageHeader main={<>Lead Software Engineer.</>} sub={<>10+ years of professional experience in cloud computing, mobile and web development.</>} />
          <div>
            Hi! <b>I'm Rik</b>, a software engineer based in Brooklyn, NY. I have over a decade of experience as a tech lead working in Big Tech including
            Amazon and Snap - from creating Digital Rights Management systems, to scaling computer vision-powered grocery stores, and now building Snapchat's
            high volume telemetry SDKs.
          </div>
          <div className="mt-6 flex items-center gap-x-6">
            <Button href="/hire">Hire me!</Button>
            {SOCIALS.map((social) => (
              <SocialLink key={social.title} {...social} />
            ))}
          </div>
        </section>
      </PageContainer>
      <div className="mt-12">
        <Gallery />
      </div>
    </>
  )
}

function SocialLink({ title, href, icon }: { title: string; href: string; icon: IconDefinition }) {
  return (
    <Link {...{ title, href }} target="_blank" className="text-white opacity-60 transition-opacity duration-300 hover:opacity-100">
      <FontAwesomeIcon icon={icon} className="h-6 w-6" />
    </Link>
  )
}
