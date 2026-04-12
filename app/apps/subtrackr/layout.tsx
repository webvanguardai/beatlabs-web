import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SubTrackr — Track Every Subscription',
  description: 'Know exactly what you\'re paying for. Track every subscription, get alerts before renewals, and save money. Available on iOS and Android.',
  icons: {
    icon: '/subtrackr-favicon.svg',
    apple: '/subtrackr-favicon.svg',
  },
  openGraph: {
    title: 'SubTrackr — Track Every Subscription',
    description: 'Know exactly what you\'re paying for. Track every subscription, get alerts before renewals, and save money.',
    url: 'https://beatlabs.ae/apps/subtrackr',
    siteName: 'beatLabs',
    type: 'website',
  },
}

export default function SubtrackrLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
