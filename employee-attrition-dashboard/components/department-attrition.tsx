"use client"

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Sales", value: 35, color: "#ef4444" },
  { name: "Engineering", value: 25, color: "#3b82f6" },
  { name: "Marketing", value: 15, color: "#22c55e" },
  { name: "HR", value: 10, color: "#eab308" },
  { name: "Finance", value: 8, color: "#a855f7" },
  { name: "Other", value: 7, color: "#64748b" },
]

export function DepartmentAttrition() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
