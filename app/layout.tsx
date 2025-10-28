import Header from '@/components/header'
import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
  title: 'Davi Lopes França — Desenvolvedor Fullstack',
  description: 'Portfólio — Davi Lopes França'
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container mx-auto px-6 py-20">{children}</main>
      </body>
    </html>
  )
}