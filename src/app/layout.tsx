import "./tailwind.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import clsx from "clsx"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rik Brown | Lead Software Engineer",
  description: "Experienced lead engineer in backend, frontend and mobile environments",
  icons: {
    icon: "/favicon/favicon-32x32.png",
    shortcut: "/favicon/android-chrome-192x192.png",
    apple: "/favicon/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full antialiased" lang="en">
      <body className={clsx("flex h-full flex-col bg-zinc-50  text-zinc-600 dark:bg-black dark:text-zinc-400 ", inter.className)}>
        <div className="fixed inset-0 flex justify-center px-8">
          <div className="flex w-full max-w-7xl bg-white p-8 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">{children}</div>
        </div>
      </body>
    </html>
  )
}
