import Artwork from '../../components/Artwork'
import Card from '../../components/Card'
import TagList from '../../components/TagList'
import WingButton from '../../components/WingButton'
import { projectImages } from '../../lib/assets'

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <Card className="flex flex-col gap-4 p-4 @md:flex-row @md:gap-8">
      <div className="relative h-40 w-full flex-none overflow-hidden rounded-xl @md:h-auto @md:min-h-30 @md:w-42.5 @md:self-stretch">
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
        <div className="pt-1">
          <WingButton tone="secondary" size="xs" onClick={() => onOpen(project.id)}>
            view project
          </WingButton>
        </div>
      </div>
    </Card>
  )
}