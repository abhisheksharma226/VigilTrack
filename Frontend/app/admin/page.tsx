"use client" // ✅ must be at the top

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Eye } from "lucide-react"
import { useSearchParams } from "next/navigation"

// Mock data
const mockMissingPersons = [
  { id: 1, name: 'Sarah Johnson', dateReported: '2024-01-15', age: 28, status: 'active', matchProbability: 94, caseId: 'CASE-2024-001' },
  { id: 2, name: 'Michael Chen', dateReported: '2024-01-20', age: 34, status: 'active', matchProbability: 0, caseId: 'CASE-2024-003' },
  { id: 3, name: 'Emily Davis', dateReported: '2024-02-03', age: 26, status: 'closed', matchProbability: 87, caseId: 'CASE-2024-007' },
]

const mockSightings = [
  { id: 1, location: 'Downtown Portland, OR', dateReported: '2024-01-18', status: 'verified', matchedWith: 'CASE-2024-001', reporter: 'Public Submission' },
  { id: 2, location: 'Transit Station, Seattle WA', dateReported: '2024-01-21', status: 'pending', matchedWith: null, reporter: 'Police Tip' },
  { id: 3, location: 'Shopping Mall, Eugene OR', dateReported: '2024-02-01', status: 'verified', matchedWith: 'CASE-2024-003', reporter: 'Public Submission' },
]

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case 'active': return <Badge className="bg-blue-100 text-blue-800">Active</Badge>
    case 'closed': return <Badge className="bg-green-100 text-green-800">Closed</Badge>
    case 'verified': return <Badge className="bg-green-100 text-green-800">Verified</Badge>
    case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
    default: return <Badge>{status}</Badge>
  }
}

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const searchParams = useSearchParams() // ✅ safe now
  const token = searchParams.get("token")

  const filteredMissingPersons = mockMissingPersons.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const filteredSightings = mockSightings.filter(s =>
    s.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h2 className="text-3xl font-bold text-foreground">Admin Dashboard</h2>
          <p className="text-muted-foreground mt-2">
            Token: {token ?? "N/A"}
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-7xl px-6">
          {/* Search */}
          <div className="mb-6 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-border"
            />
          </div>

          {/* Tabs */}
          <Tabs defaultValue="missing" className="space-y-6">
            <TabsList className="bg-white border-b border-border grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="missing">Missing Persons</TabsTrigger>
              <TabsTrigger value="sightings">Sightings</TabsTrigger>
            </TabsList>

            {/* Missing Persons */}
            <TabsContent value="missing" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Age</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Date Reported</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Match %</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredMissingPersons.map(person => (
                      <tr key={person.id} className="border-b border-border hover:bg-secondary transition-colors">
                        <td className="py-3 px-4">
                          <p className="font-medium text-foreground">{person.name}</p>
                          <p className="text-xs text-muted-foreground">{person.caseId}</p>
                        </td>
                        <td className="py-3 px-4 text-foreground">{person.age}</td>
                        <td className="py-3 px-4 text-foreground text-sm">{person.dateReported}</td>
                        <td className="py-3 px-4"><StatusBadge status={person.status} /></td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                              <div className="h-full bg-accent" style={{ width: `${person.matchProbability}%` }} />
                            </div>
                            <span className="text-sm font-medium text-foreground">{person.matchProbability}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                              <Eye className="h-4 w-4" /> View
                            </Button>
                            <Button size="sm" variant="outline">Verify</Button>
                            <Button size="sm" variant="outline">Close</Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Sightings */}
            <TabsContent value="sightings" className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Location</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Date Reported</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Matched With</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Reporter</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSightings.map(sighting => (
                      <tr key={sighting.id} className="border-b border-border hover:bg-secondary transition-colors">
                        <td className="py-3 px-4 text-foreground font-medium">{sighting.location}</td>
                        <td className="py-3 px-4 text-foreground text-sm">{sighting.dateReported}</td>
                        <td className="py-3 px-4"><StatusBadge status={sighting.status} /></td>
                        <td className="py-3 px-4">
                          {sighting.matchedWith ? <p className="text-sm font-medium text-primary">{sighting.matchedWith}</p> :
                            <p className="text-sm text-muted-foreground">No match</p>}
                        </td>
                        <td className="py-3 px-4 text-foreground text-sm">{sighting.reporter}</td>
                        <td className="py-3 px-4 flex gap-2">
                          <Button size="sm" variant="outline" className="gap-1 bg-transparent">
                            <Eye className="h-4 w-4" /> View
                          </Button>
                          <Button size="sm" variant="outline">Verify</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>
    </div>
  )
}
