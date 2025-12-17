import "./globals.css"

export const metadata = {
  title: "HIDOR",
  description: "Confidential Proof-of-Stake blockchain",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
