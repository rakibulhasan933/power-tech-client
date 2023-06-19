import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import NextAuthProvider from '@/components/NextAuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home - PowerTech ',
  description: 'Generated by rakibul && nafisha',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" bg-slate-50">
          <NextAuthProvider>
            {children}
          </NextAuthProvider>
          <Footer />
        </div>
      </body>
    </html>
  )
}
