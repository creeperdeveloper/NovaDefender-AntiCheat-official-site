"use client"

import { motion } from "framer-motion"
import { Github, Heart } from "lucide-react"
import { useLanguage } from "@/lib/contexts"
import { TRANSLATIONS, SITE_CONFIG } from "@/lib/config"

export function Footer() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </motion.div>

          <div className="flex justify-center space-x-8 mb-6 sm:mb-8">
            <motion.a
              whileHover={{ y: -2 }}
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">GitHub</span>
            </motion.a>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8 space-y-2">
            <p className="text-xs sm:text-sm text-gray-400 px-4">{t.footer.copyright}</p>
            <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center px-4">
              {t.footer.madeWith.split("❤️")[0]}
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 mx-1" />
              {t.footer.madeWith.split("❤️")[1]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
