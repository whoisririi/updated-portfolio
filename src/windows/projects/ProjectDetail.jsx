import Artwork from '../../components/Artwork'
import Card from '../../components/Card'
import { ChevronLeftIcon } from '../../components/icons'
import { projectImages } from '../../lib/assets'
import ShotViewer from './ShotViewer'
import ProjectLinks from './ProjectLinks'

const tones = ['pink', 'blue', 'mix', 'pink']
const PLACEHOLDER_COUNT = 4

// Your images when the project folder has shot-*.jpg files, otherwise placeholders.
function getShots(project) {
  const images = projectImages[project.id]?.shots ?? []
  const count = images.length || PLACEHOLDER_COUNT
  return Array.from({ length: count }, (_, i) => ({
    src: images[i] ?? null,
    label: project.captions?.[i] ?? (images.length ? null : `[Screenshot ${i + 1}]`),
  }))
}

// One project: back button, screenshot viewer, overview, facts and a gallery grid.
export default function ProjectDetail({ project, onBack }) {
  const shots = getShots(project)

  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          aria-label="Back to projects"
          onClick={onBack}
          className="grid size-9 flex-none place-items-center rounded-[10px] border-3 border-base-dirty-white bg-secondary text-secondary-500 shadow-button-blue active:translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark"
        >
          <ChevronLeftIcon />
        </button>
        <h3 className="min-w-0 text-h2">{project.title}</h3>
      </div>

      <ShotViewer shots={shots} title={project.title} />
      <ProjectLinks project={project} />

      <section className="grid gap-2.5">
        <h3>overview</h3>
        <Card>
          <p>{project.overview}</p>
        </Card>
      </section>

      <dl className="grid grid-cols-1 gap-3 @md:grid-cols-3">
        {[
          ['Role', project.role],
          ['Year', project.year],
          ['Tools', project.tools.join(', ')],
        ].map(([term, value]) => (
          <Card key={term}>
            <dt className="font-semibold text-base-dark">{term}</dt>
            <dd>{value}</dd>
          </Card>
        ))}
      </dl>

      <section className="grid gap-2.5">
        <h3>gallery</h3>
        <ul className="grid grid-cols-2 gap-3">
          {shots.map((shot, i) => (
            <li key={i} className="relative h-32 overflow-hidden rounded-xl border-3 border-base-dirty-white shadow-sticker">
              <Artwork
                src={shot.src}
                alt={shot.label ?? `${project.title} screenshot ${i + 1}`}
                tone={tones[i % tones.length]}
                className="size-full"
              />
              {shot.label && (
                <span className="absolute bottom-2 left-2 rounded-xl bg-base-dirty-white px-2.5 py-0.5 text-caption text-base-dark">
                  {shot.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}