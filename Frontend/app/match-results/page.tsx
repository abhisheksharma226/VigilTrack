'use client'

import { Card } from "@/components/ui/card"

import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Eye, ArrowRight, AlertCircle } from 'lucide-react'

const mockMatches = [
  {
    id: 1,
    name: 'Sarah Johnson',
    age: 28,
    caseId: 'CASE-2024-001',
    similarity: 94,
    lastKnownLocation: 'Portland, OR',
    missingDate: '2024-01-15',
  },
  {
    id: 2,
    name: 'Emily Davis',
    age: 26,
    caseId: 'CASE-2024-007',
    similarity: 87,
    lastKnownLocation: 'Seattle, WA',
    missingDate: '2024-02-03',
  },
  {
    id: 3,
    name: 'Jennifer Smith',
    age: 29,
    caseId: 'CASE-2024-012',
    similarity: 79,
    lastKnownLocation: 'Eugene, OR',
    missingDate: '2024-01-28',
  },
]

function SimilarityBar({ similarity }: { similarity: number }) {
  let color = 'from-red-500 to-orange-500'
  if (similarity >= 85) color = 'from-green-500 to-emerald-500'
  else if (similarity >= 75) color = 'from-yellow-500 to-amber-500'
  
  return (
    <div className="w-full bg-black/20 rounded-full h-2 overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${color} transition-all duration-500`}
        style={{ width: `${similarity}%` }}
      />
    </div>
  )
}

export default function MatchResultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background overflow-hidden relative">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <section className="relative pt-12 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="fade-in mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">AI Match Results</h1>
            <p className="text-lg text-muted-foreground">
              Analysis complete. The following missing persons match your uploaded image
            </p>
          </div>

          {/* Alert */}
          <div className="mb-8 flex gap-4 items-start glass rounded-2xl p-4 fade-in">
            <AlertCircle className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              Matches are ranked by AI confidence. Contact law enforcement officials to verify any potential leads.
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Uploaded Image - Sticky */}
            <div className="lg:col-span-1 fade-in">
              <div className="glass rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-foreground mb-4">Sighting Image</h3>
                <div className="relative rounded-xl overflow-hidden h-64 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-2">
                      <Eye className="h-6 w-6 text-indigo-400" />
                    </div>
                    <p className="text-sm text-muted-foreground">Image uploaded</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Analyzed on Jan 18, 2024 at 2:30 PM UTC
                </p>
              </div>
            </div>

            {/* Match Results */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {mockMatches.length} Potential Matches Found
                </h3>
              </div>

              {mockMatches.map((match, idx) => (
                <div key={match.id} className="glass rounded-2xl p-6 card-hover fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex gap-6 mb-4">
                    {/* Photo Placeholder */}
                    <div className="flex-shrink-0">
                      <div className="h-28 w-28 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 border border-indigo-500/20 flex items-center justify-center">
                        <Eye className="h-8 w-8 text-indigo-400" />
                      </div>
                    </div>

                    {/* Match Details */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{match.name}</h4>
                          <p className="text-sm text-indigo-400">{match.caseId}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                              {match.similarity}%
                            </span>
                          </div>
                          <span className="text-xs text-muted-foreground">Match Score</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Age</p>
                          <p className="font-semibold text-foreground">{match.age} years</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Missing Since</p>
                          <p className="font-semibold text-foreground">{match.missingDate}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Location</p>
                          <p className="font-semibold text-foreground">{match.lastKnownLocation}</p>
                        </div>
                      </div>

                      {/* Confidence Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-xs text-muted-foreground">Confidence</p>
                        </div>
                        <SimilarityBar similarity={match.similarity} />
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Button size="sm" className="btn-animate bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white gap-2">
                          <Eye className="h-4 w-4" />
                          View Full Case
                        </Button>
                        <Button size="sm" variant="outline" className="glass text-foreground border-indigo-500/30 bg-transparent">
                          Contact Official
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Footer Message */}
              <div className="glass rounded-2xl p-6 text-center fade-in">
                <p className="text-sm text-muted-foreground">
                  These are all potential matches. Law enforcement has been notified for verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
