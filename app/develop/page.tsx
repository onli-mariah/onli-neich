"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import WorkflowCanvas from "@/components/workflow-canvas"
import { Monitor } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function DevelopPage() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-background flex items-center justify-center p-6 pt-24">
          <div className="max-w-md text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                <Monitor className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-3">Desktop Required</h1>
            <p className="text-muted-foreground leading-relaxed mb-2">
              The workflow canvas is not available on mobile devices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Please use a desktop computer to access the development platform.
            </p>
          </div>
        </main>
      </>
    )
  }

  return (
    <main className="h-screen bg-zinc-950 overflow-hidden">
      <div className="absolute top-4 left-4 z-50">
        <a
          href="/"
          className="px-4 py-2 rounded-lg bg-zinc-900/80 backdrop-blur text-zinc-100 text-sm font-medium hover:bg-zinc-800 transition-colors border border-zinc-800"
        >
          ← Back to Home
        </a>
      </div>
      <WorkflowCanvas eventId="evt_01ABC" />
    </main>
  )
}
