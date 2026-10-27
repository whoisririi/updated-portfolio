import { Fragment } from 'react'
import Artwork from '../components/Artwork'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'
import WingButton from '../components/WingButton'
import { about } from '../data/about'
import { aboutImages } from '../lib/assets'

// import.meta.env.BASE_URL keeps the link working on GitHub Pages (/<repo-name>/).
const resumeHref = `${import.meta.env.BASE_URL}${about.resume.file}`

export default function AboutWindow({ openApp }) {
  return (
    <div className="space-y-5">
      <header>
        <Artwork src={aboutImages.header} alt="" tone="mix" className="h-32 w-full rounded-2xl" />
        <div className="-mt-12 ml-4.5 flex items-start gap-4.5">
          <Artwork
            src={aboutImages.avatar}
            alt={`${about.name}'s icon`}
            tone="blue"
            className="size-25 flex-none rounded-full border-4 border-base-dirty-white shadow-sticker"
          />
          <div className="pt-14">
            <h3 className="text-h2">{about.name}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {about.labels.map((label) => (
                <li key={label} className="rounded-xl bg-secondary-50 px-2.5 py-0.5 text-caption text-base-dark">
                  {label}
                </li>
              ))}
            </ul>
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

      <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 pt-2 pb-1">
        <WingButton as="a" href={resumeHref} download={about.resume.downloadName}>
          download resume
        </WingButton>
        <WingButton tone="secondary" onClick={() => openApp('projects')}>
          see projects
        </WingButton>
      </div>
    </div>
  )
}