import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

export function Education() {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      year: "2026",
      gpa: "CGPA: 4.29",
      details: "Relevant Coursework: Data Structures and Algorithms, Operating Systems, Database Management Systems, Artificial Intelligence",
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
    },
    {
      institution: "VR CBSE School",
      location: "Rayachoty, Andhra Pradesh",
      degree: "Secondary School Certificate (12th Grade)",
      year: "2022",
      gpa: "Percentage: 84%",
      details: "Key Subjects: Physics, Chemistry, Mathematics, Computer Science",
      icon: <School className="h-8 w-8 text-blue-400" />,
    },
    {
      institution: "PENCHAL REDDY HIGH SCHOOL",
      location: "Rayachoty, Andhra Pradesh",
      degree: "High School Certificate (10th Grade)",
      year: "2019",
      gpa: "Percentage: 71%",
      details: "Achievements: Include significant academic achievements if applicable.",
      icon: <School className="h-8 w-8 text-blue-400" />,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-blue-900 to-blue-950">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">Education</h2>
          <div className="mb-12 h-1 w-20 bg-blue-500 mx-auto" />

          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-[1px] before:bg-blue-700 md:ml-8">
            {educationData.map((education) => (
              <EducationCard
                key={education.institution}
                institution={education.institution}
                location={education.location}
                degree={education.degree}
                year={education.year}
                gpa={education.gpa}
                details={education.details}
                icon={education.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  institution: string;
  location: string;
  degree: string;
  year: string;
  gpa: string;
  details: string;
  icon: React.ReactNode;
}

function EducationCard({ institution, location, degree, year, gpa, details, icon }: EducationCardProps) {
  return (
    <div className="relative flex items-start">
      <div className="absolute left-0 top-1 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-blue-600 bg-blue-950 text-blue-400 md:left-8">
        {icon}
      </div>

      <Card className="ml-12 w-full border-blue-800/20 bg-blue-950/50 backdrop-blur-sm md:ml-20">
        <CardContent className="p-6">
          <div className="mb-1 flex flex-wrap justify-between">
            <h3 className="text-xl font-semibold text-blue-300">{institution}</h3>
            <span className="text-sm font-medium text-blue-400">{year}</span>
          </div>

          <p className="mb-3 text-sm text-gray-400">{location}</p>
          <p className="mb-2 font-medium text-white">{degree}</p>
          <p className="mb-3 text-sm text-blue-200">{gpa}</p>
          <p className="text-gray-300">{details}</p>
        </CardContent>
      </Card>
    </div>
  );
}
