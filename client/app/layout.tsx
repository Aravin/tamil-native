import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './_components/Navbar'
import { Footer } from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tamil Native',
  description: 'A service to send native products to anyone around the globe, based on their request & customization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <header>
          <Navbar />
          <div className='py-2'>
            <hr />
          </div>
        </header>

        <div className='p-4 m-4 md:p-8 md:m-8 lg:p-10 lg:m-10'>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
