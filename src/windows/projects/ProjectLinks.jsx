import { useId } from 'react'
import Tooltip from '../../components/Tooltip'
import WingButton from '../../components/WingButton'
import { underDevelopmentNote } from '../../data/projects'

const links = [
  { key: 'figma', label: 'view figma file', tone: 'primary' },
  { key: 'website', label: 'visit website', tone: 'secondary' },
]

function ProjectLink({ href, label, tone }) {
  const tooltipId = useId()

  if (href) {
    return (
      <WingButton as="a" href={href} target="_blank" rel="noopener noreferrer" tone={tone} size="sm">
        {label}
        <span className="sr-only"> (opens in a new tab)</span>
      </WingButton>
    )
  }

  // No link yet: a gray button with a tooltip explaining why.
  return (
    <span className="relative inline-flex">
      <WingButton disabled size="sm" className="peer" aria-describedby={tooltipId}>
        {label}
      </WingButton>
      <Tooltip id={tooltipId}>{underDevelopmentNote}</Tooltip>
    </span>
  )
}

// "view figma file" and "visit website". Each turns gray when the project has no link for it.
export default function ProjectLinks({ project }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
      {links.map(({ key, label, tone }) => (
        <ProjectLink key={key} href={project.links?.[key]} label={label} tone={tone} />
      ))}
    </div>
  )
}