"use client";
"use client";

import type React from "react";
import { X, Sparkles, Code2 } from "lucide-react";

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomePopup({ isOpen, onClose }: WelcomePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup Content */}
      <div className="relative bg-gradient-to-br from-slate-900 via-black to-indigo-900/20 border border-white/20 rounded-3xl p-8 max-w-md mx-4 shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-xl transition-colors duration-200"
        >
          <X size={20} className="text-gray-400 hover:text-white" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Code2 size={32} className="text-white" />
              </div>
              <Sparkles
                size={16}
                className="absolute -top-2 -right-2 text-yellow-400 animate-pulse"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to My Portfolio! 👋
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Hi! I'm Anwar, a passionate developer. Explore my projects,
              skills, and experience. Feel free to use the chatbot for any
              questions!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onClose}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white font-medium hover:scale-105 transition-transform duration-200"
            >
              Let's Explore! 🚀
            </button>

            <button
              onClick={onClose}
              className="w-full py-2 text-gray-400 text-sm hover:text-white transition-colors duration-200"
            >
              Maybe later
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-500 rounded-full opacity-60 animate-ping" />
        <div
          className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-500 rounded-full opacity-60 animate-ping"
          style={{ animationDelay: "1s" }}
        />
      </div>
    </div>
  );
}
