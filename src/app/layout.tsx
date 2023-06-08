import "./tailwind.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import clsx from "clsx"
import { Metadata } from "next"
import { PageContainer } from "@/components/PageContainer"
import { NavBar } from "@/app/NavBar"
import { RikLink } from "@/components/RikLink"
import { divider } from "@/styles"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className={clsx("flex h-full flex-col bg-zinc-50 text-zinc-600 dark:bg-black dark:text-zinc-400 ", inter.className)}>
        {/* Build the background separately from the content so we can break out of it for things like the gallery carousel */}
        <div className="fixed inset-0 flex justify-center px-8">
          <div className="flex w-full max-w-7xl flex-col bg-white p-8 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
        </div>

        {/* Content container starts here */}
        <div className="relative">
          {/* Nav bar */}
          <PageContainer>
            <NavBar />
          </PageContainer>

          {/* Child page */}
          <main className="mt-12 leading-7">{children}</main>

          {/* Footer */}
          <footer className="mt-16 px-8 pb-16">
            <PageContainer
              className={clsx(divider, "border-t border-t-zinc-100 pt-10  text-xs leading-5  text-zinc-500 dark:border-t-zinc-300/20 dark:text-zinc-600")}
            >
              &copy; {new Date().getFullYear()} Rik Brown. All rights reserved.
              <br />
              Built using{" "}
              <RikLink href="https://react.dev/" target="_blank">
                React
              </RikLink>
              ,{" "}
              <RikLink href="https://nextjs.org/" target="_blank">
                Next.js
              </RikLink>{" "}
              and{" "}
              <RikLink href="https://tailwindcss.com/" target="_blank">
                Tailwind CSS
              </RikLink>
              . Hosted on{" "}
              <RikLink href="https://vercel.com/dashboard" target="_blank">
                Vercel
              </RikLink>
              . Source on{" "}
              <RikLink href="https://github.com/rikbrown/rik.codes" target="_blank">
                Github
              </RikLink>
              .
            </PageContainer>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Rik Brown - Lead Software Engineer",
  description: "Experienced lead engineer in backend, frontend and mobile environments",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/android-chrome-192x192.png",
    apple: "/favicon/apple-touch-icon.png",
  },
} as const
