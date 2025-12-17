export function Card({ children, className = "", ...props }: any) {
  return (
    <div
      className={`
        relative
        bg-black
        border border-white/20
        rounded-2xl
        text-white
        p-6
        transition-all
        hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]
        animate-cardGlow
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardContent({ children, className = "", ...props }: any) {
  return <div className={`${className}`}>{children}</div>
}
