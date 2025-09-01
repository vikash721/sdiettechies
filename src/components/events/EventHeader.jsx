"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  Share2
} from "lucide-react"

const EventHeader = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category) => {
    const colors = {
      'Technical': 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300',
      'Conference': 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300',
      'Competition': 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300',
      'Career': 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300',
      'Cultural': 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-300',
    }
    return colors[category] || 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
  }

  return (
    <div className="relative">
      {/* Hero Banner - Exact LinkedIn Style */}
      <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        {/* Background Image */}
        {event.bannerImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${event.bannerImage})` }}
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-slate-700/50" />
        
        {/* Content Container */}
        <div className="relative z-10 h-full">
          <div className="max-w-7xl mx-auto px-6 h-full">
            {/* Main Event Info */}
            <div className="flex items-end h-full pb-8">
              <div className="flex items-center gap-6">
                {/* Event Logo/Icon */}
                <div className="w-32 h-32 rounded-2xl overflow-hidden bg-slate-800/80 backdrop-blur-sm border-4 border-white/20 flex items-center justify-center flex-shrink-0">
                  {event.image ? (
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  ) : (
                    <Calendar className="w-16 h-16 text-white" />
                  )}
                </div>
                
                {/* Event Details */}
                <div className="flex-1">
                  <h1 className="text-5xl font-bold text-white mb-3 leading-tight">
                    {event.title}
                  </h1>
                  <div className="flex items-center gap-2 text-white/90 text-lg mb-4">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">{event.attendees} Teams Joined</span>
                  </div>
                  
                  {/* Social Links */}
                  {event.socialLinks && (
                    <div className="flex gap-3">
                      {event.socialLinks.linkedin && (
                        <a 
                          href={event.socialLinks.linkedin} 
                          className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                      {event.socialLinks.instagram && (
                        <a 
                          href={event.socialLinks.instagram} 
                          className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all duration-200 hover:scale-105"
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Action Buttons - Positioned on the right */}
                <div className="flex items-center gap-3 self-end pb-2">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/30 font-medium px-6"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 text-base shadow-lg"
                  >
                    Join Event
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs - LinkedIn Style */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide">
              <a 
                href="#about" 
                className="py-4 px-1 border-b-2 border-blue-600 text-blue-600 font-medium text-sm whitespace-nowrap"
              >
                About
              </a>
              <a 
                href="#schedule" 
                className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
              >
                Schedule
              </a>
              <a 
                href="#guidelines" 
                className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
              >
                Guidelines
              </a>
              <a 
                href="#announcements" 
                className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
              >
                Announcements
              </a>
              <a 
                href="#contact" 
                className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
              >
                Contact
              </a>
              {event.judges && (
                <a 
                  href="#judges" 
                  className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
                >
                  Meet Judges
                </a>
              )}
              <a 
                href="#faq" 
                className="py-4 px-1 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 font-medium text-sm whitespace-nowrap transition-colors"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventHeader
