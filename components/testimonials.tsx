"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useTranslations, useMessages } from 'next-intl'
import Image from 'next/image'

interface Testimonial {
  id: number
  name: string
  title: string
  content: string
  rating: number
  avatar: string
}

export function Testimonials() {
  const t = useTranslations('testimonials')
  const messages = useMessages()
  const [currentIndex, setCurrentIndex] = useState(0)

  // 从翻译文件读取评价数据
  const testimonials: Testimonial[] = Array.from({ length: 6 }, (_, i) => {
    // Access rating directly from messages object as it's a number, not a string
    const testimonialsMessages = messages.testimonials as any
    const ratingValue = testimonialsMessages?.items?.[i]?.rating ?? 5
    
    return {
      id: i + 1,
      name: t(`items.${i}.name`),
      title: t(`items.${i}.title`),
      content: t(`items.${i}.content`),
      rating: typeof ratingValue === 'number' ? ratingValue : 5,
      avatar: `/avatars/${i + 1}.jpg`
    };
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 relative bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient-primary mb-4 animate-fade-in-up">{t('title')}</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('description')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card/80 to-primary/5 border-0 shadow-2xl ring-1 ring-primary/30 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-12">
              {/* 星级评分 */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-gradient-primary fill-current"
                  />
                ))}
              </div>

              {/* 评价内容 */}
              <blockquote className="text-center mb-8">
                <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-medium">
                  "{currentTestimonial.content}"
                </p>
              </blockquote>

              {/* 用户信息 */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gradient-to-r from-primary to-purple-500 shadow-lg shadow-primary/30">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-xl">
                      {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-foreground">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gradient-primary font-medium">{currentTestimonial.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 导航控件 */}
          <div className="flex items-center justify-center mt-10 space-x-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-primary/50 bg-card hover:bg-primary/10 hover:border-primary text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* 指示器 */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-primary to-purple-500 scale-150 shadow-lg shadow-primary/30'
                      : 'bg-secondary hover:bg-primary/70'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-primary/50 bg-card hover:bg-primary/10 hover:border-primary text-primary transition-all duration-300 hover:shadow-md hover:shadow-primary/20"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}