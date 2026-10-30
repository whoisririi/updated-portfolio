export default function Card({ as: Tag = 'div', className = '', children, ...props }) {
  return (
    <Tag className={`rounded-2xl border-2 border-primary-100 bg-base-white p-4 max-sm:leading-normal ${className}`} {...props}>
      {children}
    </Tag>
  )
}