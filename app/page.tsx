import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContentShowcase } from "@/components/content-showcase"
import { ConsultingSection } from "@/components/consulting-section"
import { VisualPortfolio } from "@/components/visual-portfolio"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ContentShowcase />
        <ConsultingSection />
        <VisualPortfolio />
      </main>
      <Footer />
    </div>
  )
}
