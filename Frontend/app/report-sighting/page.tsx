'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Header } from '@/components/header'
import { MatchVisualizer } from '@/components/match-visualizer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Upload, X, ArrowRight, AlertCircle } from 'lucide-react'

export default function ReportSightingPage() {
  const [formData, setFormData] = useState({
    location: '',
    description: '',
    reportedBy: '',
    reportedTime: ''
  })

  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
  
    // ✅ YEAR VALIDATION FOR reportedTime
    if (name === 'reportedTime' && value) {
      const year = value.split('-')[0]
  
      // If year is not exactly 4 digits, block update
      if (year.length > 4) return
    }
  
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  

  // ✅ FIXED IMAGE HANDLER
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setPhotoFile(file)

    const reader = new FileReader()
    reader.onloadend = () => {
      setPhotoPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const handleRemovePhoto = () => {
    setPhotoFile(null)
    setPhotoPreview(null)
  }

  // ✅ FIXED SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!photoFile) {
      alert('Please upload a photo!')
      return
    }

    setLoading(true)

    try {
      const data = new FormData()
      data.append('image', photoFile)
      data.append('location', formData.location)
      data.append('description', formData.description)
      data.append('reportedBy', formData.reportedBy)
      data.append('reportedTime', formData.reportedTime)

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sightings`,
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )

      if (res.data.success) setSubmitted(true)
    } catch (err) {
      console.error(err)
      alert('Error submitting sighting')
    } finally {
      setLoading(false)
    }
  }

  // ✅ SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background">
        <Header />
        <div className="flex items-center justify-center min-h-[80vh] px-6">
          <div className="glass-dark rounded-2xl p-10 max-w-md w-full text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-indigo-500 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Sighting Reported</h2>
            <p className="text-muted-foreground">
              AI analysis has started. Thank you for helping.
            </p>
            <Button onClick={() => setSubmitted(false)} className="w-full">
              Report Another
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      <Header />

      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-bold mb-2">Report a Sighting</h1>
        <p className="text-muted-foreground mb-8">
          Share details to help match missing persons using AI
        </p>

        <div className="flex gap-4 items-start glass rounded-2xl p-4 mb-8">
          <AlertCircle className="h-5 w-5 text-pink-400 mt-1" />
          <p className="text-sm text-muted-foreground">
            All reports are confidential and verified by authorities.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 space-y-4">
                <Label>Person Description *</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                />
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <Label>Location *</Label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />

                <Label>Date & Time *</Label>
                <Input
                    type="datetime-local"
                    name="reportedTime"
                    value={formData.reportedTime}
                    onChange={handleInputChange}
                    required
                    min="2000-01-01T00:00"
                    max="2035-12-31T23:59"
                  />
              </div>

              <div className="glass rounded-2xl p-6 space-y-4">
                <Label>Your Contact *</Label>
                <Input
                  name="reportedBy"
                  value={formData.reportedBy}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-6">

              {photoPreview ? (
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h2 className="font-semibold">Photo Preview</h2>
                  <div className="relative h-72 rounded-xl overflow-hidden">
                    <img src={photoPreview} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={handleRemovePhoto}
                      className="absolute top-2 right-2 bg-red-500 p-2 rounded-lg"
                    >
                      <X className="text-white h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="glass rounded-2xl p-6 space-y-4">
                  <label
                    htmlFor="photo"
                    className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 cursor-pointer"
                  >
                    <Upload className="mb-2" />
                    <span>Click to upload photo</span>
                  </label>
                  <input
                    id="photo"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
              )}

              <div className="glass rounded-2xl p-6">
                <MatchVisualizer />
              </div>
            </div>
          </div>

              
          {/* Submit Button */}
<div className="flex gap-4 fade-in">
  <Button
    type="submit"
    disabled={loading}
    className={`flex-1 btn-animate bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white h-12 gap-2 transition-all duration-300
      ${loading ? "w-12 rounded-full justify-center" : "rounded-xl"}
    `}
  >
    {loading ? (
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    ) : (
      <>
        <span>Submit Sighting</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </>
    )}
  </Button>
</div>

        </form>
      </div>
    </div>
  )
}
