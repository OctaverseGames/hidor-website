export function Button({ children, className = "", variant, ...props }: any) {
  const base = "rounded-2xl px-10 py-6 text-lg font-semibold transition-all duration-300"
  const style = variant === "outline"
    ? "border border-white/30 hover:bg-white/5"
    : "bg-white/10 hover:bg-white/20"

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  )
}
