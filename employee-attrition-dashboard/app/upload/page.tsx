"use client"

import type React from "react"

import { useState } from "react"
import { Upload, FileText, AlertCircle, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)
    setError(null)
    setUploadComplete(false)
  }

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file to upload")
      return
    }

    // Check if file is CSV
    if (!file.name.endsWith(".csv")) {
      setError("Please upload a CSV file")
      return
    }

    setUploading(true)
    setUploadProgress(0)
    setError(null)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          setUploadComplete(true)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Employee Data</h1>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="upload">Upload File</TabsTrigger>
          <TabsTrigger value="template">Download Template</TabsTrigger>
        </TabsList>

        <TabsContent value="upload">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Upload Employee Data</CardTitle>
              <CardDescription>Upload a CSV file containing employee data for attrition prediction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="file">Employee Data File (CSV)</Label>
                <Input id="file" type="file" accept=".csv" onChange={handleFileChange} disabled={uploading} />
              </div>

              {file && (
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4" />
                  <span>{file.name}</span>
                  <span className="text-muted-foreground">({(file.size / 1024).toFixed(2)} KB)</span>
                </div>
              )}

              {uploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {uploadComplete && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Upload Complete</AlertTitle>
                  <AlertDescription className="text-green-700">
                    Your file has been uploaded successfully and is being processed.
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" disabled={uploading}>
                Cancel
              </Button>
              <Button onClick={handleUpload} disabled={!file || uploading}>
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="template">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Download Template</CardTitle>
              <CardDescription>Download a CSV template for employee data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p>
                Use our template to ensure your data is formatted correctly for the attrition prediction model. The
                template includes all required fields and example data.
              </p>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Required Fields:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Employee ID</li>
                  <li>Age</li>
                  <li>Gender</li>
                  <li>Department</li>
                  <li>Job Role</li>
                  <li>Years at Company</li>
                  <li>Monthly Income</li>
                  <li>Distance From Home</li>
                  <li>Education Level</li>
                  <li>Job Satisfaction</li>
                  <li>Work-Life Balance</li>
                  <li>Performance Rating</li>
                  <li>Years Since Last Promotion</li>
                  <li>Overtime (Yes/No)</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <FileText className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
