export const metadata = {
  title: "Home | SDIET Techies",
  description: "Welcome to SDIET Techies, the official community portal for SDIET. Connect with students, explore projects, and join events.",
  keywords: [
    "SDIET", "community", "students", "projects", "events", "engineering", "technology", "portal"
  ],
  openGraph: {
    title: "Home | SDIET Techies",
    description: "Welcome to SDIET Techies, the official community portal for SDIET. Connect with students, explore projects, and join events.",
    url: "https://sdiettechies.vercel.app/",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "SDIET Techies Community Portal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | SDIET Techies",
    description: "Welcome to SDIET Techies, the official community portal for SDIET. Connect with students, explore projects, and join events.",
    images: [
      {
        url: "/public/globe.svg",
        alt: "SDIET Techies Community Portal"
      }
    ]
  },
  alternates: {
    canonical: "/"
  }
};
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const page = () => {
  return (
    <div className="flex-1 space-y-4">
      {/* Welcome Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome to SDIET Techies! 🎓</h2>
        <p className="text-muted-foreground mb-4">
          Your gateway to connect with fellow students, explore innovative projects, and build your career at 
          Sri Dharmasthala Manjunatheshwara Institute of Engineering and Technology.
        </p>
        <div className="flex gap-3">
          <Button>Explore Community</Button>
          <Button variant="outline">Join Forums</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Students</CardTitle>
            <span className="text-2xl">👥</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects Shared</CardTitle>
            <span className="text-2xl">💡</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
            <p className="text-xs text-muted-foreground">
              +23% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Placement Rate</CardTitle>
            <span className="text-2xl">🎯</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">
              Current batch
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Events This Month</CardTitle>
            <span className="text-2xl">📅</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              5 upcoming
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
            <CardDescription>Latest innovative projects from students</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">AI-Powered Campus Assistant</p>
                <p className="text-xs text-muted-foreground">by CSE Final Year</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Smart IoT Library System</p>
                <p className="text-xs text-muted-foreground">by ECE 3rd Year</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Blockchain Voting Platform</p>
                <p className="text-xs text-muted-foreground">by ISE 4th Year</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Don&apos;t miss these exciting events</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Tech Talk: Future of AI</p>
                <p className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Hackathon 2024</p>
                <p className="text-xs text-muted-foreground">Next Week</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Alumni Meet & Greet</p>
                <p className="text-xs text-muted-foreground">Dec 15, 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page