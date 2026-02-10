"use client"

import { Badge } from "@/components/ui/badge"
import { Zap, Code, Cpu, Sparkles } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

export function HeroSection() {
  const pathname = usePathname()
  const locale = useLocale()
  const t = useTranslations("hero")

  // 处理标题分行 - 从翻译文件获取
  const titleText = t("title")
  const titleLines = titleText.split('\n')

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* 顶部标签 */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <Badge
              variant="outline"
              className="px-5 py-2.5 text-sm font-semibold bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {t("badge")}
            </Badge>
          </div>

          {/* 主标题 - 使用品牌渐变色 */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1]">
              {titleLines.map((line: string, index: number) => (
                <div
                  key={index}
                  className="text-gradient-primary py-1.5 px-1 animate-fade-in-up"
                  style={{
                    display: "block",
                    minHeight: "1.2em",
                    overflow: "visible",
                    animationDelay: `${index * 0.1 + 0.2}s`,
                    opacity: 0
                  }}
                >
                  {line}
                </div>
              ))}
            </h1>
          </div>

          {/* 副标题 */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
            {t("description")}
          </p>

          {/* 服务特性标签 */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
            {[
              { icon: Zap, text: t("features.readyToUse") },
              { icon: Cpu, text: t("features.multiScenario") },
              { icon: Code, text: t("features.professionalOutput") },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2.5 bg-secondary/80 rounded-full border border-secondary/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-md hover:scale-105"
                style={{ animationDelay: `${0.8 + index * 0.1}s`, opacity: 0 }}
              >
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.text}</span>
              </div>
            ))}
          </div>




        </div>
      </div>

      {/* 自定义动画 */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}