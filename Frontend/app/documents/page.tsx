import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-20 pb-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-serif font-bold mb-4">Documentation</h1>
          <p className="text-lg text-gray-400">
            Complete platform documentation, guides, and technical resources
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl space-y-16">
          {/* What is MP Finder */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-cyan-400">What is MP Finder?</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                MP Finder is a next-generation missing person identification platform that combines advanced AI-powered facial recognition technology with verified law enforcement databases. Our system helps reunite families by enabling rapid matching between missing person reports and community sightings.
              </p>
              <p>
                The platform is built on the principle of collaborative safety - bringing together government agencies, law enforcement officials, and the public under one secure, transparent system. We leverage state-of-the-art machine learning algorithms to analyze facial features, physical characteristics, and contextual data to identify potential matches with unprecedented accuracy.
              </p>
              <p>
                All data is protected with military-grade encryption and complies with international privacy standards. Our commitment to security and accuracy ensures that every match is reviewed by qualified law enforcement professionals before any action is taken.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-pink-400">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'AI-Powered Matching',
                  desc: 'Advanced facial recognition analyzes biometric markers with 94% accuracy to match sightings against missing person database in real-time.'
                },
                {
                  title: 'Official Verification',
                  desc: 'All cases are verified and reviewed by law enforcement officials with dedicated collaboration tools for seamless communication.'
                },
                {
                  title: 'Secure Data Handling',
                  desc: 'Military-grade encryption with end-to-end protection ensures all personal data remains confidential and complies with privacy regulations.'
                },
                {
                  title: 'Community Intelligence',
                  desc: 'Enable the public to report sightings safely and securely, creating a collaborative network for identifying missing individuals.'
                },
                {
                  title: 'Real-Time Notifications',
                  desc: 'Instant alerts to relevant parties when high-confidence matches are detected, enabling immediate investigation and follow-up.'
                },
                {
                  title: 'Case Management',
                  desc: 'Comprehensive tools for managing case information, tracking updates, and maintaining detailed timelines of all activities.'
                }
              ].map((feature, i) => (
                <div key={i} className="border border-gray-800 hover:border-pink-500/50 transition-colors p-8 rounded-sm group">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-cyan-400">Technology Stack</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Frontend & Client</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">Next.js 16</p>
                    <p className="text-sm">React framework with App Router for optimized performance</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">TypeScript</p>
                    <p className="text-sm">Type-safe development for robust code quality</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">Tailwind CSS</p>
                    <p className="text-sm">Modern utility-first styling framework</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AI & Machine Learning</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2">Facial Recognition</p>
                    <p className="text-sm">Deep learning models for biometric analysis and matching</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2">Computer Vision</p>
                    <p className="text-sm">Image processing and feature extraction algorithms</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2">ML Pipeline</p>
                    <p className="text-sm">Automated training and model optimization systems</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Backend & Infrastructure</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2">PostgreSQL</p>
                    <p className="text-sm">Secure relational database for case management</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2">REST APIs</p>
                    <p className="text-sm">Scalable API architecture for integrations</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2">Cloud Infrastructure</p>
                    <p className="text-sm">Enterprise-grade hosting with redundancy</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Security & Compliance</h3>
                <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2">AES-256 Encryption</p>
                    <p className="text-sm">Military-grade data encryption at rest</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2">TLS 1.3</p>
                    <p className="text-sm">Secure end-to-end communication protocol</p>
                  </div>
                  <div className="border border-gray-800 p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2">GDPR & CCPA</p>
                    <p className="text-sm">Full compliance with international privacy laws</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-pink-400">How It Works</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Report Missing Person',
                  desc: 'Law enforcement or authorized personnel submit detailed missing person reports with photos, physical descriptions, and contextual information.'
                },
                {
                  step: '02',
                  title: 'Community Reports Sighting',
                  desc: 'Public members report sightings they believe match missing persons, uploading photos and location data through our secure platform.'
                },
                {
                  step: '03',
                  title: 'AI Analysis & Matching',
                  desc: 'Our advanced facial recognition engine analyzes submitted images, comparing biometric features against the missing persons database.'
                },
                {
                  step: '04',
                  title: 'Confidence Scoring',
                  desc: 'The system generates match confidence scores, prioritizing high-probability matches for immediate law enforcement review.'
                },
                {
                  step: '05',
                  title: 'Official Verification',
                  desc: 'Qualified law enforcement officials review all matches, verify information, and take appropriate investigative action.'
                },
                {
                  step: '06',
                  title: 'Reunification',
                  desc: 'Confirmed matches lead to identification and reunification efforts, with secure communication channels for all parties.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 border-b border-gray-800 pb-8 last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-black">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VigilTrack Documentation */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-pink-400">VigilTrack – AI-Powered Missing & Crime Person Identification System</h2>
            <div className="space-y-8 text-gray-300 leading-relaxed">
              
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Project Overview</h3>
                <p className="mb-4">
                  VigilTrack is a personal, full-stack AI-based web application designed to assist in identifying missing persons and suspected crime-related individuals using facial recognition technology. The platform allows users to report missing persons, submit public sightings, and automatically match faces using AI-generated embeddings.
                </p>
                <p>
                  This project was built as a learning-focused, portfolio-grade system, demonstrating real-world use of AI & Machine Learning integration, backend API design, cloud-based image storage, secure data handling, and full-stack system architecture.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Problem Statement & Solution</h3>
                <div className="space-y-3">
                  <p><span className="text-cyan-400 font-semibold">Challenge:</span> Thousands of missing person cases remain unresolved due to lack of timely information. Manual comparison of images is slow and error-prone, and there's no easy platform for the public to safely report sightings.</p>
                  <p><span className="text-cyan-400 font-semibold">Solution:</span> VigilTrack automates the identification process by accepting images of missing persons, allowing public sightings to be uploaded, using AI face embeddings to find potential matches, and presenting match confidence visually.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 ml-4">
                  <div className="border-l-2 border-pink-400 pl-4">
                    <p className="font-semibold text-pink-400 mb-2">👤 Missing Person Management</p>
                    <p className="text-sm">Upload missing person details with image, store facial embeddings for AI comparison, and maintain case records in database</p>
                  </div>
                  <div className="border-l-2 border-pink-400 pl-4">
                    <p className="font-semibold text-pink-400 mb-2">👁️ Sighting Reporting</p>
                    <p className="text-sm">Public users can report sightings with images. AI automatically extracts facial features and each sighting is stored securely</p>
                  </div>
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <p className="font-semibold text-cyan-400 mb-2">🤖 AI-Based Face Matching</p>
                    <p className="text-sm">Face embeddings comparison using cosine similarity based matching with match confidence visualization</p>
                  </div>
                  <div className="border-l-2 border-cyan-400 pl-4">
                    <p className="font-semibold text-cyan-400 mb-2">☁️ Cloud Image Storage</p>
                    <p className="text-sm">Images stored securely using Cloudinary with optimized image URLs</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">System Architecture</h3>
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm font-mono text-sm space-y-2">
                  <p className="text-cyan-400">Frontend (Next.js + React)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-pink-400">Backend API (Node.js + Express)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-yellow-400">AI Service (Face Embedding Model)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-green-400">Database (MongoDB)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-blue-400">Cloud Storage (Cloudinary)</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Complete Tech Stack</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-pink-400 mb-2">Frontend</p>
                    <p className="text-sm ml-4">• Next.js (App Router) • React • Tailwind CSS • ShadCN UI • Axios</p>
                  </div>
                  <div>
                    <p className="font-semibold text-pink-400 mb-2">Backend</p>
                    <p className="text-sm ml-4">• Node.js • Express.js • Multer (file upload) • Cloudinary SDK • MongoDB (Mongoose)</p>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">AI / ML</p>
                    <p className="text-sm ml-4">• Face Recognition Model (128-d embeddings) • Local AI Inference Service • Cosine Similarity Matching</p>
                  </div>
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Tools & Utilities</p>
                    <p className="text-sm ml-4">• Docker (AI service ready) • Git & GitHub • Postman (API testing)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">AI Model Details</h3>
                <div className="space-y-3">
                  <p><span className="text-cyan-400 font-semibold">Model Used:</span> Face Recognition Model producing 128-dimensional embeddings</p>
                  <p><span className="text-cyan-400 font-semibold">Why This Model?</span> Lightweight, high accuracy for face similarity, fast inference, free and privacy-friendly</p>
                  <p><span className="text-cyan-400 font-semibold">What It Does:</span> Detects faces, extracts facial features, converts features into 128-d vectors, stores vectors in database, and compares vectors using similarity scores</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">AI Matching Workflow</h3>
                <div className="bg-gray-900 border border-gray-800 p-6 rounded-sm font-mono text-sm space-y-2">
                  <p className="text-pink-400">Image Upload</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-pink-400">Face Detection</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-cyan-400">Embedding Generation (128-d vector)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-cyan-400">Store in Database</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-yellow-400">Compare with Existing Embeddings</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-green-400">Return Match Confidence</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Backend API Documentation</h3>
                <div className="space-y-4">
                  <div className="border border-gray-800 p-4 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">POST /missing</p>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Purpose: Register a missing person</p>
                    <p className="text-sm text-gray-400 mb-2"><span className="text-cyan-400">Request:</span> image, name, age, gender, description</p>
                    <p className="text-sm text-gray-400"><span className="text-cyan-400">Response:</span> {'{success: true, message: "Missing person added successfully"}'}</p>
                  </div>
                  <div className="border border-gray-800 p-4 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">POST /sightings</p>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Purpose: Report a public sighting</p>
                    <p className="text-sm text-gray-400 mb-2"><span className="text-cyan-400">Request:</span> image, location, description, reportedBy, reportedTime</p>
                    <p className="text-sm text-gray-400"><span className="text-cyan-400">Response:</span> {'{success: true, message: "Sighting uploaded & embedding generated"}'}</p>
                  </div>
                  <div className="border border-gray-800 p-4 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2">POST /match</p>
                    <p className="text-sm font-semibold text-gray-300 mb-2">Purpose: Match a sighting with missing persons</p>
                    <p className="text-sm text-gray-400"><span className="text-cyan-400">Response:</span> {'{matchFound: true, confidence: 0.87}'}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Database Design (MongoDB)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-pink-400 mb-2">MissingPerson Collection</p>
                    <p className="text-sm text-gray-400">Fields: name • imageUrl • embedding • description • createdAt</p>
                  </div>
                  <div>
                    <p className="font-semibold text-pink-400 mb-2">Sighting Collection</p>
                    <p className="text-sm text-gray-400">Fields: imageUrl • embedding • location • reportedBy • reportedTime</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">Security & Privacy Considerations</h3>
                <ul className="space-y-2 text-gray-400 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Images stored securely in Cloudinary</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>No public access to embeddings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>APIs validate input and handle errors securely</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>No biometric data shared externally</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Deployment Readiness</h3>
                <ul className="space-y-2 text-gray-400 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span><span className="text-pink-400 font-semibold">Backend:</span> Ready for AWS / Render</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span><span className="text-pink-400 font-semibold">Frontend:</span> Vercel compatible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-400 mt-1">•</span>
                    <span><span className="text-pink-400 font-semibold">AI Service:</span> Docker-ready</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-700 p-6 rounded-sm">
                <p className="text-yellow-400 font-semibold mb-2">⚠️ Disclaimer</p>
                <p className="text-sm">This project is developed for educational and portfolio purposes only. It does not claim to replace or replicate official law enforcement systems.</p>
              </div>

            </div>
          </div>

          {/* Getting Started */}
          <div className="border-b border-gray-800 pb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-cyan-400">Getting Started</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-xl font-bold mb-3">For Public Users</h3>
                <ol className="space-y-3 ml-6 list-decimal text-gray-400">
                  <li>Create a secure account on our platform</li>
                  <li>Browse active missing person cases</li>
                  <li>Report any sightings you believe match missing individuals</li>
                  <li>Upload clear photos and location information</li>
                  <li>Receive updates on your reports</li>
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">For Law Enforcement</h3>
                <ol className="space-y-3 ml-6 list-decimal text-gray-400">
                  <li>Request official agency account with verification</li>
                  <li>Submit missing person reports with full case details</li>
                  <li>Access real-time matching dashboard</li>
                  <li>Review and verify AI-generated matches</li>
                  <li>Manage case communications and updates</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="text-center py-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Need Help?</h2>
            <p className="text-gray-400 mb-8 text-lg">Access our comprehensive support resources and documentation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-cyan-400 text-black hover:bg-cyan-300 rounded-sm font-semibold h-12 px-8">
                <Download className="h-5 w-5 mr-2" />
                Download Full Documentation
              </Button>
              <Button className="border-2 border-gray-700 text-white hover:border-pink-400 hover:text-pink-400 rounded-sm font-semibold h-12 px-8 bg-transparent">
                Visit Support Center
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 MP Finder Documentation. For questions, contact support@mpfinder.com</p>
        </div>
      </footer>
    </div>
  )
}
