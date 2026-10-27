import PlaceholderWindow from '../windows/PlaceholderWindow'
import AboutWindow from '../windows/AboutWindow'
import ProjectsWindow from '../windows/ProjectsWindow'

// One entry per desktop icon + window.
//   id          matches the icon file name in src/assets/icons (e.g. about.png)
//   label       text under the desktop icon
//   windowTitle text in the window title bar and taskbar
//   tone        color of the placeholder tile when no icon file exists
//   position    where the icon sits on the desktop (percent of width / height)
//   Content     the component rendered inside the window
export const apps = [
  {
    id: 'about',
    label: 'about',
    tooltip: 'learn more about ifa',
    windowTitle: 'about.me',
    tone: 'primary',
    position: { x: '7%', y: '12%' },
    Content: AboutWindow,
  },
  {
    id: 'projects',
    label: 'projects',
    tooltip: 'see what she worked on',
    windowTitle: 'projects',
    tone: 'secondary',
    position: { x: '18%', y: '34%' },
    Content: ProjectsWindow,
  },
  {
    id: 'contact',
    label: 'contact',
    tooltip: 'find where to reach her',
    windowTitle: 'contact',
    tone: 'secondary',
    position: { x: '4%', y: '59%' },
    Content: PlaceholderWindow,
  },
  {
    id: 'softwares',
    label: 'softwares',
    tooltip: 'peek at the tools she uses',
    windowTitle: 'softwares',
    tone: 'primary',
    position: { x: '50%', y: '17%' },
    Content: PlaceholderWindow,
  },
  {
    id: 'history',
    label: 'history',
    tooltip: 'see her educational and professional journey',
    windowTitle: 'history',
    tone: 'secondary',
    position: { x: '64%', y: '41%' },
    Content: PlaceholderWindow,
  },
  {
    id: 'offline',
    label: 'offline',
    tooltip: "what she's into off the clock",
    windowTitle: 'off the clock',
    tone: 'primary',
    position: { x: '42%', y: '60%' },
    Content: PlaceholderWindow,
  },
]