"use client"

import Link from "next/link"
import { MoonIcon, SunIcon, RssIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-mono">AidysLab.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/portfolio" className="text-sm font-medium hover:text-zinc-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-zinc-400 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/rss" aria-label="RSS Feed">
            <RssIcon className="h-5 w-5 text-zinc-400 hover:text-white transition-colors" />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
            aria-label="Toggle theme"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}
