
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I build intelligent solutions.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const techIcons = [
    { icon: '⚛️', name: 'React', delay: '0s' },
    { icon: '🐍', name: 'Python', delay: '0.5s' },
    { icon: '⚡', name: 'Node.js', delay: '1s' },
    { icon: '🤖', name: 'AI/ML', delay: '1.5s' },
    { icon: '☁️', name: 'Cloud', delay: '2s' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-200">
              <div className="space-y-4">
                <p className="text-lg text-primary font-medium animate-fade-in">
                  Hi, my name is
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="neon-text animate-glow">UDAY.</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </h2>
              </div>

              <p className="text-lg text-gray-700 max-w-lg leading-relaxed font-medium mt-6">
                I'm a Full Stack Developer specializing in creating intelligent web applications 
                and automation systems. Currently pursuing my B.Tech at Delhi Technological University, 
                I transform complex ideas into efficient, scalable solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('#projects')}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="neon-border px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection('#contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden glass-border animate-pulse-neon">
                <img 
                  src="https://i.postimg.cc/hjP4yRhG/IMG-20230305-191216.jpg" 
                  alt="Uday - AI & Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute inset-0 w-full h-full">
                {techIcons.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`absolute tech-orb animate-float animate-bounce-subtle`}
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${10 + (index % 2) * 80}%`,
                      animationDelay: tech.delay,
                    }}
                  >
                    <span className="text-2xl" title={tech.name}>
                      {tech.icon}
                    </span>
                  </div>
                ))}
              </div>

              {/* Orbital Rings */}
              <div className="absolute inset-0 w-full h-full animate-rotate-slow opacity-30">
                <div className="absolute inset-4 border border-blue-500/30 rounded-full"></div>
                <div className="absolute inset-8 border border-purple-500/30 rounded-full"></div>
                <div className="absolute inset-12 border border-pink-500/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
