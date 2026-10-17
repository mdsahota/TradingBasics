
function Button({
  children,
  variant = 'primary',
  href,
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = [
    'button',
    `button--${variant}`,
    className,
  ].filter(Boolean).join(' ')

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
