import Artwork from '../../components/Artwork'
import Card from '../../components/Card'
import TagList from '../../components/TagList'
import WingButton from '../../components/WingButton'
import { projectImages } from '../../lib/assets'

// One row in the project list. The cover stretches to match the height of the text beside it.
export default function ProjectCard({ project, index, onOpen }) {
  return (
    <Card className="flex gap-8 p-4">
      <div className="relative min-h-30 w-42.5 flex-none self-stretch overflow-hidden rounded-xl">
        <Artwork
          src={projectImages[project.id]?.cover}
          alt=""
          tone={index % 2 ? 'blue' : 'pink'}
          className="absolute inset-0 size-full"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <h3 className="text-h2">{project.title}</h3>
        <TagList items={project.tags} />
        <p className="flex-1">{project.summary}</p>
        {/* gap-8 above leaves room for the left wing */}
        <div className="pt-1">
          <WingButton tone="secondary" size="xs" onClick={() => onOpen(project.id)}>
            view project
          </WingButton>
        </div>
      </div>
    </Card>
  )
}