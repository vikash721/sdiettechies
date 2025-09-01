// Shared events data
export const eventsData = [
  {
    id: 1,
    title: "Web Rush – The 2-Hour UI Battle",
    description: "Web Rush is a fast-paced web development competition where participants will have 2 hours to design and develop a homepage based on a given theme. The event challenges creativity, technical skills, and the ability to work under time constraints.",
    fullDescription: "Web Rush is an exciting and fast-paced web development competition designed to test participants' creativity, technical skills, and ability to work under pressure. In this thrilling 2-hour challenge, teams will be tasked with designing and developing a complete homepage based on a surprise theme that will be revealed at the start of the competition.\n\nThis competition is perfect for web developers, designers, and anyone passionate about creating stunning web interfaces. Whether you're a seasoned professional or a budding developer, Web Rush offers an opportunity to showcase your skills, learn from others, and compete for exciting prizes.\n\nParticipants will have access to a wide range of tools and frameworks, and will be judged on creativity, functionality, design aesthetics, and overall user experience. The event encourages innovation and pushes participants to think outside the box while working within strict time constraints.",
    date: "2024-01-15",
    time: "10:00 AM",
    duration: "2 hours",
    location: "Main Auditorium",
    category: "Competition",
    organizer: {
      name: "Tech Committee",
      avatar: null,
      initials: "TC",
      bio: "The Tech Committee is responsible for organizing technical events and competitions throughout the year."
    },
    attendees: 22,
    maxAttendees: 50,
    status: "upcoming",
    featured: true,
    tags: ["Web Development", "UI/UX", "Competition", "Frontend"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0",
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    },
    schedule: [
      {
        time: "10:00 AM",
        title: "Registration & Team Formation",
        description: "Check-in and form teams of 2-4 members"
      },
      {
        time: "10:30 AM",
        title: "Theme Reveal & Kickoff",
        description: "The competition theme is revealed and timer starts"
      },
      {
        time: "12:30 PM",
        title: "Submission Deadline",
        description: "All projects must be submitted for judging"
      },
      {
        time: "1:00 PM",
        title: "Judging & Results",
        description: "Judges evaluate projects and announce winners"
      }
    ],
    guidelines: [
      "Teams can have 2-4 members maximum",
      "Use any frontend framework or vanilla HTML/CSS/JS",
      "Projects must be responsive and functional",
      "Plagiarism will result in immediate disqualification",
      "All code must be written during the competition"
    ],
    announcements: [
      {
        title: "Registration Extended",
        content: "Due to popular demand, registration has been extended until January 10th!",
        date: "2024-01-08"
      },
      {
        title: "Judging Criteria Updated",
        content: "Added user experience as a key judging parameter.",
        date: "2024-01-05"
      }
    ],
    judges: [
      {
        name: "Sarah Chen",
        title: "Senior Frontend Developer at Google",
        avatar: null,
        initials: "SC",
        bio: "10+ years of experience in web development and UI/UX design"
      },
      {
        name: "Mike Rodriguez",
        title: "Lead Designer at Microsoft",
        avatar: null,
        initials: "MR",
        bio: "Award-winning designer with expertise in modern web interfaces"
      },
      {
        name: "Dr. Amanda Foster",
        title: "Computer Science Professor",
        avatar: null,
        initials: "AF",
        bio: "Research focus on human-computer interaction and web technologies"
      }
    ],
    contact: {
      email: "webrush@sdiettechies.com",
      phone: "+91 98765 43210",
      coordinator: "Rahul Sharma"
    },
    prizes: [
      {
        position: "1st Place",
        prize: "₹25,000 + Trophy + Certificates",
        description: "Winner team gets cash prize and recognition"
      },
      {
        position: "2nd Place", 
        prize: "₹15,000 + Trophy + Certificates",
        description: "Runner-up team reward"
      },
      {
        position: "3rd Place",
        prize: "₹10,000 + Trophy + Certificates", 
        description: "Third place recognition"
      }
    ]
  },
  {
    id: 2,
    title: "Annual Tech Symposium 2024",
    description: "Join us for the biggest tech event of the year with keynotes from industry leaders and networking opportunities.",
    fullDescription: "The Annual Tech Symposium 2024 is our flagship event bringing together industry leaders, innovators, and tech enthusiasts for a full day of insightful presentations, networking, and knowledge sharing. This year's theme focuses on 'Technology for Tomorrow' featuring cutting-edge topics in AI, blockchain, cybersecurity, and sustainable tech solutions.",
    date: "2024-01-22",
    time: "9:00 AM",
    duration: "Full Day",
    location: "Convention Center",
    category: "Conference",
    organizer: {
      name: "Tech Committee",
      avatar: null,
      initials: "TC",
      bio: "The Tech Committee organizes major technical events and symposiums."
    },
    attendees: 450,
    maxAttendees: 500,
    status: "upcoming",
    featured: true,
    tags: ["Conference", "Networking", "Industry", "Technology"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2069&auto=format&fit=crop",
    schedule: [
      {
        time: "9:00 AM",
        title: "Registration & Welcome Coffee",
        description: "Check-in and networking breakfast"
      },
      {
        time: "10:00 AM",
        title: "Keynote: Future of AI",
        description: "Industry leader speaks on AI trends and implications"
      },
      {
        time: "11:30 AM",
        title: "Panel Discussion: Sustainable Tech",
        description: "Experts discuss green technology solutions"
      },
      {
        time: "1:00 PM",
        title: "Lunch & Networking",
        description: "Networking lunch with attendees and speakers"
      },
      {
        time: "2:30 PM",
        title: "Workshop Sessions",
        description: "Hands-on workshops on various tech topics"
      },
      {
        time: "4:00 PM",
        title: "Startup Showcase",
        description: "Local startups present their innovations"
      },
      {
        time: "5:30 PM",
        title: "Closing Ceremony",
        description: "Wrap-up and networking cocktail"
      }
    ],
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 3,
    title: "Hackathon: Code for Change",
    description: "48-hour hackathon focused on building solutions for social impact. Team up and create something amazing!",
    fullDescription: "Code for Change is a 48-hour hackathon dedicated to developing technology solutions that address real-world social challenges. Participants will work in teams to create innovative applications, websites, or tools that can make a positive impact on society.",
    date: "2024-02-01",
    time: "6:00 PM",
    duration: "48 hours",
    location: "Computer Lab Block",
    category: "Competition",
    organizer: {
      name: "Coding Club",
      avatar: null,
      initials: "CC",
      bio: "The Coding Club promotes programming excellence and innovation."
    },
    attendees: 89,
    maxAttendees: 100,
    status: "upcoming",
    featured: false,
    tags: ["Hackathon", "Coding", "Social Impact", "Innovation"],
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2069&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 4,
    title: "Career Guidance Seminar",
    description: "Expert guidance on career paths, interview preparation, and industry insights from successful alumni.",
    fullDescription: "Our Career Guidance Seminar provides students with valuable insights into various career paths in technology and related fields. This comprehensive session features successful alumni sharing their experiences, HR experts providing interview tips, and industry professionals discussing current market trends.",
    date: "2024-01-18",
    time: "2:00 PM",
    duration: "3 hours",
    location: "Seminar Hall A",
    category: "Career",
    organizer: {
      name: "Placement Cell",
      avatar: null,
      initials: "PC",
      bio: "The Placement Cell helps students with career guidance and job placements."
    },
    attendees: 234,
    maxAttendees: 300,
    status: "upcoming",
    featured: false,
    tags: ["Career", "Guidance", "Alumni", "Professional Development"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2069&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 5,
    title: "Cultural Night 2024",
    description: "Celebrate diversity with performances, food, and cultural exhibitions from around the world.",
    fullDescription: "Cultural Night 2024 is our annual celebration of diversity and cultural heritage. The event features performances from various cultural groups, traditional food stalls, art exhibitions, and interactive cultural activities that showcase the rich traditions of our diverse student community.",
    date: "2024-01-12",
    time: "7:00 PM",
    duration: "4 hours",
    location: "Open Air Theatre",
    category: "Cultural",
    organizer: {
      name: "Cultural Committee",
      avatar: null,
      initials: "CC",
      bio: "The Cultural Committee organizes events celebrating diversity and arts."
    },
    attendees: 312,
    maxAttendees: 400,
    status: "past",
    featured: false,
    tags: ["Cultural", "Performance", "Diversity", "Arts"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2069&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: 6,
    title: "Startup Pitch Competition",
    description: "Present your startup ideas to industry experts and compete for funding and mentorship opportunities.",
    fullDescription: "The Startup Pitch Competition provides aspiring entrepreneurs with a platform to present their innovative business ideas to a panel of industry experts, investors, and successful entrepreneurs. Participants compete for seed funding, mentorship opportunities, and valuable feedback to help launch their startups.",
    date: "2024-02-10",
    time: "1:00 PM",
    duration: "5 hours",
    location: "Innovation Hub",
    category: "Competition",
    organizer: {
      name: "Entrepreneurship Cell",
      avatar: null,
      initials: "EC",
      bio: "The Entrepreneurship Cell fosters innovation and startup culture."
    },
    attendees: 67,
    maxAttendees: 80,
    status: "upcoming",
    featured: false,
    tags: ["Startup", "Pitch", "Entrepreneurship", "Innovation"],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2069&auto=format&fit=crop",
    socialLinks: {
      linkedin: "#",
      instagram: "#"
    }
  }
]

export const getEventById = (id) => {
  return eventsData.find(event => event.id === parseInt(id))
}

export const getEventsByCategory = (category) => {
  if (category === 'all') return eventsData
  return eventsData.filter(event => event.category === category)
}

export const getFeaturedEvents = () => {
  return eventsData.filter(event => event.featured)
}
