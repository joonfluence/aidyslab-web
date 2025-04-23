"use client"

import Link from "next/link"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // 앵커 링크인 경우에만 처리
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm dark:bg-zinc-950/80 dark:border-zinc-700">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold font-mono">AidysLab.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="#portfolio" 
            className="text-sm font-medium hover:text-zinc-400 transition-colors"
            onClick={(e) => handleSmoothScroll(e, '#portfolio')}
          >
            Portfolio
          </Link>
          <Link 
            href="#about" 
            className="text-sm font-medium hover:text-zinc-400 transition-colors"
            onClick={(e) => handleSmoothScroll(e, '#about')}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-700"
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
