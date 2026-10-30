import { useCallback, useState } from 'react'
import { history } from '../data/history'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { COMPACT_QUERY } from '../lib/breakpoints'
import { TIMELINE, getTimelineLayout } from '../lib/timeline'
import HistoryCard from './history/HistoryCard'
import TimelineStrip from './history/TimelineStrip'
import TimelineTrack from './history/TimelineTrack'

// Click a card or a dot to make it the active one.
// Wide screens: a curved timeline beside the cards. Phones: a straight timeline above them.
export default function HistoryWindow({ isOpen }) {
  const isCompact = useMediaQuery(COMPACT_QUERY)
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

  const cards = history.map((entry, i) => (
    <li key={entry.id}>
      <HistoryCard
        entry={entry}
        isActive={i === activeIndex}
        isCompact={isCompact}
        height={layout.items[i].height}
        onSelect={() => setActiveIndex(i)}
        onMeasure={handleMeasure}
      />
    </li>
  ))

  if (isCompact) {
    return (
      <div className="grid gap-5">
        <TimelineStrip entries={history} activeIndex={activeIndex} onSelect={setActiveIndex} />
        <ol className="flex flex-col" style={{ gap: TIMELINE.gap }}>
          {cards}
        </ol>
      </div>
    )
  }

  return (
    <div className="flex gap-1.5">
      <TimelineTrack layout={layout} entries={history} activeIndex={activeIndex} onSelect={setActiveIndex} />
      <ol className="flex min-w-0 flex-1 flex-col" style={{ gap: TIMELINE.gap }}>
        {cards}
      </ol>
    </div>
  )
}