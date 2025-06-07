"use client"

import { ProjectCard } from "./project-popup"
import { useState } from "react"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  impact: string
  fullDescription?: string
  features?: string[]
  challenges?: string[]
}

interface ProjectsMarqueeProps {
  projects: Project[]
  onProjectClick: (index: number) => void
  speed?: "slow" | "normal" | "fast"
}

export function ProjectsMarquee({ projects, onProjectClick, speed = "fast" }: ProjectsMarqueeProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed]

  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects]

  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-transparent via-gray-900/10 to-transparent">
      <div className="flex space-x-8">
        <div className={`flex space-x-8 ${speedClass}`}>
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={`flex-shrink-0 w-96 transition-all duration-300 ${
                hoveredIndex === index ? "pause-animation scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationPlayState: hoveredIndex === index ? "paused" : "running",
              }}
            >
              <ProjectCard project={project} onClick={() => onProjectClick(index % projects.length)} />
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
    </div>
  )
}
