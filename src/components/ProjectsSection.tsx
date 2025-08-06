
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Task Flow',
      description: 'Developed an AI-driven web application that interacts with various online platforms based on user-provided login credentials and task-specific prompts. Built using Python, Selenium, Puppeteer, and OpenAI API, the system automates repetitive workflows, enhances productivity, and ensures secure handling of credentials.',
      technologies: ['Python', 'Selenium', 'Puppeteer', 'OpenAI API', 'AWS/GCP', 'Machine Learning'],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: [
        'AI-driven task automation',
        'Secure credential handling',
        'Adaptive ML models',
        'AWS/GCP deployment'
      ]
    },
    {
      title: 'Juoze E-Commerce',
      description: 'Built a responsive e-commerce site with React, Node.js, Express, and MongoDB for fresh health products. Integrated Redux, Razorpay/Stripe, and optimized performance with JWT authentication and API enhancements. Ensured scalability, performance, and security through best practices.',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Razorpay/Stripe', 'AWS/Vercel/Netlify'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🛒',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: [
        'Redux state management',
        'RESTful API design',
        'Database indexing',
        'Multi-platform deployment'
      ]
    },
    {
      title: 'Keeper React App',
      description: 'Developed a React-based note-taking app with CRUD functionality, React hooks, and Material-UI. Deployed via GitHub Pages with clean, responsive design and seamless user experience.',
      technologies: ['React.js', 'Material-UI', 'GitHub Pages', 'JavaScript', 'React Hooks'],
      gradient: 'from-green-600 to-teal-600',
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      features: [
        'Full CRUD operations',
        'Material-UI components',
        'React Hooks implementation',
        'GitHub Pages deployment'
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions showcasing cutting-edge technology and creative problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`${project.bgColor} hover:scale-105 transition-all duration-300 group cursor-pointer h-full overflow-hidden relative border-2 rounded-3xl shadow-xl`}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-3xl`}></div>
              
              <CardContent className="p-8 space-y-4 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl group-hover:animate-bounce">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 flex-grow">
                  <h4 className="text-sm font-semibold text-primary">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="text-xs hover:scale-110 transition-transform duration-200 rounded-full"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/20">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full hover:bg-primary/10 transition-colors duration-200 rounded-full"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
