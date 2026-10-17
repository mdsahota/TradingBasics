
import Eyebrow from './Eyebrow'

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  )
}

export default SectionHeading
