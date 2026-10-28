// Turns **double asterisks** in text into bold, so key results stand out.
export default function Emphasis({ text }) {
  return (
    <>
      {text.split('**').map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-base-dark">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  )
}