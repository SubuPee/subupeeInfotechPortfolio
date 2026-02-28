"use client"

import { useState, useCallback, type ReactNode } from "react"
import { LoadingScreen } from "@/components/loading-screen"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { PageTransition } from "@/components/page-transition"
import { motion } from "framer-motion"

export function AppShell({ children }: { children: ReactNode }) {
  const [loaded, setLoaded] = useState(false)

  const handleComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <LoadingScreen onComplete={handleComplete} />
      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <CustomCursor />
          <Navigation />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
