"use client"
import SectionBanner from '@/components/section-banner'
import SectionIntroduction from '@/components/section-introduction'
import SectionSubscription from '@/components/section-subscription'
import SectionEcosystem from '@/components/section-ecosystem'
import SectionFaq from '@/components/section-faq'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SectionBanner />
      <SectionIntroduction />
      <SectionEcosystem />
      <SectionFaq />
      <SectionSubscription />
    </main>
  )
}
