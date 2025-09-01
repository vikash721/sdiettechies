import { getEventById } from '@/lib/events-data'

export async function generateMetadata({ params }) {
  const event = getEventById(params.id)
  
  if (!event) {
    return {
      title: 'Event Not Found - SDIET Techies',
      description: 'The requested event could not be found.'
    }
  }

  return {
    title: `${event.title} - SDIET Techies`,
    description: event.description,
    keywords: [
      event.title,
      event.category,
      'SDIET',
      'event',
      'technology',
      'competition',
      'workshop',
      ...event.tags
    ].join(', '),
    openGraph: {
      title: event.title,
      description: event.description,
      images: event.image ? [event.image] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description: event.description,
      images: event.image ? [event.image] : [],
    }
  }
}
