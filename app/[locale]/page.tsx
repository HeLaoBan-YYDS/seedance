"use client"

import { useEffect } from "react"

import { Navbar } from "@/components/navbar"
import { VideoGeneratorTool } from "@/components/video-generator-tool"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { FAQSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo"
import { Footer } from "@/components/footer"
import { PageBackground } from "@/components/page-background"

export default function ChinesePage() {
  useEffect(() => {
    // 处理URL中的锚点
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      // 延迟滚动，确保页面完全加载
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <PageBackground>

      <Navbar />
      <main>
        {/* AI Video Generation Tool - Placed at the top of the homepage */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4">
          <VideoGeneratorTool />
        </div>
        {/* Sticky Scroll Reveal Effect */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <StickyScrollRevealDemo />
        </div>
        <HeroSection />
        <FeaturesSection />
        <Testimonials />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </PageBackground>
  )
}
