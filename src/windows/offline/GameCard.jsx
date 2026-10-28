import Artwork from '../../components/Artwork'
import Card from '../../components/Card'
import HeartRating from '../../components/HeartRating'
import { offlineImages } from '../../lib/assets'

// One game: cover, name, short description and a heart rating.
export default function GameCard({ game, index }) {
  return (
    <Card className="flex gap-3">
      <Artwork
        src={offlineImages.games[game.id]}
        alt=""
        tone={index % 2 ? 'blue' : 'pink'}
        className="h-23 w-18 flex-none rounded-xl"
      />
      <div className="flex min-w-0 flex-col gap-1">
        <h4>{game.title}</h4>
        <p className="flex-1 text-caption">{game.note}</p>
        <HeartRating value={game.rating} />
      </div>
    </Card>
  )
}