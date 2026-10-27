// Temporary window content. Each app gets its own real component in the next steps.
export default function PlaceholderWindow({ title }) {
  return (
    <div className="space-y-4">
      <h3>{title}</h3>
      <p>The content for this window goes here. This long placeholder shows the pastel scrollbar.</p>
      {Array.from({ length: 8 }, (_, i) => (
        <p key={i} className="rounded-xl border-2 border-primary-100 bg-base-white p-4">
          Placeholder block {i + 1}. Replace it with the real content for this window.
        </p>
      ))}
    </div>
  )
}