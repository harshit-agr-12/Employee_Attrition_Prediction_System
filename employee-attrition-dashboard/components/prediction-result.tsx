import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface PredictionResultProps {
  prediction: number | null
}

export function PredictionResult({ prediction }: PredictionResultProps) {
  if (prediction === null) return null

  const percentage = Math.round(prediction * 100)

  let riskLevel = "Low Risk"
  let color = "bg-green-500"

  if (percentage > 70) {
    riskLevel = "High Risk"
    color = "bg-red-500"
  } else if (percentage > 40) {
    riskLevel = "Medium Risk"
    color = "bg-amber-500"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Attrition Prediction Result</CardTitle>
        <CardDescription>Based on the provided employee information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <span className={`inline-block px-4 py-2 rounded-full text-white font-bold ${color}`}>
            {riskLevel}: {percentage}% Probability
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Low Risk</span>
            <span>High Risk</span>
          </div>
          <Progress value={percentage} className="h-3" />
        </div>

        <div className="text-sm text-muted-foreground">
          {percentage > 70 ? (
            <p>This employee has a high probability of leaving the company. Immediate intervention is recommended.</p>
          ) : percentage > 40 ? (
            <p>
              This employee has a moderate risk of attrition. Consider scheduling a check-in to address potential
              concerns.
            </p>
          ) : (
            <p>This employee has a low probability of leaving the company. Continue regular engagement practices.</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
