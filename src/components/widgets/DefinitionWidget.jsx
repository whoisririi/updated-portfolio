import { widgets } from '../../data/widgets'
import WidgetCard from './WidgetCard'

export default function DefinitionWidget() {
  const { term, text } = widgets.definition

  return (
    <WidgetCard aria-label="Definition" className="h-37.5 min-w-0 flex-1 p-3">
      <p className="mb-1.5 border-b-2 border-dashed border-primary pb-1 font-display text-h4 text-base-dark">{term}</p>
      <p className="text-caption">{text}</p>
    </WidgetCard>
  )
}