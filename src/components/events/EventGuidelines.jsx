"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle } from "lucide-react"

const EventGuidelines = ({ event }) => {
  // Default guidelines if none provided
  const defaultGuidelines = [
    "Participants must register before the event deadline",
    "Follow all venue rules and regulations",
    "Respectful behavior towards all participants and organizers",
    "Mobile phones should be on silent during presentations",
    "No outside food or beverages allowed in the venue"
  ]

  const guidelines = event.guidelines || defaultGuidelines

  return (
    <section id="guidelines" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Guidelines</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Event Rules & Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {guideline}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Competition specific guidelines */}
          {event.category === 'Competition' && (
            <Card className="mt-6 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <AlertTriangle className="w-5 h-5" />
                  Competition Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      Fair Play
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      All participants must adhere to fair play principles. Plagiarism or cheating will result in immediate disqualification.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      Time Limits
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Strict adherence to time limits is required. Late submissions will not be accepted.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="text-orange-600 border-orange-600">
                      Team Size
                    </Badge>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Teams must not exceed the maximum specified size. Individual participation is allowed unless stated otherwise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Code of Conduct */}
          <Card className="mt-6 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Code of Conduct
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <p>
                  We are committed to providing a welcoming and inclusive environment for all participants. 
                  Harassment, discrimination, or inappropriate behavior will not be tolerated.
                </p>
                <p>
                  By participating in this event, you agree to follow our community guidelines and 
                  maintain a respectful and professional attitude throughout the event.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventGuidelines
