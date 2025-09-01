"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import { getEventById } from '@/lib/events-data'
import EventHeader from '@/components/events/EventHeader'
import EventAbout from '@/components/events/EventAbout'
import EventSchedule from '@/components/events/EventSchedule'
import EventGuidelines from '@/components/events/EventGuidelines'
import EventAnnouncements from '@/components/events/EventAnnouncements'
import EventJudges from '@/components/events/EventJudges'
import EventContact from '@/components/events/EventContact'
import EventFAQ from '@/components/events/EventFAQ'

const EventDetailsPage = ({ params }) => {
  const event = getEventById(params.id)
  
  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Event Header with Hero Banner */}
      <EventHeader event={event} />
      
      {/* Main Content */}
      <main>
        {/* About Section */}
        <EventAbout event={event} />
        
        {/* Schedule Section */}
        <EventSchedule event={event} />
        
        {/* Guidelines Section */}
        <EventGuidelines event={event} />
        
        {/* Announcements Section */}
        <EventAnnouncements event={event} />
        
        {/* Judges Section (only for competitions) */}
        {event.judges && <EventJudges event={event} />}
        
        {/* Contact Section */}
        <EventContact event={event} />
        
        {/* FAQ Section */}
        <EventFAQ event={event} />
      </main>
    </div>
  )
}

export default EventDetailsPage
