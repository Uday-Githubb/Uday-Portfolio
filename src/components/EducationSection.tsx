import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const EducationSection: React.FC = () => {
  const education = {
    period: '2022 - 2026',
    degree: 'B.Tech in Mathematics & Computing',
    institution: 'Delhi Technological University',
    gpa: '6.1/10',
    courses: [
      'Data Structures',
      'Database Management System',
      'Object Oriented Programming',
      'Web Development',
      'Operating System',
      'C++ Programming',
      'Software Engineering',
      'Computer Networks'
    ]
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in mathematics, computing, and cutting-edge technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">🎓</div>
                    <Badge variant="secondary" className="text-primary font-medium">
                      {education.period}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-primary">
                      {education.degree}
                    </h3>
                    <p className="text-lg text-muted-foreground font-medium">
                      {education.institution}
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-xl">📊</span>
                      <span className="font-semibold">Cumulative GPA: {education.gpa}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Pursuing a comprehensive program that combines advanced mathematics 
                      with cutting-edge computing technologies, providing a strong foundation 
                      in both theoretical concepts and practical applications.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary">Key Coursework:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {education.courses.map((course, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="justify-center p-2 text-xs hover:scale-105 transition-transform duration-200"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
