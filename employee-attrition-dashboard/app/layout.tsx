import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { SidebarNav } from "@/components/sidebar-nav"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Employee Attrition Dashboard",
  description: "A dashboard for visualizing and predicting employee attrition",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <div className="border-b">
              <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                  <Suspense>
                    <Search />
                  </Suspense>
                  <UserNav />
                </div>
              </div>
            </div>
            <div className="flex-1 flex">
              <div className="hidden md:block w-64 border-r p-4">
                <SidebarNav />
              </div>
              <div className="flex-1">
                <Suspense>{children}</Suspense>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
