import { useCallback, useRef, useState } from 'react'
import { apps } from '../data/apps'
import { COMPACT_QUERY } from '../lib/breakpoints'
import { background } from '../lib/assets'
import { getInitialPosition } from '../lib/windowLayout'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useWindowManager } from '../hooks/useWindowManager'
import DesktopIcon from './DesktopIcon'
import Taskbar from './Taskbar'
import WelcomeBar from './widgets/WelcomeBar'
import Widgets from './widgets/Widgets'
import Window from './Window'

export default function Desktop() {
  const desktopRef = useRef(null)
  const [selectedId, setSelectedId] = useState(null)
  const isCompact = useMediaQuery(COMPACT_QUERY)
  const manager = useWindowManager(apps)
  const { windows, open } = manager

  const openApp = useCallback(
    (id) => {
      const bounds = desktopRef.current.getBoundingClientRect()
      const index = apps.findIndex((a) => a.id === id)
      open(id, getInitialPosition(index, bounds))
    },
    [open],
  )

  return (
    <main
      ref={desktopRef}
      onClick={(e) => e.target === e.currentTarget && setSelectedId(null)}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
      className={
        'relative h-dvh w-full overflow-hidden ' +
        (background ? 'bg-cover bg-center' : 'bg-linear-to-b from-secondary-200 via-primary-100 to-primary-50')
      }
    >
      <Widgets />

      {/* Wide screens: icons sit where apps.js puts them. Compact screens: a scrollable grid above the taskbar. */}
      <div
        className={
          isCompact
            ? 'absolute inset-x-0 top-0 bottom-24 grid grid-cols-3 content-start justify-items-center gap-y-6 overflow-y-auto px-4 pt-4 sm:grid-cols-6'
            : undefined
        }
      >
        {isCompact && <WelcomeBar />}
        {apps.map((app) => (
          <DesktopIcon
            key={app.id}
            app={app}
            isSelected={selectedId === app.id}
            isCompact={isCompact}
            onSelect={setSelectedId}
            onOpen={openApp}
          />
        ))}
      </div>

      {apps.map((app) => {
        const w = windows[app.id]
        return (
          <Window
            key={app.id}
            id={app.id}
            title={app.windowTitle}
            isVisible={w.isOpen && !w.isMinimized}
            isCompact={isCompact}
            x={w.x}
            y={w.y}
            z={w.z}
            onFocus={manager.focus}
            onMinimize={manager.minimize}
            onClose={manager.close}
            onMove={manager.move}
          >
            <app.Content title={app.windowTitle} isOpen={w.isOpen} openApp={openApp} />
          </Window>
        )
      })}

      <Taskbar apps={apps} windows={windows} onToggle={manager.toggle} onShowDesktop={manager.minimizeAll} />
    </main>
  )
}