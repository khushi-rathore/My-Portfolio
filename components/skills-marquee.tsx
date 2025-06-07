"use client"

import { SkillLogo } from "./skill-logo"
import { useState } from "react"

interface SkillsMarqueeProps {
  skills: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}

export function SkillsMarquee({ skills, direction = "left", speed = "normal" }: SkillsMarqueeProps) {
  const [isHovered, setIsHovered] = useState(false)

  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed]

  const directionClass = direction === "right" ? "animate-marquee-reverse" : ""
  const hoverClass = isHovered ? "animate-marquee-slow" : speedClass

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills]

  return (
    <div
      className="relative overflow-hidden py-8 bg-gradient-to-r from-transparent via-gray-900/20 to-transparent"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex space-x-6">
        <div className={`flex space-x-6 ${hoverClass} ${directionClass}`}>
          {duplicatedSkills.map((skill, index) => (
            <div key={`${skill}-${index}`} className="mx-2">
              <SkillLogo skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  )
}
