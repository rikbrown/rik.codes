import animalsPic from "../../../public/animals.jpeg"
import stacksPic from "../../../public/stacks.jpg"
import snapPic from "../../../public/snap.jpg"
import Image, { StaticImageData } from "next/image"
import { MotionDiv } from "@/components/framerComponents"

export function Gallery() {
  return (
    <section className="mt-12 flex justify-center gap-x-8">
      <GalleryItem alt="(My pets are not actually part of my portfolio, but they're pretty cute)" src={animalsPic} />
      <GalleryItem alt="Co-founder/lead eng for Stacks Learning - an ed-tech startup" src={stacksPic} odd />
      <GalleryItem alt="Redesigned Snap's telemetry protocol on mobile and web" src={snapPic} />
    </section>
  )
}

function GalleryItem({ alt, src, odd }: { alt: string; src: StaticImageData; odd?: boolean }) {
  // This could just use Tailwind's transitions, but use Framer Motion in case I want to animate these appearing more dramatically.
  return (
    <MotionDiv
      className="flex flex-col gap-y-1"
      initial={{ rotate: odd ? 3 : -3, scale: 1 }}
      whileHover={{ rotate: 0, scale: 1.05 }}
      transition={{ type: "tween", damping: 5 }}
    >
      <Image priority placeholder="blur" {...{ alt, src }} className="h-60 w-84 max-w-none rounded-2xl object-cover drop-shadow-md xl:h-80 xl:w-112" />
      <div className="hidden text-center text-sm tracking-tight text-zinc-800 drop-shadow-sm dark:text-zinc-100 xl:block">{alt}</div>
    </MotionDiv>
  )
}
