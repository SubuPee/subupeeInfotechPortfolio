"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-9 animate-pulse rounded-lg border border-border/50 bg-secondary/50" />
    )
  }

  const isDark = resolvedTheme === "dark"

  function cycleTheme() {
    if (theme === "dark") {
      setTheme("light")
    } else if (theme === "light") {
      setTheme("dark")
    } else {
      // system -> dark
      setTheme("dark")
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        "group relative flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300",
        "border-border/50 bg-secondary/50 hover:border-primary/50 hover:bg-primary/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      <Sun
        size={16}
        className={cn(
          "absolute transition-all duration-500",
          isDark
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100 text-amber-500"
        )}
      />
      <Moon
        size={16}
        className={cn(
          "absolute transition-all duration-500",
          isDark
            ? "rotate-0 scale-100 opacity-100 text-primary"
            : "-rotate-90 scale-0 opacity-0"
        )}
      />
    </button>
  )
}
