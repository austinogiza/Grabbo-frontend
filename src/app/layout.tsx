import { siteConfig } from "@/config/site"
import SiteContainer from "@/container/SiteContainer"
import ReactQueryProvider from "@/provider/ReactQueryProvider"
import ReduxProvider from "@/provider/ReduxProvider"
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
            <body>
              <Toaster
                position="top-right"
                richColors
                expand={true}
                visibleToasts={1}
              />{" "}
              <SiteContainer>{children}</SiteContainer>
            </body>
          </html>
        </ReduxProvider>
      </ReactQueryProvider>
    </StyledComponentProvider>
  )
}
