"use client"

import { useEffect, useState } from "react"
import { motion, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isTouch, setIsTouch] = useState(true)

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 })
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 })
  const outerX = useSpring(0, { stiffness: 150, damping: 20 })
  const outerY = useSpring(0, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window
    setIsTouch(isTouchDevice)
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      outerX.set(e.clientX)
      outerY.set(e.clientY)
      setIsVisible(true)

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a") !== null ||
          target.closest("button") !== null,
      )
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [cursorX, cursorY, outerX, outerY])

  if (isTouch) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-primary mix-blend-difference md:block"
        style={{
          x: cursorX,
          y: cursorY,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 2.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden rounded-full border border-primary/50 md:block"
        style={{
          x: outerX,
          y: outerY,
          width: 40,
          height: 40,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          opacity: isVisible ? 0.5 : 0,
          borderColor: isPointer
            ? "var(--primary)"
            : "rgba(59, 130, 246, 0.4)",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  )
}
