import { classed } from "@tw-classed/react"
import Link from "next/link"

export const RikLink = classed(Link, {
  defaultVariants: {
    type: "subtle",
  },
  variants: {
    type: {
      subtle: "font-bold hover:text-zinc-600 dark:hover:text-zinc-300",
      list: "group/link flex items-center transition hover:text-indigo-500 dark:hover:text-indigo-400",
    },
  },
})

export const RikLinkText = classed.span("text-zinc-800 group-hover/link:text-indigo-500 dark:text-zinc-100 group-hover/link:dark:text-indigo-400")
