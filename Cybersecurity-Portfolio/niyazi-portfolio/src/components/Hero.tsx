import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-blue-950 pt-20">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-blue-950 opacity-80" />

      <div className="container relative z-10 flex flex-col items-center px-4 text-center md:px-8">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Niyazi Syshavalikhan
        </h1>
        <h2 className="mb-8 text-xl font-medium text-blue-300 md:text-2xl">
          Network Administrator & Cybersecurity Professional
        </h2>

        <p className="mb-6 max-w-2xl text-gray-300">
          Seeking a challenging role as a Network Administrator in a dynamic organization where I can utilize
          my expertise in network configuration, troubleshooting, and security management.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="flex items-center text-gray-300">
            <MapPin className="mr-2 h-4 w-4 text-blue-400" />
            <span>Chinamandem, Andhra Pradesh, India</span>
          </div>
          <div className="flex items-center text-gray-300">
            <Mail className="mr-2 h-4 w-4 text-blue-400" />
            <a href="mailto:niyazisyshavalikhan.ns@gmail.com" className="hover:text-blue-400">
              niyazisyshavalikhan.ns@gmail.com
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="#about">
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="border-blue-500 bg-transparent text-blue-400 hover:bg-blue-900/50 hover:text-blue-300">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/niyazisyshavalikhan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-900/50 p-3 text-white hover:bg-blue-800/50"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/niyazisyshavalikhan"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-900/50 p-3 text-white hover:bg-blue-800/50"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:niyazisyshavalikhan.ns@gmail.com"
            className="rounded-full bg-blue-900/50 p-3 text-white hover:bg-blue-800/50"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="animate-bounce text-blue-400 hover:bg-blue-950 hover:text-blue-300"
        >
          <a href="#about">
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
