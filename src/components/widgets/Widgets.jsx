import ArtWidget from './ArtWidget'
import ClockWidget from './ClockWidget'
import DefinitionWidget from './DefinitionWidget'
import MusicWidget from './MusicWidget'

// for the whole column. Smaller screens get a slim welcome bar instead.
export default function Widgets() {
  return (
    <aside
      aria-label="Widgets"
      className="absolute top-8 right-9 z-5 hidden w-65 flex-col gap-3.5 lg:[@media(min-height:44rem)]:flex"
    >
      <ClockWidget />
      <MusicWidget />
      <div className="flex gap-2.5">
        <ArtWidget />
        <DefinitionWidget />
      </div>
    </aside>
  )
}