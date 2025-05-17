import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PredictionFactorsProps {
  prediction: number | null
  formData: any
}

export function PredictionFactors({ prediction, formData }: PredictionFactorsProps) {
  if (prediction === null) return null

  // In a real application, these would be calculated based on the model
  // For demo purposes, we'll create some factors based on the form data
  const factors = [
    {
      name: "Job Satisfaction",
      impact: calculateImpact(formData.jobSatisfaction, 5, true),
      description:
        formData.jobSatisfaction < 3
          ? "Low job satisfaction is a significant risk factor"
          : "Job satisfaction is at a healthy level",
    },
    {
      name: "Work-Life Balance",
      impact: calculateImpact(formData.workLifeBalance, 5, true),
      description:
        formData.workLifeBalance < 3
          ? "Poor work-life balance increases attrition risk"
          : "Good work-life balance is a positive factor",
    },
    {
      name: "Years Since Promotion",
      impact: calculateImpact(formData.yearsSinceLastPromotion, 7, false),
      description:
        formData.yearsSinceLastPromotion > 2
          ? "Long time since last promotion increases risk"
          : "Recent promotion reduces attrition risk",
    },
    {
      name: "Performance Rating",
      impact: calculateImpact(formData.performanceRating, 5, true),
      description:
        formData.performanceRating < 3
          ? "Low performance rating may indicate disengagement"
          : "High performance is typically a positive factor",
    },
    {
      name: "Years at Company",
      impact: calculateImpact(formData.yearsAtCompany, 10, prediction > 0.5),
      description:
        prediction > 0.5 && formData.yearsAtCompany > 5
          ? "Long tenure without advancement can increase risk"
          : "Employee tenure aligns with typical patterns",
    },
  ]

  // Sort factors by impact (highest first)
  factors.sort((a, b) => b.impact - a.impact)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Risk Factors</CardTitle>
        <CardDescription>Factors contributing to the prediction</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {factors.map((factor, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">{factor.name}</span>
              <span className="text-sm">{factor.impact}% Impact</span>
            </div>
            <Progress value={factor.impact} className="h-2" />
            <p className="text-sm text-muted-foreground">{factor.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

// Helper function to calculate impact percentage
function calculateImpact(value: number, max: number, isPositive: boolean): number {
  // For positive factors (like satisfaction), higher values mean lower impact on attrition
  // For negative factors (like years since promotion), higher values mean higher impact
  const normalizedValue = value / max
  const impact = isPositive ? (1 - normalizedValue) * 100 : normalizedValue * 100

  // Add some randomness to make it look more realistic
  return Math.min(100, Math.max(5, Math.round(impact + (Math.random() * 20 - 10))))
}
