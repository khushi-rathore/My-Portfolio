"use client"

import { useEffect, useRef } from "react"

export function SpotlightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Wave configuration
    const waves = [
      {
        amplitude: 30,
        frequency: 0.02,
        speed: 0.02,
        color: "rgba(0, 150, 255, 0.3)",
        offset: 0,
        direction: 1,
      },
      {
        amplitude: 20,
        frequency: 0.03,
        speed: 0.025,
        color: "rgba(100, 200, 255, 0.2)",
        offset: Math.PI / 3,
        direction: -1,
      },
      {
        amplitude: 40,
        frequency: 0.015,
        speed: 0.015,
        color: "rgba(0, 255, 200, 0.25)",
        offset: Math.PI / 2,
        direction: 1,
      },
      {
        amplitude: 25,
        frequency: 0.025,
        speed: 0.03,
        color: "rgba(255, 255, 255, 0.1)",
        offset: Math.PI,
        direction: -1,
      },
      {
        amplitude: 35,
        frequency: 0.018,
        speed: 0.02,
        color: "rgba(0, 100, 255, 0.15)",
        offset: Math.PI * 1.5,
        direction: 1,
      },
    ]

    let time = 0

    const animate = () => {
      if (!ctx || !canvas) return

      // Clear with pure black
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.016 // ~60fps

      // Draw electromagnetic waves
      waves.forEach((wave, index) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 1.5
        ctx.globalCompositeOperation = "lighter"

        // Calculate wave position
        const centerY = canvas.height / 2 + Math.sin(time * 0.5 + index) * 50

        // Draw the wave
        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            centerY +
            Math.sin(x * wave.frequency + time * wave.speed * wave.direction + wave.offset) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.3)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()
        ctx.globalCompositeOperation = "source-over"
      })

      // Draw electromagnetic field lines (vertical oscillations)
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width / 8) * i + ((time * 50) % (canvas.width / 4))
        const fieldStrength = Math.sin(time * 2 + i) * 0.5 + 0.5

        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 150, 255, ${0.1 * fieldStrength})`
        ctx.lineWidth = 1
        ctx.globalCompositeOperation = "lighter"

        // Vertical field lines
        for (let y = 0; y <= canvas.height; y += 10) {
          const offset = Math.sin(y * 0.01 + time * 3 + i) * 20 * fieldStrength
          const lineX = x + offset

          if (y === 0) {
            ctx.moveTo(lineX, y)
          } else {
            ctx.lineTo(lineX, y)
          }
        }

        ctx.stroke()
        ctx.globalCompositeOperation = "source-over"
      }

      // Draw electric field pulses
      for (let i = 0; i < 3; i++) {
        const pulseX = ((time * 100 + i * 200) % (canvas.width + 100)) - 50
        const pulseIntensity = Math.sin(time * 4 + i * 2) * 0.5 + 0.5

        // Create radial gradient for pulse
        const gradient = ctx.createRadialGradient(pulseX, canvas.height / 2, 0, pulseX, canvas.height / 2, 80)
        gradient.addColorStop(0, `rgba(0, 200, 255, ${0.3 * pulseIntensity})`)
        gradient.addColorStop(0.5, `rgba(0, 150, 255, ${0.1 * pulseIntensity})`)
        gradient.addColorStop(1, "rgba(0, 100, 255, 0)")

        ctx.beginPath()
        ctx.arc(pulseX, canvas.height / 2, 80, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.globalCompositeOperation = "lighter"
        ctx.fill()
        ctx.globalCompositeOperation = "source-over"
      }

      // Draw interference patterns
      const interferenceSpacing = 100
      for (let x = 0; x < canvas.width; x += interferenceSpacing) {
        for (let y = 0; y < canvas.height; y += interferenceSpacing) {
          const distance1 = Math.sqrt((x - canvas.width * 0.3) ** 2 + (y - canvas.height * 0.3) ** 2)
          const distance2 = Math.sqrt((x - canvas.width * 0.7) ** 2 + (y - canvas.height * 0.7) ** 2)

          const wave1 = Math.sin(distance1 * 0.02 - time * 2)
          const wave2 = Math.sin(distance2 * 0.02 - time * 2)
          const interference = (wave1 + wave2) * 0.5

          const opacity = Math.abs(interference) * 0.1
          const size = 2 + Math.abs(interference) * 3

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 z-0" style={{ background: "#000000" }} />

      {/* Subtle grid overlay for technical feel */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 150, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 150, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      ></div>
    </>
  )
}
