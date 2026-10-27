import { useState } from 'react'
import Artwork from '../../components/Artwork'
import { ChevronLeftIcon, ChevronRightIcon } from '../../components/icons'

const tones = ['pink', 'blue', 'mix', 'pink']

const arrow =
  'absolute top-1/2 -mt-4.5 grid size-9 place-items-center rounded-full border-2 border-base-dirty-white bg-base-dirty-white/90 text-base-dark shadow-md ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark'

// Large preview with previous/next arrows and a row of thumbnails.
// Left/right arrow keys work too while focus is inside it.
export default function ShotViewer({ shots, title }) {
  const [index, setIndex] = useState(0)
  const shot = shots[index]
  const go = (step) => setIndex((i) => (i + step + shots.length) % shots.length)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={handleKeyDown}
      className="grid gap-3"
    >
      <div className="relative h-72 overflow-hidden rounded-2xl border-3 border-base-dirty-white shadow-sticker">
        {shot.src ? (
          <img
            src={shot.src}
            alt={shot.label ?? `${title} screenshot ${index + 1}`}
            className="size-full bg-secondary-50 object-contain"
          />
        ) : (
          <Artwork src={null} alt={shot.label} tone={tones[index % tones.length]} className="size-full" />
        )}
        {shot.label && (
          <span className="absolute bottom-3 left-3 rounded-xl bg-base-dirty-white px-2.5 py-0.5 font-display text-caption text-base-dark">
            {shot.label}
          </span>
        )}
        <button type="button" aria-label="Previous screenshot" onClick={() => go(-1)} className={`${arrow} left-2.5`}>
          <ChevronLeftIcon />
        </button>
        <button type="button" aria-label="Next screenshot" onClick={() => go(1)} className={`${arrow} right-2.5`}>
          <ChevronRightIcon />
        </button>
        <p className="sr-only" aria-live="polite">
          Screenshot {index + 1} of {shots.length}
        </p>
      </div>

      <ul className="flex gap-2.5 overflow-x-auto p-1">
        {shots.map((s, i) => (
          <li key={i}>
            <button
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={`block h-14 w-22.5 overflow-hidden rounded-xl border-2 border-base-dirty-white focus-visible:outline-3 focus-visible:outline-base-dark ${i === index ? 'outline-3 outline-base-dark' : ''}`}
            >
              <Artwork src={s.src} alt="" tone={tones[i % tones.length]} className="size-full" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}