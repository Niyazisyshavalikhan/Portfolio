export function Skills() {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++"],
    },
    {
      category: "Tools/Technologies",
      skills: ["Git", "Docker", "Kubernetes"],
    },
    {
      category: "Operating Systems",
      skills: ["Linux", "Windows"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Frameworks",
      skills: ["React.js", "TensorFlow", "Flask"],
    },
    {
      category: "Networking",
      skills: ["TCP/IP", "DNS", "DHCP", "Firewalls", "VPN", "Routing Protocols"],
    },
    {
      category: "Security",
      skills: ["Network Security", "Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-900">
      <div className="container px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Technical Skills</h2>
          <div className="mb-12 h-1 w-20 bg-blue-500 mx-auto" />

          <div className="grid gap-8 md:grid-cols-2">
            {technicalSkills.map((skillGroup) => (
              <div key={skillGroup.category} className="rounded-lg border border-blue-800/20 bg-blue-950/50 p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-semibold text-blue-300">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-800/30 px-3 py-1 text-sm font-medium text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-6 text-2xl font-semibold text-blue-300">Areas for Improvement</h3>
            <div className="rounded-lg border border-blue-800/20 bg-blue-950/50 p-6 backdrop-blur-sm">
              <p className="text-gray-300">
                <span className="font-semibold text-blue-200">Enhance testing proficiency</span> by learning automation testing tools such as
                Selenium, Postman, or TestNG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
