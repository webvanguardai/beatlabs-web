import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'beatLabs — Build Different',
  description: 'beatLabs is a venture studio building apps, platforms, and digital products from Dubai, UAE.',
  keywords: ['beatLabs', 'venture studio', 'Dubai', 'UAE', 'apps', 'Nibango', 'WebVanguard', 'TrueLoveCreative'],
  openGraph: {
    title: 'beatLabs — Build Different',
    description: 'Venture studio. Dubai, UAE.',
    url: 'https://beatlabs.ae',
    siteName: 'beatLabs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beatLabs — Build Different',
    description: 'Venture studio. Dubai, UAE.',
  },
  metadataBase: new URL('https://beatlabs.ae'),
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
