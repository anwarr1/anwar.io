"use client";

import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Software engineer", "Ai Enthusiast", "Full Stack Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 p-1">
            <img
              src="/pic.jpg?height=128&width=128"
              alt="Profile"
              className="w-full h-full rounded-full object-cover bg-gray-800"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-black animate-pulse" />
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <p className="text-lg text-gray-400 mb-2">👋 Salut, Je suis</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              Aammar Anwar
            </span>
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
          Je transforme des idées en expériences digitales uniques grâce aux
          technologies actuelles. Mon objectif : créer des applications web et
          mobiles qui marquent la différence.
        </p>

        {/* Location & Status */}
        <div className="flex items-center justify-center gap-6 mb-12 text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Casablanca, Morocco</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Ouvert aux opportunités</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity blur" />
            <div className="relative flex items-center">
              <a href="#projects">Voir mon travail</a>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          <button className="group flex items-center px-8 py-4 rounded-2xl border border-white/20 backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
            <Mail className="w-5 h-5 mr-3" />
            <span className="font-medium">
              <a href="#contact"> Contactez-moi</a>
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {[
            {
              icon: Github,
              href: "https://github.com/anwarr1",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://www.linkedin.com/in/anwar-aammar-b1881321a/",
              label: "LinkedIn",
            },
            { icon: Mail, href: "#", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
