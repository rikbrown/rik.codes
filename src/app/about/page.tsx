import { PageContainer } from "@/components/PageContainer"
import { Metadata } from "next"
import { PageHeader } from "@/components/PageHeader"
import { riksAge } from "@/data/riksAge"
import coloradoPhoto from "../../../public/rikcolorado.jpeg"
import { MotionImage } from "@/components/framerComponents"
import { RikLink, RikLinkText } from "@/components/RikLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SOCIALS } from "@/data/socials"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import clsx from "clsx"
import { divider } from "@/styles"

export default function About() {
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">
        <div className="lg:pl-20">
          <MotionImage
            alt="On a hike in Colorado"
            className="h-64 w-64 max-w-none rounded-2xl drop-shadow-md lg:h-84 lg:w-84 "
            src={coloradoPhoto}
            initial={{ rotate: 3, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            transition={{ type: "tween", damping: 5 }}
          />
        </div>
        <div className="space-y-6 lg:order-first lg:row-span-2">
          <PageHeader main={<>Hi, I'm Rik Brown. I've been building software, big and small, for most of my {riksAge} years.</>} />

          <p>
            My first computer program was either a Visual Basic 3.0 "app" that made a picture of <i>Thomas the Tank Engine</i> wink at you, or a virtual
            scrapbook of bad{" "}
            <RikLink href="https://en.wikipedia.org/wiki/PC_Paintbrush" target="_blank">
              Microsoft Paintbrush
            </RikLink>{" "}
            drawings of Roman swords and shields (we were learning about the Romans at school).
          </p>
          <p>
            Either way - I have my Electrical Engineer dad to blame/thank for getting me programming so early. He also didn't approve much of using Visual Basic
            and soon had me translating examples from a library book about BASIC into Turbo Pascal (his language of choice at the time - maybe still).
          </p>
          <p>
            I spent the best part of the last decade working for Amazon. This started after they acquired the UK company I was working for (
            <RikLink href="https://en.wikipedia.org/wiki/LoveFilm" target="_blank">
              LOVEFiLM
            </RikLink>{" "}
            - basically Netflix) and I was thrust into the world of billing migrations. Seeing an excuse to move to Seattle, I was soon involved in building out
            Amazon Video's Digital Rights Management platform, including onboarding Apple's FairPlay DRM. My experience at Amazon culminated in leading a team
            scaling out{" "}
            <RikLink href="https://en.wikipedia.org/wiki/Amazon_Go" target="_blank">
              Amazon Go
            </RikLink>{" "}
            - physical grocery stores that use cameras to identify what you picked up.
          </p>
          <p>
            Nowadays, along with freelancing, I work at Snap, Inc. I own the telemetry client SDKs - web and mobile, with a touch of backend - that log billions
            of events every second across the various Snapchat apps.
          </p>
          <p>
            Outside of the field, my girlfriend and I are avid travellers. Often with our small dog in tow. The cats stay home. When not on the road, we can
            often be found in one of NYC's many restaurants and bars. I try to get back to the UK as much as possible.
          </p>
        </div>
        <div className="space-y-6 text-sm lg:pl-20">
          <div className={clsx("border-b", divider)}>
            <FontAwesomeIcon icon={faLocationDot} className="mr-4 inline h-6 w-6" />
            <span className="">Brooklyn, NY</span>
          </div>
          {SOCIALS.map((social) => (
            <SocialLink key={social.title} {...social} />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}

export const metadata: Metadata = {
  title: "About - Rik Brown",
} as const

function SocialLink({ title, href, icon }: { title: string; href: string; icon: IconDefinition }) {
  return (
    <RikLink {...{ title, href }} target="_blank" type="list">
      <FontAwesomeIcon icon={icon} className="mr-4 inline h-6 w-6" />
      <RikLinkText>Follow on {title}</RikLinkText>
    </RikLink>
  )
}
