import { WingIcon } from './icons'

const tones = {
  primary:
    'bg-linear-to-b from-primary-200 to-primary shadow-button active:shadow-[0_1px_0_var(--color-primary-400)]',
  secondary:
    'bg-linear-to-b from-secondary-200 to-secondary shadow-button-blue active:shadow-[0_1px_0_var(--color-secondary-300)]',
}

const base =
  'group relative inline-flex min-h-11 min-w-42 items-center justify-center rounded-2xl border-3 border-base-dirty-white px-5.5 py-2 ' +
  'font-display text-h4 text-base-dark no-underline transition-[translate,box-shadow] duration-150 ' +
  'hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0.75 ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-dark motion-reduce:transition-none'

const wing =
  'pointer-events-none absolute top-1/2 -mt-3 h-5 w-6.5 opacity-0 transition-[opacity,translate,scale] duration-300 ease-out motion-reduce:transition-none'

const wingLeft = `${wing} -left-1 -scale-x-40 scale-y-40 group-hover:-translate-x-6 group-hover:-scale-x-100 group-hover:scale-y-100 group-hover:opacity-100 group-focus-visible:-translate-x-6 group-focus-visible:-scale-x-100 group-focus-visible:scale-y-100 group-focus-visible:opacity-100`
const wingRight = `${wing} -right-1 scale-40 group-hover:translate-x-6 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-x-6 group-focus-visible:scale-100 group-focus-visible:opacity-100`

export default function WingButton({ as: Tag = 'button', tone = 'primary', className = '', children, ...props }) {
  const typeProps = Tag === 'button' ? { type: 'button' } : {}

  return (
    <Tag {...typeProps} className={`${base} ${tones[tone]} ${className}`} {...props}>
      {children}
      <WingIcon className={wingLeft} />
      <WingIcon className={wingRight} />
    </Tag>
  )
}