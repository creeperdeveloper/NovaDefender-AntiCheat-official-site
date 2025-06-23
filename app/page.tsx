"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DownloadSection } from "@/components/download"
import { DeveloperSection } from "@/components/developer"
import { DonateSection } from "@/components/donate"
import { Footer } from "@/components/footer"
import { LanguageProvider, ThemeProvider } from "@/lib/contexts"

export default function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Header />
          <main>
            <Hero />
            <Features />
            <DownloadSection />
            <DeveloperSection />
            <DonateSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
