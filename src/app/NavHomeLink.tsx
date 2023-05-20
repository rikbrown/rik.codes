"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import avatarPic from "../../public/avatar.jpeg"
import Image from "next/image"
import clsx from "clsx"
import { RikLink } from "@/components/RikLink"

export function NavHomeLink() {
  const segment = useSelectedLayoutSegment()

  return (
    <RikLink href="/" title="Home" className={clsx("group flex items-center transition-all duration-300", segment === "(home)" && "opacity-0")}>
      <Image
        priority
        alt="Photo of Rik Brown"
        src={avatarPic}
        className={clsx(
          "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  transition-all duration-300 group-hover:ring-indigo-400 dark:bg-zinc-800/90 dark:ring-white/10"
        )}
      />
      <span className="ml-2 text-xs">← Back</span>
    </RikLink>
  )
}
