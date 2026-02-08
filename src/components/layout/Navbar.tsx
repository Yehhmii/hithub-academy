"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs", hasDropdown: true },
  { label: "News", href: "/news" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact Us", href: "/contact" },
];

const programsDropdown = [
  { label: "Academics", href: "/programs/academics" },
  { label: "Donate", href: "/programs/donate" },
  { label: "Gallery", href: "/programs/gallery" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const { scrollY } = useScroll();

  // Transform values for scroll animations
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.95)"]
  );

  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 4px 6px rgba(0, 0, 0, 0.05)", "0 10px 30px rgba(0, 0, 0, 0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation - Floating Pill */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className={cn(
            "flex items-center gap-2 px-6 py-3 rounded-full",
            "backdrop-blur-md border border-white/30",
            "transition-all duration-300"
          )}
          style={{
            backgroundColor: navBackground,
            boxShadow: navShadow,
          }}
        >
          {/* School Logo/Name */}
          <Link href="/" className="flex items-center gap-3 mr-4 pr-4 border-r border-blue-200">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <span className="text-white font-bold text-lg">HH</span>
            </div>
            <span className="font-semibold text-gray-900 text-lg whitespace-nowrap">
              St. Hithub
            </span>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => (
                <div key={item.label} className="relative">
                {item.hasDropdown ? (
                    // Programs with Dropdown
                    <div
                    onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                    onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                    >
                    <button
                        className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-full",
                        "text-gray-700 hover:text-blue-700 hover:bg-blue-50/80",
                        "transition-all duration-200",
                        "group whitespace-nowrap"
                        )}
                    >
                        {item.label}
                        <motion.span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"
                        initial={false}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                        {isProgramsDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
                        >
                            {programsDropdown.map((dropdownItem) => (
                            <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                            >
                                {dropdownItem.label}
                            </Link>
                            ))}
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </div>
                ) : (
                    // Regular Links
                    <Link
                    href={item.href}
                    className={cn(
                        "relative px-4 py-2 text-sm font-medium rounded-full",
                        "text-gray-700 hover:text-blue-700 hover:bg-blue-50/80",
                        "transition-all duration-200",
                        "group whitespace-nowrap"
                    )}
                    >
                    {item.label}
                    <motion.span
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-3/4 transition-all duration-300"
                        initial={false}
                    />
                    </Link>
                )}
                </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-blue-200">
            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
              {/* <Search className="w-5 h-5" /> */}
            </button>
            <Link
              href="/apply"
              className={cn(
                "px-6 py-2.5 rounded-full font-semibold text-sm",
                "bg-blue-600 text-white",
                "hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30",
                "transition-all duration-300 transform hover:scale-105",
                "whitespace-nowrap"
              )}
            >
              Apply Now
            </Link>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 lg:hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div
          className={cn(
            "backdrop-blur-md transition-all duration-300",
            isScrolled
              ? "bg-white/95 shadow-lg"
              : "bg-white/70"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <span className="text-white font-bold text-lg">HH</span>
              </div>
              <span className="font-semibold text-gray-900 text-lg">
                St. Hubhit
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="container mx-auto px-4 pb-4 space-y-2">
                {navItems.map((item) => (
                    <div key={item.label}>
                    {item.hasDropdown ? (
                        // Programs with dropdown
                        <>
                        <button
                            onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                        >
                            {item.label}
                            <motion.span
                            animate={{ rotate: isProgramsDropdownOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            >
                            ▼
                            </motion.span>
                        </button>
                        
                        {/* Mobile Dropdown Items */}
                        <AnimatePresence>
                            {isProgramsDropdownOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                            >
                                {programsDropdown.map((dropdownItem) => (
                                <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                    onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsProgramsDropdownOpen(false);
                                    }}
                                >
                                    {dropdownItem.label}
                                </Link>
                                ))}
                            </motion.div>
                            )}
                        </AnimatePresence>
                        </>
                    ) : (
                        // Regular mobile links
                        <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        {item.label}
                        </Link>
                    )}
                    </div>
                ))}
              <Link
                href="/apply"
                className="block text-center px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}