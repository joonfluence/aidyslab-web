import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpenIcon, YoutubeIcon, EyeIcon, ThumbsUpIcon, TagIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ContentShowcase() {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono text-zinc-900 dark:text-zinc-100">콘텐츠 소개</h2>

        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpenIcon className="h-4 w-4" /> 블로그
            </TabsTrigger>
            <TabsTrigger value="youtube" className="flex items-center gap-2">
              <YoutubeIcon className="h-4 w-4" /> 유튜브
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <BlogCard
                title="에세이 관리 시스템을 만들어보자 (에세이타운 4편 - Figma Plugin을 이용한 에세이 전시)"
                date="2024/03/17"
                views="1.2K"
                likes="85"
                tags={["에세이타운", "Figma", "Plugin"]}
                image="/placeholder.svg?height=200&width=400"
              />
              <BlogCard
                title="에세이 관리 시스템을 만들어보자 (에세이타운 3편 - Cloudflare Workers, R2를 이용한 웹훅 처리와 CDN 개선)"
                date="2024/03/01"
                views="980"
                likes="72"
                tags={["에세이타운", "Cloudflare", "R2"]}
                image="/placeholder.svg?height=200&width=400"
              />
              <BlogCard
                title="개발자는 왜 Cursor를 사용해야 하는가"
                date="2025/04/06"
                views="2.5K"
                likes="156"
                tags={["생산성", "Cursor", "AI"]}
                image="/placeholder.svg?height=200&width=400"
              />
            </div>

            <div className="flex justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                더 많은 글 보기
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="youtube" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <YoutubeCard
                title="Cursor AI로 개발 생산성 10배 높이기"
                views="3.2K"
                duration="15:42"
                image="/placeholder.svg?height=200&width=400"
              />
              <YoutubeCard
                title="Next.js 15 새로운 기능 총정리"
                views="2.8K"
                duration="12:18"
                image="/placeholder.svg?height=200&width=400"
              />
              <YoutubeCard
                title="LLM을 활용한 실무 자동화 테크닉"
                views="4.5K"
                duration="18:27"
                image="/placeholder.svg?height=200&width=400"
              />
              <YoutubeCard
                title="개발자를 위한 AI 도구 모음"
                views="5.1K"
                duration="20:05"
                image="/placeholder.svg?height=200&width=400"
              />
            </div>

            <div className="flex justify-center">
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                유튜브 채널 방문하기
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function BlogCard({
  title,
  date,
  views,
  likes,
  tags,
  image,
}: {
  title: string
  date: string
  views: string
  likes: string
  tags: string[]
  image: string
}) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
      <div className="aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-zinc-500 mb-2">{date}</div>
        <h3 className="line-clamp-2 text-lg font-semibold mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              <TagIcon className="h-3 w-3 mr-1" /> {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0 text-sm text-zinc-400">
        <div className="flex items-center gap-1">
          <EyeIcon className="h-4 w-4" /> {views}
        </div>
        <div className="flex items-center gap-1">
          <ThumbsUpIcon className="h-4 w-4" /> {likes}
        </div>
      </CardFooter>
    </Card>
  )
}

function YoutubeCard({
  title,
  views,
  duration,
  image,
}: {
  title: string
  views: string
  duration: string
  image: string
}) {
  return (
    <Card className="overflow-hidden border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium">
          {duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/50">
          <div className="rounded-full bg-red-600 p-3">
            <YoutubeIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="line-clamp-2 text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-1 text-sm text-zinc-400">
          <EyeIcon className="h-4 w-4" /> {views} 조회
        </div>
      </CardContent>
    </Card>
  )
}
