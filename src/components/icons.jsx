// Small UI glyphs. Your own artwork (desktop icons, background) lives in src/assets instead.
export function MinimizeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 14S2 10 2 6a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 4-6 8-6 8z"
        className="fill-base-dirty-white stroke-base-dark"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export function NoteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6 12.5V3.5l7-1.5v8.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4.5" cy="12.5" r="2" fill="currentColor" />
      <circle cx="11.5" cy="10.5" r="2" fill="currentColor" />
    </svg>
  )
}

//resize in classname
export function WingIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 26 20" aria-hidden="true" className={className}>
      <path
        d="M2 16C3 8 10 3 25 3 22 5 21 6 20.5 8 22 8 23 8.5 24 9 21.5 10 20.5 11 20 13 21 13.5 22 14 22.5 14.5 17 17 9 18 2 16Z"
        className="fill-base-dirty-white stroke-secondary"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10 2L4 8l6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M6 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}