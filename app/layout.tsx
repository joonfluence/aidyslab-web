import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, JetBrains_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import "@/app/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata = {
  title: "Aidy's Lab - 기술, 교육, 자동화의 경계를 허물다",
  description: "LLM, 실무 자동화, 교육 콘텐츠까지—진짜 개발자가 직접 실험하고 공유합니다.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, jetbrainsMono.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}