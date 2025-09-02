import React from 'react';
import { MessageSquare, BarChart3, Bot, Building2, Zap, Shield, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP capabilities that understand context, sentiment, and intent with human-like precision.',
      gradient: 'from-blue-500 to-cyan-500',
      glowColor: 'neon-glow',
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast trends and provide actionable insights for your business.',
      gradient: 'from-purple-500 to-pink-500',
      glowColor: 'neon-glow-purple',
    },
    {
      icon: Bot,
      title: 'Autonomous Agents',
      description: 'Self-learning AI agents that can perform complex tasks and make decisions independently.',
      gradient: 'from-cyan-500 to-blue-500',
      glowColor: 'neon-glow-cyan',
    },
    {
      icon: Building2,
      title: 'AI for Business',
      description: 'Enterprise-grade AI solutions that integrate seamlessly with your existing workflows.',
      gradient: 'from-green-500 to-teal-500',
      glowColor: 'neon-glow',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times for real-time AI interactions.',
      gradient: 'from-yellow-500 to-orange-500',
      glowColor: 'neon-glow-purple',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with global standards.',
      gradient: 'from-red-500 to-pink-500',
      glowColor: 'neon-glow-cyan',
    },
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Advanced Capabilities</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the powerful features that make Omix the most advanced AI platform for modern businesses and developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glassmorphism rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 border border-white/10 hover:border-white/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`relative mb-6 w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center ${feature.glowColor} group-hover:shadow-2xl transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect indicator */}
              <div className="mt-6 flex items-center text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;