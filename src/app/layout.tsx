import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mejores patinetes eléctricos del 2023',
  description: 'Muévete con total libertad por tu ciudad, ahorrando en consumo y sin atascos con tú nuevo patinete eléctrico. En nuestra tienda encontrarás los mejores patinetes de todas las marcas, ademas de los mejores recambio. Tenemos ruedas, baterías, cargadores, motores, frenos, guardabarros, etc...'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
