"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Globe, Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage, useTheme } from "@/lib/contexts"
import { TRANSLATIONS, SITE_CONFIG } from "@/lib/config"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = TRANSLATIONS[language]

  const navItems = [
    { key: "home", href: "#home" },
    { key: "features", href: "#features" },
    { key: "download", href: "#download" },
    { key: "developer", href: "#developer" },
    { key: "donate", href: "#donate" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm xl:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {t.nav[item.key as keyof typeof t.nav]}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "ja" : "en")}
              className="hidden sm:flex text-xs sm:text-sm"
            >
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {language.toUpperCase()}
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>

            <Button variant="ghost" size="sm" asChild className="hidden md:flex">
              <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>

            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "ja" : "en")}
                className="justify-start sm:hidden"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language === "en" ? "日本語" : "English"}
              </Button>
              <Button variant="ghost" size="sm" asChild className="justify-start md:hidden">
                <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
