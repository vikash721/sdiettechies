"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, Award } from "lucide-react"

const EventJudges = ({ event }) => {
  if (!event.judges || event.judges.length === 0) {
    return null
  }

  return (
    <section id="judges" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet the Judges</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our panel of expert judges brings years of industry experience and expertise to evaluate the competition fairly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {event.judges.map((judge, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage src={judge.avatar} alt={judge.name} />
                      <AvatarFallback className="text-xl font-semibold bg-blue-100 text-blue-600">
                        {judge.initials}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl mb-2">{judge.name}</CardTitle>
                    <Badge variant="outline" className="text-sm">
                      {judge.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {judge.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Judging Criteria */}
          <Card className="mt-12 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600">
                <Award className="w-5 h-5" />
                Judging Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600">25%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Creativity</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Innovation and creative approach to the problem
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600">25%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Functionality</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Technical implementation and working features
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600">25%</span>
                  </div>
                  <h4 className="font-semibold mb-2">Design</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Visual appeal and user interface design
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-purple-600">25%</span>
                  </div>
                  <h4 className="font-semibold mb-2">User Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Usability and overall user experience
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EventJudges
