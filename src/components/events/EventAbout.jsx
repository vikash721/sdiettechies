"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users,
  Trophy,
  Target
} from "lucide-react"

const EventAbout = ({ event }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About the Event</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {event.fullDescription || event.description}
              </p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Event Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags?.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Prizes Section (if available) */}
            {event.prizes && (
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Prizes & Recognition
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {event.prizes.map((prize, index) => (
                    <Card key={index} className="text-center">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-yellow-600 dark:text-yellow-400">
                          {prize.position}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-semibold text-lg mb-2">{prize.prize}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {prize.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium">{formatDate(event.date)}</p>
                    <p className="text-gray-600 dark:text-gray-400">Date</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium">{event.time}</p>
                    <p className="text-gray-600 dark:text-gray-400">Start Time</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium">{event.location}</p>
                    <p className="text-gray-600 dark:text-gray-400">Venue</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-blue-600" />
                  <div>
                    <p className="font-medium">
                      {event.attendees} / {event.maxAttendees} Registered
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">Participants</p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                    {Math.round((event.attendees / event.maxAttendees) * 100)}% Full
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Organizer Card */}
            <Card>
              <CardHeader>
                <CardTitle>Organized By</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">
                      {event.organizer.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{event.organizer.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {event.organizer.bio}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="text-sm font-medium">{event.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Category</span>
                  <Badge variant="secondary" className="text-xs">
                    {event.category}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Status</span>
                  <Badge 
                    variant={event.status === 'upcoming' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {event.status}
                  </Badge>
                </div>
                {event.featured && (
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Featured</span>
                    <Badge variant="default" className="text-xs bg-yellow-500">
                      ⭐ Featured
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventAbout
