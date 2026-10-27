import Card from '../../components/Card'
import { toolIcons } from '../../lib/assets'

const tones = { primary: 'bg-primary', secondary: 'bg-secondary' }

// "Figma Motion" -> "FM", "HTML" -> "H". Shown until you add src/assets/tools/<id>.png
const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()

// One tool: its icon, name and what you use it for.
export default function ToolCard({ tool, tone }) {
  const icon = toolIcons[tool.id]

  return (
    <Card className="flex h-full items-center gap-3.5">
      {icon ? (
        <img src={icon} alt="" draggable={false} className="size-12 flex-none rounded-xl object-contain" />
      ) : (
        <span
          aria-hidden="true"
          className={`grid size-12 flex-none place-items-center rounded-xl border-3 border-base-dirty-white font-display text-h4 text-base-dark shadow-sticker ${tones[tone]}`}
        >
          {initials(tool.name)}
        </span>
      )}
      <div className="min-w-0">
        <h4>{tool.name}</h4>
        <p className="text-caption">{tool.usage}</p>
      </div>
    </Card>
  )
}