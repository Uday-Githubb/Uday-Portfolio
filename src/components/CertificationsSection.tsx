
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'Databases and SQL for Data Science',
      issuer: 'Coursera',
      description: 'Comprehensive training in SQL and database management for data science applications.',
      icon: '🗄️',
      link: 'https://www.coursera.org/account/accomplishments/records/UPNHKR4UBBEV',
      category: 'Data Science',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'SQL and Relational Databases 101',
      issuer: 'IBM',
      description: 'Fundamentals of relational databases and SQL querying techniques.',
      icon: '🏢',
      link: 'https://courses.cognitiveclass.ai/certificates/5ce90cc04ca841b2a6b15a85c6ae41ec',
      category: 'Database',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Software Engineering and Agile Development',
      issuer: 'Infosys',
      description: 'Best practices in software development lifecycle and agile methodologies.',
      icon: '⚙️',
      link: 'https://drive.google.com/file/d/18pje_10QSo9mJP6bnvTRntnA3CHzDhjV/view?usp=drivesdk',
      category: 'Software Engineering',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Skill Development Program',
      issuer: 'COSMIC365.AI',
      description: 'Comprehensive skill development in emerging technologies and AI applications.',
      icon: '🤖',
      link: 'https://drive.google.com/file/d/1xvg6a1Uh9QI7U3jkaTUceM5F8nAxoO3H/view?usp=sharing',
      category: 'AI/ML',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'JPMorganChase',
      description: 'Practical experience in software engineering practices and financial technology solutions.',
      icon: '💼',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Sj7temL583QAYpHXD/R5iK7HMxJGBgaSbvk_Sj7temL583QAYpHXD_CGJ9X6chuaGLvA5BE_1751790457270_completion_certificate.pdf',
      category: 'Professional',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Data Analytics Job Simulation',
      issuer: 'Quantium',
      description: 'Hands-on experience with data analytics, customer segmentation, and business insights generation.',
      icon: '📊',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_CGJ9X6chuaGLvA5BE_1751801469713_completion_certificate.pdf',
      category: 'Data Analytics',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Professional Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className="glass-card hover:scale-105 transition-all duration-300 group cursor-pointer h-full"
            >
              <CardContent className="p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="text-3xl group-hover:animate-bounce">
                    {cert.icon}
                  </div>
                  <Badge 
                    variant="secondary"
                    className="text-xs"
                  >
                    {cert.category}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-primary line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground font-medium text-sm">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-border/20">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full hover:bg-primary/10 transition-colors duration-200"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    View Certificate
                  </Button>
                </div>

                <div className={`h-1 w-full bg-gradient-to-r ${cert.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
