
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'AI NextGen',
      description: 'An AI-driven web application that automates interactions with online platforms based on user credentials and task-specific prompts.',
      technologies: ['Python', 'Selenium', 'OpenAI API', 'AWS', 'Machine Learning'],
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      features: [
        'Intelligent task automation',
        'OpenAI API integration',
        'Cloud deployment on AWS',
        'Advanced ML algorithms'
      ]
    },
    {
      title: 'Juoze E-Commerce',
      description: 'A responsive e-commerce platform for fresh health products featuring payment integration, JWT authentication, and optimized performance.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Razorpay/Stripe', 'AWS'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🛒',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      features: [
        'Payment gateway integration',
        'JWT authentication system',
        'Responsive design',
        'Performance optimization'
      ]
    },
    {
      title: 'Keeper React App',
      description: 'A React-based note-taking application with full CRUD functionality, built with React hooks and Material-UI for a seamless user experience.',
      technologies: ['React.js', 'Material-UI', 'GitHub Pages', 'JavaScript'],
      gradient: 'from-green-600 to-teal-600',
      icon: '📝',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
      features: [
        'Full CRUD operations',
        'Material-UI components',
        'React Hooks implementation',
        'GitHub Pages deployment'
      ]
    },
    {
      title: 'Smart Analytics Dashboard',
      description: 'Real-time data visualization platform with predictive analytics and interactive charts for business intelligence.',
      technologies: ['React.js', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
      gradient: 'from-orange-600 to-red-600',
      icon: '📊',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive visualizations',
        'Performance monitoring'
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
