import { useId } from 'react'
import SocialIcon from '../../components/SocialIcon'
import Tooltip from '../../components/Tooltip'
import { unavailableNotes } from '../../data/contact'

const tile =
  'grid size-14 place-items-center rounded-2xl border-3 border-base-dirty-white ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark'

const tones = { primary: 'bg-primary', secondary: 'bg-secondary' }

// One social icon tile. Opens in a new tab, or turns gray with a tooltip when there is no link yet.
export default function SocialLink({ social, tone }) {
  const tooltipId = useId()

  return (
    <div className="grid justify-items-center gap-1">
      <span className="relative inline-flex">
        {social.href ? (
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (opens in a new tab)`}
            className={`${tile} ${tones[tone]} text-secondary-500 shadow-sticker transition-transform hover:-translate-y-1 focus-visible:-translate-y-1 motion-reduce:transition-none`}
          >
            <SocialIcon id={social.id} />
          </a>
        ) : (
          <>
            <button
              type="button"
              aria-disabled="true"
              aria-label={social.label}
              aria-describedby={tooltipId}
              className={`peer ${tile} cursor-not-allowed bg-gray-200 text-gray-600 shadow-[0_3px_0_var(--color-gray-300)]`}
            >
              <SocialIcon id={social.id} />
            </button>
            <Tooltip id={tooltipId}>{unavailableNotes.social}</Tooltip>
          </>
        )}
      </span>
      <span className="text-caption">{social.label}</span>
    </div>
  )
}