// Sizes and curve maths for the history timeline.
export const TIMELINE = {
  width: 60, // width of the curved track
  gap: 14, // space between cards
  // Used only until each card has measured itself:
  fallbackActive: 230,
  fallbackInactive: 100,
}

// Takes each card's height and works out where its dot sits on the curve.
export function getTimelineLayout(heights) {
  const { width, gap } = TIMELINE

  let top = 0
  const items = heights.map((height) => {
    const center = top + height / 2
    top += height + gap
    return { height, center }
  })
  const height = Math.max(top - gap, 0)

  const curveX = (y) => width - 10 - 44 * Math.sin((Math.PI * y) / height)

  let arc = ''
  for (let y = 0; height > 0 && y <= height; y += 19) {
    arc += `${y ? 'L' : 'M'}${curveX(y).toFixed(1)} ${y} `
  }

  return {
    width,
    height,
    arc,
    items: items.map((item) => ({ ...item, dotX: height > 0 ? Number(curveX(item.center).toFixed(1)) : 0 })),
  }
}