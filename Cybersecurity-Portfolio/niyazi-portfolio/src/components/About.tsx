import { Card, CardContent } from "@/components/ui/card";
import { LucideShield, Network, Lock, Cloud, Server, Code } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">About Me</h2>
          <div className="mb-12 h-1 w-20 bg-blue-500 mx-auto" />

          <div className="mb-10 text-gray-300 space-y-4">
            <p>
              I am a dedicated Network Administrator and Cybersecurity professional with expertise in network configuration,
              troubleshooting, and security management. With a strong foundation in computer science and engineering,
              I am passionate about optimizing network performance, enhancing system reliability, and contributing to the
              organization's success through effective security implementation.
            </p>
            <p>
              My goal is to continuously grow my skills in emerging networking technologies and industry best practices
              while providing robust security solutions to protect critical infrastructure and data.
            </p>
          </div>

          <h3 className="mb-6 text-2xl font-semibold text-blue-300">My Focus Areas</h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FocusCard
              icon={<Network className="h-10 w-10 text-blue-400" />}
              title="Network Administration"
              description="Configuration, maintenance, and optimization of network infrastructure to ensure smooth operations."
            />

            <FocusCard
              icon={<LucideShield className="h-10 w-10 text-blue-400" />}
              title="Cybersecurity"
              description="Implementation of security measures to protect systems and data from potential threats and vulnerabilities."
            />

            <FocusCard
              icon={<Lock className="h-10 w-10 text-blue-400" />}
              title="Security Management"
              description="Development and enforcement of security policies and procedures to safeguard organizational assets."
            />

            <FocusCard
              icon={<Server className="h-10 w-10 text-blue-400" />}
              title="System Administration"
              description="Management of operating systems, databases, and servers to ensure optimal performance and reliability."
            />

            <FocusCard
              icon={<Cloud className="h-10 w-10 text-blue-400" />}
              title="Cloud Technologies"
              description="Working with cloud platforms to leverage scalable and flexible infrastructure solutions."
            />

            <FocusCard
              icon={<Code className="h-10 w-10 text-blue-400" />}
              title="Programming"
              description="Using Python, Java, and C++ for automation, scripting, and development of security tools."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string
}) {
  return (
    <Card className="overflow-hidden border-blue-800/20 bg-blue-950/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex justify-center">{icon}</div>
        <h4 className="mb-2 text-center text-xl font-medium text-blue-300">{title}</h4>
        <p className="text-center text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
}
