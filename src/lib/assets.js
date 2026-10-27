// Picks up your own artwork by file name, so no imports need editing.
//   src/assets/icons/<app-id>.(png|webp|svg|jpg|gif)
//   src/assets/background.(png|webp|svg|jpg|gif)
//   src/assets/widgets/art.png and cover.png (both optional)
// Missing files are fine: the UI falls back to placeholders.
const iconFiles = import.meta.glob('../assets/icons/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})
const backgroundFiles = import.meta.glob('../assets/background.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})
const widgetFiles = import.meta.glob('../assets/widgets/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})

const aboutFiles = import.meta.glob('../assets/about/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})

const projectFiles = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,webp,svg,gif}', {
  eager: true,
  import: 'default',
})

export const icons = Object.fromEntries(
  Object.entries(iconFiles).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ]),
)

export const background = Object.values(backgroundFiles)[0] ?? null

export const widgetImages = Object.fromEntries(
  Object.entries(widgetFiles).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ]),
)

export const aboutImages = Object.fromEntries(
  Object.entries(aboutFiles).map(([path, url]) => [
    path.split('/').pop().replace(/\.[^.]+$/, ''),
    url,
  ]),
)

// src/assets/projects/<project-id>/cover.jpg and shot-1.jpg, shot-2.jpg, ...
// Result: { 'project-1': { cover: url | null, shots: [url, ...] } }
export const projectImages = {}
const sortedProjectFiles = Object.entries(projectFiles).sort(([a], [b]) =>
  a.localeCompare(b, undefined, { numeric: true }),
)
for (const [path, url] of sortedProjectFiles) {
  const [, , , id, file] = path.split('/')
  const name = file.replace(/\.[^.]+$/, '')
  const entry = (projectImages[id] ??= { cover: null, shots: [] })
  if (name === 'cover') entry.cover = url
  else if (name.startsWith('shot')) entry.shots.push(url)
}