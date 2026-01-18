'use client'

import React from "react"

import { Header } from '@/components/header'
import { Card } from '@/components/ui/card'

interface FormContainerProps {
  title: string
  description?: string
  children: React.ReactNode
}

export function FormContainer({ title, description, children }: FormContainerProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="bg-white border-b border-border py-8">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6">
          <Card className="bg-white border-border p-8">
            {children}
          </Card>
        </div>
      </section>
    </div>
  )
}
