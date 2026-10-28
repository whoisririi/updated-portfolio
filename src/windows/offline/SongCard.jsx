import Artwork from '../../components/Artwork'
import Card from '../../components/Card'
import { offlineImages } from '../../lib/assets'

// One song: cover, title, artist and an album or mood.
export default function SongCard({ song, index }) {
  return (
    <Card className="flex items-center gap-3">
      <Artwork
        src={offlineImages.songs[song.id]}
        alt=""
        tone={index % 2 ? 'pink' : 'blue'}
        className="size-18 flex-none rounded-xl"
      />
      <div className="min-w-0">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
        <p className="text-caption">{song.mood}</p>
      </div>
    </Card>
  )
}