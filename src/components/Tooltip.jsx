// Pink speech-bubble tooltip. Place it right AFTER the element it describes, and give that
// element the `peer` class and aria-describedby={id}. It shows on hover (after a short
// delay) and on keyboard focus, and stays hidden on touch screens.
export default function Tooltip({ id, children }) {
  return (
    <span
      id={id}
      role="tooltip"
      className={
        'pointer-events-none invisible absolute bottom-full left-1/2 z-10 mb-1 w-max max-w-52 -translate-x-1/2 translate-y-1 scale-95 ' +
        'rounded-xl border-2 border-base-dirty-white bg-primary px-3 py-1.5 text-center font-display text-caption text-base-dark opacity-0 shadow-sticker ' +
        'transition-[opacity,translate,scale,visibility] duration-150 motion-reduce:transition-none ' +
        'peer-hover:visible peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100 peer-hover:delay-500 ' +
        'peer-focus-visible:visible peer-focus-visible:translate-y-0 peer-focus-visible:scale-100 peer-focus-visible:opacity-100'
      }
    >
      {children}
      <span
        aria-hidden="true"
        className="absolute top-full left-1/2 -mt-1.5 size-3 -translate-x-1/2 rotate-45 border-r-2 border-b-2 border-base-dirty-white bg-primary"
      />
    </span>
  )
}