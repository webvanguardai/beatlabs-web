import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'beatLabs — Digital Studio. Dubai, UAE.',
  description: 'beatLabs is a Dubai-based digital studio building independent brands — apps, agencies, and creative platforms. Home of Nibango, WebVanguard, TrueLoveCreative, and Estrela.photo.',
  keywords: [
    'beatLabs', 'digital studio Dubai', 'UAE startup studio', 'tech studio Dubai',
    'Nibango', 'WebVanguard', 'TrueLoveCreative', 'Estrela photo',
    'app development Dubai', 'startup Dubai', 'digital brands UAE',
    'web design Dubai', 'marketplace app UAE', 'creative studio Dubai',
  ],
  authors: [{ name: 'beatLabs', url: 'https://beatlabs.ae' }],
  creator: 'beatLabs',
  publisher: 'beatLabs',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'beatLabs — Digital Studio. Dubai, UAE.',
    description: 'Building independent digital brands from Dubai. Apps, agencies, platforms, creative studios.',
    url: 'https://beatlabs.ae',
    siteName: 'beatLabs',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://beatlabs.ae/og-image.png',
        width: 1200,
        height: 630,
        alt: 'beatLabs — Digital Studio Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'beatLabs — Digital Studio. Dubai, UAE.',
    description: 'Building independent digital brands from Dubai. Apps, agencies, platforms, creative studios.',
    images: ['https://beatlabs.ae/og-image.png'],
  },
  alternates: {
    canonical: 'https://beatlabs.ae',
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "beatLabs",
              "url": "https://beatlabs.ae",
              "logo": "https://beatlabs.ae/logo.png",
              "description": "Dubai-based digital studio building independent brands — apps, agencies, and creative platforms.",
              "email": "info@beatlabs.ae",
              "foundingDate": "2026",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "sameAs": [
                "https://webvanguard.co",
                "https://nibango.com",
                "https://truelovecreative.es",
                "https://estrela.photo"
              ],
              "subOrganization": [
                { "@type": "Organization", "name": "WebVanguard", "url": "https://webvanguard.co" },
                { "@type": "Organization", "name": "Nibango", "url": "https://nibango.com" },
                { "@type": "Organization", "name": "TrueLoveCreative", "url": "https://truelovecreative.es" },
                { "@type": "Organization", "name": "Estrela.photo", "url": "https://estrela.photo" }
              ]
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
