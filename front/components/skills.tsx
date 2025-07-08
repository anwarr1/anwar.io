"use client";

import { useState } from "react";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 60, color: "from-blue-400 to-cyan-500" },
      { name: "Tailwind CSS", level: 65, color: "from-cyan-400 to-blue-500" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Spring Boot", level: 85, color: "from-green-600 to-green-400" },
      { name: "Python", level: 70, color: "from-yellow-400 to-blue-500" },
      { name: "Java", level: 85, color: "from-blue-600 to-indigo-600" },
      { name: "FastApi", level: 55, color: "from-green-500 to-green-700" },
      { name: "MySql", level: 80, color: "from-pink-500 to-purple-600" },
    ],
  },
  {
    name: "Outils & Autres",
    skills: [
      { name: "Docker", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "ChromaDB", level: 70, color: "from-orange-400 to-yellow-500" },
      { name: "Git", level: 80, color: "from-red-500 to-orange-500" },
      { name: "LangChain", level: 70, color: "from-purple-500 to-pink-500" },
      { name: "RAG", level: 80, color: "from-red-600 to-red-400" },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 mb-6">
            <span className="text-purple-400 text-sm font-medium">
              Compétences
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technologies que
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              j’aime utiliser
            </span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>
                <span className="text-gray-400 font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
