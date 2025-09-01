"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { motion, AnimatePresence, useScroll, useInView, useAnimation } from "framer-motion"
import { 
  Linkedin, 
  Github, 
  Twitter,
  Mail,
  Heart,
  Users,
  Rocket,
  LightbulbIcon,
  ArrowRight,
  Calendar,
  Code,
  Sparkles,
  Trophy,
  Coffee
} from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 12 
    }
  },
  hover: {
    y: -8,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
}

// Custom animation hook
function useScrollAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
}

export default function AboutPage() {
  const [activeTeamTab, setActiveTeamTab] = useState('leadership')
  const { scrollYProgress } = useScroll();

  // Core team members
  const teamMembers = {
    leadership: [
      {
        name: "Ankit Sharma",
        role: "President",
        bio: "Passionate about fostering tech innovation and building a supportive community for students.",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        initials: "AS",
        social: {
          linkedin: "https://linkedin.com/in/ankitsharma",
          github: "https://github.com/ankitsharma",
        }
      },
      {
        name: "Priya Patel",
        role: "Vice President",
        bio: "Dedicated to creating learning opportunities and technical growth for our members.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        initials: "PP",
        social: {
          linkedin: "https://linkedin.com/in/priyapatel",
          github: "https://github.com/priyapatel"
        }
      },
      {
        name: "Rahul Kumar",
        role: "Secretary",
        bio: "Organized, creative, and committed to the success of our community events and initiatives.",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        initials: "RK",
        social: {
          linkedin: "https://linkedin.com/in/rahulkumar"
        }
      }
    ],
    technical: [
      {
        name: "Vikram Reddy",
        role: "Technical Lead",
        bio: "Full-stack developer passionate about building solutions that solve real-world problems.",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        initials: "VR",
        social: {
          linkedin: "https://linkedin.com/in/vikramreddy",
          github: "https://github.com/vikramreddy"
        }
      },
      {
        name: "Neha Singh",
        role: "ML/AI Coordinator",
        bio: "Exploring the frontiers of artificial intelligence and machine learning applications.",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        initials: "NS",
        social: {
          linkedin: "https://linkedin.com/in/nehasingh",
          github: "https://github.com/nehasingh"
        }
      },
      {
        name: "Arjun Nair",
        role: "Web Development Lead",
        bio: "Creating intuitive and beautiful web experiences that engage and inspire.",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        initials: "AN",
        social: {
          linkedin: "https://linkedin.com/in/arjunnair",
          github: "https://github.com/arjunnair"
        }
      }
    ],
    events: [
      {
        name: "Anjali Desai",
        role: "Events Coordinator",
        bio: "Bringing creativity and organization to all our workshops, hackathons, and tech talks.",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        initials: "AD",
        social: {
          linkedin: "https://linkedin.com/in/anjalidesai"
        }
      },
      {
        name: "Karthik Menon",
        role: "Hackathon Lead",
        bio: "Creating exciting coding challenges that push boundaries and spark innovation.",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        initials: "KM",
        social: {
          linkedin: "https://linkedin.com/in/karthikmenon",
          github: "https://github.com/karthikmenon"
        }
      }
    ],
    media: [
      {
        name: "Siddharth Mehta",
        role: "Media & Outreach",
        bio: "Telling our story and building connections across the tech community.",
        avatar: "https://randomuser.me/api/portraits/men/6.jpg",
        initials: "SM",
        social: {
          linkedin: "https://linkedin.com/in/siddharthmehta",
          twitter: "https://twitter.com/siddharthmehta"
        }
      },
      {
        name: "Tanya Mehta",
        role: "Content Creator",
        bio: "Crafting engaging content that educates and inspires our community.",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        initials: "TM",
        social: {
          linkedin: "https://linkedin.com/in/tanyamehta",
          twitter: "https://twitter.com/tanyamehta"
        }
      }
    ]
  }

  // Team card components and content follow

  // Social media link component
  const SocialLink = ({ href, icon: Icon }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-all duration-300"
    >
      <Icon className="h-4 w-4" />
    </a>
  )

  // Team member card component - bigger and cleaner and now animated
  const TeamMemberCard = ({ member }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible" 
      whileHover="hover"
    >
      <Card className="group overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
        <div className="p-6 flex flex-col items-center text-center">
          {/* Larger avatar */}
          <motion.div 
            className="mb-5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.1 
            }}
          >
            <Avatar className="h-28 w-28 border-2 border-background/50 shadow-sm">
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                {member.initials}
              </AvatarFallback>
            </Avatar>
          </motion.div>
          
          <motion.h3 
            className="font-medium text-xl mb-1 group-hover:text-primary transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className="text-primary/90 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {member.role}
          </motion.p>
          
          <motion.div 
            className="w-12 h-0.5 bg-primary/10 mx-auto my-3"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.4 }}
          ></motion.div>
          
          <motion.p 
            className="text-muted-foreground mb-4 line-clamp-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {member.bio}
          </motion.p>
          
          <motion.div 
            className="flex gap-3 items-center pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {member.social?.linkedin && <SocialLink href={member.social.linkedin} icon={Linkedin} />}
            {member.social?.github && <SocialLink href={member.social.github} icon={Github} />}
            {member.social?.twitter && <SocialLink href={member.social.twitter} icon={Twitter} />}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          type: "spring",
          stiffness: 100 
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-indigo-100/60 to-purple-100/80 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/30 -z-10"
          animate={{ 
            background: [
              "linear-gradient(to bottom right, rgba(219, 234, 254, 0.8), rgba(224, 231, 255, 0.6), rgba(237, 233, 254, 0.8))",
              "linear-gradient(to bottom right, rgba(224, 231, 255, 0.8), rgba(237, 233, 254, 0.6), rgba(219, 234, 254, 0.8))",
              "linear-gradient(to bottom right, rgba(237, 233, 254, 0.8), rgba(219, 234, 254, 0.6), rgba(224, 231, 255, 0.8))",
              "linear-gradient(to bottom right, rgba(219, 234, 254, 0.8), rgba(224, 231, 255, 0.6), rgba(237, 233, 254, 0.8))"
            ]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="relative z-10 px-6 py-12 sm:py-16 md:py-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-4 px-3 py-1.5 bg-primary/10 text-primary border-0 hover:bg-primary/20">
              Est. 2021
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Building Tomorrow's Tech Leaders at
            </motion.span>
            <motion.span 
              className="text-primary block mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              SDIET Techies
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            We're a passionate community of students dedicated to fostering innovation, technical excellence, and 
            collaborative growth in the ever-evolving world of technology.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="gap-2">
                Join Our Community
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" variant="outline" className="gap-2">
                Explore Events
                <Calendar className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="hidden sm:block absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-blue-200/50 dark:bg-blue-900/30" 
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="hidden sm:block absolute top-12 -left-8 h-16 w-16 rounded-full bg-purple-200/50 dark:bg-purple-900/30" 
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="hidden sm:block absolute top-1/2 right-12 h-8 w-8 rounded-full bg-indigo-300/50 dark:bg-indigo-700/30" 
          animate={{ 
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror" 
          }}
        />
      </motion.section>

      {/* Our Mission Section */}
      <motion.section 
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2"
            variants={fadeIn}
          >
            <motion.div 
              className="h-px w-8 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            ></motion.div>
            OUR MISSION
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tight"
            variants={fadeIn}
          >
            Empowering Students Through Technology
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground leading-relaxed"
            variants={fadeIn}
          >
            At SDIET Techies, we believe in the transformative power of technology education. Our mission is to create a 
            vibrant ecosystem where students can explore, learn, and grow their technical skills while building meaningful 
            connections with peers and industry professionals.
          </motion.p>
          
          <motion.div 
            className="space-y-4 pt-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex gap-4"
              variants={fadeIn}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                transition={{ duration: 0.2 }}
              >
                <LightbulbIcon className="h-5 w-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-medium">Fostering Innovation</h3>
                <p className="text-sm text-muted-foreground">Creating space for creative problem-solving and new ideas</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              variants={fadeIn}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                transition={{ duration: 0.2 }}
              >
                <Code className="h-5 w-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-medium">Skill Development</h3>
                <p className="text-sm text-muted-foreground">Workshops, bootcamps, and hands-on projects to build practical skills</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex gap-4"
              variants={fadeIn}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "var(--primary)" }}
                transition={{ duration: 0.2 }}
              >
                <Users className="h-5 w-5 text-primary" />
              </motion.div>
              <div>
                <h3 className="font-medium">Community Building</h3>
                <p className="text-sm text-muted-foreground">Creating a supportive network of like-minded individuals</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Image or illustration */}
        <motion.div 
          className="relative h-64 md:h-full min-h-[320px] rounded-2xl overflow-hidden bg-muted"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Replace with your actual image */}
          <motion.div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-90"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <blockquote className="text-white text-lg italic">
              "Technology is best when it brings people together."
            </blockquote>
            <p className="text-white/80 text-sm mt-2">— Matt Mullenweg, Founder of WordPress</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Values */}
      <motion.section 
        className="py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="text-center mb-12 max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2"
            variants={fadeIn}
          >
            <motion.div 
              className="h-px w-8 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            ></motion.div>
            OUR VALUES
            <motion.div 
              className="h-px w-8 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            ></motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-4"
            variants={fadeIn}
          >
            What Drives Us Forward
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground"
            variants={fadeIn}
          >
            At the heart of everything we do are these core values that define our community and guide our actions.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="bg-blue-50/50 dark:bg-blue-950/20 border-0 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                    backgroundColor: "rgba(37, 99, 235, 0.2)" 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Heart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Passion
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We're driven by a genuine enthusiasm for technology and its potential to change lives.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="bg-purple-50/50 dark:bg-purple-950/20 border-0 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4"
                  whileHover={{ 
                    y: [0, -5, 0, -3, 0],
                    scale: 1.1,
                    backgroundColor: "rgba(126, 34, 206, 0.2)" 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Rocket className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Innovation
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We embrace creativity and forward-thinking approaches to solving complex problems.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Card className="bg-green-50/50 dark:bg-green-950/20 border-0 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <motion.div 
                  className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/40 flex items-center justify-center mb-4"
                  whileHover={{ 
                    rotate: [0, 10, 0, 10, 0],
                    scale: 1.1,
                    backgroundColor: "rgba(21, 128, 61, 0.2)" 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Inclusion
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We believe in creating a welcoming environment where everyone can contribute and grow.
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Spacer between Values and Team sections */}
      <div className="py-4"></div>

      {/* Meet Our Team */}
      <motion.section 
        className="py-8" 
        id="team"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="text-center mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2"
            variants={fadeIn}
          >
            <motion.div 
              className="h-px w-8 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            ></motion.div>
            OUR TEAM
            <motion.div 
              className="h-px w-8 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            ></motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold tracking-tight mb-4"
            variants={fadeIn}
          >
            Meet The People Behind SDIET Techies
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Dedicated students working together to create meaningful experiences and opportunities for our community.
          </motion.p>
        </motion.div>

        <Tabs defaultValue="leadership" value={activeTeamTab} onValueChange={setActiveTeamTab} className="space-y-6">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="leadership" className="gap-1.5">
                  <Sparkles className="h-4 w-4" />
                  <span>Leadership</span>
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="technical" className="gap-1.5">
                  <Code className="h-4 w-4" />
                  <span>Technical</span>
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="events" className="gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>Events</span>
                </TabsTrigger>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TabsTrigger value="media" className="gap-1.5">
                  <Trophy className="h-4 w-4" />
                  <span>Media</span>
                </TabsTrigger>
              </motion.div>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {Object.keys(teamMembers).map((category) => (
              category === activeTeamTab && (
                <TabsContent key={category} value={category} className="space-y-6">
                  <motion.div 
                    className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {teamMembers[category].map((member, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: {
                            delay: index * 0.1,
                          }
                        }}
                      >
                        <TeamMemberCard member={member} />
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              )
            ))}
          </AnimatePresence>
        </Tabs>
      </motion.section>

      {/* Join Us CTA */}
      <motion.section 
        className="relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-muted/20 -z-10" 
          animate={{ 
            background: [
              "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.05), rgba(var(--muted), 0.2))",
              "linear-gradient(to bottom right, rgba(var(--primary), 0.05), rgba(var(--muted), 0.2), rgba(var(--primary), 0.1))",
              "linear-gradient(to bottom right, rgba(var(--muted), 0.2), rgba(var(--primary), 0.1), rgba(var(--primary), 0.05))",
              "linear-gradient(to bottom right, rgba(var(--primary), 0.1), rgba(var(--primary), 0.05), rgba(var(--muted), 0.2))"
            ]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <div className="relative z-10 px-6 py-12 flex flex-col md:flex-row gap-8 items-center justify-between">
          <motion.div 
            className="max-w-lg"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold tracking-tight mb-4"
              variants={fadeIn}
            >
              Ready to Join Our Tech Community?
            </motion.h2>
            <motion.p 
              className="text-muted-foreground mb-6"
              variants={fadeIn}
            >
              Whether you're a coding wizard, a design enthusiast, or just tech-curious, there's a place for you at SDIET Techies. 
              Join our community today and be part of something amazing!
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={fadeIn}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button className="gap-2">
                  <motion.span 
                    animate={{ rotate: [0, 15, -15, 15, 0] }} 
                    transition={{ 
                      duration: 0.6, 
                      delay: 1,
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  >
                    <Coffee className="h-4 w-4" />
                  </motion.span>
                  Join Us
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="gap-2">
                  <motion.span 
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }} 
                    transition={{ 
                      duration: 0.6, 
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  >
                    <Mail className="h-4 w-4" />
                  </motion.span>
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                >
                  <Avatar className="border-4 border-background h-14 w-14">
                    <AvatarImage src={`https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${i + 1}.jpg`} />
                    <AvatarFallback className="bg-primary/10 text-primary">ST</AvatarFallback>
                  </Avatar>
                </motion.div>
              ))}
              <motion.div 
                className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background"
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <motion.span 
                  className="text-primary text-sm font-medium"
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }} 
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 4 
                  }}
                >
                  50+
                </motion.span>
              </motion.div>
            </div>
            <motion.p 
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              Join our growing community
            </motion.p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div 
          className="hidden sm:block absolute top-12 -right-6 h-24 w-24 rounded-full bg-primary/5 border border-primary/10"
          animate={{ 
            x: [0, 10, 0],
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="hidden sm:block absolute -bottom-10 left-1/2 h-32 w-32 rounded-full bg-primary/5 border border-primary/10"
          animate={{ 
            x: [0, -20, 0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </motion.section>
    </div>
  )
}
