// Phone version of the timeline: a straight line with one dot per card.
// The active dot is bigger, blue and pulses. Dots are a tap shortcut (the cards stay the keyboard route).
export default function TimelineStrip({ entries, activeIndex, onSelect }) {
  return (
    <div className="relative mx-2 flex items-center justify-between py-3">
      <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-0.75 -translate-y-1/2 rounded-full bg-secondary" />
      {entries.map((entry, i) => {
        const isActive = i === activeIndex
        const size = isActive ? 30 : 18
        return (
          // A fixed 30px slot keeps the dots from shifting when one grows.
          <span key={entry.id} className="relative grid size-7.5 place-items-center">
            <button
              type="button"
              tabIndex={-1}
              aria-label={`Show ${entry.place}`}
              onClick={() => onSelect(i)}
              style={{ width: size, height: size }}
              className={
                'relative rounded-full border-3 border-base-dirty-white shadow-[0_2px_0_var(--color-primary-400)] ' +
                "transition-[width,height,background-color] duration-300 after:absolute after:-inset-2.5 after:content-[''] motion-reduce:transition-none " +
                (isActive ? 'bg-secondary' : 'bg-primary')
              }
            >
              {isActive && (
                <span className="pointer-events-none absolute -inset-2.5 animate-ring rounded-full border-2 border-secondary motion-reduce:animate-none" />
              )}
            </button>
          </span>
        )
      })}
    </div>
  )
}