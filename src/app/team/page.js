"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Linkedin, 
  Github, 
  Globe, 
  Twitter,
  Mail,
  Users,
  Star,
  ClipboardList,
  HeartHandshake,
  Share2,
  Camera
} from "lucide-react"

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('all')

  // Team member data structured by categories
  const teamData = {
    core: [
      {
        id: 1,
        name: "Ankit Sharma",
        role: "President",
        bio: "Leading SDIET Techies with vision and passion for technology excellence.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        initials: "AS",
        year: "Final Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/ankitsharma",
          github: "https://github.com/ankitsharma",
          twitter: "https://twitter.com/ankitsharma"
        }
      },
      {
        id: 2,
        name: "Priya Patel",
        role: "Vice President",
        bio: "Coordinating teams and ensuring smooth execution of all technical events.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        initials: "PP",
        year: "Final Year",
        branch: "Information Technology",
        social: {
          linkedin: "https://linkedin.com/in/priyapatel",
          github: "https://github.com/priyapatel"
        }
      },
      {
        id: 3,
        name: "Rahul Kumar",
        role: "Secretary",
        bio: "Managing administrative aspects and driving membership growth.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        initials: "RK",
        year: "3rd Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/rahulkumar",
          github: "https://github.com/rahulkumar"
        }
      },
      {
        id: 4,
        name: "Neha Singh",
        role: "Treasurer",
        bio: "Handling finances and budget planning for club activities.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        initials: "NS",
        year: "3rd Year",
        branch: "Electronics & Communication",
        social: {
          linkedin: "https://linkedin.com/in/nehasingh"
        }
      }
    ],
    coordinators: [
      {
        id: 5,
        name: "Vikram Reddy",
        role: "Technical Coordinator",
        bio: "Organizing workshops and hackathons to enhance technical skills.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        initials: "VR",
        year: "3rd Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/vikramreddy",
          github: "https://github.com/vikramreddy"
        }
      },
      {
        id: 6,
        name: "Anjali Desai",
        role: "Events Coordinator",
        bio: "Planning and executing tech events and competitions.",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        initials: "AD",
        year: "2nd Year",
        branch: "Information Technology",
        social: {
          linkedin: "https://linkedin.com/in/anjalidesai"
        }
      },
      {
        id: 7,
        name: "Karthik Menon",
        role: "Innovation Coordinator",
        bio: "Leading innovation initiatives and project developments.",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        initials: "KM",
        year: "3rd Year",
        branch: "Electronics & Communication",
        social: {
          linkedin: "https://linkedin.com/in/karthikmenon",
          github: "https://github.com/karthikmenon"
        }
      },
      {
        id: 8,
        name: "Aisha Khan",
        role: "Outreach Coordinator",
        bio: "Building partnerships with industry and other institutions.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        initials: "AK",
        year: "2nd Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/aishakhan",
          twitter: "https://twitter.com/aishakhan"
        }
      }
    ],
    volunteers: [
      {
        id: 9,
        name: "Arjun Nair",
        role: "Technical Volunteer",
        bio: "Helping with workshop logistics and technical setups.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        initials: "AN",
        year: "2nd Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/arjunnair"
        }
      },
      {
        id: 10,
        name: "Sneha Gupta",
        role: "Events Volunteer",
        bio: "Supporting event planning and organization.",
        avatar: "https://randomuser.me/api/portraits/women/5.jpg",
        initials: "SG",
        year: "1st Year",
        branch: "Information Technology",
        social: {
          linkedin: "https://linkedin.com/in/snehagupta"
        }
      },
      {
        id: 11,
        name: "Ravi Kumar",
        role: "Technical Support",
        bio: "Providing technical assistance during events and workshops.",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        initials: "RK",
        year: "2nd Year",
        branch: "Mechanical Engineering",
        social: {
          linkedin: "https://linkedin.com/in/ravikumar"
        }
      },
      {
        id: 12,
        name: "Divya Sharma",
        role: "Logistics Volunteer",
        bio: "Handling venue arrangements and equipment management.",
        avatar: "https://randomuser.me/api/portraits/women/6.jpg",
        initials: "DS",
        year: "1st Year",
        branch: "Electronics & Communication",
        social: {
          linkedin: "https://linkedin.com/in/divyasharma"
        }
      },
      {
        id: 13,
        name: "Nikhil Joshi",
        role: "Registration Volunteer",
        bio: "Managing participant registrations for events.",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        initials: "NJ",
        year: "1st Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/nikhiljoshi"
        }
      },
      {
        id: 14,
        name: "Tanvi Kapoor",
        role: "Hospitality Volunteer",
        bio: "Ensuring good experience for participants and guests.",
        avatar: "https://randomuser.me/api/portraits/women/7.jpg",
        initials: "TK",
        year: "2nd Year",
        branch: "Civil Engineering",
        social: {
          linkedin: "https://linkedin.com/in/tanvikapoor"
        }
      }
    ],
    media: [
      {
        id: 15,
        name: "Siddharth Mehta",
        role: "Social Media Lead",
        bio: "Managing our online presence across social platforms.",
        avatar: "https://randomuser.me/api/portraits/men/8.jpg",
        initials: "SM",
        year: "3rd Year",
        branch: "Information Technology",
        social: {
          linkedin: "https://linkedin.com/in/siddharthmehta",
          instagram: "https://instagram.com/siddharthmehta"
        }
      },
      {
        id: 16,
        name: "Kavita Rao",
        role: "Content Creator",
        bio: "Developing engaging content for our community.",
        avatar: "https://randomuser.me/api/portraits/women/8.jpg",
        initials: "KR",
        year: "2nd Year",
        branch: "Computer Science",
        social: {
          linkedin: "https://linkedin.com/in/kavitarao",
          instagram: "https://instagram.com/kavitarao"
        }
      },
      {
        id: 17,
        name: "Rohan Verma",
        role: "Graphics Designer",
        bio: "Creating visual designs for events and social media.",
        avatar: "https://randomuser.me/api/portraits/men/9.jpg",
        initials: "RV",
        year: "2nd Year",
        branch: "Information Technology",
        social: {
          linkedin: "https://linkedin.com/in/rohanverma",
          behance: "https://behance.net/rohanverma"
        }
      },
      {
        id: 18,
        name: "Tanya Mehta",
        role: "Photography Lead",
        bio: "Capturing moments from all our events and activities.",
        avatar: "https://randomuser.me/api/portraits/women/9.jpg",
        initials: "TM",
        year: "3rd Year",
        branch: "Computer Science",
        social: {
          instagram: "https://instagram.com/tanyamehta"
        }
      }
    ]
  }

  // Combined array for "All" tab
  const allTeamMembers = [
    ...teamData.core,
    ...teamData.coordinators,
    ...teamData.volunteers,
    ...teamData.media
  ]

  // Team categories
  const teamCategories = [
    { id: 'all', label: 'All Members', icon: Users, count: allTeamMembers.length },
    { id: 'core', label: 'Core Team', icon: Star, count: teamData.core.length },
    { id: 'coordinators', label: 'Coordinators', icon: ClipboardList, count: teamData.coordinators.length },
    { id: 'volunteers', label: 'Volunteers', icon: HeartHandshake, count: teamData.volunteers.length },
    { id: 'media', label: 'Media & Content', icon: Camera, count: teamData.media.length }
  ]

  // Get team members based on active tab
  const getTeamMembers = () => {
    if (activeTab === 'all') return allTeamMembers
    return teamData[activeTab] || []
  }

  // Modern social media link component
  const SocialLink = ({ href, icon: Icon, label }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-all duration-300"
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </a>
  )

  // Modern, horizontal card design for team members
  const TeamMemberCard = ({ member }) => (
    <Card className="group overflow-hidden hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
      <div className="flex flex-row p-4 items-center gap-5">
        {/* Left side - Photo */}
        <div className="flex-shrink-0">
          {member.avatar ? (
            <div 
              className="h-24 w-24 rounded-lg overflow-hidden shadow-sm bg-cover bg-center transform group-hover:scale-[1.03] transition-all duration-500"
              style={{ backgroundImage: `url(${member.avatar})` }}
            />
          ) : (
            <div className="h-24 w-24 rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center transform group-hover:scale-[1.03] transition-all duration-500">
              <span className="text-2xl font-semibold text-primary">
                {member.initials}
              </span>
            </div>
          )}
        </div>
        
        {/* Right side - Content */}
        <div className="flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-primary/80 font-medium text-sm">
                {member.role}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-1">
              {member.social.linkedin && <SocialLink href={member.social.linkedin} icon={Linkedin} label="LinkedIn" />}
              {member.social.github && <SocialLink href={member.social.github} icon={Github} label="GitHub" />}
              {member.social.twitter && <SocialLink href={member.social.twitter} icon={Twitter} label="Twitter" />}
              {member.social.instagram && <SocialLink href={member.social.instagram} icon={Camera} label="Instagram" />}
            </div>
          </div>
          
          <p className="text-muted-foreground line-clamp-2 mt-1 text-sm">
            {member.bio}
          </p>
          
          {/* Subtle accent line */}
          <div className="h-0.5 w-12 bg-primary/10 mt-3 group-hover:bg-primary/30 transition-all duration-300"></div>
        </div>
      </div>
    </Card>
  )

  // Section header component
  const SectionHeader = ({ title, description, icon: Icon }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
      <div className="bg-primary/10 p-3 rounded-lg">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )

  return (
    <div className="space-y-12 py-8">

      {/* Team Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="overflow-x-auto pb-2">
          <TabsList className="inline-flex w-auto h-auto p-1 space-x-1">
            {teamCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-1.5 py-2 px-3 rounded-md"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
                <span className="ml-1 rounded-full bg-muted px-1.5 py-0.5 text-[10px]">
                  {category.count}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        
        {/* All Members Tab */}
        <TabsContent value="all" className="space-y-10">
          {/* Core Team Section */}
          <section>
            <SectionHeader 
              title="Core Team" 
              description="Leading SDIET Techies with vision and dedication" 
              icon={Star}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamData.core.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
          
          {/* Coordinators Section */}
          <section>
            <SectionHeader 
              title="Coordinators" 
              description="Managing various initiatives and departments" 
              icon={ClipboardList}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamData.coordinators.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
          
          {/* Volunteers Section */}
          <section>
            <SectionHeader 
              title="Volunteers" 
              description="The backbone of our community" 
              icon={HeartHandshake}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamData.volunteers.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
          
          {/* Media Team Section */}
          <section>
            <SectionHeader 
              title="Media & Content Team" 
              description="Showcasing our activities to the world" 
              icon={Camera}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamData.media.map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </section>
        </TabsContent>

        {/* Specific Category Tabs */}
        {['core', 'coordinators', 'volunteers', 'media'].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {teamData[category].map(member => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Separator className="my-12" />

      {/* Join Section */}
      <section className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="space-y-4 flex-1">
            <h2 className="text-2xl font-semibold">Join Our Team</h2>
            <p className="text-muted-foreground">
              We're always looking for passionate students to join our team. Be a part of exciting tech events, 
              develop your skills, and make an impact on our campus tech community.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Button className="flex gap-1.5">
                Apply to Join
                <Users className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex gap-1.5">
                Contact Us
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center justify-center flex-shrink-0">
            <div className="bg-primary/10 p-6 rounded-full">
              <Users className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
