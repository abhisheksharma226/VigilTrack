import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MessageSquare } from 'lucide-react'

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">
            Help & Support
          </h1>
          <p className="text-lg text-gray-400">
            Support, guidance, and information about the VigilTrack project.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl space-y-24">

          {/* Contact */}
          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-gray-800 hover:border-cyan-500/50 transition p-8 rounded-sm">
              <Phone className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Contact</h3>
              <p className="text-gray-400 mb-6">
                For general questions or feedback
              </p>
              <p className="text-cyan-400 font-mono">
                +91-XXXXXXXXXX
              </p>
            </div>

            <div className="border border-gray-800 hover:border-cyan-500/50 transition p-8 rounded-sm">
              <Mail className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Email</h3>
              <p className="text-gray-400 mb-6">
                Reach out regarding the project or collaboration
              </p>
              <p className="text-cyan-400 font-mono">
                sharmaabhi2226@gmail.com
              </p>
            </div>

            <div className="border border-gray-800 hover:border-cyan-500/50 transition p-8 rounded-sm">
              <MessageSquare className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-3">Feedback</h3>
              <p className="text-gray-400 mb-6">
                Suggestions to improve the project
              </p>
              <Button className="bg-cyan-400 text-black hover:bg-cyan-300 w-full rounded-sm">
                Share Feedback
              </Button>
            </div>

          </div>

          {/* FAQ */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'What is VigilTrack?',
                  a: 'VigilTrack is a personal project built to explore how AI and image matching can assist in identifying missing persons and reporting sightings.'
                },
                {
                  q: 'Is this an official government system?',
                  a: 'No. This is a personal learning project and is not affiliated with any government or law enforcement agency.'
                },
                {
                  q: 'How does image matching work?',
                  a: 'The system compares uploaded images using AI-generated embeddings to find visually similar faces.'
                },
                {
                  q: 'Can anyone report a sighting?',
                  a: 'Yes. Any user can submit a sighting with an image and basic details.'
                },
                {
                  q: 'Is the data real?',
                  a: 'Data may be real or demo data, depending on the use case. This project is intended for educational purposes.'
                },
                {
                  q: 'Is the AI 100% accurate?',
                  a: 'No. Matches are based on similarity scores and should not be considered final or verified.'
                }
              ].map((faq, i) => (
                <div key={i} className="border-b border-gray-800 pb-6">
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Project */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif font-bold">
              About This Project
            </h2>

            <div className="border border-gray-800 p-8 rounded-sm">
              <p className="text-gray-400 leading-relaxed">
                VigilTrack is built as a personal portfolio project to demonstrate
                backend development, image processing, AI-based similarity matching,
                and full-stack system design. It is not intended for real-world
                enforcement or decision-making.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>
            VigilTrack • Personal Project by Abhishek Sharma
          </p>
        </div>
      </footer>
    </div>
  )
}
