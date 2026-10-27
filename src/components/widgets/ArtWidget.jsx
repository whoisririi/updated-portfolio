import { widgetImages } from '../../lib/assets'
import Artwork from '../Artwork'
import WidgetCard from './WidgetCard'

export default function ArtWidget() {
  return (
    <WidgetCard aria-label="Artwork" className="relative h-37.5 w-26 flex-none">
      <Artwork src={widgetImages.art} alt="My artwork" tone="mix" className="size-full">
        <span className="absolute bottom-2 left-2 rounded-xl bg-base-dirty-white px-2.5 py-0.5 text-caption text-base-dark">
          [art.png]
        </span>
      </Artwork>
    </WidgetCard>
  )
}