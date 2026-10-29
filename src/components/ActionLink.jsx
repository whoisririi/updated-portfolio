import { useId } from 'react'
import Tooltip from './Tooltip'
import WingButton from './WingButton'

// A winged link button. With no href it becomes a gray button whose tooltip explains why.
// newTab={false} is for mailto: links, which should not open a new tab.
export default function ActionLink({ href, label, tone, size, unavailableNote, newTab = true }) {
  const tooltipId = useId()

  if (href) {
    const tabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <WingButton as="a" href={href} tone={tone} size={size} {...tabProps}>
        {label}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </WingButton>
    )
  }

  return (
    <span className="relative inline-flex">
      <WingButton disabled size={size} className="peer" aria-describedby={tooltipId}>
        {label}
      </WingButton>
      <Tooltip id={tooltipId}>{unavailableNote}</Tooltip>
    </span>
  )
}