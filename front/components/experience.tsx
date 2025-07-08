"use client";

const experiences = [
  {
    title: "Full Stack & Ai Developer - Stage",
    company: "Gear9",
    period: "Février 2025 - Present",
    description: `○ Développement de microservices pour une plateforme de digitalisation des processus de sécurité et de contrôle au service d'une grande surface.\n○ Conception et développement d’un chatbot interne pour assister les utilisateurs et répondre à leurs questions fréquentes.`,

    technologies: [
      "Spring Boot",
      "React",
      "Docker",
      "FastApi",
      "Langchain",
      "ChromaDB",
      "Keycloak",

      "SQLServer",
      "RAG",
    ],
    type: "work",
  },

  {
    title: "Full Stack Developer - Stage",
    company: "Xelops Technology (Ex Neoxia Maroc)",
    period: "Juillet 2024 - Aout 2024",
    description: "Application web pour gérer les apis ( API Management )",
    technologies: ["ReactJs", "NestJs", "MySQL"],
    type: "work",
  },

  {
    title: "Backend Developer - Stage",
    company: "Yadou Soft",
    period: "Février 2023 - Mai 2023 ",
    description:
      "Application web qui gère les cabinets dentaires ( Gérer les rendez-vous , Suivi des patients...)",
    technologies: ["Spring Boot", "MySQL"],
    type: "work",
  },
  {
    title: "Mobile Developer - Stage",
    company: "Tasmim Web",
    period: "Avril 2022 - Mai 2022",
    description:
      "Développement d’une application mobile Flutter connectée à un site WooCommerce via API",
    technologies: ["Dart", "Flutter"],
    type: "work",
  },
  {
    title: "Diplôme d’ingénieur d’état - Génie informatique ",
    company: "ENSA Marrakech",
    period: "2025",
    description: "",
    technologies: [],
    type: "education",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-orange-600/10 border border-orange-500/20 mb-6">
            <span className="text-orange-400 text-sm font-medium">
              CAREER JOURNEY
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mon expérience
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              professionnelle
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-600 via-red-500 to-purple-600" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8 group"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center border-4 border-black transition-all duration-300 group-hover:scale-110 ${
                      exp.type === "work"
                        ? "bg-gradient-to-r from-orange-600 to-red-600"
                        : "bg-gradient-to-r from-blue-600 to-purple-600"
                    }`}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 group-hover:bg-clip-text transition-all duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {exp.description.split("\n").map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 group-hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
