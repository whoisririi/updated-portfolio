import ActionLink from '../../components/ActionLink'
import { underDevelopmentNote } from '../../data/projects'

const links = [
  { key: 'figma', label: 'access figma file', tone: 'primary' },
  { key: 'website', label: 'visit website', tone: 'secondary' },
]

// disabled button when no link and it has a tooltip
export default function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
      {links.map(({ key, label, tone }) => (
        <ActionLink
          key={key}
          href={project.links?.[key]}
          label={label}
          tone={tone}
          size="xs"
          unavailableNote={underDevelopmentNote}
        />
      ))}
    </div>
  )
}