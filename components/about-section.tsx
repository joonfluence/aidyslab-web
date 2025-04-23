import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CodeIcon, BriefcaseIcon, YoutubeIcon } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-zinc-950 dark:bg-zinc-900">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-mono">나에 대하여</h2>

          <div className="mb-10">
            <p className="text-xl mb-6 text-zinc-300 dark:text-zinc-200">
              "4년 차 백엔드 개발자에서, 실전 자동화를 연구하는 테크 크리에이터로"
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Next.js", "React", "Node.js", "TypeScript", "Python", "LLM", "자동화", "교육"].map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <TimelineItem
              year="2020-2022"
              title="스타트업 백엔드 개발자"
              description="클라우드 인프라 및 백엔드 시스템 설계"
              icon={<CodeIcon className="h-5 w-5" />}
            />
            <TimelineItem
              year="2022-2023"
              title="기술 창업"
              description="자동화 솔루션 개발 및 배포"
              icon={<BriefcaseIcon className="h-5 w-5" />}
            />
            <TimelineItem
              year="2023-현재"
              title="테크 크리에이터"
              description="교육 콘텐츠 제작 및 기술 컨설팅"
              icon={<YoutubeIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({
  year,
  title,
  description,
  icon,
}: {
  year: string
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card className="border-zinc-800 bg-zinc-900/50">
      <CardContent className="flex items-start gap-4 p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800">{icon}</div>
        <div>
          <div className="text-sm font-medium text-zinc-500">{year}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-zinc-400">{description}</p>
          <div className="mt-2 text-sm font-medium text-emerald-500">실험 결과: 성공적인 프로젝트 다수 진행</div>
        </div>
      </CardContent>
    </Card>
  )
}
