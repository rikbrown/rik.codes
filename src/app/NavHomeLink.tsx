"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import avatarPic from "../../public/avatar.jpeg"
import Image from "next/image"
import Link from "next/link"
import clsx from "clsx"

export function NavHomeLink() {
  const segment = useSelectedLayoutSegment()

  return (
    <Link href="/" title="Home">
      <Image
        priority
        alt="Photo of Rik Brown"
        src={avatarPic}
        className={clsx(
          "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  hover:ring-indigo-400 dark:bg-zinc-800/90 dark:ring-white/10",
          "transition-all duration-300",
          segment === "(home)" && "opacity-0"
        )}
      />
    </Link>
  )
}
