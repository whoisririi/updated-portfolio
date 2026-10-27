const tones = { primary: 'bg-primary', secondary: 'bg-secondary' }

export default function ProgressBar({ label, value, tone = 'secondary' }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-3 overflow-hidden rounded-lg border-2 border-secondary bg-base-white"
    >
      <div className={`h-full ${tones[tone]}`} style={{ width: `${value}%` }} />
    </div>
  )
}