import { Fragment } from 'react'
import Artwork from '../components/Artwork'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'
import TagList from '../components/TagList'
import WingButton from '../components/WingButton'
import { about } from '../data/about'
import { aboutImages } from '../lib/assets'

// import.meta.env.BASE_URL keeps the link working on GitHub Pages (/<repo-name>/).
const resumeHref = `${import.meta.env.BASE_URL}${about.resume.file}`

// Wide window: icon on the left, name and labels beside it. Narrow window (phone): everything centered.
export default function AboutWindow({ openApp }) {
  return (
    <div className="@container space-y-5">
      <header>
        <Artwork src={aboutImages.header} alt="" tone="mix" className="h-32 w-full rounded-2xl" />
        <div className="-mt-12 flex flex-col items-center gap-3 text-center @md:ml-4.5 @md:flex-row @md:items-start @md:gap-4.5 @md:text-left">
          <Artwork
            src={aboutImages.avatar}
            alt={`${about.name}'s icon`}
            tone="blue"
            className="size-25 flex-none rounded-full border-4 border-base-dirty-white shadow-sticker"
          />
          <div className="grid gap-1.5 @md:pt-14">
            <h3 className="text-h2">{about.name}</h3>
            <TagList items={about.labels} className="justify-center @md:justify-start" />
          </div>
        </div>
      </header>

      <Card>
        <p>{about.intro}</p>
      </Card>

      <section>
        <h3>skills</h3>
        <div className="mt-3 grid grid-cols-[auto_1fr] items-center gap-x-4 gap-y-2.5">
          {about.skills.map((skill) => (
            <Fragment key={skill.label}>
              <span aria-hidden="true" className="font-semibold">
                {skill.label}
              </span>
              <ProgressBar {...skill} />
            </Fragment>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-2 pb-1 @md:gap-x-12">
        <WingButton as="a" size="fluid" href={resumeHref} download={about.resume.downloadName}>
          download resume
        </WingButton>
        <WingButton size="fluid" tone="secondary" onClick={() => openApp('projects')}>
          see projects
        </WingButton>
      </div>
    </div>
  )
}