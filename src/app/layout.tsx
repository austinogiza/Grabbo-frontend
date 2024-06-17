import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import "@/styles/globals.css"
import StyledComponentProvider from "@/provider/StyledComponentProvider"
import { Toaster } from "sonner"
import { siteConfig } from "@/config/site"
import Head from "next/head"
import Script from "next/script"

export const metadata = {
  title: `${siteConfig.title}`,
  description: `${siteConfig.description}`,
  icons: ["/favicon.ico"],
  openGraph: {
    title: `${siteConfig.title}`,
    description: `${siteConfig.description}`,
    images: [`${siteConfig.ogImage}`],
  },
  twitter: {
    card: "summary_large_image",
    description: `${siteConfig.description}`,
    images: [`${siteConfig.ogImage}`],
    creator: `${siteConfig.name}`,
  },
  metadataBase: new URL(`${siteConfig.url}`),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <StyledComponentProvider>
      <ReactQueryProvider>
        <html lang="en" suppressHydrationWarning>
          <Head>
            <link
              rel="preload"
              href="/fonts/Geist/Geist-Regular.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/Geist/Geist-Medium.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/Geist/Geist-Bold.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/Geist/Geist-SemiBold.otf"
              as="font"
              type="font/otf"
              crossOrigin="anonymous"
            />
          </Head>
          <body>
            <Toaster
              position="top-right"
              richColors
              expand={true}
              visibleToasts={1}
            />
            <SiteContainer>{children}</SiteContainer>
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-FRS6TMLZL3"
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-FRS6TMLZL3');
                `,
              }}
            />
          </body>
        </html>
      </ReactQueryProvider>
    </StyledComponentProvider>
  )
}
