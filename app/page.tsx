"use client"
import SectionBanner from '@/components/section-banner'
import SectionSubscription from '@/components/section-subscription'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionBanner />
      <SectionSubscription />
    </main>
  )
}
