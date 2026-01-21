export default function Loading() {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-pink-500/5 to-transparent blur-3xl" />
        </div>
  
        {/* Header Skeleton */}
        <div className="border-b border-gray-800 py-5 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="h-8 bg-gray-800 rounded w-32 animate-pulse" />
          </div>
        </div>
  
        {/* Hero Section Skeleton */}
        <div className="pt-20 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="h-4 bg-gray-800 rounded w-48 mx-auto animate-pulse" />
            <div className="space-y-3">
              <div className="h-12 bg-gray-800 rounded w-full animate-pulse" />
              <div className="h-12 bg-gray-800 rounded w-3/4 mx-auto animate-pulse" />
            </div>
            <div className="h-6 bg-gray-800 rounded w-full max-w-2xl mx-auto animate-pulse" />
  
            {/* Input Skeleton */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-sm p-8 space-y-6 mt-12">
              <div className="flex gap-4">
                <div className="h-10 bg-gray-800 rounded w-48 animate-pulse" />
                <div className="h-10 bg-gray-800 rounded w-48 animate-pulse" />
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-800 rounded w-32 animate-pulse" />
                <div className="h-12 bg-gray-800 rounded w-full animate-pulse" />
              </div>
              <div className="h-12 bg-gray-800 rounded w-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  