import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sprise',
  description: 'A software development agency and product studio.',
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
