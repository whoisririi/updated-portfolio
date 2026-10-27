import { useState } from 'react'
import Card from '../components/Card'
import { toolCategories, tools, toolsNote } from '../data/tools'
import ToolCard from './softwares/ToolCard'

const chip =
  'rounded-xl border-2 border-base-dirty-white px-3 py-1 font-display text-caption text-base-dark ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark'

// Filterable grid of the tools you use.
export default function SoftwaresWindow() {
  const [category, setCategory] = useState('all')
  const visible = category === 'all' ? tools : tools.filter((tool) => tool.category === category)

  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3>my toolbox</h3>
        <div role="group" aria-label="Filter tools by category" className="flex flex-wrap gap-2">
          {toolCategories.map((name) => (
            <button
              key={name}
              type="button"
              aria-pressed={name === category}
              onClick={() => setCategory(name)}
              className={`${chip} ${name === category ? 'bg-secondary' : 'bg-primary-50'}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* One column in a narrow window, two in a wide one (container query). */}
      <div className="@container">
        <ul className="grid grid-cols-1 gap-3 @md:grid-cols-2">
          {visible.map((tool) => (
            <li key={tool.id}>
              {/* Tone comes from the full list so colors don't shift when filtering. */}
              <ToolCard tool={tool} tone={tools.indexOf(tool) % 2 ? 'secondary' : 'primary'} />
            </li>
          ))}
        </ul>
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} tools
      </p>

      <Card className="bg-linear-to-br from-primary-50 to-secondary-50">
        <p>{toolsNote}</p>
      </Card>
    </div>
  )
}

// customized icons file names
// figma.png            figma-motion.png     html.png
// css.png              react.png            tailwind.png
// infinite-painter.png resprite.png         alight-motion.png