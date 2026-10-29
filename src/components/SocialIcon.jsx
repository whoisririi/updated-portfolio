import { socialImages } from '../lib/assets'

const glyphs = {
  facebook: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.2H7.7V13h2.7v8z" />
    </svg>
  ),
  instagram: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17" cy="7" r=".8" fill="currentColor" />
    </svg>
  ),
  linkedin: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="4" y="9.5" width="3.4" height="10.5" />
      <circle cx="5.7" cy="5.5" r="2" />
      <path d="M10 9.5h3.2V11c.6-1 1.9-1.8 3.5-1.8 3 0 3.8 2 3.8 4.6V20h-3.4v-5.4c0-1.3-.3-2.3-1.7-2.3s-2 1-2 2.4V20H10z" />
    </svg>
  ),

  github: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 4l3.2 2.6A8 8 0 0 1 12 6c1.4 0 2.7.3 3.8.6L19 4v6.5c0 4.5-3 8-7 8s-7-3.5-7-8z" />
    </svg>
  ),
}

export default function SocialIcon({ id }) {
  const image = socialImages[id]
  if (image) return <img src={image} alt="" draggable={false} className="size-8 object-contain" />
  return glyphs[id] ?? null
}