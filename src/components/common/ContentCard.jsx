
function ContentCard({
  eyebrow,
  title,
  description,
  href,
  icon,
  className = '',
}) {
  const content = (
    <>
      {icon && <div className="content-card__icon">{icon}</div>}
      {eyebrow && <span className="content-card__eyebrow">{eyebrow}</span>}
      <h3 className="content-card__title">{title}</h3>
      {description && (
        <p className="content-card__description">{description}</p>
      )}
      {href && (
        <span className="content-card__link">
          Explore more <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  )

  const classes = `content-card ${className}`.trim()

  if (href) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    )
  }

  return <article className={classes}>{content}</article>
}

export default ContentCard
