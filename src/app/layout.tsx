import { Inter } from "next/font/google"

import type { Metadata } from "next"

import { GlobalLayout } from "@/components/layouts/GlobalLayout"
import { GlobalProviders } from "@/components/providers/GlobalProvider"

import "primereact/resources/themes/lara-light-cyan/theme.css"
import "primeicons/primeicons.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Super Pineapple CMS",
  description: "Pineapple 後台系統",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <GlobalProviders>
          <GlobalLayout>{children}</GlobalLayout>
        </GlobalProviders>
      </body>
    </html>
  )
}
