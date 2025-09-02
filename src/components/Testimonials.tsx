import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'Omix transformed our data analysis capabilities. The predictive analytics are incredibly accurate and have helped us make better business decisions.',
      rating: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'AI Developer, InnovateLab',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The API is so intuitive and powerful. Integration took minutes, not weeks. Omix has become an essential part of our AI toolkit.',
      rating: 5,
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager, DataDrive',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The natural language processing capabilities are unmatched. Our customer service chatbot now handles 90% of inquiries automatically.',
      rating: 5,
    },
  ];

  const partners = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Google', logo: 'G' },
    { name: 'Amazon', logo: 'A' },
    { name: 'OpenAI', logo: 'OAI' },
    { name: 'NVIDIA', logo: 'N' },
    { name: 'Meta', logo: 'M' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Trusted by Innovators</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of developers, businesses, and creators who rely on Omix for their AI needs.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glassmorphism rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-blue-400 mb-4 opacity-50" />

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="glassmorphism rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 border border-white/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300">
                  <span className="text-white font-bold text-lg">{partner.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;