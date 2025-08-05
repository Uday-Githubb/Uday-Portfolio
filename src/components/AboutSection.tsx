
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const AboutSection: React.FC = () => {
  const skills = {
    languages: ['C++', 'JavaScript', 'Kotlin', 'Python', 'SQL'],
    frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Django', 'Express', 'RESTful APIs'],
    tools: ['AWS', 'GCP', 'Git', 'Docker', 'MongoDB', 'MATLAB']
  };

  const coreTechnologies = [
    { name: 'React', confidence: 85, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-50' },
    { name: 'Node.js', confidence: 80, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-50' },
    { name: 'C++', confidence: 75, color: 'from-purple-500 to-violet-500', bgColor: 'bg-purple-50' },
    { name: 'MongoDB', confidence: 70, color: 'from-green-600 to-teal-600', bgColor: 'bg-green-100' },
    { name: 'Express.js', confidence: 78, color: 'from-gray-600 to-slate-600', bgColor: 'bg-gray-50' }
  ];

  const achievements = [{
    icon: '🏆',
    title: 'Problem Solving',
    description: 'Solved 600+ DSA problems on LeetCode, CodeChef, and Codeforces',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50'
  }, {
    icon: '⭐',
    title: 'Virtual Experiences',
    description: 'Completed JPMorgan Chase & AWS Forage programs',
    color: 'from-blue-400 to-purple-500',
    bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50'
  }, {
    icon: '💻',
    title: 'Personal Projects',
    description: 'Developed 13+ personal projects in web development',
    color: 'from-green-400 to-blue-500',
    bgColor: 'bg-gradient-to-br from-green-50 to-blue-50'
  }, {
    icon: '👥',
    title: 'Leadership',
    description: 'Corporate Head at Yuvaan DTU, Corporate Executive at E-Cell DTU',
    color: 'from-pink-400 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 to-red-50'
  }];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-gray-200">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Hello! I'm Uday</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed font-medium">
                <p>An Full Stack Developer based in West Delhi, India. With a passion for solving complex problems and creating innovative solutions, I specialize in developing intelligent applications that leverage the power of AI and modern web technologies.</p>
                <p>
                  Currently pursuing a B.Tech in Mathematics and Computing at Delhi Technological University, 
                  I've developed a strong foundation in algorithms, data structures, and software engineering 
                  principles. My technical journey includes over 600 solved DSA problems across platforms 
                  like LeetCode (Knight), CodeChef (3-Star), and Codeforces.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers. I believe in continuous 
                  learning and pushing the boundaries of what technology can achieve.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">Technical Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="space-y-2">
                  <h4 className="text-lg font-medium capitalize text-primary">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map(skill => (
                      <Badge key={skill} variant="secondary" className="glass-card hover:scale-105 transition-transform duration-200 rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Technologies Section */}
        <div className="mb-16">
          <div className="flex justify-center gap-8 flex-wrap max-w-4xl mx-auto">
            {coreTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`relative w-28 h-28 ${tech.bgColor} rounded-3xl flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-bounce-subtle border border-gray-200/50`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${tech.color} font-bold text-sm text-center mb-1`}>
                  {tech.name}
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  {tech.confidence}%
                </div>
                <div className="absolute bottom-2 w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${tech.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${tech.confidence}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`${achievement.bgColor} hover:scale-105 transition-all duration-300 group cursor-pointer border-2 rounded-3xl`}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl mb-3 group-hover:animate-bounce">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold text-primary">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
                <div className={`h-1 w-full bg-gradient-to-r ${achievement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
