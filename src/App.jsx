import { useCallback, useState } from 'react'
import Desktop from './components/Desktop'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const handleLeave = useCallback(() => setIsLoading(false), [])

  return (
    <>
      <div inert={isLoading}>
        <Desktop />
      </div>
      <LoadingScreen onLeave={handleLeave} />
    </>
  )
}