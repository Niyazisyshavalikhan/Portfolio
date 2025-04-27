"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-blue-800/10 bg-blue-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-geist-mono text-xl font-bold text-blue-400">NS</span>
          <span className="hidden font-medium text-white sm:block">Niyazi Syshavalikhan</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-300 transition-colors hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button variant="outline" className="ml-2 border-blue-500 bg-transparent text-blue-400 hover:bg-blue-900/50 hover:text-blue-300">
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost" className="text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-blue-950 text-white">
            <nav className="mt-8">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-2 py-1 text-lg text-gray-300 transition-colors hover:text-blue-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button variant="outline" className="mt-2 w-full border-blue-500 bg-transparent text-blue-400 hover:bg-blue-900/50">
                    Resume
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
