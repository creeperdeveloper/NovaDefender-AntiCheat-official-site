"use client"

import { motion } from "framer-motion"
import { Github, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/contexts"
import { TRANSLATIONS, SITE_CONFIG } from "@/lib/config"

export function DeveloperSection() {
  const { language } = useLanguage()
  const t = TRANSLATIONS[language]

  return (
    <section id="developer" className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.developer.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            {t.developer.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                >
                  <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden bg-white">
                    <img
                      src="/images/creeper-icon.png"
                      alt="creeper_dev avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <CardHeader className="text-center pt-16 pb-4">
                <CardTitle className="text-2xl sm:text-3xl font-bold">{t.developer.name}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                  @{SITE_CONFIG.developer.github}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto px-4">
                  {t.developer.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white" asChild>
                    <a href={SITE_CONFIG.developer.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      {t.developer.githubBtn}
                    </a>
                  </Button>

                  <Button variant="outline" size="lg" asChild>
                    <a href={SITE_CONFIG.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Star className="w-5 h-5 mr-2" />
                      {t.developer.projectsBtn}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
