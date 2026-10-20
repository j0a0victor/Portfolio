import { cn } from "@/lib/utils"
import type { SkillIcon } from "@/types"

interface SkillLogoProps {
  icon: SkillIcon
  className?: string
}

export function SkillLogo({ icon, className }: SkillLogoProps) {
  if (icon.type === "lucide") {
    const Icon = icon.icon
    return (
      <Icon
        aria-hidden="true"
        strokeWidth={1.5}
        className={cn("text-primary", className)}
      />
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill={icon.color}
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}
