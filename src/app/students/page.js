"use client"

import React, { useState } from 'react'
import { Search, Filter, MapPin, Github, Linkedin, Mail, Code, Star, Users, BookOpen } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample student data - in a real app, this would come from an API
const studentsData = [
  {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun.sharma@sdiet.edu",
    year: "4th Year",
    branch: "Computer Science",
    location: "Hyderabad, Telangana",
    bio: "Full-stack developer passionate about AI/ML and web technologies. Currently working on a machine learning project for crop prediction.",
    skills: ["React", "Node.js", "Python", "Machine Learning", "MongoDB", "TensorFlow"],
    projects: 12,
    contributions: 45,
    github: "arjunsharma",
    linkedin: "arjun-sharma-dev",
    avatar: null,
    achievements: ["Google Summer of Code 2023", "Best Project Award", "Hackathon Winner"]
  },
  {
    id: 2,
    name: "Priya Reddy",
    email: "priya.reddy@sdiet.edu",
    year: "3rd Year",
    branch: "Information Technology",
    location: "Warangal, Telangana",
    bio: "Frontend developer and UI/UX enthusiast. Love creating beautiful and intuitive user interfaces that solve real-world problems.",
    skills: ["React", "Vue.js", "Figma", "CSS", "JavaScript", "TypeScript"],
    projects: 8,
    contributions: 32,
    github: "priyareddy",
    linkedin: "priya-reddy-ui",
    avatar: null,
    achievements: ["Design Excellence Award", "Open Source Contributor"]
  },
  {
    id: 3,
    name: "Vikash Kumar",
    email: "vikash.kumar@sdiet.edu",
    year: "2nd Year",
    branch: "Electronics & Communication",
    location: "Karimnagar, Telangana",
    bio: "IoT enthusiast and embedded systems developer. Working on smart agriculture solutions using Arduino and Raspberry Pi.",
    skills: ["Arduino", "Raspberry Pi", "C++", "Python", "IoT", "Sensors"],
    projects: 6,
    contributions: 18,
    github: "vikashkumar",
    linkedin: "vikash-kumar-iot",
    avatar: null,
    achievements: ["Innovation Challenge Winner", "Tech Fest Champion"]
  },
  {
    id: 4,
    name: "Sneha Patel",
    email: "sneha.patel@sdiet.edu",
    year: "4th Year",
    branch: "Computer Science",
    location: "Nizamabad, Telangana",
    bio: "Data scientist and analytics expert. Passionate about extracting insights from data to drive business decisions.",
    skills: ["Python", "R", "SQL", "Tableau", "Power BI", "Machine Learning"],
    projects: 10,
    contributions: 28,
    github: "snehapatel",
    linkedin: "sneha-patel-data",
    avatar: null,
    achievements: ["Data Science Competition Winner", "Research Paper Published"]
  },
  {
    id: 5,
    name: "Rahul Singh",
    email: "rahul.singh@sdiet.edu",
    year: "3rd Year",
    branch: "Mechanical Engineering",
    location: "Adilabad, Telangana",
    bio: "Robotics engineer combining mechanical design with programming. Building autonomous robots for industrial applications.",
    skills: ["SolidWorks", "MATLAB", "C++", "ROS", "3D Printing", "CAD"],
    projects: 7,
    contributions: 22,
    github: "rahulsingh",
    linkedin: "rahul-singh-robotics",
    avatar: null,
    achievements: ["Robotics Competition Winner", "Patent Filed"]
  },
  {
    id: 6,
    name: "Ananya Gupta",
    email: "ananya.gupta@sdiet.edu",
    year: "2nd Year",
    branch: "Information Technology",
    location: "Khammam, Telangana",
    bio: "Cybersecurity enthusiast and ethical hacker. Focused on web application security and penetration testing.",
    skills: ["Ethical Hacking", "Cybersecurity", "Linux", "Python", "Kali Linux", "OWASP"],
    projects: 5,
    contributions: 15,
    github: "ananyagupta",
    linkedin: "ananya-gupta-security",
    avatar: null,
    achievements: ["Cybersecurity Certification", "Bug Bounty Hunter"]
  }
]

const StudentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBranch, setSelectedBranch] = useState("all")
  const [selectedYear, setSelectedYear] = useState("all")

  // Get unique branches and years for filters
  const branches = [...new Set(studentsData.map(student => student.branch))]
  const years = [...new Set(studentsData.map(student => student.year))]

  // Filter students based on search and filters
  const filteredStudents = studentsData.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         student.branch.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesBranch = selectedBranch === "all" || student.branch === selectedBranch
    const matchesYear = selectedYear === "all" || student.year === selectedYear
    
    return matchesSearch && matchesBranch && matchesYear
  })

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              Students Directory
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">
              Connect with talented students from SDIET community
            </p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 self-start sm:self-auto">
            <Users className="h-4 w-4" />
            <span>{filteredStudents.length} students</span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:gap-4">
          <div className="relative flex-1 max-w-md sm:max-w-none h-11 md:h-12">
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 z-20 text-muted-foreground">
              <Search className="h-4 w-4" />
            </div>
            <Input
              placeholder="Search by name, skills, or branch..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 w-full h-full !text-left placeholder:!text-left"
            />
          </div>
          
          <div className="flex flex-col xs:flex-row gap-2 sm:gap-2 sm:flex-shrink-0">
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="flex-1 xs:flex-none px-3 py-2 h-11 md:h-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white min-w-0 sm:min-w-[160px]"
            >
              <option value="all">All Branches</option>
              {branches.map(branch => (
                <option key={branch} value={branch}>{branch}</option>
              ))}
            </select>
            
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="flex-1 xs:flex-none px-3 py-2 h-11 md:h-12 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white min-w-0 sm:min-w-[120px]"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Students Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <Card key={student.id} className="hover:shadow-lg transition-shadow duration-200 flex flex-col h-full w-full max-w-md mx-auto overflow-hidden rounded-xl">
            <CardHeader className="pb-3 overflow-hidden">
              <div className="flex items-start space-x-3">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarImage src={student.avatar} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold">
                    {getInitials(student.name)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0 pr-1">
                  <CardTitle className="text-lg font-semibold break-words leading-snug">
                    {student.name}
                  </CardTitle>
                  <div className="flex flex-col space-y-1 text-sm text-gray-600 dark:text-gray-400 mt-1">
                    <span className="break-words">{student.year} • {student.branch}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4 flex-1 flex flex-col overflow-hidden">
              {/* Skills */}
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Code className="h-3 w-3 mr-1" />
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {student.skills.slice(0, 6).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {student.skills.length > 6 && (
                    <Badge variant="outline" className="text-xs">
                      +{student.skills.length - 6}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2 pt-2 border-t border-gray-200 dark:border-gray-700 mt-auto">
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="h-3 w-3 mr-1" />
                  Contact
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No results message */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-8 sm:py-12 px-4">
          <Users className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-2">
            No students found
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            Try adjusting your search terms or filters to find students.
          </p>
        </div>
      )}
    </div>
  )
}

export default StudentsPage
