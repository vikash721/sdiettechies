"use client"

import { usePathname } from 'next/navigation'
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import SDIETSidebar from "@/components/SDIETSidebar"

const ConditionalLayout = ({ children }) => {
  const pathname = usePathname()
  
  // Routes that should not show sidebar and topbar
  const authRoutes = ['/auth/login', '/auth/signup', '/auth/forgot-password', '/auth/reset-password']
  
  // Routes that should not show the header bar (but keep sidebar)
  const noHeaderRoutes = []
  
  // Check if current route is an auth route
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  
  // Check if current route should not show header
  const isNoHeaderRoute = noHeaderRoutes.some(route => pathname.startsWith(route))
  
  // Function to get page title based on current route
  const getPageTitle = (path) => {
    const routes = {
      '/': 'Dashboard',
      '/students': 'Students',
      '/alumni': 'Alumni Network',
      '/resources': 'Resources Hub',
      '/projects': 'Project Showcase',
      '/events': 'Events',
      '/forums': 'Tech Forums',
      '/placements': 'Placement Portal',
      '/profile': 'Profile'
    }
    
    // Handle dynamic routes and sub-routes
    for (const [route, title] of Object.entries(routes)) {
      if (path === route || (route !== '/' && path.startsWith(route))) {
        return title
      }
    }
    
    // Default fallback
    return 'SDIET Techies'
  }
  
  // Function to get page description based on current route
  const getPageDescription = (path) => {
    const descriptions = {
      '/': 'Overview of your community activity',
      '/students': 'Connect with fellow students',
      '/alumni': 'Network with successful graduates',
      '/resources': 'Study materials and learning resources',
      '/projects': 'Discover innovative student projects',
      '/events': 'Upcoming and past college events',
      '/forums': 'Discuss technology and trends',
      '/placements': 'Career opportunities and guidance',
      '/profile': 'Your profile and settings'
    }
    
    // Handle dynamic routes and sub-routes
    for (const [route, description] of Object.entries(descriptions)) {
      if (path === route || (route !== '/' && path.startsWith(route))) {
        return description
      }
    }
    
    // Default fallback
    return 'Building the future together'
  }
  
  // If it's an auth route, render children without sidebar/topbar
  if (isAuthRoute) {
    return <>{children}</>
  }
  
  // Default layout with sidebar and topbar for all other routes
  return (
    <SidebarProvider>
      <SDIETSidebar />
      <SidebarInset>
        {/* Conditional Header - hidden for profile page */}
        {!isNoHeaderRoute && (
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              {/* Mobile Sidebar Trigger - Only visible on mobile */}
              <SidebarTrigger className="md:hidden -ml-1" />
              <div className="flex flex-col mb-5 mt-5">
                <h1 className="text-lg font-semibold">{getPageTitle(pathname)}</h1>
                <p className="text-xs text-muted-foreground">{getPageDescription(pathname)}</p>
              </div>
            </div>
          </header>
        )}
        
        {/* Conditional Content Container - no padding for profile page */}
        <div className={`flex flex-1 flex-col ${isNoHeaderRoute ? '' : 'gap-4 p-4 pt-0'}`}>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default ConditionalLayout
