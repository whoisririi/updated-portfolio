// Row of small blue pills, e.g. project tags.
export default function TagList({ items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item, i) => (
        <li key={`${i}-${item}`} className="rounded-xl bg-secondary-50 px-2.5 py-0.5 text-caption text-base-dark">
          {item}
        </li>
      ))}
    </ul>
  )
}