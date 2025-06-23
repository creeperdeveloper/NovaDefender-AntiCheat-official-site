"use client"

import { motion } from "framer-motion"
import { Download, Github, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/contexts"
import { TRANSLATIONS, SITE_CONFIG } from "@/lib/config"

export function Hero() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-blue-500/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            {SITE_CONFIG.version} - Latest Release
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4 sm:mb-6"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.hero.downloadBtn}
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-gray-300 dark:border-gray-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              asChild
            >
              <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                {t.hero.githubBtn}
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 sm:mt-16 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
              <span>Active Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
              <span>Open Source</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>GP3 License</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
