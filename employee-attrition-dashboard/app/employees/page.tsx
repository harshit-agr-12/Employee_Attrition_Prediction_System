"use client"

import { useState } from "react"
import { ArrowUpDown, ChevronDown, MoreHorizontal, Search, Download, Filter } from "lucide-react"
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Employee = {
  id: string
  name: string
  department: string
  role: string
  yearsAtCompany: number
  lastPromotion: number
  performanceScore: number
  satisfaction: number
  attritionRisk: number
}

const data: Employee[] = [
  {
    id: "EMP001",
    name: "Alex Johnson",
    department: "Sales",
    role: "Sales Representative",
    yearsAtCompany: 2,
    lastPromotion: 1,
    performanceScore: 3.2,
    satisfaction: 2.8,
    attritionRisk: 0.78,
  },
  {
    id: "EMP002",
    name: "Sarah Williams",
    department: "Engineering",
    role: "Software Engineer",
    yearsAtCompany: 4,
    lastPromotion: 2,
    performanceScore: 4.5,
    satisfaction: 4.2,
    attritionRisk: 0.12,
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    department: "Marketing",
    role: "Marketing Specialist",
    yearsAtCompany: 1,
    lastPromotion: 0,
    performanceScore: 3.8,
    satisfaction: 3.5,
    attritionRisk: 0.45,
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    department: "HR",
    role: "HR Coordinator",
    yearsAtCompany: 3,
    lastPromotion: 1,
    performanceScore: 4.0,
    satisfaction: 3.9,
    attritionRisk: 0.22,
  },
  {
    id: "EMP005",
    name: "David Wilson",
    department: "Engineering",
    role: "Senior Developer",
    yearsAtCompany: 5,
    lastPromotion: 0,
    performanceScore: 4.2,
    satisfaction: 2.5,
    attritionRisk: 0.67,
  },
  {
    id: "EMP006",
    name: "Jennifer Taylor",
    department: "Sales",
    role: "Sales Manager",
    yearsAtCompany: 7,
    lastPromotion: 3,
    performanceScore: 4.7,
    satisfaction: 4.5,
    attritionRisk: 0.08,
  },
  {
    id: "EMP007",
    name: "Robert Martinez",
    department: "IT",
    role: "IT Support",
    yearsAtCompany: 2,
    lastPromotion: 0,
    performanceScore: 3.5,
    satisfaction: 3.0,
    attritionRisk: 0.52,
  },
  {
    id: "EMP008",
    name: "Lisa Anderson",
    department: "Finance",
    role: "Financial Analyst",
    yearsAtCompany: 4,
    lastPromotion: 1,
    performanceScore: 4.3,
    satisfaction: 3.8,
    attritionRisk: 0.25,
  },
  {
    id: "EMP009",
    name: "James Thomas",
    department: "Engineering",
    role: "QA Engineer",
    yearsAtCompany: 1,
    lastPromotion: 0,
    performanceScore: 3.0,
    satisfaction: 2.7,
    attritionRisk: 0.82,
  },
  {
    id: "EMP010",
    name: "Patricia White",
    department: "Marketing",
    role: "Marketing Director",
    yearsAtCompany: 8,
    lastPromotion: 2,
    performanceScore: 4.8,
    satisfaction: 4.6,
    attritionRisk: 0.15,
  },
]

export default function EmployeesPage() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [rowSelection, setRowSelection] = useState({})

  const columns: ColumnDef<Employee>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <div>{row.getValue("name")}</div>,
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => <div>{row.getValue("department")}</div>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <div>{row.getValue("role")}</div>,
    },
    {
      accessorKey: "yearsAtCompany",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Years at Company
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue("yearsAtCompany")}</div>,
    },
    {
      accessorKey: "performanceScore",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Performance
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue("performanceScore")}</div>,
    },
    {
      accessorKey: "satisfaction",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Satisfaction
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="text-center">{row.getValue("satisfaction")}</div>,
    },
    {
      accessorKey: "attritionRisk",
      header: ({ column }) => {
        return (
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            Attrition Risk
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => {
        const risk = row.getValue("attritionRisk") as number

        return (
          <div className="flex justify-center">
            <Badge className={risk > 0.7 ? "bg-red-500" : risk > 0.4 ? "bg-amber-500" : "bg-green-500"}>
              {(risk * 100).toFixed(0)}%
            </Badge>
          </div>
        )
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const employee = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(employee.id)}>
                Copy employee ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View details</DropdownMenuItem>
              <DropdownMenuItem>View prediction factors</DropdownMenuItem>
              <DropdownMenuItem>Schedule retention interview</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  })

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Employee Attrition Risk</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>View and manage employee attrition risk predictions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4">
            <div className="flex items-center border rounded-md px-3 flex-1 max-w-sm">
              <Search className="h-4 w-4 text-muted-foreground mr-2" />
              <Input
                placeholder="Search employees..."
                value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center">
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
              selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
