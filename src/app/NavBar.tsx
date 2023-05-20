import { LinkProps, NavLink } from "@/app/NavLink"
import { NavHomeLink } from "@/app/NavHomeLink"

export function NavBar() {
  return (
    <div className="flex">
      <div className="flex flex-1 items-center">
        <NavHomeLink />
      </div>
      <div className="flex flex-1 justify-end md:justify-center">
        <div className="pointer-events-auto md:hidden" data-headlessui-state="">
          <button
            className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
            id="headlessui-popover-button-:R2qb6:"
          >
            Menu
            <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
              <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {LINKS.map((link) => (
              <NavLink key={link.title} {...link} />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1" />
    </div>
  )
}

const LINKS: LinkProps[] = [{ title: "About" }, { title: "Projects" }, { title: "Hire" }, { title: "Resume" }]
