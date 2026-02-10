"use client"

import { ReactNode } from 'react'

interface PageBackgroundProps {
  children: ReactNode
  className?: string
}

export function PageBackground({ children, className = "" }: PageBackgroundProps) {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* 科技风格背景层 */}
      <div className="absolute inset-0 bg-background">
        {/* 微妙的渐变叠加 */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple/5 opacity-50" />
        
        {/* 网格背景效果 */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(22, 93, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 93, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* 装饰性线条 */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      
      {/* 内容区域 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}