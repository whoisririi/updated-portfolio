import ArtWidget from './ArtWidget'
import ClockWidget from './ClockWidget'
import DefinitionWidget from './DefinitionWidget'
import MusicWidget from './MusicWidget'

// Hidden below 1280px wide
export default function Widgets() {
  return (
    <aside aria-label="Widgets" className="absolute top-8 right-9 z-5 hidden w-65 flex-col gap-3.5 xl:flex">
      <ClockWidget />
      <MusicWidget />
      <div className="flex gap-2.5">
        <ArtWidget />
        <DefinitionWidget />
      </div>
    </aside>
  )
}