import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Note-Warriors',
  description: 'Music learning platform',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
