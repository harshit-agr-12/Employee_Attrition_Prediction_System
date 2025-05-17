import Link from "next/link"
import { ArrowUpRight, Users, UserMinus, TrendingUp, AlertTriangle } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/overview"
import { RecentEmployees } from "@/components/recent-employees"
import { TopRiskFactors } from "@/components/top-risk-factors"
import { DepartmentAttrition } from "@/components/department-attrition"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Employee Attrition Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Link
              href="/upload"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Upload Data
            </Link>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,485</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Predicted Attrition</CardTitle>
              <UserMinus className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">237</div>
              <p className="text-xs text-muted-foreground">16% of workforce at risk</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attrition Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">16.0%</div>
              <p className="text-xs text-muted-foreground">+2.1% from industry average</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Employees</CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">6% of workforce</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Attrition Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Top Risk Factors</CardTitle>
              <CardDescription>Factors most contributing to attrition</CardDescription>
            </CardHeader>
            <CardContent>
              <TopRiskFactors />
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Employees at Risk</CardTitle>
              <CardDescription>Employees with highest attrition probability</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentEmployees />
            </CardContent>
            <CardFooter>
              <Link href="/employees" className="inline-flex items-center text-sm text-muted-foreground">
                View all employees
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Attrition by Department</CardTitle>
              <CardDescription>Distribution across departments</CardDescription>
            </CardHeader>
            <CardContent>
              <DepartmentAttrition />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
