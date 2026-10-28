import { offline } from '../data/offline'
import GameCard from './offline/GameCard'
import RotationSection from './offline/RotationSection'
import SongCard from './offline/SongCard'

// "Off the clock": a game rotation and a song rotation side by side.
export default function OfflineWindow() {
  const { gaming, music } = offline

  return (
    // Two columns in a wide window, one in a narrow one (container query).
    <div className="@container">
      <div className="grid grid-cols-1 gap-6 @lg:grid-cols-2">
        <RotationSection title={gaming.title} subtitle={gaming.subtitle} intro={gaming.intro}>
          {gaming.items.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </RotationSection>

        <RotationSection title={music.title} subtitle={music.subtitle} intro={music.intro}>
          {music.items.map((song, index) => (
            <SongCard key={song.id} song={song} index={index} />
          ))}
        </RotationSection>
      </div>
    </div>
  )
}