import { widgets } from '../../data/widgets'
import { useClock } from '../../hooks/useClock'
import ProgressBar from '../ProgressBar'
import WidgetCard from './WidgetCard'
import { Fragment } from 'react'

export default function ClockWidget() {
  const { hours, minutes, period } = useClock()

  return (
    <WidgetCard aria-label="Clock">
      <p className="bg-secondary p-2 text-center font-display text-h4 text-secondary-500">
        welcome {widgets.owner}
      </p>

      <div className="flex gap-2.5 px-3 pt-3">
        <div className="grid h-18 flex-1 place-items-center rounded-xl bg-secondary font-display text-h1 text-secondary-500">
          {hours}
        </div>
        <div className="flex h-18 flex-1 flex-col items-center justify-center rounded-xl bg-secondary font-display text-secondary-500">
          <span className="text-h2">{minutes}</span>
          <span className="text-body">{period}</span>
        </div>
      </div>

      <p className="mx-3 mt-3 rounded-xl bg-linear-to-br from-primary-50 to-secondary-50 p-3 text-center font-display text-base-dark">
        {widgets.tagline}
      </p>

      <div className="px-3 pt-3 pb-3.5">
        <p className="text-center font-display text-h4 text-base-dark">vibe check</p>
        <div className="mt-2 grid grid-cols-[auto_1fr] items-center gap-x-2.5 gap-y-1.5">
          {widgets.vibes.map((vibe) => (
            <Fragment key={vibe.label}>
              <span aria-hidden="true" className="text-caption font-display text-base-dark">
                {vibe.label}
              </span>
              <ProgressBar {...vibe} />
            </Fragment>
          ))}
        </div>
      </div>
    </WidgetCard>
  )
}