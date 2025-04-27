import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Code, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Customer Billing System",
      description: "C-based application for automating customer billing system",
      technologies: ["C language"],
      impact: "Streamlined billing and invoicing processes, reducing manual errors and improving operational efficiency.",
      link: "#",
    },
    {
      title: "Railway ticket reservation website",
      description: "Developed a responsive and user-friendly website designed to simplify train ticket booking, cancellation, and schedule management.",
      technologies: ["HTML", "JavaScript", "CSS"],
      impact: "The system allows users to search for trains, check seat availability, book tickets, and make secure payments.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-blue-950">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">Projects</h2>
          <div className="mb-12 h-1 w-20 bg-blue-500 mx-auto" />

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                impact={project.impact}
                link={project.link}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300">
              These projects demonstrate my ability to apply technical skills to create practical solutions.
              <br />
              For more projects, please visit my GitHub profile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
  link: string;
}

function ProjectCard({ title, description, technologies, impact, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-300">{title}</CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h4 className="mb-2 font-medium text-blue-200">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full bg-blue-900/40 px-2.5 py-0.5 text-xs font-medium text-blue-300"
              >
                <Code className="mr-1 h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 font-medium text-blue-200">Impact/Achievements:</h4>
          <p className="text-gray-300">{impact}</p>
        </div>

        <a
          href={link}
          className="mt-2 inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-1 h-4 w-4" />
          View Project
        </a>
      </CardContent>
    </Card>
  );
}
