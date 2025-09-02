import React from 'react';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      icon: Zap,
      description: 'Perfect for getting started with AI',
      features: [
        '1,000 API calls/month',
        'Basic NLP processing',
        'Community support',
        'Standard response time',
        'Basic analytics',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'glassmorphism hover:bg-white/10 border border-white/20',
      popular: false,
    },
    {
      name: 'Pro',
      price: '49',
      icon: Crown,
      description: 'Advanced AI for growing businesses',
      features: [
        '100,000 API calls/month',
        'Advanced NLP & analytics',
        'Priority support',
        'Sub-second response time',
        'Advanced dashboard',
        'Custom integrations',
        'Team collaboration',
      ],
      buttonText: 'Start Pro Trial',
      buttonStyle: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 neon-glow',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      icon: Building,
      description: 'Unlimited AI power for large organizations',
      features: [
        'Unlimited API calls',
        'Custom AI models',
        'Dedicated support team',
        'SLA guarantees',
        'Advanced security',
        'Custom deployment',
        'Training & onboarding',
        'White-label options',
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'glassmorphism hover:bg-white/10 border border-white/20',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Start free and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glassmorphism rounded-2xl p-8 border transition-all duration-500 transform hover:scale-105 ${
                plan.popular
                  ? 'border-blue-500/50 neon-glow bg-white/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${
                    plan.popular ? 'from-blue-500 to-purple-600 neon-glow' : 'from-gray-700 to-gray-800'
                  } rounded-xl flex items-center justify-center`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold gradient-text">
                    {plan.price === 'Custom' ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400 ml-2">/month</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/signup"
                className={`w-full py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 block ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-400">
            All plans include 24/7 support and 99.9% uptime SLA. 
            <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-300">
              Need a custom solution?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;