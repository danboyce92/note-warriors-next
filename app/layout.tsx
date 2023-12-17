import type { Metadata } from 'next'
import { Inter, Raleway } from 'next/font/google'
import NavBar from './NavBar'
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
      {/* <link rel="preload" href="./public/imgs/aboutus.jpg" as="image" /> */}
      <body className={raleway.className}>
        {children}
        <nav><NavBar /></nav>
      </body>
    </html>
  )
}
