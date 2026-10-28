import { useCallback, useState } from 'react'
import { history } from '../data/history'
import { TIMELINE, getTimelineLayout } from '../lib/timeline'
import HistoryCard from './history/HistoryCard'
import TimelineTrack from './history/TimelineTrack'

// Curved timeline + stacked cards. Click a card or a dot to make it the active one.
export default function HistoryWindow({ isOpen }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [measured, setMeasured] = useState({}) // each card's natural height, by id

  // Reopening the window always starts on the latest experience.
  const [wasOpen, setWasOpen] = useState(isOpen)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) setActiveIndex(0)
  }

  const handleMeasure = useCallback((id, height) => {
    setMeasured((prev) => (prev[id] === height ? prev : { ...prev, [id]: height }))
  }, [])

  const heights = history.map(
    (entry, i) => measured[entry.id] ?? (i === activeIndex ? TIMELINE.fallbackActive : TIMELINE.fallbackInactive),
  )
  const layout = getTimelineLayout(heights)

  return (
    <div className="flex gap-1.5">
      <TimelineTrack layout={layout} entries={history} activeIndex={activeIndex} onSelect={setActiveIndex} />
      <ol className="flex min-w-0 flex-1 flex-col" style={{ gap: TIMELINE.gap }}>
        {history.map((entry, i) => (
          <li key={entry.id}>
            <HistoryCard
              entry={entry}
              isActive={i === activeIndex}
              height={layout.items[i].height}
              onSelect={() => setActiveIndex(i)}
              onMeasure={handleMeasure}
            />
          </li>
        ))}
      </ol>
    </div>
  )
}