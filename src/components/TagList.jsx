export default function TagList({ items, className = '' }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item, i) => (
        <li key={`${i}-${item}`} className="rounded-xl bg-secondary-50 px-3 py-1 text-caption text-base-dark sm:px-2.5 sm:py-0.5">
          {item}
        </li>
      ))}
    </ul>
  )
}