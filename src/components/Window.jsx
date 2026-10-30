import { memo, useRef } from 'react'
import { WINDOW, clampPosition } from '../lib/windowLayout'
import { CloseIcon, MinimizeIcon } from './icons'

const controlClass =
  'grid size-7.5 place-items-center rounded-full border-2 border-base-dirty-white text-secondary-500 ' +
  'transition-[filter] hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base-dark'

function Window({ id, title, isVisible, isCompact, x, y, z, onFocus, onMinimize, onClose, onMove, children }) {
  const windowRef = useRef(null)
  const drag = useRef(null)

  const startDrag = (e) => {
    if (isCompact || e.button !== 0 || e.target.closest('button')) return // let the buttons work
    const el = windowRef.current
    const bounds = el.parentElement.getBoundingClientRect()
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: x,
      originY: y,
      size: { width: el.offsetWidth, height: el.offsetHeight },
      bounds: { width: bounds.width, height: bounds.height },
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const moveDrag = (e) => {
    const d = drag.current
    if (!d) return
    const next = clampPosition(
      { x: d.originX + e.clientX - d.startX, y: d.originY + e.clientY - d.startY },
      d.size,
      d.bounds,
    )
    onMove(id, next.x, next.y)
  }

  const endDrag = () => {
    drag.current = null
  }

  return (
    <section
      ref={windowRef}
      role="dialog"
      aria-label={title}
      inert={!isVisible}
      onPointerDown={() => onFocus(id)}
      style={
        isCompact
          ? { zIndex: 10 + z }
          : {
              left: x,
              top: y,
              zIndex: 10 + z,
              width: `min(${WINDOW.maxWidth}px, ${WINDOW.widthRatio * 100}%)`,
              height: `min(${WINDOW.maxHeight}px, ${WINDOW.heightRatio * 100}%)`,
            }
      }
      className={
        'absolute flex flex-col overflow-hidden rounded-window border-3 border-base-dirty-white bg-base-dirty-white shadow-window ' +
        // Compact: centered in the space above the taskbar (bottom-24 matches WINDOW.taskbarReserve)
        (isCompact ? 'inset-x-0 top-0 bottom-24 m-auto h-[min(32rem,calc(100%-7rem))] w-[calc(100%-1.5rem)] max-w-185 ' : '') +
        'transition-[opacity,scale,translate,visibility] motion-reduce:transition-none ' +
        (isVisible
          ? 'visible translate-y-0 scale-100 opacity-100 duration-[380ms] ease-out'
          : 'invisible translate-y-16 scale-90 opacity-0 duration-[260ms] [transition-delay:0ms,0ms,0ms,260ms]')
      }
    >
      <header
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={
          'flex items-center justify-between bg-primary py-2 pr-3 pl-4.5 select-none ' +
          (isCompact ? '' : 'cursor-grab touch-none active:cursor-grabbing')
        }
      >
        <h2 className="text-h4">{title}</h2>
        <div className="flex gap-2">
          <button type="button" aria-label={`Minimize ${title}`} onClick={() => onMinimize(id)} className={`${controlClass} bg-secondary`}>
            <MinimizeIcon />
          </button>
          <button type="button" aria-label={`Close ${title}`} onClick={() => onClose(id)} className={`${controlClass} bg-primary-50`}>
            <CloseIcon />
          </button>
        </div>
      </header>
      <div className="scrollbar-pastel flex-1 overflow-x-hidden overflow-y-auto overscroll-contain p-5 sm:p-6">{children}</div>
    </section>
  )
}

export default memo(Window)