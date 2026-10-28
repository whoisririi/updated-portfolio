export default function RotationSection({ title, subtitle, intro, children }) {
  return (
    <section aria-label={title} className="grid content-start gap-3">
      <div>
        <h3>{title}</h3>
        <p className="text-caption">{subtitle}</p>
      </div>
      <p>{intro}</p>
      <div className="grid gap-3">{children}</div>
    </section>
  )
}