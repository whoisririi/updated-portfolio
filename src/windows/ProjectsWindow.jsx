import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './projects/ProjectCard'
import ProjectDetail from './projects/ProjectDetail'

// Two views in one window: the project list and a single project's detail page.
export default function ProjectsWindow({ isOpen }) {
  const rootRef = useRef(null)
  const [selectedId, setSelectedId] = useState(null)

  // Reopening the window always starts on the list.
  const [wasOpen, setWasOpen] = useState(isOpen)
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen)
    if (isOpen) setSelectedId(null)
  }

  const showProject = (id) => {
    rootRef.current.parentElement.scrollTop = 0 // jump back to the top of the window body
    setSelectedId(id)
  }

  const project = projects.find((p) => p.id === selectedId)

  return (
   <div ref={rootRef} className="@container">
      {project ? (
        <ProjectDetail project={project} onBack={() => showProject(null)} />
      ) : (
        <ul className="grid gap-4">
          {projects.map((p, index) => (
            <li key={p.id}>
              <ProjectCard project={p} index={index} onOpen={showProject} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}