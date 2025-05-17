import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const employees = [
  {
    id: "EMP001",
    name: "Alex Johnson",
    department: "Sales",
    risk: 0.78,
    factors: "Overtime, Low Satisfaction",
  },
  {
    id: "EMP009",
    name: "James Thomas",
    department: "Engineering",
    risk: 0.82,
    factors: "No Promotion, Low Performance",
  },
  {
    id: "EMP015",
    name: "Maria Garcia",
    department: "Customer Support",
    risk: 0.75,
    factors: "Overtime, Commute Distance",
  },
  {
    id: "EMP023",
    name: "Kevin Lee",
    department: "IT",
    risk: 0.71,
    factors: "Work-Life Balance, Salary",
  },
  {
    id: "EMP005",
    name: "David Wilson",
    department: "Engineering",
    risk: 0.67,
    factors: "No Promotion, Low Satisfaction",
  },
]

export function RecentEmployees() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Risk Score</TableHead>
          <TableHead>Key Factors</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employees.map((employee) => (
          <TableRow key={employee.id}>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>{employee.department}</TableCell>
            <TableCell>
              <Badge className="bg-red-500">{(employee.risk * 100).toFixed(0)}%</Badge>
            </TableCell>
            <TableCell>{employee.factors}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
