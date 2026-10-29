import { useClock } from '../hooks/useClock'
import { HeartIcon } from './icons'

const chipClass =
  'flex items-center gap-1.5 rounded-xl border-2 border-base-dirty-white px-3 py-1 font-display text-caption text-base-dark ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark'

// Floating bar: show-desktop button, one chip per open window, live clock.
// On phones the "desktop" label hides (the heart stays) and the chips scroll sideways.
export default function Taskbar({ apps, windows, onToggle, onShowDesktop }) {
  const { hours, minutes, period } = useClock()
  const openApps = apps.filter((a) => windows[a.id].isOpen)

  return (
    <nav
      aria-label="Taskbar"
      className="fixed inset-x-0 bottom-5 z-900 mx-auto flex h-14 w-[min(980px,calc(100%-2rem))] items-center gap-2.5 rounded-window border-3 border-base-dirty-white bg-primary px-3 shadow-sticker"
    >
      <button type="button" onClick={onShowDesktop} className={`${chipClass} bg-secondary`}>
        <HeartIcon />
        <span className="max-sm:sr-only">desktop</span>
      </button>
      <div className="h-7 w-0.5 bg-base-dirty-white" aria-hidden="true" />
      <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto [scrollbar-width:none]">
        {openApps.map((app) => {
          const visible = !windows[app.id].isMinimized
          return (
            <button
              key={app.id}
              type="button"
              aria-pressed={visible}
              onClick={() => onToggle(app.id)}
              className={`${chipClass} ${visible ? 'bg-base-dirty-white' : 'bg-primary-50'}`}
            >
              {app.windowTitle}
            </button>
          )
        })}
      </div>
      <time className="rounded-xl bg-primary-50 px-3.5 py-1 font-display text-h4 text-base-dark">
        {hours}:{minutes} {period}
      </time>
    </nav>
  )
}