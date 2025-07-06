"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  ChevronLeft,
  Home,
  Settings,
  User,
  FileText,
  Calendar,
  Mail,
  Bell,
  HelpCircle,
  LogOut,
  Sun,
  Moon,
  X,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";

const menuItems = [
  { icon: Home, text: "Dashboard", href: "/" },
  { icon: FileText, text: "Documents", href: "/documents" },
  { icon: Calendar, text: "Calendar", href: "/calendar" },
  { icon: Mail, text: "Messages", href: "/messages" },
  { icon: Bell, text: "Notifications", href: "/notifications" },
];

const bottomMenuItems = [
  { icon: User, text: "Profile", href: "/profile" },
  { icon: Settings, text: "Settings", href: "/settings" },
  { icon: HelpCircle, text: "Help", href: "/help" },
  { icon: LogOut, text: "Logout", href: "/logout" },
];

const MobileHeader = ({ onOpenSidebar }) => {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 z-30 px-4">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onOpenSidebar}
            className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu size={20} />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-lg font-semibold">D</span>
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dashboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThemeToggle = ({ collapsed }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={clsx(
          "h-9 flex items-center justify-center",
          collapsed ? "mx-2" : "px-3 mx-1"
        )}
      >
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={clsx(
        "flex items-center transition-all duration-200",
        "hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
        "rounded-lg group relative",
        collapsed ? "h-9 w-9 mx-auto justify-center" : "px-3 py-2 w-full mx-1"
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center",
          !collapsed && "mr-3",
          "text-gray-600 dark:text-gray-400",
          "transition-colors duration-200 group-hover:text-primary"
        )}
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </div>
      {!collapsed && (
        <span
          className={clsx(
            "text-sm font-medium",
            "text-gray-600 dark:text-gray-400",
            "group-hover:text-primary transition-colors duration-200"
          )}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      )}
      {collapsed && (
        <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </div>
      )}
    </button>
  );
};

const SidebarItem = ({ icon: Icon, text, collapsed, href, showDivider }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <>
      <Link
        href={href}
        className={clsx(
          "flex items-center px-3 py-2 transition-all duration-200",
          "hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
          "rounded-lg group relative",
          isActive && "bg-primary/10 text-primary",
          collapsed ? "justify-center mx-2" : "mx-1"
        )}
      >
        <div
          className={clsx(
            "flex items-center justify-center",
            !collapsed && "mr-3",
            isActive ? "text-primary" : "text-gray-600 dark:text-gray-400",
            "transition-colors duration-200 group-hover:text-primary"
          )}
        >
          <Icon size={18} />
        </div>
        {!collapsed && (
          <span
            className={clsx(
              "text-sm font-medium truncate",
              isActive ? "text-primary" : "text-gray-600 dark:text-gray-400",
              "group-hover:text-primary transition-colors duration-200"
            )}
          >
            {text}
          </span>
        )}
        {collapsed && (
          <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            {text}
          </div>
        )}
      </Link>
      {showDivider && (
        <div className="my-2 border-t border-gray-200 dark:border-gray-800 mx-3" />
      )}
    </>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  // Close mobile sidebar when switching to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileOpen(false);
    }
  }, [isMobile]);

  // Close mobile sidebar when navigating
  const pathname = usePathname();
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <MobileHeader onOpenSidebar={() => setIsMobileOpen(true)} />

      {/* Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={clsx(
          "h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800",
          "transition-all duration-300 ease-in-out flex flex-col",
          "fixed lg:relative",
          "z-50 lg:z-0",
          isMobile ? (isMobileOpen ? "left-0" : "-left-72") : "left-0",
          isMobile ? "w-72" : collapsed ? "w-16 sm:w-16" : "w-56 sm:w-60"
        )}
      >
        {/* Desktop Header */}
        {!isMobile && (
          <div
            className={clsx(
              "flex items-center h-16 shrink-0 px-3 border-b border-gray-200 dark:border-gray-800",
              collapsed ? "justify-center" : "justify-between"
            )}
          >
            {!collapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg font-semibold">D</span>
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Dashboard
                </span>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {collapsed ? <Menu size={18} /> : <ChevronLeft size={18} />}
            </Button>
          </div>
        )}

        {/* Mobile Header */}
        {isMobile && (
          <div className="flex items-center justify-between h-16 shrink-0 px-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg font-semibold">D</span>
              </div>
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Dashboard
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileOpen(false)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              <X size={18} />
            </Button>
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between py-4">
          <nav className="space-y-1 px-2">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.href}
                {...item}
                collapsed={!isMobile && collapsed}
              />
            ))}
          </nav>

          <nav className="space-y-1 px-2 mt-auto">
            <ThemeToggle collapsed={!isMobile && collapsed} />
            {bottomMenuItems.map((item, i) => (
              <SidebarItem
                key={item.href}
                {...item}
                collapsed={!isMobile && collapsed}
                showDivider={i === 0}
              />
            ))}
          </nav>
        </div>
      </div>

      {/* Content Padding for Mobile Header */}
      {isMobile && <div className="h-16 shrink-0" />}
    </>
  );
};

export default Sidebar;
