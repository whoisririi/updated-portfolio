import { memo, useId } from 'react'
import { icons } from '../lib/assets'

const tones = { primary: 'bg-primary', secondary: 'bg-secondary' }

// Shown until you add src/assets/icons/<id>.png
function PlaceholderTile({ label, tone }) {
  return (
    <span
      className={`grid size-16 place-items-center rounded-window border-3 border-base-dirty-white font-display text-h3 text-base-dark shadow-sticker ${tones[tone]}`}
    >
      {label[0]}
    </span>
  )
}

// Click selects, double-click (or Enter) opens. On touch screens a single tap opens.
// Hovering (or focusing) shows a speech-bubble tooltip describing the window.
function DesktopIcon({ app, isSelected, onSelect, onOpen }) {
  const image = icons[app.id]
  const tooltipId = useId()

  const handleClick = () => {
    onSelect(app.id)
    if (!window.matchMedia('(hover: hover)').matches) onOpen(app.id)
  }

  return (
    <div className="absolute w-24" style={{ left: app.position.x, top: app.position.y }}>
      <button
        type="button"
        aria-describedby={tooltipId}
        onClick={handleClick}
        onDoubleClick={() => onOpen(app.id)}
        onKeyDown={(e) => e.key === 'Enter' && onOpen(app.id)}
        className="peer group flex w-full flex-col items-center gap-1.5 rounded-xl p-1 focus-visible:outline-2 focus-visible:outline-base-dark"
      >
        <span className="transition-transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1 motion-reduce:transition-none">
          {image ? (
            <img src={image} alt="" draggable={false} className="size-16 object-contain" />
          ) : (
            <PlaceholderTile label={app.label} tone={app.tone} />
          )}
        </span>
        <span
          className={`rounded-xl px-2 py-0.5 font-display text-caption text-base-dark ${isSelected ? 'bg-secondary' : 'bg-base-dirty-white'}`}
        >
          {app.label}
        </span>
      </button>

      {/* Sits after the button so peer-hover / peer-focus-visible can reveal it. */}
      <span
        id={tooltipId}
        role="tooltip"
        className={
          'pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-1 w-max max-w-52 -translate-x-1/2 translate-y-1 scale-95 ' +
          'rounded-xl border-2 border-base-dirty-white bg-primary px-3 py-1.5 text-center font-display text-caption text-base-dark opacity-0 shadow-sticker ' +
          'transition-[opacity,translate,scale,visibility] duration-150 motion-reduce:transition-none ' +
          'peer-hover:visible peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100 peer-hover:delay-500 ' +
          'peer-focus-visible:visible peer-focus-visible:translate-y-0 peer-focus-visible:scale-100 peer-focus-visible:opacity-100'
        }
      >
        {app.tooltip}
        <span
          aria-hidden="true"
          className="absolute top-full left-1/2 -mt-1.5 size-3 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-base-dirty-white bg-primary"
        />
      </span>
    </div>
  )
}

export default memo(DesktopIcon)