export const metadata = {
  title: "Profile | SDIET Techies",
  description: "View and edit your SDIET Techies profile. Connect with other students, showcase your skills, and manage your account.",
  keywords: ["profile", "user profile", "SDIET", "community", "student profile"],
  openGraph: {
    title: "Profile | SDIET Techies",
    description: "View and edit your SDIET Techies profile. Connect with other students, showcase your skills, and manage your account.",
    url: "https://sdiettechies.vercel.app/profile",
    images: [
      {
        url: "/public/globe.svg",
        width: 1200,
        height: 630,
        alt: "SDIET Techies Profile"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile | SDIET Techies",
    description: "View and edit your SDIET Techies profile. Connect with other students, showcase your skills, and manage your account.",
    images: [
      {
        url: "/public/globe.svg",
        alt: "SDIET Techies Profile"
      }
    ]
  },
  alternates: {
    canonical: "/profile"
  }
};
"use client"

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { 
  Edit3, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Star,
  Plus,
  ExternalLink,
  Github,
  Linkedin,
  Globe
} from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  // Mock user data
  const [profileData, setProfileData] = useState({
    personal: {
      name: "Vikash Kumar",
      email: "vikash@sdiet.edu",
      phone: "+91 9876543210",
      location: "Hyderabad, Telangana",
      bio: "Passionate computer science student at SDIET with expertise in full-stack development. Love building innovative solutions and contributing to open-source projects.",
      department: "Computer Science Engineering",
      year: "3rd Year",
      rollNumber: "20CS301",
      batch: "2021-2025",
      dateOfBirth: "2002-06-15",
      avatar: ""
    },
    skills: [
      { name: "React.js", level: "Advanced", category: "Frontend" },
      { name: "Node.js", level: "Intermediate", category: "Backend" },
      { name: "Python", level: "Advanced", category: "Programming" },
      { name: "JavaScript", level: "Advanced", category: "Programming" },
      { name: "MongoDB", level: "Intermediate", category: "Database" },
      { name: "Git", level: "Advanced", category: "Tools" },
    ],
    experience: [
      {
        id: 1,
        title: "Frontend Developer Intern",
        company: "TechCorp Solutions",
        duration: "Jun 2023 - Aug 2023",
        description: "Developed responsive web applications using React.js and collaborated with cross-functional teams to deliver high-quality user experiences.",
        technologies: ["React", "TypeScript", "Tailwind CSS"]
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "SDIET Innovation Lab",
        duration: "Jan 2023 - Present",
        description: "Leading development of campus management system and mentoring junior students in web development technologies.",
        technologies: ["MERN Stack", "Next.js", "PostgreSQL"]
      }
    ],
    projects: [
      {
        id: 1,
        title: "SDIET Community Platform",
        description: "A comprehensive platform for students to connect, share resources, and collaborate on projects.",
        technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
        github: "https://github.com/vikash/sdiet-community",
        demo: "https://sdiet-community.vercel.app",
        status: "In Progress"
      },
      {
        id: 2,
        title: "Smart Attendance System",
        description: "AI-powered attendance system using facial recognition for automatic student attendance tracking.",
        technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
        github: "https://github.com/vikash/smart-attendance",
        demo: "",
        status: "Completed"
      },
      {
        id: 3,
        title: "Campus Event Manager",
        description: "Event management system for organizing and tracking college events with RSVP functionality.",
        technologies: ["React", "Node.js", "MySQL", "Socket.io"],
        github: "https://github.com/vikash/campus-events",
        demo: "https://campus-events.netlify.app",
        status: "Completed"
      }
    ],
    social: {
      github: "https://github.com/vikashkumar",
      linkedin: "https://linkedin.com/in/vikashkumar",
      website: "https://vikashkumar.dev"
    }
  })

  const getSkillColor = (level) => {
    switch (level) {
      case "Advanced": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Beginner": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Progress": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Planned": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Profile Header */}
      <div className="mb-8">
        <Card className="overflow-hidden p-0">
          <div className="relative">
            {/* Cover Background */}
            <div className="h-32 sm:h-40 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative">
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            
            {/* Edit Button */}
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => setIsEditing(true)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-900 border-0 shadow-sm"
            >
              <Edit3 className="h-4 w-4 mr-2" />
              Edit
            </Button>
          </div>
          
          <CardContent className="relative px-6 pb-6">
            {/* Avatar positioned to overlap cover */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 -mt-12 sm:-mt-14">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-white shadow-lg bg-white">
                <AvatarImage src={profileData.personal.avatar} className="object-cover" />
                <AvatarFallback className="text-2xl sm:text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  {profileData.personal.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 pt-4 sm:pt-0 sm:pb-2">
                <h1 className="text-2xl sm:text-3xl font-bold">
                  {profileData.personal.name}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {profileData.personal.department}
                </p>
                <p className="text-sm text-muted-foreground">
                  {profileData.personal.year} • Roll No: {profileData.personal.rollNumber}
                </p>
              </div>
            </div>
            
            {/* Bio and Contact */}
            <div className="mt-6 space-y-4">
              <p className="text-muted-foreground">
                {profileData.personal.bio}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {profileData.personal.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {profileData.personal.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {profileData.personal.location}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {profileData.social.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={profileData.social.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
                {profileData.social.linkedin && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {profileData.social.website && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={profileData.social.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="h-4 w-4 mr-2" />
                      Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profile Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Academic Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Academic Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Department</Label>
                    <p className="text-sm">{profileData.personal.department}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Year</Label>
                    <p className="text-sm">{profileData.personal.year}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Roll Number</Label>
                    <p className="text-sm">{profileData.personal.rollNumber}</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-muted-foreground">Batch</Label>
                    <p className="text-sm">{profileData.personal.batch}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Personal Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Date of Birth</Label>
                  <p className="text-sm">{new Date(profileData.personal.dateOfBirth).toLocaleDateString()}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                  <p className="text-sm">{profileData.personal.location}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                  <p className="text-sm">{profileData.personal.email}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">Phone</Label>
                  <p className="text-sm">{profileData.personal.phone}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{profileData.skills.length}</div>
                  <p className="text-sm text-muted-foreground">Skills</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{profileData.experience.length}</div>
                  <p className="text-sm text-muted-foreground">Experiences</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{profileData.projects.length}</div>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Technical Skills
                  </CardTitle>
                  <CardDescription>Your technical expertise and proficiency levels</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {/* Group skills by category */}
                {Array.from(new Set(profileData.skills.map(skill => skill.category))).map(category => (
                  <div key={category}>
                    <h4 className="font-medium mb-3 text-sm text-muted-foreground uppercase tracking-wide">{category}</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {profileData.skills
                        .filter(skill => skill.category === category)
                        .map((skill, index) => (
                          <Badge 
                            key={index} 
                            variant="secondary" 
                            className={`${getSkillColor(skill.level)} px-3 py-1`}
                          >
                            {skill.name} • {skill.level}
                          </Badge>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Work Experience</h2>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Experience
            </Button>
          </div>
          
          <div className="space-y-4">
            {profileData.experience.map((exp) => (
              <Card key={exp.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                        <Calendar className="h-3 w-3" />
                        {exp.duration}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projects</h2>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {profileData.projects.map((project) => (
              <Card key={project.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <Badge className={`mt-2 ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Edit3 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile information, skills, and other details.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Personal Information Form */}
            <div className="space-y-4">
              <h3 className="font-medium">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue={profileData.personal.name} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={profileData.personal.email} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue={profileData.personal.phone} />
                </div>
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" defaultValue={profileData.personal.location} />
                </div>
              </div>
              <div>
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" defaultValue={profileData.personal.bio} rows={3} />
              </div>
            </div>

            <Separator />

            {/* Academic Information */}
            <div className="space-y-4">
              <h3 className="font-medium">Academic Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="department">Department</Label>
                  <Select defaultValue={profileData.personal.department}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Computer Science Engineering">Computer Science Engineering</SelectItem>
                      <SelectItem value="Electronics & Communication">Electronics & Communication</SelectItem>
                      <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                      <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                      <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Select defaultValue={profileData.personal.year}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1st Year">1st Year</SelectItem>
                      <SelectItem value="2nd Year">2nd Year</SelectItem>
                      <SelectItem value="3rd Year">3rd Year</SelectItem>
                      <SelectItem value="4th Year">4th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rollNumber">Roll Number</Label>
                  <Input id="rollNumber" defaultValue={profileData.personal.rollNumber} />
                </div>
                <div>
                  <Label htmlFor="batch">Batch</Label>
                  <Input id="batch" defaultValue={profileData.personal.batch} />
                </div>
              </div>
            </div>

            <Separator />

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-medium">Social Links</h3>
              <div className="space-y-3">
                <div>
                  <Label htmlFor="github">GitHub</Label>
                  <Input id="github" placeholder="https://github.com/username" defaultValue={profileData.social.github} />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" placeholder="https://linkedin.com/in/username" defaultValue={profileData.social.linkedin} />
                </div>
                <div>
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" defaultValue={profileData.social.website} />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsEditing(false)}>
                Save Changes
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
