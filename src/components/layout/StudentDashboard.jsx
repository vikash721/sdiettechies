"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Calendar,
  Clock,
  Users,
  Trophy,
  Star,
  TrendingUp,
  Calendar as CalendarIcon,
  MapPin,
  BadgeCheck,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

const mockStats = {
  eventsAttended: 12,
  upcomingEvents: 3,
  communityPoints: 450,
  achievements: 5,
  skillBadges: 8,
  eventCategories: ["Technical", "Cultural", "Workshop", "Seminar"],
};

const mockUpcomingEvents = [
  {
    id: 1,
    title: "Web Development Workshop",
    date: "2024-04-15",
    time: "14:00",
    location: "Lab 201",
    category: "Technical",
  },
  {
    id: 2,
    title: "AI/ML Seminar",
    date: "2024-04-18",
    time: "15:30",
    location: "Auditorium",
    category: "Technical",
  },
  {
    id: 3,
    title: "Cultural Night",
    date: "2024-04-20",
    time: "18:00",
    location: "Main Ground",
    category: "Cultural",
  },
];

const mockAchievements = [
  {
    id: 1,
    title: "Event Explorer",
    description: "Attended 10+ events",
    icon: Star,
  },
  {
    id: 2,
    title: "Tech Enthusiast",
    description: "Completed 5 technical workshops",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Community Leader",
    description: "Earned 400+ community points",
    icon: Users,
  },
];

export function StudentDashboard() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const StatCard = ({ icon: Icon, value, label, className = "" }) => (
    <Card className={`p-6 flex flex-col items-center justify-center space-y-2 bg-white text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700/50 ${className}`}>
      <div className="p-3 rounded-full bg-primary/10">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </Card>
  );

  const EventCard = ({ event }) => (
    <Card className="p-4 hover:shadow-md transition-shadow bg-white text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700/50">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="font-semibold">{event.title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            })}
            <Clock className="w-4 h-4 ml-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
          {event.category}
        </span>
      </div>
    </Card>
  );

  return (
    <div className="p-6 space-y-6 bg-white text-gray-900 dark:bg-[rgb(16,24,40)] dark:text-white min-h-screen">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, Student!</h1>
        <p className="text-muted-foreground">Track your event participation and community engagement</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard icon={Calendar} value={mockStats.eventsAttended} label="Events Attended" />
        <StatCard icon={CalendarIcon} value={mockStats.upcomingEvents} label="Upcoming Events" />
        <StatCard icon={Star} value={mockStats.communityPoints} label="Community Points" />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Events Section */}
        <Card className="lg:col-span-2 bg-white text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700/50">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("All")}
              >
                All
              </Button>
              {mockStats.eventCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {mockUpcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </ScrollArea>
          </div>
        </Card>

        {/* Achievements Section */}
        <Card className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700/50">
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold">Achievements</h2>
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {mockAchievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 dark:border-gray-700/50 dark:bg-gray-800/30 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Card>
      </div>

      {/* Skills Section */}
      <Card className="bg-white text-gray-900 border border-gray-200 dark:bg-gray-800/50 dark:text-white dark:border-gray-700/50">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Skills & Progress</h2>
            <div className="flex items-center space-x-2">
              <BadgeCheck className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{mockStats.skillBadges} Skills Earned</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Activity, label: "Technical", note: "5 events attended" },
              { icon: Users, label: "Cultural", note: "3 events attended" },
              { icon: TrendingUp, label: "Workshops", note: "2 completed" },
              { icon: Trophy, label: "Seminars", note: "2 attended" },
            ].map(({ icon: Icon, label, note }) => (
              <Card
                key={label}
                className="p-4 bg-gray-50 text-gray-900 border border-gray-200 dark:bg-gray-800/30 dark:text-white dark:border-gray-700/50"
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-medium">{label}</h3>
                    <p className="text-sm text-muted-foreground">{note}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
