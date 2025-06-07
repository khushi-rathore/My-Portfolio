import { FaPython, FaDocker, FaAws, FaLinux, FaGithub, FaGitlab, FaJira, FaGit } from "react-icons/fa"
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiCplusplus,
  SiGnubash,
  SiGooglecloud,
  SiGithubactions,
} from "react-icons/si"
import { TbApi, TbCloud } from "react-icons/tb"

interface SkillLogoProps {
  skill: string
  size?: number
}

export function SkillLogo({ skill, size = 32 }: SkillLogoProps) {
  // Map skill names to their respective icons
  const getIcon = () => {
    const iconProps = { size, className: "transition-colors duration-300" }

    switch (skill.toLowerCase()) {
      case "python":
        return (
          <FaPython {...iconProps} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        )
      case "c++":
        return (
          <SiCplusplus
            {...iconProps}
            className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
          />
        )
      case "bash":
        return (
          <SiGnubash {...iconProps} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
        )
      case "aws":
        return (
          <FaAws
            {...iconProps}
            className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300"
          />
        )
      case "azure":
        return (
          <div className="text-blue-600 group-hover:text-blue-500 font-tech text-lg flex items-center justify-center h-8 w-8 transition-colors duration-300 border border-blue-600/30 rounded bg-blue-600/10">
            AZ
          </div>
        )
      case "google cloud":
        return (
          <SiGooglecloud
            {...iconProps}
            className="text-red-400 group-hover:text-red-300 transition-colors duration-300"
          />
        )
      case "docker":
        return (
          <FaDocker {...iconProps} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        )
      case "kubernetes":
        return (
          <SiKubernetes
            {...iconProps}
            className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
          />
        )
      case "jenkins":
        return (
          <SiJenkins {...iconProps} className="text-red-500 group-hover:text-red-400 transition-colors duration-300" />
        )
      case "gitlab ci":
        return (
          <FaGitlab
            {...iconProps}
            className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
          />
        )
      case "github actions":
        return (
          <SiGithubactions
            {...iconProps}
            className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300"
          />
        )
      case "terraform":
        return (
          <SiTerraform
            {...iconProps}
            className="text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
          />
        )
      case "ansible":
        return (
          <SiAnsible {...iconProps} className="text-red-600 group-hover:text-red-500 transition-colors duration-300" />
        )
      case "cloudformation":
        return (
          <TbCloud
            {...iconProps}
            className="text-orange-300 group-hover:text-orange-200 transition-colors duration-300"
          />
        )
      case "prometheus":
        return (
          <SiPrometheus
            {...iconProps}
            className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
          />
        )
      case "grafana":
        return (
          <SiGrafana
            {...iconProps}
            className="text-orange-400 group-hover:text-orange-300 transition-colors duration-300"
          />
        )
      case "elk stack":
        return (
          <SiElasticsearch
            {...iconProps}
            className="text-green-400 group-hover:text-green-300 transition-colors duration-300"
          />
        )
      case "rest apis":
        return (
          <TbApi {...iconProps} className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
        )
      case "linux":
        return (
          <FaLinux
            {...iconProps}
            className="text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300"
          />
        )
      case "git":
        return (
          <FaGit
            {...iconProps}
            className="text-orange-600 group-hover:text-orange-500 transition-colors duration-300"
          />
        )
      case "github":
        return (
          <FaGithub {...iconProps} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
        )
      case "jira":
        return (
          <FaJira {...iconProps} className="text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
        )
      case "agile":
        return (
          <div className="text-green-400 group-hover:text-green-300 font-tech text-lg flex items-center justify-center h-8 w-8 transition-colors duration-300 border border-green-400/30 rounded bg-green-400/10">
            A
          </div>
        )
      default:
        return (
          <div className="text-gray-300 group-hover:text-white font-tech text-lg flex items-center justify-center h-8 w-8 transition-colors duration-300 border border-gray-600/30 rounded bg-gray-600/10">
            {skill.charAt(0).toUpperCase()}
          </div>
        )
    }
  }

  return (
    <div className="group flex flex-col items-center justify-center gap-2 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/30 hover:border-gray-500/50 transition-all duration-300 hover:scale-110 min-w-[100px]">
      <div className="flex items-center justify-center h-12">{getIcon()}</div>
      <span className="text-xs font-code text-gray-400 group-hover:text-white text-center transition-colors duration-300">
        {skill}
      </span>
    </div>
  )
}
