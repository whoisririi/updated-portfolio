import { widgets } from '../../data/widgets'
import { useClock } from '../../hooks/useClock'

// Slim greeting shown on phones, where the full widget column does not fit.
export default function WelcomeBar() {
  const { hours, minutes, period } = useClock()

  return (
    <section
      aria-label="Welcome"
      className="col-span-full flex w-full items-center justify-between gap-3 rounded-window border-3 border-base-dirty-white bg-base-dirty-white p-3 shadow-sticker"
    >
      <div className="min-w-0">
        <p className="font-display text-h4 text-base-dark">welcome {widgets.owner}</p>
        <p className="text-caption">{widgets.tagline}</p>
      </div>
      <time className="flex-none rounded-xl bg-secondary px-3 py-1.5 font-display text-h4 text-secondary-500">
        {hours}:{minutes} {period}
      </time>
    </section>
  )
}