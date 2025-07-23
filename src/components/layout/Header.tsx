"use client";
import ThemeToggle from "../ui/ThemeToggle";
import { Home, User, Grid3X3, FileText, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {

  const navItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Grid3X3, label: "Work", href: "#work" },
    { icon: FileText, label: "Portfolio", href: "#blog" },
    { icon: ImageIcon, label: "Contact me", href: "#gallery" },
  ];

  return (
    <header className="overflow-hidden">
      {/* Desktop Navigation - Fixed Top */}
      <nav
        className={cn(
          "hidden md:flex fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-4 "
        )}
      >
        <div
          className={cn(
            "bg-background backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-border",
          )}
        > 
          <div className="flex items-center space-x-6 text-foreground/80 hover:text-foreground">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-2 transition-colors duration-200  group "
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 shrink-0" />
                <span className="text-sm font-medium w-fit text-nowrap">{item.label}</span>
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Fixed Bottom */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 max-w-full">
        <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50">
          <div className="flex items-center justify-around py-3 px-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center space-y-1 text-gray-400 hover:text-white transition-colors duration-200 group p-2"
              >
                <item.icon className="size-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
