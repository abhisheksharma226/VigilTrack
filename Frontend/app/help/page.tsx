import { Card } from "@/components/ui/card"
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MessageSquare, HelpCircle } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Help & Support</h1>
          <p className="text-lg text-gray-400">
            Find answers to common questions and get dedicated support from our team
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl space-y-24">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors p-8 rounded-sm group">
              <Phone className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Call Us</h3>
              <p className="text-gray-400 mb-6">
                Speak with our support team directly
              </p>
              <a href="tel:1-800-555-4357" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
                1-800-555-4357
              </a>
            </div>

            <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors p-8 rounded-sm group">
              <Mail className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Email Us</h3>
              <p className="text-gray-400 mb-6">
                Send us a detailed message
              </p>
              <a href="mailto:support@mpfinder.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono">
                support@mpfinder.com
              </a>
            </div>

            <div className="border border-gray-800 hover:border-cyan-500/50 transition-colors p-8 rounded-sm group">
              <MessageSquare className="h-8 w-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3">Live Chat</h3>
              <p className="text-gray-400 mb-6">
                Chat with us instantly for quick help
              </p>
              <Button className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-sm font-semibold w-full">
                Start Chat
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How accurate is the AI matching system?',
                  a: 'Our AI-powered facial recognition achieves 94% accuracy. However, all matches are reviewed by law enforcement officials before any action is taken.'
                },
                {
                  q: 'How long does it take to process a report?',
                  a: 'Missing person reports are processed within 2-4 hours. Sighting reports are matched in real-time using our AI system.'
                },
                {
                  q: 'Is my information kept secure?',
                  a: 'Yes, we use industry-leading encryption and comply with all privacy regulations. Information is only shared with authorized law enforcement officials.'
                },
                {
                  q: 'Can I update a missing person case after submission?',
                  a: 'Yes, contact our support team with your case ID. Changes are verified and updated within 24 hours.'
                },
                {
                  q: 'What happens when a match is found?',
                  a: 'Law enforcement officials are notified immediately of high-confidence matches. They will investigate and contact the person who reported the case.'
                },
                {
                  q: 'Can the general public report sightings?',
                  a: 'Yes, anyone can report sightings. All reports are verified and cross-referenced with our missing person database.'
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-800 pb-6">
                  <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">Resources & Documentation</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-800 hover:border-pink-500/50 transition-colors p-8 rounded-sm group">
                <div className="text-3xl font-bold text-pink-400 mb-4">01</div>
                <h3 className="text-xl font-bold mb-3">User Guide</h3>
                <p className="text-gray-400 mb-6">
                  Step-by-step instructions and best practices for using the platform effectively.
                </p>
                <Button className="bg-pink-400 text-black hover:bg-pink-300 rounded-sm font-semibold">
                  Read Guide
                </Button>
              </div>

              <div className="border border-gray-800 hover:border-pink-500/50 transition-colors p-8 rounded-sm group">
                <div className="text-3xl font-bold text-pink-400 mb-4">02</div>
                <h3 className="text-xl font-bold mb-3">Safety Tips</h3>
                <p className="text-gray-400 mb-6">
                  Important safety information and guidelines for reporting cases.
                </p>
                <Button className="bg-pink-400 text-black hover:bg-pink-300 rounded-sm font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>Need more help? Contact our support team anytime.</p>
        </div>
      </footer>
    </div>
  )
}
