import { useCallback, useReducer } from 'react'

// One entry per app: is it open, minimized, where is it, and where in the stack.
const newWindow = { isOpen: false, isMinimized: false, placed: false, x: 0, y: 0, z: 0 }

const isVisible = (w) => w.isOpen && !w.isMinimized

function topVisibleZ(windows) {
  return Math.max(0, ...Object.values(windows).filter(isVisible).map((w) => w.z))
}

function patch(state, id, changes, bump = false) {
  const z = bump ? state.topZ + 1 : state.topZ
  return {
    topZ: z,
    windows: { ...state.windows, [id]: { ...state.windows[id], ...changes, ...(bump && { z }) } },
  }
}

export function windowReducer(state, action) {
  const w = state.windows[action.id]
  switch (action.type) {
    case 'open': {
      const position = w.placed ? { x: w.x, y: w.y } : action.position
      return patch(state, action.id, { ...position, placed: true, isOpen: true, isMinimized: false }, true)
    }
    case 'close':
      return patch(state, action.id, { isOpen: false, isMinimized: false })
    case 'minimize':
      return patch(state, action.id, { isMinimized: true })
    case 'focus':
      if (!isVisible(w) || w.z === topVisibleZ(state.windows)) return state
      return patch(state, action.id, {}, true)
    case 'move':
      return patch(state, action.id, { x: action.x, y: action.y })
    case 'toggle': // taskbar chip
      if (!w.isOpen) return state
      if (w.isMinimized) return patch(state, action.id, { isMinimized: false }, true)
      if (w.z === topVisibleZ(state.windows)) return patch(state, action.id, { isMinimized: true })
      return patch(state, action.id, {}, true)
    case 'minimizeAll': {
      const windows = Object.fromEntries(
        Object.entries(state.windows).map(([id, win]) => [id, win.isOpen ? { ...win, isMinimized: true } : win]),
      )
      return { ...state, windows }
    }
    default:
      return state
  }
}

export function useWindowManager(apps) {
  const [state, dispatch] = useReducer(windowReducer, apps, (list) => ({
    topZ: 0,
    windows: Object.fromEntries(list.map((a) => [a.id, newWindow])),
  }))

  return {
    windows: state.windows,
    open: useCallback((id, position) => dispatch({ type: 'open', id, position }), []),
    close: useCallback((id) => dispatch({ type: 'close', id }), []),
    minimize: useCallback((id) => dispatch({ type: 'minimize', id }), []),
    focus: useCallback((id) => dispatch({ type: 'focus', id }), []),
    move: useCallback((id, x, y) => dispatch({ type: 'move', id, x, y }), []),
    toggle: useCallback((id) => dispatch({ type: 'toggle', id }), []),
    minimizeAll: useCallback(() => dispatch({ type: 'minimizeAll' }), []),
  }
}