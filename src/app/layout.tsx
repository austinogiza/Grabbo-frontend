import { siteConfig } from "@/config/site"
import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import ReduxProvider from "@/provider/ReduxProvider"
import "@/styles/globals.css"
import StyledComponentProvider from "@/provider/StyledComponentProvider"
import type { Metadata } from "next"
import { Toaster } from "sonner"
export const metadata: Metadata = {
  title: "Home | Grabbo Fertility Clinic",
  description: "",
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
          <html lang="en">
            <head>
              {" "}
              <meta name="description" content={`${siteConfig.name}`} />
              {/* Product Name */}
              <meta name="product-name" content={`${siteConfig.name}`} />
              {/* Twitter Card data */}
              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content={`${siteConfig.username}`} />
              <meta name="twitter:title" content={`${siteConfig.name}`} />
              <meta
                name="twitter:description"
                content={`${siteConfig.description}`}
              />
              <meta name="twitter:creator" content={`${siteConfig.username}`} />
              {/* Twitter Summary card images must be at least 120x120px */}
              <meta name="twitter:image" content={`${siteConfig.ogImage}`} />
              {/* Open Graph data for Facebook */}
              <meta property="og:title" content={`${siteConfig.name}`} />
              <meta property="og:type" content="Article" />
              <meta property="og:url" content={`${siteConfig.ogImage}`} />
              <meta property="og:image" content={`${siteConfig.ogImage}`} />
              <meta
                property="og:description"
                content={`${siteConfig.description}`}
              />
              <meta property="og:site_name" content={`${siteConfig.name}`} />
              {/* Open Graph data for LinkedIn */}
              <meta property="og:title" content={`${siteConfig.name}`} />
              <meta property="og:url" content={`${siteConfig.ogImage}`} />
              <meta property="og:image" content={`${siteConfig.ogImage}`} />
              <meta
                property="og:description"
                content={`${siteConfig.description}`}
              />
              <meta property="og:title" content={`${siteConfig.name}`} />
              <meta property="og:url" content={`${siteConfig.username}`} />
              <meta property="og:image" content={`${siteConfig.ogImage}`} />
              <meta
                property="og:description"
                content={`${siteConfig.description}`}
              />
            </head>
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
