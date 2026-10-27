import { useEffect, useState } from 'react'

// Live 12-hour clock, e.g. { hours: '11', minutes: '19', period: 'AM' }.
export function useClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15_000)
    return () => clearInterval(id)
  }, [])

  const h = now.getHours()
  return {
    hours: String(h % 12 || 12),
    minutes: String(now.getMinutes()).padStart(2, '0'),
    period: h < 12 ? 'AM' : 'PM',
  }
}