"use client"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, X } from "lucide-react"

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

interface ProjectPopupProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export function ProjectPopup({ project, isOpen, onClose }: ProjectPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md border border-gray-700/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-700/50">
          <div>
            <h2 className="text-2xl font-tech text-white mb-2 tracking-wide">{project.title}</h2>
            <div className="text-sm text-gray-400 font-code tracking-wider uppercase">{project.impact}</div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-tech text-white mb-3 tracking-wide">PROJECT OVERVIEW</h3>
            <p className="text-gray-300 leading-relaxed font-light tracking-wide">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-tech text-white mb-3 tracking-wide">TECH STACK</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <Badge
                  key={i}
                  className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border-gray-600 transition-all duration-200 hover:scale-105 font-code tracking-wider"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div>
              <h3 className="text-lg font-tech text-white mb-3 tracking-wide">KEY FEATURES</h3>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-300 flex items-start font-light tracking-wide">
                    <span className="text-white mr-3 font-code">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <div>
              <h3 className="text-lg font-tech text-white mb-3 tracking-wide">CHALLENGES & SOLUTIONS</h3>
              <ul className="space-y-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="text-gray-300 flex items-start font-light tracking-wide">
                    <span className="text-white mr-3 font-code">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-6 py-3 bg-white text-black font-tech tracking-wider uppercase transition-all duration-300 hover:scale-105 rounded-lg"
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-600 text-white font-tech tracking-wider uppercase transition-all duration-300 hover:scale-105 rounded-lg hover:bg-gray-800/50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 hover:border-gray-600/70 transition-all duration-300 group backdrop-blur-sm hover:scale-105 cursor-pointer"
    >
      <div className="mb-4">
        <h3 className="text-card-title font-tech text-white mb-3 group-hover:text-gray-200 transition-colors tracking-wide line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed font-light tracking-wide line-clamp-3">
          {project.description}
        </p>
        <div className="text-sm text-gray-400 mb-4 font-code tracking-wider uppercase">{project.impact}</div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 3).map((tech, i) => (
          <Badge
            key={i}
            variant="outline"
            className="text-xs border-gray-600 text-gray-300 hover:border-gray-500 font-code tracking-wider"
          >
            {tech}
          </Badge>
        ))}
        {project.tech.length > 3 && (
          <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 font-code tracking-wider">
            +{project.tech.length - 3} more
          </Badge>
        )}
      </div>

      <div className="text-gray-400 hover:text-white transition-colors font-code tracking-wider uppercase text-sm">
        Click to view details →
      </div>
    </div>
  )
}
