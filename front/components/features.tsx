"use client"

import { Code, Zap, Shield, Globe, Palette, Cpu, ArrowRight } from "lucide-react"
import { useState } from "react"

const features = [
  {
    name: "Lightning Performance",
    description: "Optimized for speed with advanced caching and CDN distribution worldwide.",
    icon: Zap,
    gradient: "from-yellow-400 to-orange-500",
    delay: "0ms",
  },
  {
    name: "Advanced Security",
    description: "Enterprise-grade protection with AI-powered threat detection.",
    icon: Shield,
    gradient: "from-green-400 to-emerald-500",
    delay: "100ms",
  },
  {
    name: "Developer Experience",
    description: "Intuitive APIs, comprehensive docs, and powerful debugging tools.",
    icon: Code,
    gradient: "from-blue-400 to-cyan-500",
    delay: "200ms",
  },
  {
    name: "Global Infrastructure",
    description: "Deploy instantly to 200+ edge locations across the globe.",
    icon: Globe,
    gradient: "from-purple-400 to-pink-500",
    delay: "300ms",
  },
  {
    name: "Design System",
    description: "Beautiful, accessible components with customizable themes.",
    icon: Palette,
    gradient: "from-rose-400 to-pink-500",
    delay: "400ms",
  },
  {
    name: "AI-Powered",
    description: "Intelligent optimization and automated performance enhancements.",
    icon: Cpu,
    gradient: "from-violet-400 to-purple-500",
    delay: "500ms",
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 rounded-full bg-violet-600/10 border border-violet-500/20 mb-6">
            <span className="text-violet-400 text-sm font-medium">POWERFUL FEATURES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Everything you need to
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our platform provides cutting-edge tools and services designed for modern development workflows.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              style={{ animationDelay: feature.delay }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.name}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Arrow */}
                <div
                  className={`mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 ${hoveredIndex === index ? "translate-x-2" : ""}`}
                >
                  <div className="flex items-center text-violet-400">
                    <span className="text-sm font-medium mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
