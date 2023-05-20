import { ReactNode } from "react"
import Link from "next/link"
import { classed } from "@tw-classed/react"
import clsx from "clsx"

function BaseButton({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link href={href}>
      <button
        type="button"
        className={clsx(
          "rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
          "duration-250 transition-transform hover:scale-110 active:scale-90 "
        )}
      >
        {children}
      </button>
    </Link>
  )
}

export const Button = classed(BaseButton)
