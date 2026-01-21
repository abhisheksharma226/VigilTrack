
'use client'

import { useState, Suspense } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Search, Upload, AlertCircle, CheckCircle2, Zap } from 'lucide-react'
import Loading from './loading'

export default function MatchingPage() {
  const [activeTab, setActiveTab] = useState<'embedding' | 'image'>('embedding')
  const [embeddingId, setEmbeddingId] = useState('')
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    if (!embeddingId.trim()) {
      setError('Please enter an embedding ID')
      return
    }

    setLoading(true)
    setError('')
    setMatches([])

    try {
      // Mock API call - replace with actual API endpoint
      const response = await fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ embeddingId: embeddingId.trim() })
      })

      if (!response.ok) throw new Error('Failed to search matches')

      const data = await response.json()
      setMatches(data.matches || [])

      if (data.matches?.length === 0) {
        setError('No matches found for this embedding ID')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during matching')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent blur-3xl" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm font-mono text-gray-400 tracking-widest uppercase mb-4">
              AI MATCHING SYSTEM
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Find Your Match
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600 mt-2">
                In Seconds
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Use our AI-powered matching system to quickly identify potential matches from our database of missing persons
            </p>
          </div>

          {/* Matching Interface */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 backdrop-blur-sm">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-8 border-b border-gray-800">
              <button
                onClick={() => setActiveTab('embedding')}
                className={`pb-3 px-4 font-semibold transition-colors ${
                  activeTab === 'embedding'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Search by Embedding ID
                </div>
              </button>
              <button
                onClick={() => setActiveTab('image')}
                className={`pb-3 px-4 font-semibold transition-colors ${
                  activeTab === 'image'
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Search by Image
                </div>
              </button>
            </div>

            {/* Embedding ID Tab */}
            {activeTab === 'embedding' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Embedding ID
                  </label>
                  <input
                    type="text"
                    value={embeddingId}
                    onChange={(e) => setEmbeddingId(e.target.value)}
                    placeholder="Paste your embedding ID (e.g., 69711504d349a8394a320a0b)"
                    className="w-full bg-gray-800 border border-gray-700 rounded-sm px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Paste the embedding ID from your sighting report or search results
                  </p>
                </div>

                <Button
                  onClick={handleSearch}
                  disabled={loading}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-sm transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Searching...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5" />
                      Search Matches
                    </div>
                  )}
                </Button>

                {/* Admin Contact Card */}
                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-sm p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-300 mb-1">
                        <span className="font-semibold">Don't have an embedding ID?</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-2">
                        Contact our admin team for assistance in retrieving or generating your embedding ID:
                      </p>
                      <a href="mailto:admin@vigiltrack.com" className="text-cyan-400 hover:text-cyan-300 font-mono text-sm font-semibold transition-colors">
                        admin@vigiltrack.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-gray-900/50 border border-gray-700 rounded-sm p-4">
                  <p className="text-xs sm:text-sm text-gray-300 font-semibold mb-3">Quick Tips:</p>
                  <ul className="space-y-2 text-xs text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Embedding IDs are 24-character hex strings generated when you report a missing person</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>Similarity scores above 0.8 indicate a strong potential match</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>All matches are verified by law enforcement before any action is taken</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Image Tab */}
            {activeTab === 'image' && (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-700 rounded-sm p-8 text-center hover:border-cyan-400/50 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-300 font-semibold mb-1">Upload an image</p>
                  <p className="text-sm text-gray-500">
                    Drag and drop or click to select an image for matching
                  </p>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Coming soon: Image-based matching feature
                </p>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mt-6 flex items-start gap-3 bg-red-500/10 border border-red-500/50 rounded-sm p-4">
                <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      {matches.length > 0 && (
        <section className="relative py-16 px-4 sm:px-6 border-t border-gray-800">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-serif font-bold mb-2">
                Matches Found: <span className="text-cyan-400">{matches.length}</span>
              </h2>
              <p className="text-gray-400">
                Ordered by similarity score (0.8+ is a strong match)
              </p>
            </div>

            <div className="grid gap-6">
              {matches.map((match, index) => (
                <div
                  key={index}
                  className="border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 rounded-sm overflow-hidden hover:bg-gray-900/30"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image */}
                    <div className="sm:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center min-h-64 sm:min-h-auto relative overflow-hidden">
                      {match.imageUrl ? (
                        <img
                          src={match.imageUrl || "/placeholder.svg"}
                          alt={match.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-6xl font-serif text-gray-700">👤</div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="sm:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{match.name}</h3>
                          <div className="flex flex-col items-end">
                            <div className="text-3xl font-bold text-cyan-400">
                              {(match.similarityScore * 100).toFixed(0)}%
                            </div>
                            <p className="text-xs text-gray-500">Match Score</p>
                          </div>
                        </div>

                        <div className="mb-4">
                          {match.similarityScore >= 0.8 ? (
                            <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                              <CheckCircle2 className="h-4 w-4" />
                              Strong Match
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-yellow-400 text-sm font-semibold">
                              <AlertCircle className="h-4 w-4" />
                              Possible Match
                            </div>
                          )}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-500">Age</p>
                            <p className="font-semibold">{match.age} years old</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Gender</p>
                            <p className="font-semibold capitalize">{match.gender}</p>
                          </div>
                          <div className="sm:col-span-2">
                            <p className="text-gray-500">Last Seen</p>
                            <p className="font-semibold">{match.lastSeenLocation}</p>
                          </div>
                        </div>

                        {match.notes && (
                          <div className="mt-4 pt-4 border-t border-gray-800">
                            <p className="text-gray-500 text-sm">Distinguishing Features</p>
                            <p className="text-sm text-gray-300 mt-1">{match.notes}</p>
                          </div>
                        )}
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3">
                        <Link href="/cases" className="flex-1">
                          <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-sm">
                            View Full Case
                          </Button>
                        </Link>
                        {match.contactInfo && (
                          <a href={`mailto:${match.contactInfo}`} className="flex-1">
                            <Button
                              variant="outline"
                              className="w-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-sm bg-transparent"
                            >
                              Contact
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="relative py-16 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Submit Data',
                desc: 'Report a sighting or get an embedding ID from a missing person report'
              },
              {
                step: '02',
                title: 'AI Analysis',
                desc: 'Our AI extracts facial embeddings and compares with database in real-time'
              },
              {
                step: '03',
                title: 'Get Results',
                desc: 'View matched cases ranked by similarity score instantly'
              }
            ].map((item, i) => (
              <div key={i} className="border border-gray-800 hover:border-cyan-500/50 transition-colors p-6 rounded-sm group">
                <div className="text-4xl font-serif font-bold text-gray-700 group-hover:text-cyan-500/30 transition-colors mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-cyan-400/50 rounded-sm p-8 sm:p-12 text-center space-y-6 bg-gradient-to-b from-cyan-400/5 to-transparent">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold">Ready to Report?</h2>
            <p className="text-base sm:text-lg text-gray-300">
              Help identify missing persons by reporting sightings or submitting new cases to our system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/report-missing">
                <Button className="px-8 h-12 bg-cyan-500 text-black hover:bg-cyan-600 font-semibold rounded-sm">
                  Report Missing
                </Button>
              </Link>
              <Link href="/report-sighting">
                <Button
                  variant="outline"
                  className="px-8 h-12 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-sm bg-transparent"
                >
                  Report Sighting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2024 VigilTrack. Helping reunite families with advanced AI technology.</p>
        </div>
      </footer>
    </div>
  )
}
