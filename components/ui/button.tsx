export function Button({ children, className = "", variant, ...props }: any) {
  const base = "rounded-2xl px-10 py-6 text-lg font-semibold transition-all duration-300 button-underline transform hover:scale-105"
  const style = variant === "outline"
    ? "border border-gray-300 hover:bg-gray-100 text-gray-900"
    : "bg-gray-900 text-white hover:bg-gray-800"

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  )
}
