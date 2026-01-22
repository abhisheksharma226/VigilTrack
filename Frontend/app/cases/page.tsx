'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'

interface CaseItem {
  _id: string
  name: string
  age: number
  gender: string
  lastSeenLocation: string
  imageUrl: string
  createdAt: string
  embeddingId?: string
  matchCount?: number // optional
}

export default function CasesPage() {
  const [cases, setCases] = useState<CaseItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/missing`)
        // Add matchCount as 0 if not present
        const fetchedCases = res.data.persons.map((c: CaseItem) => ({
          ...c,
          matchCount: c.matchCount || 0
        }))
        setCases(fetchedCases)
      } catch (err) {
        console.error('Error fetching cases', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCases()
  }, [])

  if (loading) return <p className="text-center mt-20 text-white">Loading cases...</p>

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">All Cases</h1>
          <p className="text-lg text-gray-400">
            Browse currently active and resolved missing person cases
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          {cases.length === 0 ? (
            <p className="text-center text-gray-400">No cases found</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((caseItem) => (
                <Link key={caseItem._id} href={`/case`}>
                  <div className="border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-8 rounded-sm group h-full flex flex-col hover:bg-gray-900/50">
                    
                   {/* Image */}
                  <div className="w-full h-56 mb-4 rounded-sm overflow-hidden bg-gray-800 flex items-center justify-center">
                    {caseItem.imageUrl ? (
                      <img
                        src={caseItem.imageUrl}
                        alt={caseItem.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-gray-500 text-4xl">👤</div>
                    )}
                  </div>

                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{caseItem.name}</h3>
                        <p className="text-sm text-gray-500 font-mono"> Case Id : {caseItem._id}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-sm text-sm font-semibold ${
                        'ACTIVE' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50' : 'bg-green-500/20 text-green-400 border border-green-500/50'
                      }`}>
                        ACTIVE
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-4 mb-8 flex-1 border-t border-gray-800 pt-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">AGE</span>
                        <span className="text-white font-semibold">{caseItem.age} years old</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-300">{caseItem.lastSeenLocation}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-300">
                          Reported {new Date(caseItem.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    {/* Matches */}
                    <div className="border-t border-gray-800 pt-6 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-cyan-400">{caseItem.matchCount}</div>
                          <div className="text-sm text-gray-500">
                            sighting{caseItem.matchCount !== 1 ? 's' : ''} matched
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          {caseItem.matchCount > 0 && 'Active leads'}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="w-full bg-cyan-400 text-black rounded-sm font-semibold gap-2 cursor-not-allowed opacity-50"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4" />
                    </Button>


                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>Have information about a case? Report a sighting from your account.</p>
        </div>
      </footer>
    </div>
  )
}
