// Text for the softwares window. Edit the placeholders here.
//   id        also the icon file name: src/assets/tools/<id>.png
//   category  one of the filter tabs below ('design', 'motion' or 'code')
//   usage     one short line about what you use it for
export const toolCategories = ['all', 'design', 'motion', 'code']

export const tools = [
  { id: 'figma', name: 'Figma', category: 'design', usage: 'Interface design, prototypes and design systems' },
  { id: 'figma-motion', name: 'Figma Motion', category: 'motion', usage: 'Animations and micro-interactions on a timeline' },
  { id: 'html', name: 'HTML', category: 'code', usage: 'Page structure and accessible markup' },
  { id: 'css', name: 'CSS', category: 'code', usage: 'Layouts, styling and animation' },
  { id: 'react', name: 'React', category: 'code', usage: 'Building the interactive pieces of a site' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'code', usage: 'Turning a design system into consistent styles' },
  { id: 'infinite-painter', name: 'Infinite Painter', category: 'design', usage: 'Drawing assets and other artworks' },
  { id: 'resprite', name: 'Resprite', category: 'design', usage: 'Pixel art assets' },
  { id: 'alight-motion', name: 'Alight Motion', category: 'motion', usage: 'Motion graphics and animated assets' },
]

export const toolsNote = 'Since I am very much fond of web and mobile designing, Figma has been my go-to tool for turning my concepts and visions to reality. They have also added Figma motion beta which gives me an easier way to animate some components. I also use Infinite Painter for drawing and Resprite for pixel art if needed. For motion graphics, I use Alight Motion. For coding, I use HTML, CSS, React and Tailwind CSS to translate the designs into a functional website.'