import { WingIcon } from './icons'

const tones = {
  primary:
    'bg-linear-to-b from-primary-200 to-primary shadow-button active:shadow-[0_1px_0_var(--color-primary-400)]',
  secondary:
    'bg-linear-to-b from-secondary-200 to-secondary shadow-button-blue active:shadow-[0_1px_0_var(--color-secondary-300)]',
}

const sizes = {
  md: 'min-h-11 min-w-42 px-5.5 py-2 text-h4',
  sm: 'min-h-10 min-w-32 px-4 py-2 text-h4',
  xs: 'min-h-8 min-w-24 px-3 py-1 text-caption',
}

const base =
  'group relative inline-flex items-center justify-center rounded-2xl border-3 border-base-dirty-white ' +
  'font-display no-underline transition-[translate,box-shadow] duration-150 motion-reduce:transition-none ' +
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-base-dark'

const interactive = 'text-base-dark hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0.75'

// Flat gray, no lift, no wings.
const disabledStyle = 'cursor-not-allowed bg-gray-200 text-gray-600 shadow-[0_4px_0_var(--color-gray-300)]'

const wing =
  'pointer-events-none absolute top-1/2 -mt-3 h-5 w-6.5 opacity-0 transition-[opacity,translate,scale] duration-300 ease-out motion-reduce:transition-none'

// The left wing is the right wing mirrored (negative x scale). Both pop out on hover or focus.
const wingLeft = `${wing} -left-1 -scale-x-40 scale-y-40 group-hover:-translate-x-6 group-hover:-scale-x-100 group-hover:scale-y-100 group-hover:opacity-100 group-focus-visible:-translate-x-6 group-focus-visible:-scale-x-100 group-focus-visible:scale-y-100 group-focus-visible:opacity-100`
const wingRight = `${wing} -right-1 scale-40 group-hover:translate-x-6 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-x-6 group-focus-visible:scale-100 group-focus-visible:opacity-100`

// Pastel button with wings. Use as="a" for links and downloads. size: "md" (default), "sm" or "xs".
// disabled renders a gray button that does nothing. It uses aria-disabled instead of the
// disabled attribute so it can still be focused (keyboard users can reach its tooltip).
export default function WingButton({
  as: Tag = 'button',
  tone = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  children,
  ...props
}) {
  if (disabled) {
    return (
      <button
        type="button"
        {...props}
        onClick={undefined}
        aria-disabled="true"
        className={`${base} ${sizes[size]} ${disabledStyle} ${className}`}
      >
        {children}
      </button>
    )
  }

  const typeProps = Tag === 'button' ? { type: 'button' } : {}

  return (
    <Tag {...typeProps} className={`${base} ${sizes[size]} ${tones[tone]} ${interactive} ${className}`} {...props}>
      {children}
      <WingIcon className={wingLeft} />
      <WingIcon className={wingRight} />
    </Tag>
  )
}