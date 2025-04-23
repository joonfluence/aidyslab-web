import { Button } from "@/components/ui/button"
import { ArrowRightIcon, YoutubeIcon, BookOpenIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white dark:bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-100/50 to-white dark:from-zinc-900/50 dark:to-zinc-900 z-0"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-mono leading-tight text-zinc-900 dark:text-white">
            기술, 교육, 자동화의 경계를 실험합니다
          </h1>
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8">
            LLM, 실무 자동화, 교육 콘텐츠까지—진짜 개발자가 직접 실험하고 공유합니다.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="#contact">
                문의하기 <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://joonfluence.tistory.com/" target="_blank" rel="noopener noreferrer">
                <BookOpenIcon className="h-4 w-4" /> 블로그 보러가기
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="https://www.youtube.com/@aidyaibuddy" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="h-4 w-4" /> 유튜브 보기
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FeaturedCard
            title="Cursor 자동화 데모"
            image="/placeholder.svg?height=200&width=400"
            views="2.5K"
            likes="120"
            type="유튜브"
          />
          <FeaturedCard
            title="에세이 관리 시스템 만들기"
            image="/placeholder.svg?height=200&width=400"
            views="1.8K"
            likes="95"
            type="블로그"
          />
          <FeaturedCard
            title="Posty - 소셜 미디어 자동화"
            image="/placeholder.svg?height=200&width=400"
            views="3.2K"
            likes="210"
            type="프로젝트"
          />
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({
  title,
  image,
  views,
  likes,
  type,
}: {
  title: string
  image: string
  views: string
  likes: string
  type: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 transition-all hover:bg-zinc-900/50">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-2 inline-block rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-semibold">{type}</div>
        <h3 className="line-clamp-2 text-lg font-bold">{title}</h3>
        <div className="mt-2 flex items-center gap-3 text-sm text-zinc-400">
          <span>{views} 조회</span>
          <span>{likes} 좋아요</span>
        </div>
      </div>
    </div>
  )
}
