"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Megaphone, Calendar } from "lucide-react"

const EventAnnouncements = ({ event }) => {
  // Default announcements if none provided
  const defaultAnnouncements = [
    {
      title: "Registration Open",
      content: "Registration is now open for this event. Secure your spot today!",
      date: new Date().toISOString().split('T')[0]
    },
    {
      title: "Event Details Confirmed",
      content: "All event details including venue and schedule have been finalized.",
      date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }
  ]

  const announcements = event.announcements || defaultAnnouncements

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getDaysAgo = (dateString) => {
    const today = new Date()
    const announcementDate = new Date(dateString)
    const diffTime = Math.abs(today - announcementDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    return formatDate(dateString)
  }

  return (
    <section id="announcements" className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Announcements</h2>
          
          <div className="space-y-6">
            {announcements.map((announcement, index) => (
              <Card key={index} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mt-1">
                        <Megaphone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{announcement.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {getDaysAgo(announcement.date)}
                          </span>
                          {index === 0 && (
                            <Badge variant="default" className="text-xs bg-green-500">
                              Latest
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-13">
                    {announcement.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscribe to Updates */}
          <Card className="mt-8 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10">
            <CardContent className="p-6 text-center">
              <Megaphone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                Get notified about important announcements and updates for this event.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-blue-700"
                />
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventAnnouncements
