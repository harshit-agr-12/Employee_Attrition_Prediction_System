"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/employees"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/employees" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Employees
      </Link>
      <Link
        href="/predict"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/predict" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Predict
      </Link>
      <Link
        href="/upload"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/upload" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Upload Data
      </Link>
    </nav>
  )
}
