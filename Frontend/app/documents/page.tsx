import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Download, ArrowRight } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="border-b border-gray-800 pt-12 pb-8 px-4 sm:pt-20 sm:pb-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Documentation</h1>
          <p className="text-base sm:text-lg text-gray-400">
            Complete platform documentation, guides, and technical resources
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:py-24 sm:px-6">
        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-16">
          {/* What is MP Finder */}
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-cyan-400">What is MP Finder?</h2>
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
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-pink-400">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
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
                <div key={i} className="border border-gray-800 hover:border-pink-500/50 transition-colors p-4 sm:p-8 rounded-sm group">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-cyan-400">Technology Stack</h2>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Frontend & Client</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-gray-300">
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Next.js 16</p>
                    <p className="text-xs sm:text-sm">React framework with App Router for optimized performance</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">TypeScript</p>
                    <p className="text-xs sm:text-sm">Type-safe development for robust code quality</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Tailwind CSS</p>
                    <p className="text-xs sm:text-sm">Modern utility-first styling framework</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">AI & Machine Learning</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-gray-300">
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">Facial Recognition</p>
                    <p className="text-xs sm:text-sm">Deep learning models for biometric analysis and matching</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">Computer Vision</p>
                    <p className="text-xs sm:text-sm">Image processing and feature extraction algorithms</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">ML Pipeline</p>
                    <p className="text-xs sm:text-sm">Automated training and model optimization systems</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Backend & Infrastructure</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-gray-300">
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">PostgreSQL</p>
                    <p className="text-xs sm:text-sm">Secure relational database for case management</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">REST APIs</p>
                    <p className="text-xs sm:text-sm">Scalable API architecture for integrations</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">Cloud Infrastructure</p>
                    <p className="text-xs sm:text-sm">Enterprise-grade hosting with redundancy</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">Security & Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6 text-gray-300">
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2 text-sm sm:text-base">AES-256 Encryption</p>
                    <p className="text-xs sm:text-sm">Military-grade data encryption at rest</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2 text-sm sm:text-base">TLS 1.3</p>
                    <p className="text-xs sm:text-sm">Secure end-to-end communication protocol</p>
                  </div>
                  <div className="border border-gray-800 p-4 sm:p-6 rounded-sm">
                    <p className="font-semibold text-green-400 mb-2 text-sm sm:text-base">GDPR & CCPA</p>
                    <p className="text-xs sm:text-sm">Full compliance with international privacy laws</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-pink-400">How It Works</h2>
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
                <div key={i} className="flex gap-4 sm:gap-8 border-b border-gray-800 pb-6 sm:pb-8 last:border-b-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center text-lg sm:text-2xl font-bold text-black">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VigilTrack Documentation */}
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-pink-400">VigilTrack – Missing Person Tracking & AI Matching Platform</h2>
            <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base">
              
              {/* 1. Project Overview */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">1. Project Overview</h3>
                <p className="mb-3">
                  VigilTrack is a web-based platform designed to help authorities, law enforcement, and the general public:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400 ml-4 list-disc">
                  <li>Report missing persons with photos and detailed information</li>
                  <li>Store and manage missing person data securely in the cloud</li>
                  <li>Automatically generate AI embeddings for uploaded photos</li>
                  <li>Perform AI-based facial recognition matching to identify missing persons quickly</li>
                  <li>Track sightings and check matches via API requests or image uploads</li>
                </ul>
                <div className="mt-4 p-4 bg-gray-900/50 border border-gray-800 rounded-sm">
                  <p className="font-semibold text-cyan-400 mb-2 text-xs sm:text-sm">Key Goals:</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-400 list-disc ml-4">
                    <li>Provide a fast and reliable missing person reporting system</li>
                    <li>Enable AI-powered matching for accurate identification</li>
                    <li>Ensure secure storage and scalable architecture</li>
                    <li>Offer a user-friendly and responsive interface for all users</li>
                  </ul>
                </div>
              </div>

              {/* 2. Tech Stack */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4">2. Tech Stack</h3>
                <div className="bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-sm overflow-x-auto">
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">Frontend</p>
                        <p className="text-gray-400">React 18, Next.js 13, Tailwind CSS, shadcn/ui, Lucide icons</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">Backend</p>
                        <p className="text-gray-400">Node.js 20, Express.js</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">Database</p>
                        <p className="text-gray-400">MongoDB Atlas</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">AI Service</p>
                        <p className="text-gray-400">Python 3.11, FastAPI, face-recognition</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">Storage</p>
                        <p className="text-gray-400">Cloudinary (image storage)</p>
                      </div>
                      <div>
                        <p className="text-cyan-400 font-semibold mb-1">Deployment</p>
                        <p className="text-gray-400">Render (HTTPS, env variables)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. System Architecture */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">3. System Architecture</h3>
                <div className="bg-gray-900 border border-gray-800 p-4 sm:p-6 rounded-sm font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
                  <p className="text-cyan-400">User (Frontend)</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-yellow-400">Frontend (React + Next.js)</p>
                  <p className="text-gray-600 text-center">↓ POST /api/missing</p>
                  <p className="text-pink-400">Backend (Node.js + Express)</p>
                  <p className="text-gray-500 text-xs">├─ Upload image to Cloudinary</p>
                  <p className="text-gray-500 text-xs">├─ Send image URL to AI Service</p>
                  <p className="text-gray-500 text-xs">├─ Store person + embedding</p>
                  <p className="text-gray-600 text-center">↓</p>
                  <p className="text-green-400">MongoDB Atlas (Database)</p>
                  <p className="text-gray-500 text-xs">& Cloudinary (Storage)</p>
                </div>
              </div>

              {/* 4. Database Schemas */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4">4. Database Schemas</h3>
                <div className="space-y-4">
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm bg-gray-900/50">
                    <p className="font-semibold text-cyan-400 mb-3 text-sm sm:text-base">Missing Person Collection</p>
                    <div className="text-xs sm:text-sm text-gray-400 font-mono space-y-1">
                      <p><span className="text-pink-400">Field</span> → <span className="text-cyan-400">Type</span> | <span className="text-yellow-400">Description</span></p>
                      <p>_id → ObjectId | Unique record ID</p>
                      <p>name → string | Full name</p>
                      <p>age → number | Age of person</p>
                      <p>gender → string | Male/Female/Other</p>
                      <p>lastSeenLocation → string | Last known location</p>
                      <p>contactInfo → string | Email or phone</p>
                      <p>notes → string | Distinguishing features</p>
                      <p>imageUrl → string | Cloudinary image URL</p>
                      <p>embeddingId → ObjectId | Reference to embedding</p>
                      <p>createdAt → Date | Record creation timestamp</p>
                    </div>
                  </div>
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm bg-gray-900/50">
                    <p className="font-semibold text-cyan-400 mb-3 text-sm sm:text-base">Embeddings Collection</p>
                    <div className="text-xs sm:text-sm text-gray-400 font-mono space-y-1">
                      <p><span className="text-pink-400">Field</span> → <span className="text-cyan-400">Type</span> | <span className="text-yellow-400">Description</span></p>
                      <p>_id → ObjectId | Unique embedding ID</p>
                      <p>personId → ObjectId | Reference to person</p>
                      <p>embedding → array[128] | 128-d vector</p>
                      <p>createdAt → Date | Creation timestamp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. API Documentation */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">5. API Documentation</h3>
                <div className="space-y-4">
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">POST /api/missing</p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3">Submit missing person report with image upload to Cloudinary and embedding generation</p>
                    <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <p><span className="text-cyan-400 font-semibold">Request Fields:</span> name, age, gender, lastSeenLocation, contactInfo, notes, image (file)</p>
                      <p><span className="text-cyan-400 font-semibold">Response:</span> success status, person object with embeddingId, imageUrl, createdAt</p>
                    </div>
                  </div>
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">POST /ai/embedding</p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3">Generate 128-dimensional embedding from image URL (internal and external use)</p>
                    <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <p><span className="text-cyan-400 font-semibold">Request:</span> {'{image_url: "https://..."}'}</p>
                      <p><span className="text-cyan-400 font-semibold">Response:</span> {'{embedding: [...128 values], dimension: 128}'}</p>
                    </div>
                  </div>
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">GET /api/sightings</p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3">Retrieve all missing person reports from database</p>
                    <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <p><span className="text-cyan-400 font-semibold">Response:</span> Array of all missing person objects with details and imageUrl</p>
                    </div>
                  </div>
                  <div className="border border-gray-800 p-3 sm:p-4 rounded-sm">
                    <p className="font-semibold text-pink-400 mb-2 text-sm sm:text-base">POST /api/match</p>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3">Check for matches using embeddingId or new image URL (cosine similarity matching)</p>
                    <div className="text-xs sm:text-sm text-gray-400 space-y-2">
                      <p><span className="text-cyan-400 font-semibold">Request Option 1:</span> {'{embeddingId: "...'}</p>
                      <p><span className="text-cyan-400 font-semibold">Request Option 2:</span> {'{imageUrl: "https://..."}'}</p>
                      <p><span className="text-cyan-400 font-semibold">Response:</span> matches array with personId, name, contact, similarityScore (0.8+ = strong match)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. AI Service Details */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4">6. AI Service Details</h3>
                <div className="space-y-3">
                  <p><span className="text-cyan-400 font-semibold">Technology Stack:</span> Python 3.11, FastAPI, face-recognition library</p>
                  <p><span className="text-cyan-400 font-semibold">Functionality:</span> Accepts image URL, downloads image, extracts 128-dimensional embedding vector</p>
                  <p><span className="text-cyan-400 font-semibold">Endpoint:</span> POST /ai/embedding</p>
                  <p><span className="text-cyan-400 font-semibold">Matching Algorithm:</span> Cosine similarity on 128-d vectors. Score ≥ 0.8 is strong match</p>
                  <p className="mt-3 p-3 bg-gray-900/50 border border-gray-800 rounded-sm text-xs sm:text-sm">
                    <span className="text-yellow-400 font-semibold">Note:</span> AI service accepts only image URLs to prevent overload and ensure scalability across requests.
                  </p>
                </div>
              </div>

              {/* 7. Frontend Features & Flow */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">7. Frontend Features & Flow</h3>
                <div className="space-y-3">
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-pink-400 mb-2">Report Missing Person Form:</p>
                    <p className="text-gray-400 ml-2">Name, Age, Gender, Last Seen Location, Contact Info, Notes, Photo upload with preview</p>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p className="font-semibold text-pink-400 mb-2">Complete User Flow:</p>
                    <ol className="space-y-1 text-gray-400 ml-4 list-decimal">
                      <li>User fills missing person form (all required fields)</li>
                      <li>User uploads clear face photo with preview</li>
                      <li>Backend receives multipart form data, uploads image to Cloudinary</li>
                      <li>AI service generates 128-d embedding from image URL</li>
                      <li>Backend stores missing person record + embedding in MongoDB</li>
                      <li>UI displays unique Case ID (#MPFXXXXX) for reference</li>
                      <li>Users can check matches using embeddingId or upload new image</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* 8. Deployment & Environment */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4">8. Deployment & Environment</h3>
                <div className="space-y-3">
                  <div>
                    <p><span className="text-cyan-400 font-semibold">Platform:</span> Render (supports HTTPS, environment variables, automatic deployments)</p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 p-3 rounded-sm text-xs sm:text-sm">
                    <p className="text-cyan-400 font-semibold mb-2">Live URLs:</p>
                    <p className="text-gray-400">Backend: https://vigiltrack.onrender.com</p>
                    <p className="text-gray-400">AI Service: https://vigil-track-ai-service.onrender.com</p>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Required Environment Variables:</p>
                    <div className="text-xs sm:text-sm text-gray-400 ml-4 space-y-1">
                      <p>• CLOUDINARY_CLOUD_NAME</p>
                      <p>• CLOUDINARY_API_KEY</p>
                      <p>• CLOUDINARY_API_SECRET</p>
                      <p>• NEXT_PUBLIC_API_BASE_URL</p>
                      <p>• MONGODB_URI</p>
                      <p>• AI_SERVICE_URL</p>
                      <p>• PORT (for AI service)</p>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-cyan-400 mb-2">Deployment Steps:</p>
                    <ol className="text-xs sm:text-sm text-gray-400 ml-4 space-y-1 list-decimal">
                      <li>Push backend code to GitHub repository</li>
                      <li>Connect repository in Render dashboard</li>
                      <li>Add all environment variables in Render settings</li>
                      <li>Deploy backend service with auto-restart on failure</li>
                      <li>Deploy AI service separately with same process</li>
                      <li>Update AI_SERVICE_URL in backend environment</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* 9. Security & Privacy */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">9. Security Considerations</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400 ml-4">
                  <li>• Images stored in Cloudinary with private/signed URLs</li>
                  <li>• Contact information stored securely in MongoDB</li>
                  <li>• AI service accepts only image URLs to prevent overload</li>
                  <li>• Input validation on all endpoints</li>
                  <li>• JWT/API key authentication for admin endpoints (future scope)</li>
                </ul>
              </div>

              {/* 10. Future Scope */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-pink-400 mb-4">10. Future Scope & Enhancements</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400 ml-4">
                  <li>• Admin dashboard for tracking missing cases</li>
                  <li>• Notification system for nearby users/police</li>
                  <li>• Facial recognition for partial faces</li>
                  <li>• Mobile app integration (React Native)</li>
                  <li>• Map-based last-seen location visualization</li>
                </ul>
              </div>

              {/* Summary */}
              <div className="bg-gray-900 border border-gray-700 p-4 sm:p-6 rounded-sm">
                <p className="text-yellow-400 font-semibold mb-2">Key Features</p>
                <ul className="space-y-1 text-xs sm:text-sm text-gray-400">
                  <li>✓ Accurate AI-based matching (128-d embeddings, cosine similarity)</li>
                  <li>✓ Secure image & data handling (Cloudinary + MongoDB)</li>
                  <li>✓ Easy deployment on cloud (Render, Docker-ready)</li>
                  <li>✓ Expandable for law enforcement and public usage</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Getting Started */}
          <div className="border-b border-gray-800 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4 sm:mb-8 text-cyan-400">Getting Started</h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">For Public Users</h3>
                <ol className="space-y-3 ml-6 list-decimal text-gray-400 text-sm sm:text-base">
                  <li>Create a secure account on our platform</li>
                  <li>Browse active missing person cases</li>
                  <li>Report any sightings you believe match missing individuals</li>
                  <li>Upload clear photos and location information</li>
                  <li>Receive updates on your reports</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">For Law Enforcement</h3>
                <ol className="space-y-3 ml-6 list-decimal text-gray-400 text-sm sm:text-base">
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
          <div className="text-center py-8 sm:py-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4">Need Help?</h2>
            <p className="text-gray-400 mb-8 text-base sm:text-lg">Access our comprehensive support resources and documentation</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
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
      <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center text-gray-500 text-xs sm:text-sm">
          <p>© 2024 MP Finder Documentation. For questions, contact support@mpfinder.com</p>
        </div>
      </footer>
    </div>
  )
}
