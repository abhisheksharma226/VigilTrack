'use client'

import Image from 'next/image'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

const developers = [
  {
    id: 1,
    name: 'Abhishek Sharma',
    role: 'Lead Developer',
    title: 'Full Stack Engineer',
    bio: 'Building AI-powered and Full stack solutions for complex problems. Expert in Backend, and Cloud Architecture.',
    specialties: ['Full Stack', 'Backend', 'Cloud Architecture'],
    image: '/Abhishekk.jpg',
    social: {
      github: 'https://github.com/abhisheksharma226/',
      linkedin: 'https://www.linkedin.com/in/abhisheksharma-731676205/',
      email: 'sharmaabhi2226@gmail.com'
    }
  }
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Our Team</h1>
          <p className="text-lg text-gray-400">
            Meet the talented developers and team members building the future of missing person identification
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          {developers.map((dev) => (
            <div key={dev.id} className="group">
              {/* Horizontal Developer Card */}
              <div className="border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col md:flex-row">
                {/* Image Area - Left Side */}
                <div className="md:w-1/3 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden min-h-80 md:min-h-96">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 group-hover:from-cyan-500/20 group-hover:to-pink-500/20 transition-all duration-300" />
                  <div className="relative z-10 w-full h-full">
                    <Image
                        src={dev.image} // "/Abhishekk.jpg"
                        alt={dev.name}
                        fill // makes the image cover the parent div
                        className="object-cover"
                        // style={{ objectFit: "contain" }}
                      />
                  </div>
                </div>

                {/* Content - Right Side */}
                <div className="md:w-2/3 p-8 md:p-12 border-t md:border-t-0 md:border-l border-gray-800 flex flex-col justify-between">
                  <div>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">{dev.name}</h3>
                      <p className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-2">
                        {dev.role}
                      </p>
                      <p className="text-gray-400 text-lg">{dev.title}</p>
                    </div>

                    <p className="text-gray-400 mb-8 leading-relaxed text-base">
                      {dev.bio}
                    </p>

                    {/* Specialties */}
                    <div className="mb-8">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Specialties</p>
                      <div className="flex flex-wrap gap-2">
                        {dev.specialties.map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 border border-gray-700 rounded-sm text-xs text-gray-300 hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a 
                      href={dev.social.github}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors py-3 rounded-sm font-semibold"
                      title="GitHub"
                    >
                      <Github className="h-5 w-5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a 
                      href={dev.social.linkedin}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors py-3 rounded-sm font-semibold"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="hidden sm:inline">LinkedIn</span>
                    </a>
                    <a 
                      href={`mailto:${dev.social.email}`}
                      className="flex-1 flex items-center justify-center gap-2 border border-gray-700 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-colors py-3 rounded-sm font-semibold"
                      title="Email"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-800 py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-serif font-bold mb-16">Team Impact</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Cases Solved' },
              { number: '2000+', label: 'Hours Invested' },
              { number: '98%', label: 'Code Quality' },
              { number: '24/7', label: 'Support' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-t border-gray-800 py-24 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-serif font-bold">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We are a dedicated team of developers, designers, and product specialists committed to leveraging advanced AI and technology to reunite missing individuals with their families. Every line of code, every pixel, and every decision we make is driven by the mission to bring hope and closure to those who need it most.
            </p>
            
            <div className="border-t border-gray-800 pt-12">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="px-8 h-12 bg-cyan-400 text-black hover:bg-cyan-300 rounded-sm font-semibold gap-2">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  className="px-8 h-12 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 rounded-sm font-semibold bg-transparent"
                >
                  Join Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>Built with purpose. Driven by mission.</p>
        </div>
      </footer>
    </div>
  )
}
