
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      period: 'Dec 2024 - Feb 2025',
      role: 'Frontend Developer',
      company: 'Conduent · Internship',
      location: 'Noida, India · On-site',
      description: [
        'Developed responsive web applications using modern frontend technologies.',
        'Collaborated with cross-functional teams to deliver user-centric solutions.',
        'Implemented interactive UI components with focus on performance optimization and accessibility standards.'
      ],
      type: 'work',
      icon: '💼'
    },
    {
      period: 'May 2024 - Aug 2024',
      role: 'Data Visualization Intern',
      company: 'Infosys Springboard',
      location: 'Delhi',
      description: [
        'Worked on data analytics, focusing on preprocessing, classification models, and evaluation.'
      ],
      type: 'work',
      icon: '📊'
    },
    {
      period: '2023 - Present',
      role: 'Corporate Head',
      company: 'Yuvaan DTU',
      location: 'Delhi Technological University',
      description: [
        'Curated a list of 40+ CEOs for guest events, showcasing research skills and strategic outreach to bring high-value attendees.',
        'Led cold calling and negotiation efforts to secure food vendor sponsorships, contributing to Yuvaan 2024\'s success.',
        'Recruited and onboarded executives for Yuvaan, ensuring a well-structured team for smooth operations.',
        'Managed volunteer teams to optimize event workflows, showcasing team collaboration.'
      ],
      type: 'leadership',
      icon: '👑'
    },
    {
      period: '2023 - 2024',
      role: 'Corporate Executive',
      company: 'E-Cell DTU',
      location: 'Delhi Technological University',
      description: [
        'Conducted cold calling and cold emailing to engage potential sponsors and researched and identified new sponsorship opportunities.',
        'Analyzed market trends to target potential partners.',
        'Connected with industry leaders from prominent companies to invite them for panel discussions, startup pitch sessions, and other events at E-Summit 2024.',
        'Volunteered in key event management roles, handling logistics, outreach, and execution for entrepreneurship events.',
        'Represented E-Cell DTU\'s PR team, conducting outreach at North Campus colleges to expand event presence.'
      ],
      type: 'leadership',
      icon: '🚀'
    }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Experience & Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey combining technical expertise with leadership excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="glass-card hover:scale-[1.02] transition-all duration-300 relative"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${
                  exp.type === 'work' 
                    ? 'bg-gradient-to-b from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-b from-green-500 to-teal-500'
                }`}></div>
                
                <CardContent className="p-6 pl-8">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{exp.icon}</div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className="text-primary font-medium w-fit"
                        >
                          {exp.period}
                        </Badge>
                        <Badge 
                          variant="outline"
                          className={`w-fit ${
                            exp.type === 'work' 
                              ? 'border-blue-500 text-blue-400' 
                              : 'border-green-500 text-green-400'
                          }`}
                        >
                          {exp.type === 'work' ? 'Professional' : 'Leadership'}
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-1">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground/80 flex items-center gap-1">
                          📍 {exp.location}
                        </p>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
