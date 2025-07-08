"use client";

import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export function About() {
  const stats = [
    { number: "5+", label: "Projects Completed", icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-10 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-500/20 mb-6">
                <span className="text-indigo-400 text-sm font-medium">
                  A PROPOS DE MOI
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Passionné par
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  le création de solutions efficaces
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Je suis développeur full-stack en dernière année d’ingénierie
                  informatique, passionné par la création d’applications
                  modernes intégrant l’intelligence artificielle. J’aime
                  concevoir des solutions utiles, évolutives et centrées sur
                  l’expérience utilisateur.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

            {/* Main Card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
              {/* Code Editor Mockup */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="text-xs text-gray-500">portfolio.tsx</div>
                </div>

                {/* Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 w-6">1</span>
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">developer</span>
                    <span className="text-gray-300">=</span>
                    <span className="text-gray-300">{"{"}</span>
                  </div>
                  <div className="flex items-center gap-4 ml-8">
                    <span className="text-gray-600 w-6">2</span>
                    <span className="text-green-400">name:</span>
                    <span className="text-yellow-400">'Aammar Anwar'</span>
                    <span className="text-gray-300">,</span>
                  </div>
                  <div className="flex items-center gap-4 ml-8">
                    <span className="text-gray-600 w-6">3</span>
                    <span className="text-green-400">skills:</span>
                    <span className="text-gray-300">
                      [Spring Boot, React, FastApi, LangChain]
                    </span>
                  </div>
                  <div className="flex items-center gap-4 ml-8">
                    <span className="text-gray-600 w-6">4</span>
                    <span className="text-green-400">passion:</span>
                    <span className="text-yellow-400">
                      'Building amazing apps'
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-600 w-6">5</span>
                    <span className="text-gray-300">{"}"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
