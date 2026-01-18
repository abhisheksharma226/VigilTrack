'use client'

import { useEffect, useState } from 'react'

export function MatchVisualizer() {
  const [isMatching, setIsMatching] = useState(false)

  useEffect(() => {
    setIsMatching(true)
    const timer = setTimeout(() => setIsMatching(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-64 glass rounded-2xl overflow-hidden flex items-center justify-center">
      {/* Animated scanning lines */}
      <div className="absolute inset-0">
        {isMatching && (
          <>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse" style={{ animationDelay: '0.3s' }} />
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse" style={{ animationDelay: '0.9s' }} />
          </>
        )}
      </div>

      {/* Central scanner */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full border-2 border-indigo-500/50" />
          <div className="absolute inset-2 rounded-full border-2 border-pink-500/30" />
          <div className="absolute inset-4 rounded-full border-2 border-purple-500/20" />
          
          {isMatching && (
            <>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-400 animate-spin" style={{ animationDuration: '2s' }} />
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-pink-400 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            </>
          )}
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">
            {isMatching ? 'Analyzing...' : 'Ready'}
          </p>
          <p className="text-xs text-muted-foreground">
            {isMatching ? 'AI Processing' : 'Upload image to scan'}
          </p>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-500/50" />
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-pink-500/50" />
    </div>
  )
}
