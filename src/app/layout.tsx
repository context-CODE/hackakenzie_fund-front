import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: '400'
})

export const metadata: Metadata = {
  title: {
    template: '%s | instor',
    default: 'instor'
  },
  description: 'A definir'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={poppins.variable} lang="pt-BR">
      <body className="w-full h-full bg-white antialiased flex flex-col">
        <Header />
        <main className="flex-grow pt-[97px] sm:pt-[112px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
