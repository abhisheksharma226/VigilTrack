'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Sparkles, Zap, Shield, Lock } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent blur-3xl" />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 px-6">
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Subtitle */}
          <div className="text-sm font-mono text-gray-400 tracking-widest uppercase">
            FIND MISSING PERSONS
          </div>

          {/* Main Headline */}
          <h1 className="text-7xl md:text-8xl font-serif font-bold tracking-tight leading-[1.1]">
            Reunite Families with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
              Advanced AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Next-generation facial recognition technology combined with verified law enforcement data. Fast, secure, and reliable.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/report-missing">
              <Button className="px-8 h-14 bg-white text-black hover:bg-gray-100 font-semibold text-lg rounded-sm group">
                Report Missing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/report-sighting">
              <Button 
                variant="outline" 
                className="px-8 h-14 border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg rounded-sm bg-transparent"
              >
                Report Sighting
              </Button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-800">
            {[
              { number: '2,847', label: 'Active Cases' },
              { number: '94%', label: 'Success Rate' },
              { number: '15.2K', label: 'Reports' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-20">
            Powered by
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-600">
              Premium Technology
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'AI Matching',
                desc: 'Advanced facial recognition analyzes biometric markers for accurate matches.',
                icon: '01'
              },
              {
                title: 'Official Verification',
                desc: 'Law enforcement reviewed and verified cases with real-time collaboration.',
                icon: '02'
              },
              {
                title: 'Privacy First',
                desc: 'Military-grade encryption with end-to-end protection for all data.',
                icon: '03'
              }
            ].map((feature, i) => (
              <div key={i} className="group border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 p-8 rounded-sm">
                <div className="text-5xl font-serif font-bold text-gray-700 group-hover:text-cyan-500/30 transition-colors mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto">
          <div className="border-2 border-white rounded-sm p-12 text-center space-y-6 bg-gradient-to-b from-white/5 to-transparent">
            <h2 className="text-4xl font-serif font-bold">Ready to Help?</h2>
            <p className="text-lg text-gray-300">
              Every report counts. Join thousands helping reunite families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/report-sighting">
                <Button className="px-8 h-12 bg-white text-black hover:bg-gray-100 font-semibold rounded-sm">
                  Report a Sighting
                </Button>
              </Link>
              <Link href="/cases">
                <Button 
                  variant="outline" 
                  className="px-8 h-12 border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-sm bg-transparent"
                >
                  Browse Cases
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <p>© 2026 Missing Person Matcher. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
