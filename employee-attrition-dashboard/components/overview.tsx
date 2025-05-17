"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    attrition: 12,
    newHires: 18,
  },
  {
    name: "Feb",
    attrition: 8,
    newHires: 15,
  },
  {
    name: "Mar",
    attrition: 10,
    newHires: 12,
  },
  {
    name: "Apr",
    attrition: 15,
    newHires: 8,
  },
  {
    name: "May",
    attrition: 7,
    newHires: 10,
  },
  {
    name: "Jun",
    attrition: 9,
    newHires: 14,
  },
  {
    name: "Jul",
    attrition: 11,
    newHires: 16,
  },
  {
    name: "Aug",
    attrition: 14,
    newHires: 12,
  },
  {
    name: "Sep",
    attrition: 10,
    newHires: 8,
  },
  {
    name: "Oct",
    attrition: 8,
    newHires: 10,
  },
  {
    name: "Nov",
    attrition: 12,
    newHires: 15,
  },
  {
    name: "Dec",
    attrition: 16,
    newHires: 9,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip />
        <Legend />
        <Bar dataKey="attrition" fill="#ef4444" radius={[4, 4, 0, 0]} />
        <Bar dataKey="newHires" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
