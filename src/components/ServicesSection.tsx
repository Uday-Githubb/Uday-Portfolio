
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: '🛠️',
      title: 'Software Engineering & Tooling',
      description: 'Used extensively in academic projects and personal research, facilitating efficient development and data analysis workflows',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🚀',
      title: 'Full Stack Development',
      description: 'End-to-end web application development using modern stacks like MERN (MongoDB, Express, React, Node.js) with a focus on performance, scalability, and security.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🔗',
      title: 'API Development',
      description: 'Design and implementation of RESTful APIs and GraphQL endpoints for seamless integration between frontend and backend systems.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🤖',
      title: 'Automation Engineering',
      description: 'Development of automation scripts and systems using Python, Selenium, and Puppeteer to streamline repetitive workflows and enhance productivity.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Creating pixel-perfect, responsive interfaces that work flawlessly across all device sizes with modern CSS techniques and frameworks.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions tailored to transform your ideas into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-105 transition-all duration-300 group cursor-pointer h-full"
            >
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <div className="text-4xl mb-4 group-hover:animate-bounce">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className={`h-1 w-full bg-gradient-to-r ${service.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
