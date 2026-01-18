import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { FileText, BookOpen, Shield, Zap, ArrowRight, Download } from 'lucide-react'

export default function DocumentsPage() {
  const documents = [
    {
      icon: BookOpen,
      title: 'Getting Started Guide',
      description: 'Learn the basics of using our platform to report cases and sightings.',
      category: 'Guide',
      size: '2.4 MB',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30'
    },
    {
      icon: Shield,
      title: 'Privacy & Security Policy',
      description: 'Understand how we protect your data and maintain security standards.',
      category: 'Legal',
      size: '1.2 MB',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10 border-pink-500/30'
    },
    {
      icon: Zap,
      title: 'AI Matching Technical Guide',
      description: 'Deep dive into how our facial recognition matching system works.',
      category: 'Technical',
      size: '3.1 MB',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10 border-yellow-500/30'
    },
    {
      icon: FileText,
      title: 'Law Enforcement Integration',
      description: 'Detailed documentation for law enforcement agency integration.',
      category: 'Integration',
      size: '1.8 MB',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10 border-green-500/30'
    },
    {
      icon: BookOpen,
      title: 'API Documentation',
      description: 'Complete API reference for developers building integrations.',
      category: 'Developer',
      size: '4.5 MB',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30'
    },
    {
      icon: FileText,
      title: 'Case Report Templates',
      description: 'Standardized templates for comprehensive case reporting.',
      category: 'Tools',
      size: '0.8 MB',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/30'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Documentation</h1>
          <p className="text-lg text-gray-400">
            Comprehensive guides, technical references, and resources for using our platform
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="border-b border-gray-800 py-12 px-6">
        <div className="mx-auto max-w-5xl">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full bg-gray-900/50 border border-gray-800 text-white px-6 py-4 rounded-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {documents.map((doc, i) => {
              const IconComponent = doc.icon
              return (
                <div key={i} className={`border rounded-sm p-8 hover:border-cyan-500/50 transition-all duration-300 group hover:bg-gray-900/50 flex flex-col ${doc.bgColor}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-sm bg-black/50 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${doc.color}`} />
                    </div>
                    <span className="text-xs text-gray-500 font-mono bg-black/50 px-3 py-1 rounded-sm">
                      {doc.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{doc.title}</h3>
                  <p className="text-gray-400 mb-6 flex-1">{doc.description}</p>

                  {/* Footer */}
                  <div className="border-t border-gray-700 pt-6 flex items-center justify-between">
                    <span className="text-xs text-gray-500">{doc.size}</span>
                    <Button className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-sm h-10 gap-2">
                      <Download className="h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="border-t border-gray-800 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-12">Additional Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Forum',
                desc: 'Join our community to discuss cases and best practices.',
                link: '#'
              },
              {
                title: 'Video Tutorials',
                desc: 'Watch step-by-step video guides for common tasks.',
                link: '#'
              },
              {
                title: 'Support Center',
                desc: 'Get help from our dedicated support team.',
                link: '/help'
              }
            ].map((resource, i) => (
              <Link key={i} href={resource.link}>
                <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors p-8 rounded-sm group">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{resource.desc}</p>
                  <span className="text-cyan-400 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>Can't find what you're looking for? <a href="/help" className="text-cyan-400 hover:text-cyan-300">Contact support</a></p>
        </div>
      </footer>
    </div>
  )
}
