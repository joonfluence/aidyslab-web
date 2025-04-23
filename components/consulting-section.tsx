"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { GithubIcon, LinkedinIcon, MailIcon, YoutubeIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ConsultingSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/consulting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || '데이터 전송에 실패했습니다.');
      }
  
      setFormSubmitted(true);
      // 폼 초기화
      setFormData({
        name: "",
        email: "",
        message: "",
        checkbox: false
      });
    } catch (error) {
      console.error('에러 발생:', error);
      // 에러 처리 로직 추가
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">컨설팅/교육/문의</h2>
            <p className="text-lg text-zinc-300 mb-8">
              강의, 기획, 교육 관련 협업 제안이나 문의사항이 있으시면 언제든지 연락주세요. 함께 성장하고 가치를 나누는
              기회가 되길 기대합니다.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">서비스 영역</h3>
              <div className="grid grid-cols-2 gap-3">
                <ServiceItem label="기술 컨설팅" />
                <ServiceItem label="개발자 교육" />
                <ServiceItem label="콘텐츠 제작" />
                <ServiceItem label="자동화 솔루션" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-600 hover:bg-emerald-700">컨설팅 만족도 98%</Badge>
                <Badge variant="outline">2회 이상 강의/컨설팅 제공</Badge>
              </div>

              <div className="flex gap-4">
                <SocialLink href="https://github.com" icon={<GithubIcon className="h-5 w-5" />} />
                <SocialLink href="https://linkedin.com" icon={<LinkedinIcon className="h-5 w-5" />} />
                <SocialLink href="mailto:contact@example.com" icon={<MailIcon className="h-5 w-5" />} />
                <SocialLink href="https://youtube.com" icon={<YoutubeIcon className="h-5 w-5" />} />
              </div>
            </div>
          </div>

          <div>
            <Card className="border-zinc-800 bg-zinc-900/50">
              <CardHeader>
                <CardTitle>문의하기</CardTitle>
                <CardDescription>아래 양식을 작성하여 문의사항을 보내주세요.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름</Label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={(value) => handleInputChange("name", value)}
                      placeholder="홍길동" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">이메일</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={(value) => handleInputChange("email", value)}
                      placeholder="example@email.com" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">문의내용</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={(value) => handleInputChange("message", value)}
                      placeholder="문의 내용을 입력해주세요." 
                      className="min-h-[120px]" 
                      required 
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="checkbox" 
                      checked={formData.checkbox}
                      onCheckedChange={(checked) => handleInputChange("checkbox", !!checked)}
                    />
                    <Label htmlFor="checkbox" className="text-sm font-normal">
                      개인정보 수집 및 이용에 동의합니다.
                    </Label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={formSubmitted}>
                    {formSubmitted ? "전송 완료!" : "문의하기"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id={label} />
      <Label htmlFor={label} className="font-normal">
        {label}
      </Label>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white transition-colors"
    >
      {icon}
    </a>
  )
}
