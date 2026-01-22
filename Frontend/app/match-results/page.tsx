'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { AlertCircle, Eye, X } from 'lucide-react'

type MatchType = {
  person: {
    _id: string
    name: string
    age: number
    gender: string
    lastSeenLocation: string
    contactInfo?: string
    notes?: string
    imageUrl?: string
    createdAt: string
  }
  similarity: number
}

function SimilarityBar({ similarity }: { similarity: number }) {
  let color = 'from-red-500 to-orange-500'
  if (similarity >= 85) color = 'from-green-500 to-emerald-500'
  else if (similarity >= 75) color = 'from-yellow-500 to-amber-500'

  return (
    <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color}`}
        style={{ width: `${similarity}%` }}
      />
    </div>
  )
}

export default function MatchResultsPage() {
  const [matches, setMatches] = useState<MatchType[]>([])
  const [showContact, setShowContact] = useState(false)
  const [selectedContact, setSelectedContact] = useState('')

  useEffect(() => {
    const stored = sessionStorage.getItem('vigiltrack_matches')
    if (stored) setMatches(JSON.parse(stored))
  }, [])

  const openContactModal = (contactInfo: string) => {
    setSelectedContact(contactInfo)
    setShowContact(true)
  }

  const closeContactModal = () => {
    setSelectedContact('')
    setShowContact(false)
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />

      <section className="pt-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">AI Match Results</h1>
        <p className="text-gray-400 mb-6">
          Matches found using facial embedding comparison
        </p>

        {/* Alert */}
        <div className="flex gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-sm p-4 mb-8">
          <AlertCircle className="text-yellow-400 mt-1" />
          <p className="text-sm text-gray-300">
            Matches are AI-generated. Please verify with authorities before taking action.
          </p>
        </div>

        {matches.length === 0 && (
          <p className="text-gray-400">No matches available.</p>
        )}

        <div className="space-y-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-sm p-6 flex flex-col sm:flex-row gap-6"
            >
              {/* Image */}
              <div className="w-full sm:w-1/4">
                {match.person.imageUrl ? (
                  <img
                    src={match.person.imageUrl}
                    alt={match.person.name}
                    className="w-full h-56 object-cover rounded-sm"
                  />
                ) : (
                  <div className="h-56 flex items-center justify-center bg-gray-800 rounded-sm">
                    <Eye className="text-gray-500" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex justify-between mb-4">
                  <h2 className="text-2xl font-bold">{match.person.name}</h2>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-cyan-400">
                      {match.similarity.toFixed(2)}%
                    </p>
                    <p className="text-xs text-gray-400">Match Score</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-gray-400">Age</p>
                    <p className="font-semibold">{match.person.age}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Gender</p>
                    <p className="font-semibold">{match.person.gender}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400">Last Seen Location</p>
                    <p className="font-semibold">{match.person.lastSeenLocation}</p>
                  </div>
                </div>

                <SimilarityBar similarity={match.similarity} />

                {match.person.notes && (
                  <p className="text-sm text-gray-300 mt-4">
                    <span className="text-gray-400">Notes:</span> {match.person.notes}
                  </p>
                )}

                <div className="flex gap-3 mt-6">
                  <Button disabled className="bg-cyan-500 text-black hover:bg-cyan-600">
                    View Full Case
                  </Button>

                  {match.person.contactInfo && (
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400"
                      onClick={() => openContactModal(match.person.contactInfo!)}
                    >
                      Contact
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-md p-6 w-80 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={closeContactModal}
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Info</h2>
            <p className="text-gray-300 break-all">{selectedContact}</p>
            <div className="mt-6 text-right">
              <Button className="bg-cyan-500 text-black hover:bg-cyan-600" onClick={closeContactModal}>
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
