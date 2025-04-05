import type { Metadata } from 'next'
import { Geist, Geist_Mono as GeistMono } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Autenticação com NextAuth.js e Github',
  description:
    'O poder e a facilidade de um sistema de login utilizando o Github para autenticação em uma aplicação Next.js',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} pt-20 pb-32 antialiased`}
      >
        <Providers
          ipInfoToken={process.env.IPINFO_TOKEN!}
          appToken={process.env.APP_TOKEN!}
          appName={process.env.APP_NAME!}
          appApiUrl={process.env.APP_API_URL!}
        >
          {children}
        </Providers>
      </body>
    </html>
  )
}
