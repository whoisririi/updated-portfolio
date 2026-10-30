import { useEffect, useState } from 'react'
import ifaIcon from '../assets/ifa-icon.png'

const MIN_MS = 2600 // always show at least one full loop, even on a fast connection
const FADE_MS = 600

const bunnies = [0, 1, 2, 3]
const pellets = [0, 1, 2]

// "Feeding the bunnies": four icons hop in a wave while food rises toward them. It loops until the
// page, its images and its fonts are ready (and MIN_MS has passed), then fades into the desktop.
export default function LoadingScreen({ onLeave }) {
  const [phase, setPhase] = useState('loading') // loading -> leaving -> gone

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let timeUp = false
    let pageLoaded = document.readyState === 'complete'
    let fontsReady = false

    const check = () => {
      if (timeUp && pageLoaded && fontsReady) setPhase((current) => (current === 'loading' ? 'leaving' : current))
    }

    const timer = setTimeout(() => {
      timeUp = true
      check()
    }, reduceMotion ? 600 : MIN_MS)

    const onLoad = () => {
      pageLoaded = true
      check()
    }
    if (!pageLoaded) window.addEventListener('load', onLoad)

    ;(document.fonts?.ready ?? Promise.resolve()).then(() => {
      fontsReady = true
      check()
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', onLoad)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'leaving') return
    onLeave()
    const timer = setTimeout(() => setPhase('gone'), FADE_MS)
    return () => clearTimeout(timer)
  }, [phase, onLeave])

  if (phase === 'gone') return null

  return (
    <div
      role="status"
      className={
        'fixed inset-0 z-1000 grid place-items-center bg-linear-to-b from-secondary-200 via-primary-100 to-primary-50 ' +
        'transition-[opacity,scale] duration-600 motion-reduce:transition-none ' +
        (phase === 'leaving' ? 'pointer-events-none scale-105 opacity-0' : 'opacity-100')
      }
    >
      <span className="sr-only">Loading portfolio</span>
      <div aria-hidden="true" className="grid justify-items-center gap-6">
        <div className="flex gap-3 sm:gap-5">
          {bunnies.map((i) => (
            <img
              key={i}
              src={ifaIcon}
              alt=""
              draggable={false}
              className="size-14 animate-hop object-contain motion-reduce:animate-none sm:size-16"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
        <div className="flex gap-8">
          {pellets.map((i) => (
            <span
              key={i}
              className="size-2.5 animate-pellet rounded-full bg-primary-400 motion-reduce:animate-none"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}