import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Phone, MapPin, Calendar, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function CaseDetailsPage({ params }: { params: { id: string } }) {
  const caseId = params.id

  // Mock data
  const caseData = {
    id: caseId,
    name: 'Sarah Johnson',
    age: 28,
    gender: 'Female',
    status: 'active',
    missingDate: '2024-01-15',
    lastKnownLocation: 'Downtown Portland, OR',
    reportedBy: 'Family Member',
    contactPhone: '(503) 555-0147',
    contactEmail: 'contact@example.com',
    description: 'Sarah was last seen wearing a blue winter jacket and dark jeans. She was heading to work but never arrived.',
    identifyingMarks: 'Small birthmark on left wrist',
  }

  const matchedSightings = [
    {
      id: 1,
      location: 'Downtown Portland, OR',
      date: '2024-01-18',
      description: 'Spotted near Pioneer Courthouse Square',
      matchPercentage: 94,
      status: 'verified',
    },
    {
      id: 2,
      location: 'Powell\'s Books, Portland OR',
      date: '2024-01-17',
      description: 'Customer reported seeing a similar individual',
      matchPercentage: 87,
      status: 'pending',
    },
  ]

  const timeline = [
    {
      date: '2024-01-15',
      event: 'Missing Person Report Filed',
      description: 'Initial report filed by family member',
      type: 'report',
    },
    {
      date: '2024-01-16',
      event: 'Case Verified',
      description: 'Case reviewed and verified by law enforcement',
      type: 'verify',
    },
    {
      date: '2024-01-17',
      event: 'First Sighting Reported',
      description: 'Possible sighting at Powell\'s Books',
      type: 'sighting',
    },
    {
      date: '2024-01-18',
      event: 'Match Detected',
      description: 'AI matched high-confidence sighting',
      type: 'match',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Header Section */}
      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link href="/cases" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Cases
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Case #{caseId}</h2>
              <p className="text-muted-foreground mt-1">{caseData.name}, {caseData.age}</p>
            </div>
            <Badge className={caseData.status === 'active' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}>
              {caseData.status === 'active' ? 'Active' : 'Closed'}
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Case Details */}
            <div className="lg:col-span-1 space-y-6">
              {/* Photo */}
              <Card className="bg-white border-border p-6">
                <div className="bg-secondary rounded-lg h-64 border border-border flex items-center justify-center mb-4">
                  <p className="text-sm text-muted-foreground">Missing Person Photo</p>
                </div>
              </Card>

              {/* Quick Info */}
              <Card className="bg-white border-border p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Quick Information</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Gender</p>
                    <p className="font-medium text-foreground">{caseData.gender}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Missing Date</p>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {caseData.missingDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Location</p>
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {caseData.lastKnownLocation}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="bg-white border-border p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Contact</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Reported By</p>
                    <p className="font-medium text-foreground">{caseData.reportedBy}</p>
                  </div>
                  <Button className="w-full gap-2 justify-center bg-transparent" variant="outline">
                    <Phone className="h-4 w-4" />
                    Contact: {caseData.contactPhone}
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right Column - Details and Updates */}
            <div className="lg:col-span-2 space-y-6">
              {/* Full Description */}
              <Card className="bg-white border-border p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Case Description</h3>
                <p className="text-foreground leading-relaxed">{caseData.description}</p>
                <div className="bg-secondary rounded p-4 border border-border">
                  <p className="text-sm">
                    <span className="font-semibold text-foreground">Identifying Marks:</span>
                    <span className="text-foreground ml-2">{caseData.identifyingMarks}</span>
                  </p>
                </div>
              </Card>

              {/* Matched Sightings */}
              <Card className="bg-white border-border p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Matched Sightings</h3>
                <div className="space-y-4">
                  {matchedSightings.map((sighting) => (
                    <div key={sighting.id} className="border-l-4 border-accent pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-foreground">{sighting.location}</p>
                          <p className="text-xs text-muted-foreground">{sighting.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-accent">{sighting.matchPercentage}%</p>
                          <Badge className={sighting.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                            {sighting.status === 'verified' ? 'Verified' : 'Pending'}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-foreground">{sighting.description}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Timeline */}
              <Card className="bg-white border-border p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Case Timeline</h3>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="h-3 w-3 rounded-full bg-primary border-2 border-white" />
                        {index < timeline.length - 1 && (
                          <div className="h-12 w-0.5 bg-border my-2" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="text-sm font-semibold text-foreground">{item.event}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                        <p className="text-sm text-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button className="flex-1">Print Case Details</Button>
                <Button variant="outline" className="flex-1 bg-transparent">Share Case</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
