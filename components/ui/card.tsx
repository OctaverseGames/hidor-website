export function Card({ children, className = "", color = "from-purple-400 to-blue-400", ...props }: any) {
  return (
    <div
      className={`bg-gradient-to-br ${color} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transform transition-all animate-cardGlow ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: any) {
  return <div className={`${className}`} {...props}>{children}</div>
}
