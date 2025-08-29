"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Search, 
  Filter,
  Users,
  Bookmark,
  BookmarkCheck,
  Share2
} from "lucide-react"

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [bookmarkedEvents, setBookmarkedEvents] = useState(new Set())
  const [carouselApi, setCarouselApi] = useState()
  const [currentSlide, setCurrentSlide] = useState(0)


  // Sample events data
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      description: "Hands-on workshop covering the latest trends in AI and ML, featuring industry experts and practical sessions.",
      date: "2024-01-15",
      time: "10:00 AM",
      duration: "4 hours",
      location: "Main Auditorium",
      category: "Technical",
      organizer: {
        name: "Dr. Sarah Johnson",
        avatar: null,
        initials: "SJ"
      },
      attendees: 156,
      maxAttendees: 200,
      status: "upcoming",
      featured: true,
      tags: ["AI", "Machine Learning", "Workshop"],
      image: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Annual Tech Symposium 2024",
      description: "Join us for the biggest tech event of the year with keynotes from industry leaders and networking opportunities.",
      date: "2024-01-22",
      time: "9:00 AM",
      duration: "Full Day",
      location: "Convention Center",
      category: "Conference",
      organizer: {
        name: "Tech Committee",
        avatar: null,
        initials: "TC"
      },
      attendees: 450,
      maxAttendees: 500,
      status: "upcoming",
      featured: true,
      tags: ["Conference", "Networking", "Industry"],
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Hackathon: Code for Change",
      description: "48-hour hackathon focused on building solutions for social impact. Team up and create something amazing!",
      date: "2024-02-01",
      time: "6:00 PM",
      duration: "48 hours",
      location: "Computer Lab Block",
      category: "Competition",
      organizer: {
        name: "Coding Club",
        avatar: null,
        initials: "CC"
      },
      attendees: 89,
      maxAttendees: 100,
      status: "upcoming",
      featured: false,
      tags: ["Hackathon", "Coding", "Social Impact"],
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Career Guidance Seminar",
      description: "Expert guidance on career paths, interview preparation, and industry insights from successful alumni.",
      date: "2024-01-18",
      time: "2:00 PM",
      duration: "3 hours",
      location: "Seminar Hall A",
      category: "Career",
      organizer: {
        name: "Placement Cell",
        avatar: null,
        initials: "PC"
      },
      attendees: 234,
      maxAttendees: 300,
      status: "upcoming",
      featured: false,
      tags: ["Career", "Guidance", "Alumni"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Cultural Night 2024",
      description: "Celebrate diversity with performances, food, and cultural exhibitions from around the world.",
      date: "2024-01-12",
      time: "7:00 PM",
      duration: "4 hours",
      location: "Open Air Theatre",
      category: "Cultural",
      organizer: {
        name: "Cultural Committee",
        avatar: null,
        initials: "CC"
      },
      attendees: 312,
      maxAttendees: 400,
      status: "past",
      featured: false,
      tags: ["Cultural", "Performance", "Diversity"],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      description: "Present your startup ideas to industry experts and compete for funding and mentorship opportunities.",
      date: "2024-02-10",
      time: "1:00 PM",
      duration: "5 hours",
      location: "Innovation Hub",
      category: "Competition",
      organizer: {
        name: "Entrepreneurship Cell",
        avatar: null,
        initials: "EC"
      },
      attendees: 67,
      maxAttendees: 80,
      status: "upcoming",
      featured: false,
      tags: ["Startup", "Pitch", "Entrepreneurship"],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Events', count: events.length },
    { id: 'Technical', label: 'Technical', count: events.filter(e => e.category === 'Technical').length },
    { id: 'Conference', label: 'Conference', count: events.filter(e => e.category === 'Conference').length },
    { id: 'Competition', label: 'Competition', count: events.filter(e => e.category === 'Competition').length },
    { id: 'Career', label: 'Career', count: events.filter(e => e.category === 'Career').length },
    { id: 'Cultural', label: 'Cultural', count: events.filter(e => e.category === 'Cultural').length },
  ]

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredEvents = filteredEvents.filter(event => event.featured)
  const upcomingEvents = filteredEvents.filter(event => event.status === 'upcoming')
  const pastEvents = filteredEvents.filter(event => event.status === 'past')

  // Carousel API effect to track current slide
  useEffect(() => {
    if (!carouselApi) return

    const onSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }

    carouselApi.on('select', onSelect)
    onSelect() // Set initial slide

    return () => carouselApi.off('select', onSelect)
  }, [carouselApi])

  // Function to scroll to specific slide
  const scrollTo = useCallback((index) => {
    if (carouselApi) {
      carouselApi.scrollTo(index)
    }
  }, [carouselApi])


  const toggleBookmark = (eventId) => {
    setBookmarkedEvents(prev => {
      const newBookmarks = new Set(prev)
      if (newBookmarks.has(eventId)) {
        newBookmarks.delete(eventId)
      } else {
        newBookmarks.add(eventId)
      }
      return newBookmarks
    })
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
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

  // Enhanced Carousel Banner Component with smooth animations
  const EventBanner = ({ event }) => (
    <div className="relative w-full h-32 sm:h-48 md:h-64 lg:h-80 overflow-hidden rounded-lg bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 group cursor-pointer">
      {/* Background Image with zoom effect */}
      {event.image && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${event.image})` }}
        />
      )}
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      
      {/* Subtle animated particles effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center h-full px-3 sm:px-6 md:px-8 lg:px-12 text-white">
        <div className="w-full transform transition-all duration-500 group-hover:translate-y-[-2px]">
          {/* Mobile Layout */}
          <div className="block sm:hidden">
            <h2 className="text-base font-bold mb-1 leading-tight line-clamp-2 drop-shadow-lg">
              {event.title}
            </h2>
            <div className="flex items-center gap-3 mb-2 text-xs">
              <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-300 hover:bg-black/30">
                <Calendar className="h-3 w-3" />
                {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-300 hover:bg-black/30">
                <Clock className="h-3 w-3" />
                {event.time}
              </div>
            </div>
            <Button size="sm" className="bg-white/90 backdrop-blur-sm text-blue-700 hover:bg-white hover:scale-105 transition-all duration-200 text-xs px-3 py-1 h-7 shadow-lg">
              Register Now
            </Button>
          </div>

          {/* Tablet and Desktop Layout */}
          <div className="hidden sm:block">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-3 leading-tight drop-shadow-2xl">
              {event.title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl mb-3 md:mb-4 text-blue-100 leading-relaxed line-clamp-2 md:line-clamp-3 drop-shadow-lg">
              {event.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-black/30">
                <Calendar className="h-4 w-4" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-black/30">
                <Clock className="h-4 w-4" />
                {event.time}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-black/30">
                <MapPin className="h-4 w-4" />
                {event.location}
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1 transition-all duration-300 hover:bg-black/30">
                <Users className="h-4 w-4" />
                {event.attendees}/{event.maxAttendees}
              </div>
            </div>
            <div className="flex gap-3">
              <Button size="default" className="bg-white/90 backdrop-blur-sm text-blue-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                Register Now
              </Button>
              <Button size="default" variant="outline" className="border-white/30 bg-black/20 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-105 transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const EventCard = ({ event, featured = false }) => (
    <Card className={`group hover:shadow-lg transition-all duration-300 pt-0 ${featured ? 'border-blue-200 dark:border-blue-800' : ''}`}>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
          <div className="flex h-full items-center justify-center">
            <Calendar className="h-12 w-12 text-blue-400" />
          </div>
        </div>
        {featured && (
          <Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700">
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-white/90 hover:bg-white dark:bg-black/90 dark:hover:bg-black"
          onClick={() => toggleBookmark(event.id)}
        >
          {bookmarkedEvents.has(event.id) ? (
            <BookmarkCheck className="h-4 w-4 text-blue-600" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors">
              {event.title}
            </CardTitle>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(event.date)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {event.time}
              </div>
            </div>
          </div>
          <Badge className={getCategoryColor(event.category)}>
            {event.category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <CardDescription className="line-clamp-2 mb-4">
          {event.description}
        </CardDescription>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {event.location}
          </div>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={event.organizer.avatar} />
              <AvatarFallback className="text-xs">{event.organizer.initials}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">by {event.organizer.name}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{event.attendees}/{event.maxAttendees}</span>
            </div>
            <div className="flex gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{event.title}</DialogTitle>
                    <DialogDescription>
                      {event.description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-1">Date & Time</h4>
                        <p className="text-sm text-muted-foreground">{formatDate(event.date)} at {event.time}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Duration</h4>
                        <p className="text-sm text-muted-foreground">{event.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Location</h4>
                        <p className="text-sm text-muted-foreground">{event.location}</p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Organizer</h4>
                        <p className="text-sm text-muted-foreground">{event.organizer.name}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Tags</h4>
                      <div className="flex gap-2 flex-wrap">
                        {event.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4">
                      <Button className="flex-1">
                        Register Now
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button size="sm">
                Register
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4">
        <div>
          <h1 className="text-3xl font-bold">Campus Events</h1>
          <p className="text-muted-foreground">Discover and participate in SDIET community events</p>
        </div>
      </div>
      
      {/* Featured Events Carousel Banner */}
      {featuredEvents.length > 0 && (
        <div className="relative -mx-4 sm:-mx-2 md:mx-0 mb-8">
          <Carousel 
            className="w-full"
            setApi={setCarouselApi}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-0">
              {featuredEvents.map((event, index) => (
                <CarouselItem key={event.id} className="pl-0">
                  <div className="relative group">
                    <EventBanner event={event} />
                    
                    {/* Slide counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20 mr-1">
                      {index + 1} of {featuredEvents.length}
                    </div>
                    
                    {/* Swipe indicator for mobile */}
                    <div className="absolute bottom-4 left-4 sm:hidden bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-white/20 animate-pulse">
                      👆 Swipe
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation arrows - hidden on mobile, visible on desktop */}
            <CarouselPrevious className="hidden cursor-pointer sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg" />
            <CarouselNext className="hidden cursor-pointer sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg" />
            
            {/* Custom dots indicator */}
            {featuredEvents.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {featuredEvents.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                      index === currentSlide 
                        ? 'bg-white shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </div>
      )}

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          {categories.map(category => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.label}
              <Badge variant="secondary" className="ml-1 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-6 mt-6">
          {/* Upcoming Events */}
          {upcomingEvents.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {/* Past Events */}
          {pastEvents.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Past Events</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </section>
          )}

          {/* No Events Found */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find more events.
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default EventsPage
