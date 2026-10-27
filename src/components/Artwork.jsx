const tones = {
  pink: 'bg-linear-to-br from-primary to-primary-50',
  blue: 'bg-linear-to-br from-secondary to-secondary-50',
  mix: 'bg-linear-to-br from-primary to-secondary',
}

export default function Artwork({ src, alt, tone = 'mix', className = '', children }) {
  if (src) {
    return <img src={src} alt={alt} draggable={false} className={`object-cover ${className}`} />
  }
  return (
    <div
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={`${tones[tone]} ${className}`}
    >
      {children}
    </div>
  )
}