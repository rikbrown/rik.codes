import Image from "next/image"

export default function Home() {
  return (
    <main className="">
      <div className="max-w-2xl">
        <img alt="Photo of Rik" src="/avatar.jpeg" className="h-24 w-24 rounded-full" />
        <div className="mt-8 text-zinc-800 dark:text-zinc-100">
          <h1 className="text-5xl font-bold tracking-tight">Lead Software Engineer.</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">10+ years of professional experience in cloud computing, mobile and web development.</h2>
        </div>
        <div className="mt-8 ">
          Hi! I'm Rik, a software engineer based in Brooklyn, NY. I have over a decade of experience working in Big Tech like Amazon and Snap - from creating
          Digital Rights Management systems, to scaling computer-vision-powered grocery stores, and now building Snapchat's high volume telemetry SDKs.
        </div>
      </div>
    </main>
  )
}
