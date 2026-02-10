"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLocale, useTranslations } from "next-intl"
import { HelpCircle, Settings, Lightbulb } from "lucide-react"

export function FAQSection() {
  const locale = useLocale()
  const t = useTranslations("faq")

  const categories = [
    {
      title: t("categories.usage"),
      icon: HelpCircle,
      questions: [
        {
          question: t("usage.howToStart.question"),
          answer: t("usage.howToStart.answer"),
        },
        {
          question: t("usage.voiceQuality.question"),
          answer: t("usage.voiceQuality.answer"),
        },
        {
          question: t("usage.contentOwnership.question"),
          answer: t("usage.contentOwnership.answer"),
        },
        {
          question: t("usage.dataPrivacy.question"),
          answer: t("usage.dataPrivacy.answer"),
        },
      ],
    },
    {
      title: t("categories.pricing"),
      icon: Lightbulb,
      questions: [
        {
          question: t("pricing.pointsExpiry.question"),
          answer: t("pricing.pointsExpiry.answer"),
        },
        {
          question: t("pricing.upgradeAnytime.question"),
          answer: t("pricing.upgradeAnytime.answer"),
        },
        {
          question: t("pricing.enterpriseFeatures.question"),
          answer: t("pricing.enterpriseFeatures.answer"),
        },
      ],
    },
  ]

  return (
    <section className="py-20 relative bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4 animate-fade-in-up">{t("title")}</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{t("description")}</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-secondary/50 rounded-2xl p-8 border border-border shadow-lg animate-fade-in-up"
              style={{ animationDelay: `0.2s + ${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-md">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-primary">{category.title}</h3>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-secondary/30 to-secondary/30 hover:from-secondary/50 hover:to-secondary/50 transition-all duration-500"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gradient-primary hover:text-primary py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-4 bg-card/50 rounded-b-lg border-t border-border/50">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}