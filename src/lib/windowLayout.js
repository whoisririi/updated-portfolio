// Sizing and placement rules for windows, shared by <Window /> and the window manager.
export const WINDOW = {
  maxWidth: 740,
  maxHeight: 520,
  widthRatio: 0.94, // never wider than 94% of the desktop
  heightRatio: 0.76, // never taller than 76% of the desktop
  taskbarReserve: 96, // keep title bars clear of the taskbar
  minVisible: 120, // how much of a window must stay on screen when dragged
}

export function getWindowSize(bounds) {
  return {
    width: Math.min(WINDOW.maxWidth, bounds.width * WINDOW.widthRatio),
    height: Math.min(WINDOW.maxHeight, bounds.height * WINDOW.heightRatio),
  }
}

export function clampPosition({ x, y }, size, bounds) {
  return {
    x: Math.min(Math.max(x, WINDOW.minVisible - size.width), bounds.width - WINDOW.minVisible),
    y: Math.min(Math.max(y, 0), bounds.height - WINDOW.taskbarReserve),
  }
}

// Centered, with a small cascade so windows opened in turn don't hide each other.
export function getInitialPosition(index, bounds) {
  const size = getWindowSize(bounds)
  const shift = (index % 6) * 22 - 55
  return clampPosition(
    {
      x: (bounds.width - size.width) / 2 + shift,
      y: (bounds.height - WINDOW.taskbarReserve - size.height) / 2 + shift / 2,
    },
    size,
    bounds,
  )
}