import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { MobileBlocker } from "@/components/mobile-blocker"
import { LoadingScreen } from "@/components/loading-screen"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Neich Market - Prelaunch Site",
  description:
    "neich market prelaunch site - The future of digital assets with true stability, transparency, and security. Built on the Onli protocol.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LoadingScreen />
        <MobileBlocker />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  )
}
