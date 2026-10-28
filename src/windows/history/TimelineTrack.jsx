// The curved line with one dot per card. The active dot grows and pulses.
// The dots are a mouse shortcut; keyboard users use the cards (hence tabIndex -1).
export default function TimelineTrack({ layout, entries, activeIndex, onSelect }) {
  return (
    <div className="relative flex-none self-start" style={{ width: layout.width, height: layout.height }}>
      <svg width={layout.width} height={layout.height} viewBox={`0 0 ${layout.width} ${layout.height}`} fill="none" aria-hidden="true">
        <path d={layout.arc} className="stroke-secondary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {entries.map((entry, i) => {
        const isActive = i === activeIndex
        const size = isActive ? 30 : 18
        return (
          <button
            key={entry.id}
            type="button"
            tabIndex={-1}
            aria-label={`Show ${entry.place}`}
            onClick={() => onSelect(i)}
            style={{ left: layout.items[i].dotX, top: layout.items[i].center, width: size, height: size }}
            className={
              'absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-3 border-base-dirty-white shadow-[0_2px_0_var(--color-primary-400)] ' +
              'transition-[top,left,width,height,background-color] duration-300 motion-reduce:transition-none ' +
              (isActive ? 'bg-secondary' : 'bg-primary')
            }
          >
            {isActive && (
              <span className="pointer-events-none absolute -inset-2.5 animate-ring rounded-full border-2 border-secondary motion-reduce:animate-none" />
            )}
          </button>
        )
      })}
    </div>
  )
}