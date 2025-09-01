"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, CheckCircle } from "lucide-react"

const EventSchedule = ({ event }) => {
  // Default schedule if none provided
  const defaultSchedule = [
    {
      time: event.time,
      title: "Event Begins",
      description: `${event.title} starts at the scheduled time`
    },
    {
      time: "Throughout",
      title: "Main Event",
      description: event.description
    }
  ]

  const schedule = event.schedule || defaultSchedule

  return (
    <section id="schedule" className="py-12 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Schedule</h2>
          
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Time Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-semibold min-w-[80px] text-center">
                        {item.time}
                      </div>
                    </div>
                    
                    {/* Timeline Line */}
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      {index < schedule.length - 1 && (
                        <div className="w-0.5 h-16 bg-gray-300 dark:bg-gray-600 mt-2" />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Duration Summary */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Duration Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{event.duration}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Duration</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{event.time}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Start Time</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{event.location}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Venue</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="mt-6 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Important Notes
                  </h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Please arrive 15 minutes before the start time</li>
                    <li>• Bring a valid ID for registration verification</li>
                    <li>• Follow all event guidelines and instructions</li>
                    <li>• Schedule may be subject to minor adjustments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventSchedule
