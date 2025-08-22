"use client"

import React from 'react'
import { GraduationCap } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen">

      
      {/* Right Side - Auth Form */}
      <div className="flex-1 flex flex-col min-h-screen px-8 lg:px-16 relative">
        {/* Theme Toggle */}
        <div className="absolute top-6 right-6">
          <ThemeToggle />
        </div>
        
        {/* Mobile Logo */}
        <div className="lg:hidden flex items-center justify-center pt-8 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SDIET Techies</h1>
              <p className="text-muted-foreground text-sm">Community Portal</p>
            </div>
          </div>
        </div>
        
        {/* Centered Content */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-muted-foreground mt-2">{subtitle}</p>
            </div>
            
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
