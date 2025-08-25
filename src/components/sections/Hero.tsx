import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroBg from '@/assets/hero-bg.jpg';

const trustBadges = [
  { name: 'ISO 27001', icon: Shield },
  { name: 'PCI DSS', icon: Shield },
  { name: 'SOC 2', icon: Shield },
];

export default function Hero() {
  const messages = [
    "Payments Made Simple with WhatsApp",
    "Accept Payments Instantly via WhatsApp",
    "Transform Your Business with Smart Payments",
    "WhatsApp Integration Made Easy",
    "Secure Payments, Happy Customers"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="OncePay Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/60 to-blue-700/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="transition-all duration-500 ease-in-out">
                  {messages[currentMessage]}
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto lg:mx-0">
                Revolutionary payment solutions that integrate seamlessly with WhatsApp, 
                enabling instant transactions, split settlements, and automated customer support.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/contact" className="group">
                  Get Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="accent" size="xl" className="w-full sm:w-auto" asChild>
                <Link to="/login" className="group">
                  <Shield className="w-5 h-5 mr-2" />
                  Login
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 sm:pt-8">
              <p className="text-white/70 text-sm mb-4">Trusted by 10,000+ businesses worldwide</p>
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
                {trustBadges.map((badge) => (
                  <div key={badge.name} className="flex items-center space-x-2 text-white/80">
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="font-medium text-sm sm:text-base">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Instant Payments</h3>
                    <p className="text-white/80">Process payments directly through WhatsApp chats with real-time confirmations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Split Settlements</h3>
                    <p className="text-white/80">Automatically distribute payments to multiple accounts with custom rules.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bank-Grade Security</h3>
                    <p className="text-white/80">Enterprise-level encryption and compliance with global financial standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}