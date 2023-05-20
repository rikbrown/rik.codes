import { classed } from "@tw-classed/react"
import { ReactNode } from "react"

export const Heading = classed.h1("font-bold tracking-tight", {
  defaultVariants: {
    type: "main",
  },
  variants: {
    type: {
      main: "text-5xl",
      sub: "mt-4 text-3xl font-bold tracking-tight",
    },
  },
})

export function PageHeader({ main, sub }: { main: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-6 text-zinc-800 dark:text-zinc-100">
      <Heading>{main}</Heading>
      {sub && <Heading type="sub">{sub}</Heading>}
    </div>
  )
}
