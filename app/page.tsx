"use client"
import SectionBanner from '@/components/section-banner'
import SectionSubscription from '@/components/section-subscription'
import SectionEcosystem from '@/components/section-ecosystem'
import SectionFaq from '@/components/section-faq'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionBanner />
      <SectionEcosystem />
      <SectionFaq />
      <SectionSubscription />
    </main>
  )
}
