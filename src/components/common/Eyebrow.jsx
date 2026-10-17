
function Eyebrow({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`.trim()}>
      {children}
    </span>
  )
}

export default Eyebrow
