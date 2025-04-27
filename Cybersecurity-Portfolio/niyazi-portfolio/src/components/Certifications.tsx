import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Data Structures and Algorithms",
      issuer: "Board Infinity",
      date: "2024",
      description: "Online course focusing on data structures and algorithms fundamentals",
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "2024",
      description: "Comprehensive course on generative AI and working with large language models",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "2023",
      description: "In-depth certification covering networking fundamentals and protocols",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl">Certifications</h2>
          <div className="mb-12 h-1 w-20 bg-blue-500 mx-auto" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <CertificationCard
                key={cert.title}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
              />
            ))}
          </div>

          <div className="mt-16">
            <h3 className="mb-6 text-center text-2xl font-semibold text-blue-300">Recommendations for Improvement</h3>
            <Card className="border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="mb-4 text-xl font-medium text-blue-300">Strengthen Technical Proficiency Focus Areas:</h4>
                <p className="text-gray-300">
                  Enhance testing proficiency by learning automation testing tools such as Selenium, Postman, or TestNG.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

function CertificationCard({ title, issuer, date, description }: CertificationCardProps) {
  return (
    <Card className="overflow-hidden border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">
          <Award className="h-10 w-10 text-blue-400" />
        </div>
        <h4 className="mb-2 text-center text-lg font-medium text-blue-300">{title}</h4>
        <div className="mb-2 flex items-center justify-center gap-1 text-sm text-gray-400">
          <span>{issuer}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" />
            {date}
          </span>
        </div>
        <p className="text-center text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}
