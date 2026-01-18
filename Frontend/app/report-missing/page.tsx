'use client'

import React from 'react'
import { useState } from 'react'
import { Header } from '@/components/header'
import { MatchVisualizer } from '@/components/match-visualizer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Upload, X, ArrowRight, AlertCircle } from 'lucide-react'

export default function ReportMissingPage() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    lastLocation: '',
    contactInfo: '',
    notes: '',
  })
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }))
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setPhotoPreview(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
        <Header />
        <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-6">
          <div className="glass-dark rounded-2xl p-12 max-w-md w-full text-center space-y-6 fade-in">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Report Submitted</h2>
              <p className="text-muted-foreground">
                Thank you for reporting. Your case has been submitted and verified by our officials.
              </p>
            </div>
            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-lg p-4 text-left">
              <p className="text-sm text-indigo-200">
                <strong>Case ID:</strong> #MPF{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <Button 
              onClick={() => setSubmitted(false)}
              className="w-full btn-animate bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
            >
              Report Another Case
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden relative">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <div className="relative">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Page Header */}
          <div className="mb-12 fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">Report Missing Person</h1>
            <p className="text-lg text-muted-foreground">
              Provide details and a photo to help us identify and locate the missing individual
            </p>
          </div>

          {/* Alert */}
          <div className="mb-8 flex gap-4 items-start glass rounded-2xl p-4 fade-in">
            <AlertCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              All information will be verified by law enforcement officials and protected with end-to-end encryption.
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Form Fields */}
              <div className="space-y-6 fade-in">
                {/* Personal Information */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Personal Information</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age" className="text-foreground">Age *</Label>
                      <Input
                        id="age"
                        name="age"
                        type="number"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground placeholder-muted-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender" className="text-foreground">Gender *</Label>
                      <Select value={formData.gender} onValueChange={handleSelectChange}>
                        <SelectTrigger className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Location & Contact */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Location & Contact</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastLocation" className="text-foreground">Last Known Location *</Label>
                    <Input
                      id="lastLocation"
                      name="lastLocation"
                      placeholder="City, State, Address"
                      value={formData.lastLocation}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactInfo" className="text-foreground">Contact Information *</Label>
                    <Input
                      id="contactInfo"
                      name="contactInfo"
                      type="email"
                      placeholder="Email or Phone"
                      value={formData.contactInfo}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground placeholder-muted-foreground"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Additional Details</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-foreground">Distinguishing Features</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Tattoos, scars, clothing, jewelry, etc."
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="bg-input border-indigo-500/20 focus:border-indigo-500 text-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column - Photo Upload */}
              <div className="space-y-6 fade-in" style={{ animationDelay: '100ms' }}>
                {/* Photo Preview */}
                {photoPreview ? (
                  <div className="glass rounded-2xl p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Photo Preview</h2>
                    <div className="relative rounded-xl overflow-hidden h-72 bg-black/20">
                      <img src={photoPreview || "/placeholder.svg"} alt="Preview" className="w-full h-full object-cover" />
                      <button
                        onClick={handleRemovePhoto}
                        className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 rounded-lg transition-all duration-300 ease-out"
                      >
                        <X className="h-4 w-4 text-white" />
                      </button>
                    </div>
                    <Button 
                      type="button"
                      onClick={() => document.getElementById('photo-upload')?.click()}
                      variant="outline"
                      className="w-full glass text-foreground border-indigo-500/30"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Replace Photo
                    </Button>
                  </div>
                ) : (
                  <div className="glass rounded-2xl p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Upload Clear Photo *</h2>
                    <label 
                      htmlFor="photo-upload"
                      className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/30 rounded-xl p-8 cursor-pointer hover:border-indigo-500/60 transition-all duration-300 ease-out h-64"
                    >
                      <Upload className="h-8 w-8 text-indigo-400 mb-2" />
                      <span className="text-sm font-medium text-foreground">Click to upload</span>
                      <span className="text-xs text-muted-foreground">PNG, JPG, or GIF up to 10MB</span>
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      required
                      className="hidden"
                    />
                  </div>
                )}

                {/* AI Matching Visualizer */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">AI Scanning System</h2>
                  <MatchVisualizer />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                type="submit"
                className="flex-1 btn-animate bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white h-12 gap-2"
              >
                <span>Submit Report</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
