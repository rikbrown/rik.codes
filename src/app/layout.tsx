import "./tailwind.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import clsx from "clsx"
import { Metadata } from "next"
import { PageContainer } from "@/components/PageContainer"
import { NavBar } from "@/app/NavBar"

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
          <main className="mt-12">{children}</main>

          {/* Footer */}
          <footer className="mt-32 pb-16 ">
            <PageContainer className="border-t border-zinc-100 pt-10 text-xs  leading-5 text-zinc-100 dark:border-zinc-700/40  dark:text-zinc-600">
              &copy; {new Date().getFullYear()} Rik Brown. All rights reserved.
              <br />
              Built using <b>React</b>, <b>Next.js</b> and <b>Tailwind CSS</b>. Hosted on <b>Vercel</b>. Source on <b>Github</b>.
            </PageContainer>
          </footer>
        </div>
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
