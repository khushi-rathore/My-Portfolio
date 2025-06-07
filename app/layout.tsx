import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google"
import "./globals.css"
import { TerminalCursor } from "@/components/terminal-cursor"
import { SoundManager } from "@/components/sound-manager"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Khushi Rathore - Software Engineer",
  description: "Software Engineer passionate about DevOps, Cloud Infrastructure, and building scalable solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
      <body className={inter.className}>
        <TerminalCursor />
        <SoundManager />
        {children}
      </body>
    </html>
  )
}
