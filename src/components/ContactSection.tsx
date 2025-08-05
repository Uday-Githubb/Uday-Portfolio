
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'in.uday.work@gmail.com',
      };

      await emailjs.send(
        'service_ruiw5mk',
        'template_4fod6mq',
        templateParams,
        'mS9saAxd0UlETY4bg'
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/uday5747/',
      icon: '💼',
      color: 'from-blue-600 to-blue-400'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Uday-Githubb',
      icon: '🐱',
      color: 'from-gray-600 to-gray-400'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/CodeByUday',
      icon: '💻',
      color: 'from-orange-600 to-yellow-400'
    },
    {
      name: 'CodeForces',
      url: 'https://codeforces.com/profile/Code-by-Uday',
      icon: '🏆',
      color: 'from-red-600 to-pink-400'
    },
    {
      name: 'CodeChef',
      url: 'https://www.codechef.com/users/codercf988',
      icon: '👨‍💻',
      color: 'from-brown-600 to-orange-400'
    }
  ];

  const contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      detail: 'Delhi, India',
      color: 'text-red-400'
    },
    {
      icon: '📞',
      title: 'Phone',
      detail: '+91 98119 05747',
      color: 'text-green-400'
    },
    {
      icon: '✉️',
      title: 'Email',
      detail: 'in.uday.work@gmail.com',
      color: 'text-blue-400'
    }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold neon-text mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hi, 
            I'll get back to you as soon as possible! Let's build something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Let's Connect</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 glass-card rounded-lg hover:scale-105 transition-transform duration-200">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-primary">{info.title}</h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">Find me on</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-start gap-3 p-4 h-auto glass-card hover:scale-105 transition-all duration-200"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span>{social.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary">Your Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="glass-card border-primary/20 focus:border-primary"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-primary">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="glass-card border-primary/20 focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary">Your Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isLoading}
                    className="glass-card border-primary/20 focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? 'Sending...' : 'Send Message 🚀'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
