"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, Users, FileUp, Settings, HelpCircle, Home, Calculator } from "lucide-react"

import { cn } from "@/lib/utils"

export function SidebarNav() {
  const pathname = usePathname()

  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: Home,
    },
    {
      title: "Employees",
      href: "/employees",
      icon: Users,
    },
    {
      title: "Predict",
      href: "/predict",
      icon: Calculator,
    },
    {
      title: "Analytics",
      href: "/analytics",
      icon: BarChart,
    },
    {
      title: "Upload Data",
      href: "/upload",
      icon: FileUp,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      title: "Help",
      href: "/help",
      icon: HelpCircle,
    },
  ]

  return (
    <nav className="flex flex-col space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            pathname === item.href
              ? "bg-muted text-primary font-medium"
              : "text-muted-foreground hover:bg-muted hover:text-primary",
            "flex items-center rounded-md px-3 py-2 text-sm transition-colors",
          )}
        >
          <item.icon className="mr-2 h-4 w-4" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
