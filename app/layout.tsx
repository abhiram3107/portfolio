import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mukkawar Abhiram - AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Mukkawar Abhiram, an AI/ML Engineer and Full Stack Developer specializing in AI technologies and web development.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250311-WA0051.jpg-uaNRJrlP1BPFjvQUEzvnbAUK80AuCy.jpeg"
          as="image"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
