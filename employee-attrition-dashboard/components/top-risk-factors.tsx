"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Overtime",
    value: 85,
  },
  {
    name: "Job Satisfaction",
    value: 72,
  },
  {
    name: "Years Since Promotion",
    value: 65,
  },
  {
    name: "Work-Life Balance",
    value: 58,
  },
  {
    name: "Salary",
    value: 45,
  },
]

export function TopRiskFactors() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data} layout="vertical">
        <XAxis type="number" domain={[0, 100]} />
        <YAxis dataKey="name" type="category" scale="band" width={120} tickLine={false} axisLine={false} />
        <Bar
          dataKey="value"
          fill="#ef4444"
          radius={[0, 4, 4, 0]}
          label={{ position: "right", formatter: (value: number) => `${value}%` }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
