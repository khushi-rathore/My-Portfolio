"use client"

import { useEffect, useRef } from "react"

export function SoundManager() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize audio context on first user interaction
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
      }
    }

    // Terminal typing sound (like old computer keyboards)
    const playTypingSound = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()
        const filterNode = audioContextRef.current.createBiquadFilter()

        oscillator.connect(filterNode)
        filterNode.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        // Sharp, clicky typing sound
        oscillator.type = "square"
        oscillator.frequency.setValueAtTime(1200 + Math.random() * 200, audioContextRef.current.currentTime)

        filterNode.type = "highpass"
        filterNode.frequency.setValueAtTime(800, audioContextRef.current.currentTime)

        gainNode.gain.setValueAtTime(0.08, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.05)

        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.05)
      }
    }

    // Terminal command execution sound (like old modem/computer beeps)
    const playCommandSound = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (audioContextRef.current) {
        const oscillator1 = audioContextRef.current.createOscillator()
        const oscillator2 = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()
        const filterNode = audioContextRef.current.createBiquadFilter()

        oscillator1.connect(filterNode)
        oscillator2.connect(filterNode)
        filterNode.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        // Dual tone terminal beep
        oscillator1.type = "square"
        oscillator2.type = "sawtooth"

        oscillator1.frequency.setValueAtTime(440, audioContextRef.current.currentTime)
        oscillator1.frequency.exponentialRampToValueAtTime(880, audioContextRef.current.currentTime + 0.1)

        oscillator2.frequency.setValueAtTime(220, audioContextRef.current.currentTime)
        oscillator2.frequency.exponentialRampToValueAtTime(440, audioContextRef.current.currentTime + 0.1)

        filterNode.type = "bandpass"
        filterNode.frequency.setValueAtTime(1000, audioContextRef.current.currentTime)

        gainNode.gain.setValueAtTime(0.1, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.15)

        oscillator1.start(audioContextRef.current.currentTime)
        oscillator1.stop(audioContextRef.current.currentTime + 0.15)
        oscillator2.start(audioContextRef.current.currentTime)
        oscillator2.stop(audioContextRef.current.currentTime + 0.15)
      }
    }

    // Terminal error/warning sound
    const playErrorSound = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        // Low frequency warning beep
        oscillator.type = "square"
        oscillator.frequency.setValueAtTime(200, audioContextRef.current.currentTime)
        oscillator.frequency.setValueAtTime(150, audioContextRef.current.currentTime + 0.1)
        oscillator.frequency.setValueAtTime(200, audioContextRef.current.currentTime + 0.2)

        gainNode.gain.setValueAtTime(0.12, audioContextRef.current.currentTime)
        gainNode.gain.setValueAtTime(0.06, audioContextRef.current.currentTime + 0.1)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.3)

        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.3)
      }
    }

    // Terminal startup/success sound
    const playStartupSound = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()
        const filterNode = audioContextRef.current.createBiquadFilter()

        oscillator.connect(filterNode)
        filterNode.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        // Ascending terminal boot sound
        oscillator.type = "sawtooth"
        oscillator.frequency.setValueAtTime(220, audioContextRef.current.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(440, audioContextRef.current.currentTime + 0.2)
        oscillator.frequency.exponentialRampToValueAtTime(660, audioContextRef.current.currentTime + 0.4)

        filterNode.type = "lowpass"
        filterNode.frequency.setValueAtTime(2000, audioContextRef.current.currentTime)

        gainNode.gain.setValueAtTime(0.08, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.5)

        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.5)
      }
    }

    // Terminal navigation sound (like old computer disk access)
    const playNavigationSound = () => {
      if (!audioContextRef.current) {
        initAudio()
      }

      if (audioContextRef.current) {
        const oscillator = audioContextRef.current.createOscillator()
        const gainNode = audioContextRef.current.createGain()
        const filterNode = audioContextRef.current.createBiquadFilter()

        oscillator.connect(filterNode)
        filterNode.connect(gainNode)
        gainNode.connect(audioContextRef.current.destination)

        // Quick blip sound
        oscillator.type = "triangle"
        oscillator.frequency.setValueAtTime(800, audioContextRef.current.currentTime)
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioContextRef.current.currentTime + 0.08)

        filterNode.type = "bandpass"
        filterNode.frequency.setValueAtTime(1000, audioContextRef.current.currentTime)

        gainNode.gain.setValueAtTime(0.06, audioContextRef.current.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.08)

        oscillator.start(audioContextRef.current.currentTime)
        oscillator.stop(audioContextRef.current.currentTime + 0.08)
      }
    }

    const handleClick = (e: MouseEvent) => {
      initAudio()
      const target = e.target as HTMLElement

      // Different sounds for different types of clicks
      if (target.tagName === "BUTTON" || target.closest("button")) {
        playCommandSound()
      } else if (target.tagName === "A" || target.closest("a")) {
        playNavigationSound()
      } else if (target.classList.contains("project-card") || target.closest(".project-card")) {
        playStartupSound()
      } else {
        playTypingSound()
      }
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        playNavigationSound()
      }
    }

    // Play startup sound when page loads
    const handlePageLoad = () => {
      setTimeout(() => {
        initAudio()
        playStartupSound()
      }, 1000)
    }

    document.addEventListener("click", handleClick)
    document.addEventListener("mouseover", handleMouseEnter)
    window.addEventListener("load", handlePageLoad)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("mouseover", handleMouseEnter)
      window.removeEventListener("load", handlePageLoad)
    }
  }, [])

  return null
}
