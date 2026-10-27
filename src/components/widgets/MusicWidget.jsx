import { widgets } from '../../data/widgets'
import { widgetImages } from '../../lib/assets'
import Artwork from '../Artwork'
import { NoteIcon } from '../icons'
import WidgetCard from './WidgetCard'

// equalizer
const bars = [
  { delay: '0s', duration: '0.9s' },
  { delay: '0.25s', duration: '1.1s' },
  { delay: '0.1s', duration: '0.8s' },
  { delay: '0.4s', duration: '1s' },
]

// notes
const notes = [
  { position: 'right-10', delay: '0s' },
  { position: 'right-5', delay: '1.6s' },
]

// now playing
export default function MusicWidget() {
  const { title, artist } = widgets.music

  return (
    <div className="relative">
      <WidgetCard aria-label="Now playing" className="flex gap-3 p-3">
        <Artwork
          src={widgetImages.cover}
          alt="Album cover"
          tone="mix"
          className="size-17 flex-none animate-bob self-center rounded-xl motion-reduce:animate-none"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate font-display text-h4 text-base-dark">{title}</p>
            <span aria-hidden="true" className="flex h-4 flex-none items-end gap-0.5">
              {bars.map((bar) => (
                <span
                  key={bar.delay}
                  className="h-full w-1 origin-bottom animate-eq rounded-full bg-primary motion-reduce:animate-none"
                  style={{ animationDelay: bar.delay, animationDuration: bar.duration }}
                />
              ))}
            </span>
          </div>
          <p className="truncate text-caption">{artist}</p>
          <div className="mt-1.5 flex items-center gap-2" aria-hidden="true">
            <span className="grid size-7 flex-none place-items-center rounded-full border-2 border-base-dirty-white bg-primary text-base-dark">
              <NoteIcon />
            </span>
            <div className="h-2.5 flex-1 overflow-hidden rounded-lg border-2 border-secondary bg-base-white">
              <div className="h-full w-[40%] animate-progress bg-secondary motion-reduce:animate-none" />
            </div>
          </div>
        </div>
      </WidgetCard>

      {notes.map((note) => (
        <span
          key={note.position}
          aria-hidden="true"
          className={`pointer-events-none absolute top-1 ${note.position} animate-note text-primary-400 motion-reduce:hidden`}
          style={{ animationDelay: note.delay }}
        >
          <NoteIcon />
        </span>
      ))}
    </div>
  )
}