// Shared shell for every desktop widget.
export default function WidgetCard({ className = '', children, ...props }) {
  return (
    <section
      className={`overflow-hidden rounded-window border-3 border-base-dirty-white bg-base-dirty-white shadow-sticker ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}