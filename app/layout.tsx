import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Sprise',
  description: 'A software development agency and product studio.',
  openGraph: {
    title: 'Sprise',
    description: 'A software development agency and product studio.',
    url: 'https://sprise.co',
    images: [
      {
        url: '../static/img/sprise-logo-og.png',
        width: '1200',
        height: '675',
        alt: 'Sprise',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sprise',
    description: 'A software development agency and product studio.',
    creator: '@sprisehq',
    images: ['../static/img/sprise-logo-og.png'],
  },
}

export const viewport = {
  themeColor: '#D2A7FC',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="p-safe bg-cover bg-fixed lg:bg-sprise-gradient-desktop bg-sprise-gradient-mobile">{children}</body>
    </html>
  )
}
