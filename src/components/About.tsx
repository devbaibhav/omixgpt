import React from 'react';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize artificial intelligence and make advanced AI capabilities accessible to everyone.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'A world where AI enhances human potential and drives innovation across all industries.',
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'World-class AI researchers and engineers from top tech companies and universities.',
    },
    {
      icon: Award,
      title: 'Our Achievement',
      description: 'Recognized as a leader in AI innovation with multiple industry awards and patents.',
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose Omix?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're not just another AI company. We're building the future of intelligent technology 
            with a focus on innovation, reliability, and human-centered design.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Story */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Pioneering the Next Generation of AI
            </h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in 2024 by a team of AI visionaries, Omix emerged from the belief that 
                artificial intelligence should be powerful, accessible, and trustworthy. We've 
                dedicated ourselves to pushing the boundaries of what's possible with AI.
              </p>
              <p>
                Our breakthrough approach combines cutting-edge machine learning with intuitive 
                design, creating AI solutions that don't just process data—they understand it, 
                learn from it, and evolve with your needs.
              </p>
              <p>
                From startups to Fortune 500 companies, organizations worldwide trust Omix to 
                deliver AI solutions that drive real business value and transform the way they work.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="glassmorphism-strong rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-1/2"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-2/3"></div>
                  <div className="h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                  <div className="h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full w-3/4"></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="text-2xl font-bold gradient-text">AI Processing</div>
                <div className="text-gray-400 text-sm mt-2">Real-time intelligence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/20 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;