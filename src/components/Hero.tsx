import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Floating AI Brain Icon */}
        <div className="relative mb-8">
          <div className="floating mx-auto w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center neon-glow">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <div className="absolute top-2 right-2">
            <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="block text-white">The Future of</span>
          <span className="block gradient-text">AI Intelligence</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Omix revolutionizes how you interact with artificial intelligence. 
          Experience next-generation AI that understands, learns, and evolves with your needs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/signup"
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2 neon-glow"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <button className="glassmorphism hover:bg-white/10 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/30">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Integrations</div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-2000"></div>
    </section>
  );
};

export default Hero;