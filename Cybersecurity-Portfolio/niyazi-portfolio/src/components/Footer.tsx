import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-800/20 bg-blue-950 py-12">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-geist-mono text-xl font-bold text-blue-400">NS</span>
                <span className="font-medium text-white">Niyazi Syshavalikhan</span>
              </Link>
              <p className="mt-2 text-sm text-gray-400">
                Network Administrator & Cybersecurity Professional
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
              <Link href="/#about" className="text-gray-300 hover:text-blue-400">
                About
              </Link>
              <Link href="/#skills" className="text-gray-300 hover:text-blue-400">
                Skills
              </Link>
              <Link href="/#education" className="text-gray-300 hover:text-blue-400">
                Education
              </Link>
              <Link href="/#projects" className="text-gray-300 hover:text-blue-400">
                Projects
              </Link>
              <Link href="/#certifications" className="text-gray-300 hover:text-blue-400">
                Certifications
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-blue-400">
                Contact
              </Link>
            </nav>

            <div className="flex gap-4">
              <a
                href="https://github.com/niyazisyshavalikhan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-900/50 p-2 text-white hover:bg-blue-800/50"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/niyazisyshavalikhan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-900/50 p-2 text-white hover:bg-blue-800/50"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:niyazisyshavalikhan.ns@gmail.com"
                className="rounded-full bg-blue-900/50 p-2 text-white hover:bg-blue-800/50"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-blue-800/20 pt-6">
            <p className="text-center text-sm text-gray-400">
              © {currentYear} Niyazi Syshavalikhan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
