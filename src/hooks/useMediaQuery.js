import { useSyncExternalStore } from 'react'

// true while the CSS media query matches, and updates when the screen changes (e.g. rotating a phone).
export function useMediaQuery(query) {
  return useSyncExternalStore(
    (notify) => {
      const list = window.matchMedia(query)
      list.addEventListener('change', notify)
      return () => list.removeEventListener('change', notify)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}