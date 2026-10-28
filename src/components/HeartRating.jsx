// Row of hearts, e.g. 4 of 5 filled. Screen readers hear "Rated 4 out of 5".
export default function HeartRating({ value, max = 5 }) {
  return (
    <span role="img" aria-label={`Rated ${value} out of ${max}`} className="flex gap-0.75">
      {Array.from({ length: max }, (_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M8 14S2 10 2 6a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 4-6 8-6 8z"
            strokeWidth="1.4"
            className={`stroke-base-dark ${i < value ? 'fill-primary' : 'fill-primary-50'}`}
          />
        </svg>
      ))}
    </span>
  )
}