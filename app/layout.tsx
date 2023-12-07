import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

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
      <body className="bg-cover bg-fixed lg:bg-sprise-gradient-desktop bg-sprise-gradient-mobile">{children}</body>
    </html>
  )
}
