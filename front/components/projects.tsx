"use client";

import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Plateforme de location de vêtements traditionnels",
    description:
      "Solution permettant la location en ligne de vêtements traditionnels. Développée avec React et Spring boot, elle inclut une gestion des utilisateurs avec authentification, un catalogue dynamique de vêtements, un système de réservation ... ",
    image: "/location_p.png??height=300&width=500",
    tags: ["React", "Spring boot", "MySQL", "Railway", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Plateforme e-Banking de Simulation de Paiements",
    description:
      "Application web e-banking basée sur une architecture microservices, permettant aux utilisateurs de simuler le paiement de factures, les abonnements ...",
    image: "/e-b.png?height=300&width=500",
    tags: [
      "Spring boot",
      "React",
      "Microservices",
      "Docker",
      "MySQL",
      "Railway",
    ],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Cover Generator App",
    description:
      "Application mobile développée avec Flutter et l'API d'OpenAI pour générer des lettres de motivation adaptées au profil du chercheur d'emploi",
    image: "/ai-cover.jpg",
    tags: ["Flutter", "Dart", "OpenAi", "Spring Boot", "MySQL"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Website",
    description:
      "Site web personnel permettant de présenter mes compétences, expériences et réalisations professionnelles",
    image: "/portfolio.png?height=300&width=500",
    tags: ["FastApi", "LangChain", "RAG", "ChromaDB", "React", "Tailwind CSS"],
    github: "#",
    live: "#",
    featured: false,
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-green-600/10 border border-green-500/20 mb-6">
            <span className="text-green-400 text-sm font-medium">
              FEATURED WORK
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projets personnels
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105 ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

              <div
                className={`relative ${
                  project.featured ? "lg:flex lg:items-center" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "lg:w-1/2" : ""
                  }`}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={
                      project.tags.includes("Flutter")
                        ? "w-1/3 h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        : "w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Overlay Links */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      hoveredProject === index ? "opacity-100" : ""
                    }`}
                  >
                    <a
                      href={project.github}
                      className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-black transition-colors duration-200"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.live}
                      className="p-3 bg-black/80 backdrop-blur-sm rounded-full hover:bg-black transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`p-8 ${project.featured ? "lg:w-1/2" : ""}`}>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-gray-300 group-hover:bg-white/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25">
            <span>Voir tous les projets</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
