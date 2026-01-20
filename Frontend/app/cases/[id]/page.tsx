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
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Header Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/cases" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8 text-sm font-semibold">
            <ArrowLeft className="h-4 w-4" />
            Back to Cases
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-5xl font-serif font-bold mb-2">{caseData.name}</h1>
              <p className="text-gray-400 text-lg">Case #{caseId} • Age {caseData.age}</p>
            </div>
            <div className={`px-4 py-2 rounded-sm text-sm font-bold border-2 ${
              caseData.status === 'active' 
                ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' 
                : 'bg-green-500/20 text-green-400 border-green-500/50'
            }`}>
              {caseData.status === 'active' ? 'ACTIVE' : 'CLOSED'}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Case Details */}
            <div className="lg:col-span-1 space-y-8">
              {/* Photo */}
              <div className="border border-gray-800 rounded-sm overflow-hidden">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-serif font-bold text-gray-700 mb-2">👤</div>
                    <p className="text-sm text-gray-500">Missing Person Photo</p>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">Quick Information</h3>
                <div className="space-y-6">
                  <div className="pb-6 border-b border-gray-800">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Gender</p>
                    <p className="text-lg text-white font-semibold">{caseData.gender}</p>
                  </div>
                  <div className="pb-6 border-b border-gray-800">
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Missing Date</p>
                    <p className="text-lg text-white font-semibold flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-cyan-400" />
                      {caseData.missingDate}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Last Location</p>
                    <p className="text-lg text-white font-semibold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-cyan-400" />
                      {caseData.lastKnownLocation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border border-gray-800 hover:border-pink-500/50 transition-colors rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-pink-400">Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Reported By</p>
                    <p className="text-white font-semibold">{caseData.reportedBy}</p>
                  </div>
                  <a href={`tel:${caseData.contactPhone}`} className="w-full flex items-center justify-center gap-2 border border-gray-700 hover:border-pink-500 text-gray-400 hover:text-pink-400 transition-colors py-3 rounded-sm font-semibold">
                    <Phone className="h-5 w-5" />
                    {caseData.contactPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Details and Updates */}
            <div className="lg:col-span-2 space-y-8">
              {/* Full Description */}
              <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">Case Description</h3>
                <p className="text-gray-300 leading-relaxed text-base">{caseData.description}</p>
                <div className="bg-gray-900/50 rounded-sm p-6 border border-gray-700">
                  <p className="text-sm">
                    <span className="font-bold text-white">Identifying Marks:</span>
                    <span className="text-gray-300 ml-3">{caseData.identifyingMarks}</span>
                  </p>
                </div>
              </div>

              {/* Matched Sightings */}
              <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-cyan-400">Matched Sightings</h3>
                <div className="space-y-6">
                  {matchedSightings.map((sighting) => (
                    <div key={sighting.id} className="border-l-4 border-cyan-400 pl-6 py-2 pb-6 border-b border-gray-800 last:border-b-0 last:pb-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-white text-lg">{sighting.location}</p>
                          <p className="text-xs text-gray-500 mt-1">{sighting.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-bold text-cyan-400">{sighting.matchPercentage}%</p>
                          <div className={`px-3 py-1 rounded-sm text-xs font-bold mt-2 ${
                            sighting.status === 'verified' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                          }`}>
                            {sighting.status === 'verified' ? 'VERIFIED' : 'PENDING'}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300">{sighting.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="border border-gray-800 hover:border-pink-500/50 transition-colors rounded-sm p-8 space-y-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-pink-400">Case Timeline</h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 relative z-10" />
                        {index < timeline.length - 1 && (
                          <div className="h-16 w-0.5 bg-gray-700 my-2" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-bold text-white text-base">{item.event}</p>
                        <p className="text-xs text-gray-500 mt-1">{item.date}</p>
                        <p className="text-gray-300 mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button className="flex-1 bg-cyan-400 text-black hover:bg-cyan-300 rounded-sm font-semibold h-12">
                  Print Case Details
                </Button>
                <Button className="flex-1 border-2 border-gray-700 text-white hover:border-pink-400 hover:text-pink-400 rounded-sm font-semibold h-12 bg-transparent">
                  Share Case
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
