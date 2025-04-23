import type React from "react"
import Link from "next/link"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">By Matthew · Powered by Next.js</p>
            <p className="text-xs text-zinc-500 mt-1"> {new Date().getFullYear()} aidylab.com. All rights reserved.</p>
          </div>

          <div className="flex gap-4">
            <SocialLink href="https://github.com" icon={<GithubIcon className="h-4 w-4" />} />
            <SocialLink href="https://linkedin.com" icon={<LinkedinIcon className="h-4 w-4" />} />
            <SocialLink href="mailto:contact@example.com" icon={<MailIcon className="h-4 w-4" />} />
            <SocialLink href="https://youtube.com" icon={<YoutubeIcon className="h-4 w-4" />} />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors"
    >
      {icon}
    </Link>
  )
}
