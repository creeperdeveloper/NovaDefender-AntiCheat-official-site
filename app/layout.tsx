import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NovaDefender AntiCheat - Minecraft Bedrock Server Protection",
  description:
    "Advanced anti-cheat solution for Minecraft Bedrock Edition servers. Protect your server from cheaters with cutting-edge detection algorithms.",
  keywords: ["minecraft", "bedrock", "anticheat", "server", "protection", "cheat detection"],
  authors: [{ name: "creeper_dev" }],
  creator: "creeper_dev",
  publisher: "NovaDefender",
  robots: "index, follow",
  openGraph: {
    title: "NovaDefender AntiCheat",
    description: "Advanced anti-cheat solution for Minecraft Bedrock Edition servers",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaDefender AntiCheat",
    description: "Advanced anti-cheat solution for Minecraft Bedrock Edition servers",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
