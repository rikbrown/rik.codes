"use client"

import Link from "next/link"
import clsx from "clsx"
import { useSelectedLayoutSegment } from "next/navigation"

export function NavLink({ title, href }: LinkProps) {
  href ??= `/${title.toLowerCase()}`
  const segment = useSelectedLayoutSegment()
  const active = href === `/${segment}`

  return (
    <li>
      <Link
        className={clsx(
          "relative block px-3 py-2 transition hover:text-indigo-500 dark:hover:text-indigo-400",
          active && "text-indigo-500 dark:text-indigo-400",
          "transform-all duration-300"
        )}
        href={href}
      >
        {title}
        <span
          className={clsx(
            "absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0",
            "transition-opacity duration-300",
            !active && "opacity-0"
          )}
        ></span>
      </Link>
    </li>
  )
}

export type LinkProps = { title: string; href?: string }
