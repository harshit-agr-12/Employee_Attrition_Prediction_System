"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PredictionResult } from "@/components/prediction-result"
import { PredictionFactors } from "@/components/prediction-factors"

export default function PredictPage() {
  const [formData, setFormData] = useState({
    age: 35,
    gender: "",
    department: "",
    jobRole: "",
    yearsAtCompany: 3,
    monthlyIncome: 5000,
    distanceFromHome: 10,
    education: "",
    jobSatisfaction: 3,
    workLifeBalance: 3,
    performanceRating: 3,
    relationshipSatisfaction: 3,
    environmentSatisfaction: 3,
    jobInvolvement: 3,
    trainingTimesLastYear: 2,
    yearsSinceLastPromotion: 1,
    stockOptionLevel: 0,
    overtimeYes: false,
    maritalStatus: "",
  })

  const [prediction, setPrediction] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // In a real application, this would call an API endpoint
    // For demo purposes, we'll generate a random prediction
    const randomPrediction = Math.random()
    setPrediction(randomPrediction)
    setShowResult(true)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Predict Employee Attrition</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Employee Information</CardTitle>
              <CardDescription>Enter employee details to predict attrition risk</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input
                      id="age"
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleChange("age", Number.parseInt(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Select value={formData.department} onValueChange={(value) => handleChange("department", value)}>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="research">Research & Development</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobRole">Job Role</Label>
                    <Select value={formData.jobRole} onValueChange={(value) => handleChange("jobRole", value)}>
                      <SelectTrigger id="jobRole">
                        <SelectValue placeholder="Select job role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="researcher">Researcher</SelectItem>
                        <SelectItem value="sales_rep">Sales Representative</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="hr_specialist">HR Specialist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearsAtCompany">Years at Company</Label>
                    <Input
                      id="yearsAtCompany"
                      type="number"
                      value={formData.yearsAtCompany}
                      onChange={(e) => handleChange("yearsAtCompany", Number.parseInt(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyIncome">Monthly Income ($)</Label>
                    <Input
                      id="monthlyIncome"
                      type="number"
                      value={formData.monthlyIncome}
                      onChange={(e) => handleChange("monthlyIncome", Number.parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Job Satisfaction (1-5)</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Low</span>
                    <Slider
                      value={[formData.jobSatisfaction]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => handleChange("jobSatisfaction", value[0])}
                      className="flex-1"
                    />
                    <span className="text-sm">High</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Work-Life Balance (1-5)</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Poor</span>
                    <Slider
                      value={[formData.workLifeBalance]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => handleChange("workLifeBalance", value[0])}
                      className="flex-1"
                    />
                    <span className="text-sm">Great</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Performance Rating (1-5)</Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Low</span>
                    <Slider
                      value={[formData.performanceRating]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => handleChange("performanceRating", value[0])}
                      className="flex-1"
                    />
                    <span className="text-sm">High</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Years Since Last Promotion</Label>
                  <Input
                    id="yearsSinceLastPromotion"
                    type="number"
                    value={formData.yearsSinceLastPromotion}
                    onChange={(e) => handleChange("yearsSinceLastPromotion", Number.parseInt(e.target.value))}
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit">Predict Attrition Risk</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          {showResult ? (
            <>
              <PredictionResult prediction={prediction} />
              <div className="mt-6">
                <PredictionFactors prediction={prediction} formData={formData} />
              </div>
            </>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center p-6">
                <p className="text-muted-foreground">
                  Enter employee information and click "Predict Attrition Risk" to see results.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
