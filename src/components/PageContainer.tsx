import { classed } from "@tw-classed/react"

export const PageContainer = classed.div("mx-auto max-w-7xl py-4", {
  variants: {
    padding: {
      none: "px-0",
      default: "px-16",
    },
  },
  defaultVariants: {
    padding: "default",
  },
})
