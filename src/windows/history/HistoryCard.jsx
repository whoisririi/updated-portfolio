import { useLayoutEffect, useRef } from 'react'
import Emphasis from '../../components/Emphasis'
import { WingIcon } from '../../components/icons'

const BORDER = 4 // the card's 2px border, top and bottom

// One experience, laid out like a resume entry.
// Collapsed: company, dates and role pills. Active: bigger, floating, with bullets and a wing.
export default function HistoryCard({ entry, isActive, height, onSelect, onMeasure }) {
  const contentRef = useRef(null)

  // Reports the card's natural height (and keeps doing so if the window is resized and the
  // text wraps differently), so the card and the timeline dots always fit the content.
  useLayoutEffect(() => {
    const el = contentRef.current
    const report = () => {
      if (el.offsetHeight > 0) onMeasure(entry.id, el.offsetHeight + BORDER)
    }
    report()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(report)
    observer.observe(el)
    return () => observer.disconnect()
  }, [entry.id, isActive, onMeasure])

  return (
    <div
      style={{ height }}
      className={
        'relative mr-10 origin-left transition-[height,opacity,scale] duration-300 motion-reduce:transition-none ' +
        (isActive ? 'animate-float opacity-100 motion-reduce:animate-none' : 'scale-94 opacity-60')
      }
    >
      <div
        className={
          'h-full overflow-hidden rounded-2xl border-2 ' +
          (isActive ? 'border-primary bg-primary-50' : 'border-primary-100 bg-base-white')
        }
      >
        <div ref={contentRef}>
          <button
            type="button"
            aria-expanded={isActive}
            onClick={onSelect}
            className={`block w-full p-4 text-left focus-visible:-outline-offset-4 focus-visible:outline-2 focus-visible:outline-base-dark ${isActive ? 'pb-2.5' : ''}`}
          >
            <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span className="font-display text-h3 text-base-dark">{entry.place}</span>
              <span className="flex-none text-caption text-gray-600">{entry.dates}</span>
            </span>
            <span className="mt-2 flex flex-wrap gap-2">
              {entry.roles.map((role, i) => (
                <span
                  key={`${i}-${role}`}
                  className="rounded-full border-2 border-secondary bg-base-dirty-white px-3 py-0.5 text-caption font-semibold text-base-dark"
                >
                  {role}
                </span>
              ))}
            </span>
          </button>

          {isActive && (
            <ul className="grid gap-1.5 px-4 pb-4">
              {entry.bullets.map((bullet, i) => (
                <li key={`${i}-${bullet}`} className="flex gap-2.5 text-caption">
                  <span aria-hidden="true" className="mt-1.5 size-1.5 flex-none rounded-full bg-secondary" />
                  <span>
                    <Emphasis text={bullet} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isActive && (
        <WingIcon className="pointer-events-none absolute top-1/2 -right-10.5 -mt-3.75 h-7.5 w-9.5 origin-left animate-wing motion-reduce:animate-none" />
      )}
    </div>
  )
}