"use client"

import { useTranslations } from "next-intl"
import { Check, Shield, CreditCard, Globe, Search, Code, Database, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export function FeaturesSection() {
  const t = useTranslations("features")

  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: Shield,
      title: t("contentSummaryAgent.title"),
      description: t("contentSummaryAgent.description"),
      image: "/auth-demo.png",
    },
    {
      icon: CreditCard,
      title: t("podcastAgent.title"),
      description: t("podcastAgent.description"),
      image: "/payment-demo.png",
    },
  ]

  // 自动播放功能
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [features.length])

  const IconComponent = features[activeFeature].icon

  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4 animate-fade-in-up">{t("title")}</h2>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 左侧功能列表 */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-500 cursor-pointer hover:translate-y-[-4px] ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary shadow-lg shadow-primary/20"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-md hover:shadow-primary/10"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  {/* 图标 */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-md shadow-primary/30"
                        : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {activeFeature === index ? (
                      <feature.icon className="w-6 h-6" />
                    ) : (
                      <feature.icon className="w-6 h-6" />
                    )}
                  </div>

                  {/* 内容 */}
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                        activeFeature === index ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed transition-colors duration-300 ${
                        activeFeature === index ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 右侧视觉展示 */}
            <div className="relative overflow-hidden rounded-2xl border border-border/50 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary/80 to-primary/5 border border-border shadow-lg">
                {/* 装饰性背景 */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                {/* 主要内容区域 */}
                <div className="relative p-8 min-h-[400px] flex items-center justify-center">
                  {/* 3D效果容器 */}
                  <div className="relative transform transition-all duration-700 hover:scale-105 w-full max-w-md animate-float">
                    {/* 主图片 - 长方形对称布局 */}
                    <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3] bg-card flex items-center justify-center border border-border/50">
                      <img
                        src={features[activeFeature].image || "/placeholder.svg"}
                        alt={features[activeFeature].title}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />

                      {/* 覆盖层效果 */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                      {/* 中央图标展示 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-primary to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                          <IconComponent className="w-10 h-10 text-primary-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* 浮动标签 */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-purple-500 rounded-lg p-3 border border-primary/50 shadow-md shadow-primary/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                        <span className="text-xs font-medium text-white">
                          {t("liveGeneration")}
                        </span>
                      </div>
                    </div>

                    {/* 底部信息卡片 */}
                    <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-4 border border-border/50 shadow-md hover:shadow-lg transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                          <IconComponent className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">{features[activeFeature].title}</div>
                          <div className="text-xs text-muted-foreground">AI Generation</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 进度指示器 */}
              <div className="flex justify-center mt-6 gap-3">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                      activeFeature === index 
                        ? "bg-gradient-to-r from-primary to-purple-500 scale-150 shadow-lg shadow-primary/30"
                        : "bg-secondary hover:bg-primary/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}