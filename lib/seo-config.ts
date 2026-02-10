export const seoConfig = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || '',
  siteName: 'Seedance 1.5 Pro',
  defaultLocale: 'en',
  locales: ['zh', 'en'],

  // 默认SEO设置
  defaultSEO: {
    zh: {
      title: 'Seedance 1.5 Pro - Ultra-Realistic AI Video Generator',
      description: 'Seedance 1.5 Pro is a free AI video generator for content creators. Generate ultra-realistic 4K videos with perfectly synchronized audio and visuals up to 15 seconds using professional storyboard-based AI.',
      keywords: 'Seedance 1.5 Pro,AI video generator,4K AI video,AI video with sound,video storyboard generator,AI video creation tool,content creators,free AI video'
    },
    en: {
      title: 'Seedance 1.5 Pro - Ultra-Realistic AI Video Generator',
      description: 'Seedance 1.5 Pro is a free AI video generator for content creators. Generate ultra-realistic 4K videos with perfectly synchronized audio and visuals up to 15 seconds using professional storyboard-based AI.',
      keywords: 'Seedance 1.5 Pro,AI video generator,4K AI video,AI video with sound,video storyboard generator,AI video creation tool,content creators,free AI video'
    }
  },

  // 页面特定SEO设置
  pages: {
    blog: {
      zh: {
        title: 'Seedance Blog - AI Video Creation Insights',
        description: 'Explore AI video generation tips, creative workflows, and product updates for Seedance 1.5 Pro. Built for modern content creators.',
        keywords: 'Seedance blog,AI video generation,video creation tips,content creator tools,AI video insights'
      },
      en: {
        title: 'Seedance Blog - AI Video Creation Insights',
        description: 'Explore AI video generation tips, creative workflows, and product updates for Seedance 1.5 Pro. Built for modern content creators.',
        keywords: 'Seedance blog,AI video generation,video creation tips,content creator tools,AI video insights'
      }
    },
    terms: {
      zh: {
        title: 'Terms of Service - Seedance 1.5 Pro',
        description: 'Review the terms of service for Seedance 1.5 Pro AI video generation, including usage rules and user responsibilities.',
        keywords: 'Seedance terms of service,AI video terms,user agreement'
      },
      en: {
        title: 'Terms of Service - Seedance 1.5 Pro',
        description: 'Review the terms of service for Seedance 1.5 Pro AI video generation, including usage rules and user responsibilities.',
        keywords: 'Seedance terms of service,AI video terms,user agreement'
      }
    },
    privacy: {
      zh: {
        title: 'Privacy Policy - Seedance 1.5 Pro',
        description: 'Learn how Seedance 1.5 Pro protects your data, video content, and privacy with secure AI processing.',
        keywords: 'Seedance privacy policy,AI video privacy,data protection'
      },
      en: {
        title: 'Privacy Policy - Seedance 1.5 Pro',
        description: 'Learn how Seedance 1.5 Pro protects your data, video content, and privacy with secure AI processing.',
        keywords: 'Seedance privacy policy,AI video privacy,data protection'
      }
    },
    cookies: {
      zh: {
        title: 'Cookie Policy - Seedance 1.5 Pro',
        description: 'Learn how Seedance 1.5 Pro uses cookies to improve website performance and user experience.',
        keywords: 'Seedance cookie policy,website cookies,user experience'
      },
      en: {
        title: 'Cookie Policy - Seedance 1.5 Pro',
        description: 'Learn how Seedance 1.5 Pro uses cookies to improve website performance and user experience.',
        keywords: 'Seedance cookie policy,website cookies,user experience'
      }
    },

    'what-is-saas': {
      zh: {
        title: 'Seedance 1.5 Pro 的应用场景',
        description: '了解 Seedance 1.5 Pro 在内容创作、短视频、营销视频等场景中的应用。',
        keywords: 'Seedance 应用场景,AI视频用途'
      },
      en: {
        title: 'What Can Seedance 1.5 Pro Be Used For?',
        description: 'Discover how Seedance 1.5 Pro can be used for content creation, short videos, marketing videos, and cinematic storytelling.',
        keywords: 'Seedance use cases,AI video applications,content creation'
      }
    },
    'saas-website-examples': {
      zh: {
        title: 'Seedance 1.5 Pro 使用案例',
        description: '探索 Seedance 1.5 Pro 在不同行业和创作场景中的实际案例。',
        keywords: 'Seedance 案例,AI视频案例'
      },
      en: {
        title: 'Seedance 1.5 Pro Examples and Use Cases',
        description: 'Explore real-world examples of AI videos created with Seedance 1.5 Pro by content creators.',
        keywords: 'Seedance examples,AI video examples'
      }
    },
    'saas-features': {
      zh: {
        title: 'Seedance 1.5 Pro 核心功能',
        description: '深入了解 Seedance 1.5 Pro 的 4K 视频生成、音画同步和分镜能力。',
        keywords: 'Seedance 功能,AI视频功能'
      },
      en: {
        title: 'Seedance 1.5 Pro Features',
        description: 'Learn about Seedance 1.5 Pro features including 4K video output, audio-video sync, and professional storyboard-based AI generation.',
        keywords: 'Seedance features,AI video features,4K AI video'
      }
    }
  },

  // 社交媒体设置
  social: {
    twitter: '@seedanceai',
    email: 'support@seedance.ai',
    wechat: 'seedanceai'
  },

  // 验证码设置
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    bing: process.env.BING_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    baidu: process.env.BAIDU_SITE_VERIFICATION
  },

  // 分析工具设置
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
    baiduAnalytics: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID
  },

  // 图片设置
  images: {
    logo: '/logo.png',
    ogImage: '/logo.png',
    favicon: '/favicon.ico'
  },

  // 结构化数据设置
  organization: {
    name: 'Seedance 1.5 Pro',
    foundingDate: '2025',
    industry: 'AI Video Generation',
    numberOfEmployees: '1-10',
    contactEmail: 'support@seedance.ai',
    url: 'https://seedance.ai',
    description: 'Seedance 1.5 Pro is an AI-powered video generation platform designed for content creators, offering ultra-realistic 4K video with synchronized audio.',
    keywords: ['Seedance 1.5 Pro', 'AI Video Generator', '4K AI Video', 'Content Creation'],
    sameAs: [
      'https://twitter.com/seedanceai'
    ]
  }
}

// 获取页面SEO配置的辅助函数
export function getPageSEO(page: string, locale: string) {
  const pageSEO = seoConfig.pages[page as keyof typeof seoConfig.pages]
  const defaultSEO = seoConfig.defaultSEO[locale as keyof typeof seoConfig.defaultSEO]

  if (pageSEO && pageSEO[locale as keyof typeof pageSEO]) {
    return pageSEO[locale as keyof typeof pageSEO]
  }

  return defaultSEO
}

// 生成完整URL的辅助函数
export function getFullUrl(path: string, locale?: string) {
  const localePrefix = locale ? `/${locale}` : ''
  return `${seoConfig.baseUrl}${localePrefix}${path}`
}

// 生成多语言链接的辅助函数
export function getAlternateLinks(path: string) {
  return seoConfig.locales.reduce((acc, locale) => {
    acc[locale] = getFullUrl(path, locale)
    return acc
  }, {} as Record<string, string>)
}
