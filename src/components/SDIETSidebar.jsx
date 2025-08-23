"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Home,
  Users,
  BookOpen,
  FolderOpen,
  Calendar,
  Briefcase,
  MessageSquare,
  GraduationCap,
  User,
  Settings,
  ChevronUp,
  LogOut,
  HelpCircle,
  PanelLeftClose,
  PanelLeft,
  Menu
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

// Main navigation items for SDIET Techies
const mainNavigation = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
  },
  {
    title: "Alumni",
    url: "/alumni",
    icon: GraduationCap,
  },
  {
    title: "Resources",
    url: "/resources",
    icon: BookOpen,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderOpen,
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Forums",
    url: "/forums",
    icon: MessageSquare,
  },
  {
    title: "Placements",
    url: "/placements",
    icon: Briefcase,
  },
]

const SDIETSidebar = () => {
  const pathname = usePathname()
  
  // Function to check if a navigation item is active
  const isActive = (url) => {
    if (url === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(url)
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-center px-2 py-3 group-data-[collapsible=icon]:justify-center">
          {/* Show menu icon only when collapsed */}
          <div className="hidden group-data-[collapsible=icon]:flex w-full items-center justify-center">
            <SidebarTrigger className="h-8 w-8">
              <Menu className="h-4 w-4" />
            </SidebarTrigger>
          </div>
          
          {/* Show brand text and collapse button only when expanded */}
          <div className="group-data-[collapsible=icon]:hidden flex items-center gap-2 w-full">

            <div className="flex flex-col flex-1">
              <span className="text-lg font-bold">
                <span className="text-blue-600">SDIET</span>
                <span className="text-orange-600">Techies</span>
              </span>
              <span className="text-sm text-muted-foreground">Community</span>
            </div>
            <SidebarTrigger className="ml-auto h-8 w-8" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => {
                const active = isActive(item.url)
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      className={active ? "bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/20" : ""}
                    >
                      <a href={item.url} className="flex items-center gap-2 px-2 py-2 text-sm">
                        <item.icon className={`h-4 w-4 ${active ? 'text-blue-600 dark:text-blue-400' : ''}`} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        {/* User Profile Section */}
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="w-full justify-center group-data-[collapsible=icon]:justify-center cursor-pointer">
                  {/* Collapsed state - show only avatar centered */}
                  <div className="hidden group-data-[collapsible=icon]:flex items-center justify-center w-full px-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">
                      ST
                    </div>
                  </div>
                  
                  {/* Expanded state - show full profile info */}
                  <div className="group-data-[collapsible=icon]:hidden flex items-center gap-2 w-full">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white text-xs font-semibold">
                      ST
                    </div>
                    <div className="flex flex-col items-start flex-1 min-w-0">
                      <span className="text-sm font-medium truncate">Student User</span>
                      <span className="text-xs text-muted-foreground truncate">student@sdiet.edu</span>
                    </div>
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                align="end"
                className="w-56"
              >
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <div className="flex items-center justify-between px-2 py-1.5 cursor-pointer">
                    <span className="flex items-center">
                      <span className="mr-2 text-sm">Theme</span>
                    </span>
                    <ThemeToggle />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  )
}

export default SDIETSidebar
