import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EyeIcon } from "lucide-react"

export function VisualPortfolio() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono">시각 포트폴리오</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PortfolioItem
            title="Cursor AI 자동화 데모"
            type="유튜브"
            views="5.2K"
            image="/placeholder.svg?height=300&width=400"
          />
          <PortfolioItem
            title="Next.js 15 새로운 기능 소개"
            type="블로그"
            views="3.8K"
            image="/placeholder.svg?height=300&width=400"
          />
          <PortfolioItem
            title="개발자 생산성 향상 강의"
            type="강의"
            views="2.1K"
            image="/placeholder.svg?height=300&width=400"
          />
          <PortfolioItem
            title="자동화 워크플로우 설계"
            type="프로젝트"
            views="1.9K"
            image="/placeholder.svg?height=300&width=400"
          />
          <PortfolioItem
            title="LLM 활용 실무 자동화"
            type="유튜브"
            views="4.7K"
            image="/placeholder.svg?height=300&width=400"
          />
          <PortfolioItem
            title="디자인 시스템 컬러 마이그레이션"
            type="블로그"
            views="2.5K"
            image="/placeholder.svg?height=300&width=400"
          />
        </div>
      </div>
    </section>
  )
}

function PortfolioItem({
  title,
  type,
  views,
  image,
}: {
  title: string
  type: string
  views: string
  image: string
}) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="bg-zinc-800 hover:bg-zinc-700">
            {type}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-zinc-400">
            <EyeIcon className="h-4 w-4" /> {views}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
