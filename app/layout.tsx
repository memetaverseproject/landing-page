import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import MainHeader from '@/components/header'
import MainFooter from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memetaverse',
  description: 'Awaken creative genius'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <MainHeader />
    {children}
    <MainFooter />
    </body>
    </html>
  )
}
