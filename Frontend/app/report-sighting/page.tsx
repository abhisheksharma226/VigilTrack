'use client'

import React from 'react'
import { useState } from 'react'
import { Header } from '@/components/header'
import { MatchVisualizer } from '@/components/match-visualizer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Upload, X, ArrowRight, AlertCircle } from 'lucide-react'

export default function ReportSightingPage() {
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    time: '',
    contactInfo: '',
  })
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Sighting Reported</h2>
              <p className="text-muted-foreground">
                Thank you for your report. AI analysis is now underway to find potential matches.
              </p>
            </div>
            <div className="bg-pink-500/10 border border-pink-500/30 rounded-lg p-4 text-left">
              <p className="text-sm text-pink-200">
                <strong>Report ID:</strong> #SIG{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
            <Button 
              onClick={() => setSubmitted(false)}
              className="w-full btn-animate bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white"
            >
              Report Another Sighting
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
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <div className="relative">
        <div className="mx-auto max-w-4xl px-6 py-12">
          {/* Page Header */}
          <div className="mb-12 fade-in">
            <h1 className="text-4xl font-bold text-foreground mb-2">Report a Sighting</h1>
            <p className="text-lg text-muted-foreground">
              Help us identify missing persons. Share what you know and upload any photos you have
            </p>
          </div>

          {/* Alert */}
          <div className="mb-8 flex gap-4 items-start glass rounded-2xl p-4 fade-in">
            <AlertCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              Your sighting will be matched against active cases using AI. All reports remain confidential and secure.
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Form Fields */}
              <div className="space-y-6 fade-in">
                {/* Sighting Details */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Sighting Details</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-foreground">Person Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      placeholder="Physical description, clothing, distinguishing features..."
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-input border-pink-500/20 focus:border-pink-500 text-foreground placeholder-muted-foreground resize-none"
                    />
                  </div>
                </div>

                {/* Location & Time */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Location & Time</h2>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-foreground">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="Where did you see them?"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-pink-500/20 focus:border-pink-500 text-foreground placeholder-muted-foreground"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground">Date & Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="datetime-local"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="bg-input border-pink-500/20 focus:border-pink-500 text-foreground placeholder-muted-foreground"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">Your Information</h2>
                  
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
                      className="bg-input border-pink-500/20 focus:border-pink-500 text-foreground placeholder-muted-foreground"
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
                      className="w-full glass text-foreground border-pink-500/30"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Change Photo
                    </Button>
                  </div>
                ) : (
                  <div className="glass rounded-2xl p-6 space-y-4">
                    <h2 className="text-lg font-semibold text-foreground">Upload Photo</h2>
                    <label 
                      htmlFor="photo-upload"
                      className="flex flex-col items-center justify-center border-2 border-dashed border-pink-500/30 rounded-xl p-8 cursor-pointer hover:border-pink-500/60 transition-all duration-300 ease-out h-64"
                    >
                      <Upload className="h-8 w-8 text-pink-400 mb-2" />
                      <span className="text-sm font-medium text-foreground">Click to upload</span>
                      <span className="text-xs text-muted-foreground">PNG, JPG, or GIF up to 10MB</span>
                    </label>
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </div>
                )}

                {/* AI Matching Visualizer */}
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="text-lg font-semibold text-foreground">AI Analysis</h2>
                  <MatchVisualizer />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 fade-in" style={{ animationDelay: '200ms' }}>
              <Button 
                type="submit"
                className="flex-1 btn-animate bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white h-12 gap-2"
              >
                <span>Submit Sighting</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
