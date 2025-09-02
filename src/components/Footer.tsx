import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Docs', href: '#' },
      { name: 'Integrations', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact', href: '#contact' },
      { name: 'Status', href: '#' },
      { name: 'Community', href: '#' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="relative">
                <Zap className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-blue-400 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold gradient-text">Omix</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              The future of AI intelligence. Empowering businesses and developers with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glassmorphism rounded-lg hover:bg-white/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Omix AI. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built with ❤️ for the future of AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;