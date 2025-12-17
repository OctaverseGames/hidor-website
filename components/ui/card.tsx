export function Card({ children, className = "", ...props }: any) {
  return (
    <div
      className={`card-neon shadow-2xl p-6 transition-all hover:shadow-white/40 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: any) {
  return <div className={`${className}`} {...props}>{children}</div>
}
