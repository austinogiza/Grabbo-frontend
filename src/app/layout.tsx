import { siteConfig } from "@/config/site"
import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import ReduxProvider from "@/provider/ReduxProvider"
import "@/styles/globals.css"
import StyledComponentProvider from "@/provider/StyledComponentProvider"
import type { Metadata } from "next"
import { Toaster } from "sonner"

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.name,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: siteConfig.social,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StyledComponentProvider>
      <ReactQueryProvider>
        <ReduxProvider>
          <html lang="en" suppressHydrationWarning>
            <body>
              <Toaster
                position="top-right"
                richColors
                expand={true}
                visibleToasts={1}
              />
              <SiteContainer>{children}</SiteContainer>
            </body>
          </html>
        </ReduxProvider>
      </ReactQueryProvider>
    </StyledComponentProvider>
  )
}
