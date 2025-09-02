import React, { useState } from 'react';
import { Play, Code, MessageSquare, BarChart } from 'lucide-react';

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 'chat',
      title: 'AI Chat Assistant',
      description: 'Experience natural conversations with our advanced AI',
      icon: MessageSquare,
      preview: 'Chat with Omix AI about anything - from coding help to creative writing.',
    },
    {
      id: 'analytics',
      title: 'Predictive Analytics',
      description: 'See how AI predicts future trends from your data',
      icon: BarChart,
      preview: 'Upload your data and watch AI generate insights and predictions in real-time.',
    },
    {
      id: 'code',
      title: 'Code Generation',
      description: 'Generate production-ready code with AI assistance',
      icon: Code,
      preview: 'Describe what you want to build and get complete, working code solutions.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">See Omix in Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the power of advanced AI through interactive demonstrations of our core capabilities.
          </p>
        </div>

        {/* Demo Selector */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Demo Tabs */}
          <div className="lg:w-1/3 space-y-4">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                  activeDemo === index
                    ? 'glassmorphism-strong border-blue-500/50 neon-glow'
                    : 'glassmorphism border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${
                    activeDemo === index ? 'from-blue-500 to-purple-600' : 'from-gray-700 to-gray-800'
                  } transition-all duration-300`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Preview */}
          <div className="lg:w-2/3">
            <div className="glassmorphism-strong rounded-2xl p-8 border border-white/20 min-h-[400px] flex flex-col justify-center">
              <div className="text-center">
                <div className="mb-8">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center neon-glow mb-6">
                    {React.createElement(demos[activeDemo].icon, {
                      className: "w-10 h-10 text-white"
                    })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {demos[activeDemo].title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8">
                    {demos[activeDemo].preview}
                  </p>
                </div>

                {/* Mock Demo Interface */}
                <div className="glassmorphism rounded-xl p-6 border border-white/10 bg-slate-900/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <button className="glassmorphism px-4 py-2 rounded-lg text-sm text-white hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>Try Demo</span>
                    </button>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm text-green-400">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-blue-400">$</span>
                      <span>omix {demos[activeDemo].id} --interactive</span>
                    </div>
                    <div className="text-gray-300">
                      Initializing {demos[activeDemo].title}...
                    </div>
                    <div className="text-cyan-400 animate-pulse">
                      ● Ready for interaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;