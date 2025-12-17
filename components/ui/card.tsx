export function Card({ children, className = "", ...props }: any) {
  return (
    <div
      className={`bg-white/5 border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition-all duration-300 backdrop-blur-md p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: any) {
  return <div className={`text-white/70 ${className}`} {...props}>{children}</div>
}
