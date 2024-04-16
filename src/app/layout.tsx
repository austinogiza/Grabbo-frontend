import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import ReduxProvider from "@/provider/ReduxProvider"
import "@/styles/globals.css"
import StyledComponentProvider from "@/provider/StyledComponentProvider"
import { Toaster } from "sonner"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
// import Head from "next/head"
// import SiteHeader from "@/config/SiteHeader"
// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   keywords: [],
//   authors: [
//     {
//       name: `${siteConfig.name}`,
//       url: `${siteConfig.url}`,
//     },
//   ],
//   creator: `${siteConfig.name}`,
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "white" },
//     { media: "(prefers-color-scheme: dark)", color: "black" },
//   ],
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteConfig.url,
//     title: siteConfig.name,
//     description: siteConfig.description,
//     siteName: siteConfig.name,
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: siteConfig.name,
//     description: siteConfig.description,
//     images: `${siteConfig.ogImage}`,
//     creator: `${siteConfig.name}`,
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
//   manifest: `${siteConfig.url}/site.webmanifest`,
// }
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
        <ReduxProvider>
          <html lang="en" suppressHydrationWarning>
            {/* <SiteHeader /> */}
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
