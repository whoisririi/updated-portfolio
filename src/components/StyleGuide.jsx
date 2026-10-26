// Temporary page to check the tokens. Delete it once the real desktop is in place.
const palettes = {
  Primary: [
    ['main', 'bg-primary', '#d9a3c0'],
    ['50', 'bg-primary-50', '#f6dfeb'],
    ['100', 'bg-primary-100', '#f0d3e3'],
    ['200', 'bg-primary-200', '#e7b9d0'],
    ['300', 'bg-primary-300', '#c996bd'],
    ['400', 'bg-primary-400', '#b78aa6'],
    ['500', 'bg-primary-500', '#8a6480'],
  ],
  Secondary: [
    ['main', 'bg-secondary', '#93abd9'],
    ['50', 'bg-secondary-50', '#dfe8f8'],
    ['100', 'bg-secondary-100', '#c9d7f1'],
    ['200', 'bg-secondary-200', '#b4c6ea'],
    ['300', 'bg-secondary-300', '#6f87b8'],
    ['400', 'bg-secondary-400', '#4c5f92'],
    ['500', 'bg-secondary-500', '#2f2b45'],
  ],
  Base: [
    ['Dark', 'bg-base-dark', '#3f3a52'],
    ['White', 'bg-base-white', '#ffffff'],
    ['Dirty White', 'bg-base-dirty-white', '#fffdf0'],
  ],
  Gray: [
    ['50', 'bg-gray-50', '#f9f9f9'],
    ['100', 'bg-gray-100', '#f1f1f1'],
    ['200', 'bg-gray-200', '#e3e3e3'],
    ['300', 'bg-gray-300', '#cfcfcf'],
    ['400', 'bg-gray-400', '#a3a3a3'],
    ['500', 'bg-gray-500', '#7a7a7a'],
    ['600', 'bg-gray-600', '#595959'],
    ['700', 'bg-gray-700', '#404040'],
    ['800', 'bg-gray-800', '#2b2b2b'],
    ['900', 'bg-gray-900', '#171717'],
  ],
}

function Swatch({ label, className, hex }) {
  return (
    <li className="overflow-hidden rounded-xl border-2 border-primary-100 bg-base-white">
      <div className={`h-16 ${className}`} />
      <div className="p-2">
        <p className="text-caption font-semibold text-base-dark">{label}</p>
        <p className="text-caption">{hex}</p>
      </div>
    </li>
  )
}

export default function StyleGuide() {
  return (
    <main className="mx-auto max-w-5xl space-y-12 p-8">
      <header className="space-y-2">
        <h1>Design tokens</h1>
        <p className="text-body-lg">Colors, fonts and type sizes for the desktop portfolio.</p>
      </header>

      <section className="space-y-4">
        <h2>Typography</h2>
        <div className="space-y-3 rounded-2xl bg-base-white p-6">
          <h1>h1 Page title, 55px</h1>
          <h2>h2 Section title, 38px</h2>
          <h3>h3 Section inner title, 22px</h3>
          <h4>h4 Small title, 18px</h4>
          <p className="text-body-xl">Body XL, 24px. The brown fox jumped over the lazy dog.</p>
          <p className="text-body-lg">Body large, 20px. The brown fox jumped over the lazy dog.</p>
          <p>Body, 16px. The brown fox jumped over the lazy dog.</p>
          <p className="text-caption">Caption, 14px. The brown fox jumped over the lazy dog.</p>
        </div>
      </section>

      <section className="space-y-6">
        <h2>Colors</h2>
        {Object.entries(palettes).map(([name, items]) => (
          <div key={name} className="space-y-3">
            <h3>{name}</h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {items.map(([label, className, hex]) => (
                <Swatch key={label} label={label} className={className} hex={hex} />
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  )
}
